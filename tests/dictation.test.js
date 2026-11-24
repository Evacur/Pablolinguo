// Dictation transcript (web/src/dictation-text.js): the full text is rebuilt at every event, without repeated words.
import test from "node:test";
import assert from "node:assert/strict";
import { joinResults } from "../web/src/dictation-text.js";

const R = (...xs) => xs.map(([t, f]) => Object.assign([{ transcript: t }], { isFinal: !!f }));

test("finals and the interim part are joined in order", () => {
  assert.deepEqual(joinResults(R(["I have", 1], ["been there", 0])), { fin: "I have", text: "I have been there" });
});

test("Android: a final repeated longer does not duplicate words", () => {
  assert.equal(joinResults(R(["I have", 1], ["I have been there", 1])).text, "I have been there");
  assert.equal(joinResults(R(["I have", 1], ["I have", 1])).text, "I have");
});

test("an interim part that repeats the finals is not doubled", () => {
  assert.equal(joinResults(R(["I have", 1], ["I have been", 0])).text, "I have been");
});

test("empty results give an empty text", () => {
  assert.deepEqual(joinResults(R(["", 0])), { fin: "", text: "" });
});
