// Grammar lessons: every grammar point of every language has a real lesson, well formed (Cours › Grammaire).
import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";

const read = (f) => readFileSync(new URL("../public/lang/" + f, import.meta.url), "utf8");
const manifest = vm.runInNewContext(read("index.js") + ";window.LANGS", { window: {} });
const str = (x) => typeof x === "string" && x.trim().length > 0;
const rows = (r, n) => Array.isArray(r) && r.every((x) => Array.isArray(x) && x.length === n && x.every((y) => typeof y === "string") && str(x[0]) && str(x[1]));

for (const lang of manifest) {
  test(`${lang.code}: every grammar point has a lesson`, () => {
    const ctx = { window: {} };
    for (const f of lang.files) vm.runInNewContext(read(f), ctx);
    const pack = ctx.window.PACKS[lang.code];
    assert.ok(lang.files.includes(`lessons-${lang.code}.js`), "the lessons file is in the manifest");
    const ids = pack.skills.map((s) => s.id);
    assert.deepEqual(Object.keys(pack.lessons).sort(), [...ids].sort(), "one lesson per grammar point, no other");
    for (const id of ids) {
      const l = pack.lessons[id];
      assert.ok(str(l.intro) && str(l.tip), `${id}: intro and tip`);
      assert.ok(Array.isArray(l.parts) && l.parts.length >= 2 && l.parts.length <= 4, `${id}: 2 to 4 parts`);
      for (const p of l.parts) {
        assert.ok(str(p.h) && str(p.p), `${id}: a part has a heading and a text`);
        if (p.rows !== undefined) assert.ok(rows(p.rows, 3) && p.rows.length >= 1, `${id}: table rows of 3 strings`);
      }
      assert.ok(rows(l.ex, 3) && l.ex.length >= 6 && l.ex.length <= 8, `${id}: 6 to 8 examples`);
      assert.ok(rows(l.traps, 3) && l.traps.length >= 2 && l.traps.length <= 3 && l.traps.every((t) => str(t[2])), `${id}: 2 or 3 traps with a reason`);
      const text = JSON.stringify(l);
      assert.ok(!/\*\*|<[a-z]|→/.test(text), `${id}: no markdown, HTML or arrows`);
    }
  });
}
