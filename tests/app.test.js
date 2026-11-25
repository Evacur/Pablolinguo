// The store app (app/): the same design rules as the web app. Colours, type sizes and radii come from
// app/src/theme.ts (ported from web/ui/tokens); icons come from shared/icons, never an emoji.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";

const ROOT = "app/src";
const THEME = "app/src/theme.ts";
const files = (dir) => readdirSync(dir).flatMap((n) => {
  const p = join(dir, n);
  return statSync(p).isDirectory() ? files(p) : /\.(ts|tsx)$/.test(n) ? [p] : [];
});
const hits = (re) => files(ROOT).filter((f) => f !== THEME).flatMap((f) =>
  readFileSync(f, "utf8").split("\n").flatMap((l, i) => (re.test(l) ? [`${f}:${i + 1}`] : [])));

test("app: raw colours live only in app/src/theme.ts", () => {
  assert.deepEqual(hits(/#[0-9A-Fa-f]{3,8}\b|rgba?\(|hsla?\(|color: *["'](?!transparent)/), []);
});

test("app: type sizes, weights and radii come from the theme, not numbers in a screen", () => {
  assert.deepEqual(hits(/\b(fontSize|fontWeight|borderRadius): *["']?\d/), []);
});

test("app: no emoji used as an icon: faces and icons come from web/ui/icons", () => {
  assert.deepEqual(hits(/\p{Extended_Pictographic}/u), []);
});


test("app: screens and components never call Supabase directly: data goes through app/src/lib", () => {
  const ui = files(ROOT).filter((f) => /app\/src\/(app|components)\//.test(f));
  const bad = ui.filter((f) => /from ["'][./]*lib\/supabase["']|@supabase\//.test(readFileSync(f, "utf8")));
  assert.deepEqual(bad, []);
});

// The old web app (web/) is deleted on launch day: nothing in app/ may depend on it, only on shared/.
test("app: outside its own folder, the app imports only from shared/ (never web/, never the repository root)", () => {
  const bad = files(ROOT).concat(["app/metro.config.js"]).flatMap((f) =>
    [...readFileSync(f, "utf8").matchAll(/(?:from|import|require\()\s*["'](\.{1,2}\/[^"']+)["']/g)].flatMap(([, spec]) => {
      const target = relative(process.cwd(), resolve(dirname(f), spec));
      return target.startsWith("app/") || target.startsWith("shared/") ? [] : [`${f} → ${target}`];
    }));
  assert.deepEqual(bad, []);
});

// Screens are assembled from the bricks of app/src/components: a screen that writes its own styles or its own
// <Text> drifts from the others, and a design change then has to be made screen by screen (docs/audit.md R27).
test("app: screens hold no style sheet and no raw <Text>: they assemble the bricks of app/src/components", () => {
  const screens = files(ROOT).filter((f) => f.startsWith("app/src/app/"));
  const bad = screens.filter((f) => /StyleSheet\.create|Text as RNText/.test(readFileSync(f, "utf8")));
  assert.deepEqual(bad, []);
});

test("app: spacing and sizes come from the theme (space, touch), not numbers (shadow offsets apart)", () => {
  const re = /\b(gap|rowGap|columnGap|margin\w*|padding\w*|width|height|minHeight|minWidth|maxWidth|top|left|right|bottom): *[1-9]/;
  assert.deepEqual(hits(re).filter((h) => !/shadowOffset/.test(readFileSync(h.split(":")[0], "utf8").split("\n")[+h.split(":")[1] - 1])), []);
});

// A page that slides up closes the way every app does it: pulled down on iPhone, a cross at the top, Android's back.
// No « Fermer » button at the bottom, which doubled the cross (docs/audit.md R28).
test("app: every modal page is a Sheet (or a step page with its back arrow), with no « Fermer » button", () => {
  const layout = readFileSync("app/src/app/_layout.tsx", "utf8");
  const modals = [...layout.matchAll(/name="([^"]+)" options=\{\{ presentation: "modal" \}\}/g)].map(([, n]) => `app/src/app/${n}.tsx`);
  assert.ok(modals.length >= 8, "the modal list was read");
  const bad = modals.filter((f) => !/<Sheet\b|<LevelPicker\b.*onClose=|<NewPassword\b.*onCancel=/.test(readFileSync(f, "utf8")));
  assert.deepEqual(bad, []);
  assert.deepEqual(hits(/label="Fermer"/), []);
});
