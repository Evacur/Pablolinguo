// A grammar point gains mastery only by passing a test on it (src/app/lib/mastery.js).
import test from "node:test";
import assert from "node:assert/strict";
import { MAX, afterAnswer, afterTest, needed, passed } from "../src/app/lib/mastery.js";

test("right answers outside a test never add a dot", () => {
  let c;
  for (let i = 0; i < 50; i++) c = afterAnswer(c, true);
  assert.equal(c.m, 0);
  assert.equal(c.ok, 50);
});

test("two misses in a row outside a test take a dot back", () => {
  let c = { m: 2, run: 0, ok: 0, ko: 0 };
  c = afterAnswer(c, false); assert.equal(c.m, 2);
  c = afterAnswer(c, false); assert.equal(c.m, 1);
});

test("inside a test, answers are only counted", () => {
  let c = { m: 2, run: 0, ok: 0, ko: 0 };
  for (const ok of [false, false, false, true]) c = afterAnswer(c, ok, true);
  assert.deepEqual([c.m, c.ok, c.ko], [2, 1, 3]);
});

test("a test is passed with 80 % of right answers, and each pass adds one dot up to the maximum", () => {
  assert.equal(needed(10), 8); assert.equal(needed(6), 5);
  assert.ok(passed(8, 10)); assert.ok(!passed(7, 10)); assert.ok(!passed(0, 0));
  let c;
  c = afterTest(c, 7, 10); assert.equal(c.m, 0, "a failed test adds nothing");
  for (let i = 1; i <= MAX + 2; i++) { c = afterTest(c, 9, 10); assert.equal(c.m, Math.min(i, MAX)); }
});
