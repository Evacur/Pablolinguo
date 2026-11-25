// Exercise sessions of the app (app/src/lib/session.ts), run on the real content.
import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";
import { pool } from "../app/src/lib/session.ts";

const read = (f) => readFileSync(new URL("../shared/content/" + f, import.meta.url), "utf8");
const manifest = vm.runInNewContext(read("index.js") + ";window.LANGS", { window: {} });

for (const lang of manifest) {
  test(`${lang.code}: every exercise of a session comes with its explanation (docs/audit.md R30)`, () => {
    const ctx = { window: {} };
    for (const f of lang.files) vm.runInNewContext(read(f), ctx);
    const items = pool(ctx.window.PACKS[lang.code]);
    const bare = items.filter((it) => typeof it.why !== "string" || !it.why.trim());
    assert.deepEqual(bare.map((it) => `${it.skill}: ${it.fr}`), []);
  });
}

test("every text field resets its letter spacing (a recycled native field keeps the code field's spacing)", () => {
  for (const f of ["ui.tsx", "auth.tsx"]) {
    const src = readFileSync(new URL("../app/src/components/" + f, import.meta.url), "utf8");
    const field = src.match(/\bfield: \{[^}]*\}/);
    assert.ok(field && /letterSpacing: 0\b/.test(field[0]), `${f}: field sets letterSpacing: 0`);
  }
});
