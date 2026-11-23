// Answer checking (src/app/lib/answers.js): the same rule for exercises, words and listening (audit F6).
import test from "node:test";
import assert from "node:assert/strict";
import { sameAns } from "../src/app/lib/answers.js";

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
