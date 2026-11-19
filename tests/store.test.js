import { test } from "node:test";
import assert from "node:assert/strict";
import { deepMerge, createStore } from "../src/store.js";

test("update merges nested objects and replaces arrays", () => {
  const base = { xp: 10, days: { "2026-11-18": { xp: 10, q: ["set"] } } };
  const out = deepMerge(base, { xp: 30, days: { "2026-11-19": { xp: 20, q: ["drill"] } } });
  assert.deepEqual(out, { xp: 30, days: { "2026-11-18": { xp: 10, q: ["set"] }, "2026-11-19": { xp: 20, q: ["drill"] } } });
  assert.deepEqual(deepMerge({ q: [1, 2] }, { q: [3] }), { q: [3] });
});

// Minimal fake of the supabase-js calls the store makes.
function fakeSb(rows) {
  const writes = [];
  const query = {
    select: () => query,
    order: () => query,
    range: async () => ({ data: rows, error: null }),
    upsert: async (r) => (writes.push(["upsert", r]), { error: null }),
    delete: () => ({ eq: () => ({ eq: async (k, v) => (writes.push(["delete", v]), { error: null }) }) }),
  };
  return { from: () => query, writes };
}

test("store loads rows, notifies listeners and writes through", async () => {
  const sb = fakeSb([{ coll: "skills", id: "did", data: { m: 1 } }]);
  const db = await createStore(sb, "user-1");
  const seen = [];
  db.collection("skills").onSnapshot((s) => seen.push(s.docs.map((d) => [d.id, d.data().m])));
  await db.doc("skills/did").set({ m: 2 });
  assert.deepEqual(seen, [[["did", 1]], [["did", 2]]]);
  assert.deepEqual(sb.writes[0][1].data, { m: 2 });
  assert.equal(sb.writes[0][1].user_id, "user-1");

  await assert.rejects(db.doc("me/progress").update({ xp: 1 }));
  await db.doc("me/progress").set({ xp: 1, days: { a: { xp: 1 } } });
  await db.doc("me/progress").update({ days: { b: { xp: 2 } } });
  assert.deepEqual((await db.doc("me/progress").get()).data(), { xp: 1, days: { a: { xp: 1 }, b: { xp: 2 } } });

  const { id } = await db.collection("mywords").add({ en: "gate" });
  await db.doc("mywords/" + id).delete();
  assert.equal((await db.doc("mywords/" + id).get()).exists, false);
});
