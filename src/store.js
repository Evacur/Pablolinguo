// A small document store with the same shape the dashboard was written against:
// db.doc("coll/id").get/set/update/delete/onSnapshot and db.collection("coll").add/onSnapshot.
// Every document is a row of public.docs owned by the signed-in account (RLS).

const isObj = (v) => v !== null && typeof v === "object" && !Array.isArray(v);

// update() merges nested objects recursively; arrays and other values are replaced.
export function deepMerge(base, patch) {
  const out = { ...(isObj(base) ? base : {}) };
  for (const [k, v] of Object.entries(patch)) out[k] = isObj(v) && isObj(out[k]) ? deepMerge(out[k], v) : v;
  return out;
}

const clone = (v) => (v === undefined ? undefined : JSON.parse(JSON.stringify(v)));

export async function createStore(sb, userId) {
  const cache = new Map(); // "coll/id" -> data
  const docL = new Map();
  const collL = new Map();

  const rows = [];
  const PAGE = 1000;
  for (let from = 0; ; from += PAGE) {
    const { data, error } = await sb.from("docs").select("coll,id,data").order("coll").order("id").range(from, from + PAGE - 1);
    if (error) throw error;
    rows.push(...data);
    if (data.length < PAGE) break;
  }
  rows.forEach((r) => cache.set(r.coll + "/" + r.id, r.data));

  const docSnap = (path) => {
    const v = cache.get(path);
    return { id: path.split("/")[1], exists: v !== undefined, data: () => clone(v) };
  };
  const collSnap = (coll) => ({
    metadata: { fromCache: false },
    docs: [...cache.entries()]
      .filter(([k]) => k.startsWith(coll + "/"))
      .map(([k, v]) => ({ id: k.slice(coll.length + 1), data: () => clone(v) })),
  });
  const notify = (path) => {
    const coll = path.split("/")[0];
    (docL.get(path) || []).forEach((f) => f(docSnap(path)));
    (collL.get(coll) || []).forEach((f) => f(collSnap(coll)));
  };
  const save = async (path, data) => {
    const [coll, id] = path.split("/");
    const { error } = await sb.from("docs").upsert({ user_id: userId, coll, id, data, updated_at: new Date().toISOString() });
    if (error) throw error;
  };

  const doc = (path) => ({
    async get() {
      return docSnap(path);
    },
    async set(data) {
      cache.set(path, clone(data));
      notify(path);
      await save(path, cache.get(path));
    },
    async update(patch) {
      if (!cache.has(path)) throw { code: "not_found" };
      cache.set(path, deepMerge(cache.get(path), clone(patch)));
      notify(path);
      await save(path, cache.get(path));
    },
    async delete() {
      const [coll, id] = path.split("/");
      cache.delete(path);
      notify(path);
      const { error } = await sb.from("docs").delete().eq("coll", coll).eq("id", id);
      if (error) throw error;
    },
    onSnapshot(cb) {
      docL.set(path, [...(docL.get(path) || []), cb]);
      cb(docSnap(path));
      return () => docL.set(path, (docL.get(path) || []).filter((f) => f !== cb));
    },
  });
  const collection = (coll) => ({
    async add(data) {
      const id = crypto.randomUUID();
      await doc(coll + "/" + id).set(data);
      return { id };
    },
    onSnapshot(cb) {
      collL.set(coll, [...(collL.get(coll) || []), cb]);
      cb(collSnap(coll));
      return () => collL.set(coll, (collL.get(coll) || []).filter((f) => f !== cb));
    },
  });
  return { doc, collection };
}
