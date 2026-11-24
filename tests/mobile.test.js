// Mobile app (mobile/): the same design rules as the web app. Colours, type sizes and radii come from
// mobile/src/theme.ts (ported from ui/tokens); icons come from ui/icons, never an emoji.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOT = "mobile/src";
const THEME = "mobile/src/theme.ts";
const files = (dir) => readdirSync(dir).flatMap((n) => {
  const p = join(dir, n);
  return statSync(p).isDirectory() ? files(p) : /\.(ts|tsx)$/.test(n) ? [p] : [];
});
const hits = (re) => files(ROOT).filter((f) => f !== THEME).flatMap((f) =>
  readFileSync(f, "utf8").split("\n").flatMap((l, i) => (re.test(l) ? [`${f}:${i + 1}`] : [])));

test("mobile: raw colours live only in mobile/src/theme.ts", () => {
  assert.deepEqual(hits(/#[0-9A-Fa-f]{3,8}\b|rgba?\(|hsla?\(|color: *["'](?!transparent)/), []);
});

test("mobile: type sizes, weights and radii come from the theme, not numbers in a screen", () => {
  assert.deepEqual(hits(/\b(fontSize|fontWeight|borderRadius): *["']?\d/), []);
});

test("mobile: no emoji used as an icon: faces and icons come from ui/icons", () => {
  assert.deepEqual(hits(/\p{Extended_Pictographic}/u), []);
});


test("mobile: screens and components never call Supabase directly: data goes through mobile/src/lib", () => {
  const ui = files(ROOT).filter((f) => /mobile\/src\/(app|components)\//.test(f));
  const bad = ui.filter((f) => /from ["'][./]*lib\/supabase["']|@supabase\//.test(readFileSync(f, "utf8")));
  assert.deepEqual(bad, []);
});
