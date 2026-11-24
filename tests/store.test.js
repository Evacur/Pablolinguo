import { test } from "node:test";
import assert from "node:assert/strict";
import { deepMerge, mergeDocs, createStore } from "../shared/store.js";

test("update merges nested objects and replaces arrays", () => {
  const base = { xp: 10, days: { "2026-11-18": { xp: 10, q: ["set"] } } };
  const out = deepMerge(base, { xp: 30, days: { "2026-11-19": { xp: 20, q: ["drill"] } } });
  assert.deepEqual(out, { xp: 30, days: { "2026-11-18": { xp: 10, q: ["set"] }, "2026-11-19": { xp: 20, q: ["drill"] } } });
  assert.deepEqual(deepMerge({ q: [1, 2] }, { q: [3] }), { q: [3] });
});

// An in-memory public.docs table behind the supabase-js calls the store makes. Every builder is awaitable,
// like supabase-js. Several stores can share one table, like two devices on one account.
function fakeDb(rows = []) {
  const table = rows.map((r, i) => ({ user_id: "user-1", updated_at: `2026-01-01T00:00:0${i}.000Z`, ...r }));
  let tick = 0;
  const builder = (op, payload) => {
    const f = {};
    const q = {
      select: () => q, order: () => q, range: () => q,
      eq: (k, v) => ((f[k] = v), q),
      then(resolve, reject) {
        try {
          const match = (r) => Object.entries(f).every(([k, v]) => r[k] === v);
          if (op === "select") return resolve({ data: table.filter(match).map((r) => structuredClone(r)), error: null });
          if (op === "insert") {
            if (table.some((r) => r.coll === payload.coll && r.id === payload.id)) return resolve({ data: null, error: { code: "23505" } });
            const r = { ...structuredClone(payload), updated_at: payload.updated_at + "#" + ++tick };
            table.push(r);
            return resolve({ data: [{ updated_at: r.updated_at }], error: null });
          }
          if (op === "update") {
            const hit = table.filter(match);
            hit.forEach((r) => Object.assign(r, structuredClone(payload), { updated_at: payload.updated_at + "#" + ++tick }));
            return resolve({ data: hit.map((r) => ({ updated_at: r.updated_at })), error: null });
          }
          if (op === "delete") { for (const r of table.filter(match)) table.splice(table.indexOf(r), 1); return resolve({ error: null }); }
        } catch (e) { reject(e); }
      },
    };
    return q;
  };
  return {
    table,
    from: () => ({ select: () => builder("select"), insert: (p) => builder("insert", p), update: (p) => builder("update", p), delete: () => builder("delete") }),
  };
}
const row = (db, coll, id) => db.table.find((r) => r.coll === coll && r.id === id);

test("store loads rows, notifies listeners and writes through", async () => {
  const sb = fakeDb([{ coll: "skills", id: "did", data: { m: 1 } }]);
  const db = await createStore(sb, "user-1");
  const seen = [];
  db.collection("skills").onSnapshot((s) => seen.push(s.docs.map((d) => [d.id, d.data().m])));
  await db.doc("skills/did").set({ m: 2 });
  assert.deepEqual(seen, [[["did", 1]], [["did", 2]]]);
  assert.deepEqual(row(sb, "skills", "did").data, { m: 2 });
  assert.equal(row(sb, "skills", "did").user_id, "user-1");

  await assert.rejects(db.doc("me/progress").update({ xp: 1 }));
  await db.doc("me/progress").set({ xp: 1, days: { a: { xp: 1 } } });
  await db.doc("me/progress").update({ days: { b: { xp: 2 } } });
  assert.deepEqual((await db.doc("me/progress").get()).data(), { xp: 1, days: { a: { xp: 1 }, b: { xp: 2 } } });

  const { id } = await db.collection("mywords").add({ en: "gate" });
  await db.doc("mywords/" + id).delete();
  assert.equal((await db.doc("mywords/" + id).get()).exists, false);
  assert.equal(row(sb, "mywords", id), undefined);
});

test("mergeDocs: what each device changed is kept, counters add up", () => {
  const base = { xp: 100, days: { d1: { xp: 10, q: ["drill"] } }, name: "Pi" };
  const phone = { xp: 120, days: { d1: { xp: 30, q: ["drill", "words"] } }, name: "Pi" };
  const laptop = { xp: 105, days: { d1: { xp: 15, q: ["drill"] }, d0: { xp: 5, q: [] } }, name: "Pablo" };
  assert.deepEqual(mergeDocs(base, phone, laptop), {
    xp: 125, days: { d1: { xp: 35, q: ["drill", "words"] }, d0: { xp: 5, q: [] } }, name: "Pablo",
  });
  assert.deepEqual(mergeDocs({ b: 2, due: "x" }, { b: 3, due: "y" }, { b: 1, due: "z" }), { b: 3, due: "y" }, "states: this device wins");
});

test("two devices writing the same progress keep both gains (no overwrite)", async () => {
  const sb = fakeDb([{ coll: "me", id: "progress", data: { xp: 100, days: {} } }]);
  const phone = await createStore(sb, "user-1");
  const laptop = await createStore(sb, "user-1");
  await phone.doc("me/progress").update({ xp: 120, days: { d1: { xp: 20, q: ["drill"] } } });
  await laptop.doc("me/progress").update({ xp: 110, days: { d1: { xp: 10, q: ["words"] } } });
  assert.deepEqual(row(sb, "me", "progress").data, { xp: 130, days: { d1: { xp: 30, q: ["drill", "words"] } } });

  const seen = [];
  phone.doc("me/progress").onSnapshot((s) => seen.push(s.data().xp));
  await phone.refresh();
  assert.deepEqual(seen, [120, 130], "the phone sees the laptop's XP when it comes back");
  await phone.doc("me/progress").update({ xp: 135 });
  assert.equal(row(sb, "me", "progress").data.xp, 135);
});

test("two devices creating the same document merge instead of failing", async () => {
  const sb = fakeDb();
  const phone = await createStore(sb, "user-1");
  const laptop = await createStore(sb, "user-1");
  await phone.doc("vocab/srs").set({ w: { cat: { b: 1, ok: 1, ko: 0 } } });
  await laptop.doc("vocab/srs").set({ w: { dog: { b: 1, ok: 1, ko: 0 } } });
  assert.deepEqual(Object.keys(row(sb, "vocab", "srs").data.w).sort(), ["cat", "dog"]);
});

test("refresh drops a document deleted on another device", async () => {
  const sb = fakeDb([{ coll: "mywords", id: "w1", data: { en: "gate" } }]);
  const phone = await createStore(sb, "user-1");
  const laptop = await createStore(sb, "user-1");
  await laptop.doc("mywords/w1").delete();
  await phone.refresh();
  assert.equal((await phone.doc("mywords/w1").get()).exists, false);
});

// Audit R4. The app queues its writes one at a time (web/src/app/data/writes.js: write) and its listeners copy each
// snapshot into the screen's state (web/src/app/connect.js). A write that sent the state captured when it was queued
// echoed old XP back over newer XP on a slow network, and the next gain built on it. Writes now read the state
// when their turn comes (saveProg, saveSkill, saveSeen, SRS), and own echoes are marked.
test("a slow network does not take back newer XP: queued writes send the state as it is when they run", async () => {
  const sb = fakeDb([{ coll: "me", id: "progress", data: { xp: 0, days: {} } }]);
  const slow = { from: (t) => { const f = sb.from(t); return { ...f, update: (p) => { const b = f.update(p); const then = b.then.bind(b); b.then = (ok, ko) => new Promise((r) => setTimeout(r, 5)).then(() => then(ok, ko)); return b; } }; } };
  const db = await createStore(slow, "user-1");
  const app = { xp: 0 };
  db.doc("me/progress").onSnapshot((s) => { app.xp = s.data().xp; }); // as connect.js does for progress
  let chain = Promise.resolve();
  const addXp = (n) => { app.xp += n; chain = chain.then(() => db.doc("me/progress").update({ xp: app.xp })); };
  addXp(10); addXp(10);
  await new Promise((r) => setTimeout(r, 1)); // the first write is on the network
  addXp(10);
  await chain;
  assert.equal(app.xp, 30);
  assert.equal(row(sb, "me", "progress").data.xp, 30);
});

test("snapshots say whether they echo this device's own write or bring news from the database", async () => {
  const sb = fakeDb([{ coll: "me", id: "progress", data: { xp: 1 } }]);
  const phone = await createStore(sb, "user-1");
  const laptop = await createStore(sb, "user-1");
  const own = [];
  phone.doc("me/progress").onSnapshot((s) => own.push(s.metadata.hasPendingWrites));
  await phone.doc("me/progress").update({ xp: 2 });
  await laptop.doc("me/progress").update({ xp: 5 });
  await phone.refresh();
  assert.deepEqual(own, [false, true, false], "first read, own write, the laptop's change");
});
