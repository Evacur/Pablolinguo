// Answer checking (src/app/lib/answers.js): the same rule for exercises, words and listening (audit F6).
import test from "node:test";
import assert from "node:assert/strict";
import { sameAns, typoFix, accentFix } from "../src/app/lib/answers.js";

const same = (lang, expected, given) => sameAns(expected, given, lang);

test("English: case, punctuation and contractions do not count", () => {
  assert.ok(same("en", "I can't swim.", "i can not swim"));
  assert.ok(same("en", "I cannot swim", "I can’t swim"));
  assert.ok(same("en", "She won't come", "she will not come!"));
  assert.ok(same("en", "We're late", "we are late"));
  assert.ok(!same("en", "I can swim", "I can't swim"));
});

test("Spanish: accents and ¿ ¡ do not count, words do", () => {
  assert.ok(same("es", "¿Dónde está?", "donde esta"));
  assert.ok(same("es", "¡Qué bien!", "Que bien"));
  assert.ok(!same("es", "Tengo hambre", "Tengo sed"));
});

test("Typos: one wrong letter passes with the fix, a grammar change or a known word does not", () => {
  assert.deepEqual(typoFix("It is beautiful", "It is beautifull", "en"), [["beautifull", "beautiful"]]);
  assert.deepEqual(typoFix("Tengo hambre", "Tenog hambre", "es"), [["Tenog", "Tengo"]]);
  assert.equal(typoFix("She goes home", "She go home", "en"), null);
  assert.equal(typoFix("I walked", "I walk", "en"), null);
  assert.deepEqual(typoFix("I didn't understand", "I ddin't understand", "en"), [["ddin't", "didn't"]]);
  assert.equal(typoFix("Their car", "There car", "en", new Set(["there"])), null);
});

test("Spanish: a missing accent is pointed out", () => {
  assert.deepEqual(accentFix("¿Dónde está?", "donde esta", "es"), [["donde", "dónde"], ["esta", "está"]]);
  assert.equal(accentFix("Where is it?", "where is it", "en"), null);
});
