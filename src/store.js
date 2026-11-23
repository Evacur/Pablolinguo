// A small document store with the same shape the dashboard was written against:
// db.doc("coll/id").get/set/update/delete/onSnapshot and db.collection("coll").add/onSnapshot.
// Every document is a row of public.docs owned by the signed-in account (RLS).
//
// Two devices can be open on the same account. Each write is conditional on the version (updated_at) this
// device last saw: if the other device wrote in between, the store reloads the row, merges both sides
// (mergeDocs) and writes again, so neither device erases the other's progress. refresh() pulls what the
// other device wrote; the runtime calls it when the app comes back to the foreground.

const isObj = (v) => v !== null && typeof v === "object" && !Array.isArray(v);
const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);

// update() merges nested objects recursively; arrays and other values are replaced.
export function deepMerge(base, patch) {
  const out = { ...(isObj(base) ? base : {}) };
  for (const [k, v] of Object.entries(patch)) out[k] = isObj(v) && isObj(out[k]) ? deepMerge(out[k], v) : v;
  return out;
}

// Counters add up across devices: XP, and right / wrong answers per grammar point.
const COUNTERS = new Set(["xp", "ok", "ko"]);

// Three-way merge of one document. base: the version both devices started from; mine: this device's;
// theirs: what the other device saved. A side that did not change a value takes the other side's. When
// both changed it: counters add both gains, lists keep the items of both, anything else keeps mine.
export function mergeDocs(base, mine, theirs, key = "") {
  if (same(mine, base)) return theirs;
  if (same(theirs, base) || theirs === undefined) return mine;
  if (COUNTERS.has(key) && typeof mine === "number" && typeof theirs === "number")
    return theirs + (mine - (typeof base === "number" ? base : 0)); // a counter both devices started counts from 0
  if (Array.isArray(mine) && Array.isArray(theirs)) return [...theirs, ...mine.filter((x) => !theirs.some((y) => same(x, y)))];
  if (isObj(mine) && isObj(theirs)) {
    const b = isObj(base) ? base : {};
    const out = {};
    for (const k of new Set([...Object.keys(theirs), ...Object.keys(mine)])) {
      const v = mergeDocs(b[k], mine[k], theirs[k], k);
      if (v !== undefined) out[k] = v;
    }
    return out;
  }
  return mine;
}

const clone = (v) => (v === undefined ? undefined : JSON.parse(JSON.stringify(v)));
const CONFLICT_RETRIES = 3;

export async function createStore(sb, userId) {
  const cache = new Map(); // "coll/id" -> data, as this device sees it
  const base = new Map(); // "coll/id" -> data as last read from or written to the database
  const ver = new Map(); // "coll/id" -> updated_at of that version
  const docL = new Map();
  const collL = new Map();

  async function loadAll() {
    const rows = [];
    const PAGE = 1000;
    for (let from = 0; ; from += PAGE) {
      const { data, error } = await sb.from("docs").select("coll,id,data,updated_at").order("coll").order("id").range(from, from + PAGE - 1);
      if (error) throw error;
      rows.push(...data);
      if (data.length < PAGE) break;
    }
    return rows;
  }
  const remember = (path, data, updatedAt) => {
    base.set(path, clone(data));
    if (updatedAt) ver.set(path, updatedAt);
    else ver.delete(path);
  };
  for (const r of await loadAll()) {
    const path = r.coll + "/" + r.id;
    cache.set(path, r.data);
    remember(path, r.data, r.updated_at);
  }

  // hasPendingWrites: the snapshot is the echo of this device's own set / update (as in Firestore), not news
  // from the database. A listener can skip it: the screen already shows that change.
  const docSnap = (path, own = false) => {
    const v = cache.get(path);
    return { id: path.split("/")[1], exists: v !== undefined, data: () => clone(v), metadata: { hasPendingWrites: own } };
  };
  const collSnap = (coll) => ({
    metadata: { fromCache: false },
    docs: [...cache.entries()]
      .filter(([k]) => k.startsWith(coll + "/"))
      .map(([k, v]) => ({ id: k.slice(coll.length + 1), data: () => clone(v) })),
  });
  const notify = (path, own = false) => {
    const coll = path.split("/")[0];
    (docL.get(path) || []).forEach((f) => f(docSnap(path, own)));
    (collL.get(coll) || []).forEach((f) => f(collSnap(coll)));
  };

  async function fetchOne(path) {
    const [coll, id] = path.split("/");
    const { data, error } = await sb.from("docs").select("data,updated_at").eq("coll", coll).eq("id", id).range(0, 0);
    if (error) throw error;
    return data[0] || null;
  }

  // Writes this device's version of a document. If the row changed since it was read, merge and try again.
  const save = async (path) => {
    const [coll, id] = path.split("/");
    for (let attempt = 0; attempt <= CONFLICT_RETRIES; attempt++) {
      const data = cache.get(path);
      const now = new Date().toISOString();
      // The version is read back as the database writes it, so later comparisons are exact.
      let written;
      if (ver.has(path)) {
        const { data: rows, error } = await sb.from("docs").update({ data, updated_at: now })
          .eq("user_id", userId).eq("coll", coll).eq("id", id).eq("updated_at", ver.get(path)).select("updated_at");
        if (error) throw error;
        written = rows[0];
      } else {
        const { data: rows, error } = await sb.from("docs").insert({ user_id: userId, coll, id, data, updated_at: now }).select("updated_at");
        if (error && error.code !== "23505") throw error; // 23505: the other device created it first
        written = error ? undefined : rows[0];
      }
      if (written) return remember(path, data, written.updated_at);
      const theirs = await fetchOne(path);
      const merged = theirs ? mergeDocs(base.get(path), cache.get(path), theirs.data) : cache.get(path);
      cache.set(path, merged);
      if (theirs) remember(path, theirs.data, theirs.updated_at);
      else remember(path, undefined, null);
      notify(path);
    }
    throw { code: "conflict" };
  };

  // Pulls what another device saved since this one last read, for documents this device has not changed.
  async function refresh() {
    const known = new Map(ver); // a document saved while the rows load is already up to date: leave it
    const rows = await loadAll();
    const seen = new Set();
    for (const r of rows) {
      const path = r.coll + "/" + r.id;
      seen.add(path);
      if (ver.get(path) === r.updated_at || ver.get(path) !== known.get(path)) continue;
      const mine = cache.get(path);
      cache.set(path, cache.has(path) ? mergeDocs(base.get(path), mine, r.data) : r.data);
      remember(path, r.data, r.updated_at);
      notify(path);
    }
    for (const [path, v] of known) {
      if (seen.has(path) || ver.get(path) !== v) continue;
      cache.delete(path);
      remember(path, undefined, null);
      notify(path);
    }
  }

  const doc = (path) => ({
    async get() {
      return docSnap(path);
    },
    async set(data) {
      cache.set(path, clone(data));
      notify(path, true);
      await save(path);
    },
    async update(patch) {
      if (!cache.has(path)) throw { code: "not_found" };
      cache.set(path, deepMerge(cache.get(path), clone(patch)));
      notify(path, true);
      await save(path);
    },
    async delete() {
      const [coll, id] = path.split("/");
      cache.delete(path);
      remember(path, undefined, null);
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
  return { doc, collection, refresh };
}
