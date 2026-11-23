// The streak after XP were removed: a day counts by what was done in it, and older days saved with XP still count.
import test from "node:test";
import assert from "node:assert/strict";
import { streakOf } from "../src/app/lib/streak.js";

test("the streak counts days in a row with something done, today included or not yet", () => {
  const p = { days: { "2026-11-20": { a: 3, q: [] }, "2026-11-21": { a: 1, q: ["drill"] }, "2026-11-22": { a: 12, q: [] } } };
  assert.equal(streakOf([p], "2026-11-23"), 3, "today not done yet: the streak holds");
  assert.equal(streakOf([{ days: { ...p.days, "2026-11-23": { a: 1, q: [] } } }], "2026-11-23"), 4);
  assert.equal(streakOf([p], "2026-11-24"), 0, "a full day missed breaks it");
  assert.equal(streakOf([{ days: {} }, undefined], "2026-11-23"), 0);
});

test("days saved before XP were removed still count, and languages add up", () => {
  const en = { xp: 1240, days: { "2026-11-21": { xp: 60, q: ["drill"] }, "2026-11-22": { xp: 0, q: [] } } };
  const es = { days: { "2026-11-22": { a: 2, q: [] }, "2026-11-23": { a: 1, q: [] } } };
  assert.equal(streakOf([en, es], "2026-11-23"), 3);
  assert.equal(streakOf([en], "2026-11-23"), 0, "a day with 0 XP and nothing done does not count");
});
