// Word lists: every word file loads into its pack, is well formed, and adds no word twice.
import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";
import { LV, fitsLevel } from "../shared/logic/levels.js";

const read = (f) => readFileSync(new URL("../shared/content/" + f, import.meta.url), "utf8");
const manifest = vm.runInNewContext(read("index.js") + ";window.LANGS", { window: {} });
// The key the app files a word under (web/src/app/screens/words.js: wkey): two words with one key would be one card.
const key = (code, w) => (code === "en" ? w : w.normalize("NFD").replace(/[̀-ͯ]/g, ""))
  .toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");

for (const lang of manifest) {
  const words = lang.files.filter((f) => f.startsWith("words-"));
  test(`${lang.code}: words by level are well formed and new`, () => {
    assert.equal(words.length, 1, "one words- file per language");
    const ctx = { window: {} };
    vm.runInNewContext(read(lang.code + ".js"), ctx);
    const pack = ctx.window.PACKS[lang.code];
    const before = new Set(Object.values(pack.words).flat().map((w) => key(lang.code, w[0])));
    const countBefore = Object.values(pack.words).flat().length;
    const src = read(words[0]);
    // The file run on an empty copy of the themes gives exactly what it adds.
    const empty = { window: { PACKS: { [lang.code]: { words: Object.fromEntries(Object.keys(pack.words).map((t) => [t, []])) } } } };
    vm.runInNewContext(src, empty);
    const more = empty.window.PACKS[lang.code].words;
    const seen = new Set();
    for (const list of Object.values(more)) {
      for (const w of list) {
        assert.ok(w.length === 4 && w.every((x) => typeof x === "string" && x.trim()), `malformed: ${JSON.stringify(w)}`);
        assert.ok(LV.includes(w[3]), `${w[0]}: level ${w[3]}`);
        const k = key(lang.code, w[0]);
        assert.ok(!before.has(k), `${w[0]}: already in the pack`);
        assert.ok(!seen.has(k), `${w[0]}: twice in ${words[0]}`);
        seen.add(k);
      }
    }
    for (const [, theme] of src.matchAll(/^(\w+):\[/gm)) assert.ok(theme in pack.words, `${theme}: not a theme of the pack`);
    vm.runInNewContext(src, ctx); // and the real pack gets every one of them
    assert.equal(Object.values(pack.words).flat().length, countBefore + seen.size);
  });
}

test("a learner meets words of their level and below; untagged words fit everyone", () => {
  assert.ok(fitsLevel("A1", "B1") && fitsLevel("B1", "B1") && !fitsLevel("C1", "B1"));
  assert.ok(fitsLevel("", "A1") && fitsLevel(undefined, "A1"));
});
