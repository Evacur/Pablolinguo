// Design system guardrails (docs/design-system.md). Structure: ui/tokens, ui/icons, ui/components/{atoms,molecules,organisms}.
import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const read = (p) => readFileSync(join(root, p), "utf8");
const list = (dir, ext) => readdirSync(join(root, dir), { recursive: true }).filter((f) => f.endsWith(ext)).map((f) => join(dir, f));

const html = read("public/index.html");
const screenCss = html.slice(html.indexOf("<style>"), html.indexOf("</style>"));
const appScript = list("src/app", ".js").map(read).join("\n");
const LEVELS = ["atoms", "molecules", "organisms"];
const components = list("ui/components", ".css").map((f) => ({ file: f, level: f.split("/")[2], name: f.split("/").pop().replace(".css", "") }));
const HEX = /#[0-9a-f]{3,8}\b/i;

test("raw colours live only in ui/tokens (CSS custom properties and icon palettes)", () => {
  const stripTokens = (line) => line.replace(/--[a-z0-9-]+\s*:\s*[^;}]+/gi, "");
  const files = [...list("ui", ".css").filter((f) => !f.startsWith("ui/tokens/")), ...list("ui", ".js").filter((f) => !f.startsWith("ui/tokens/"))];
  const bad = files.flatMap((f) => read(f).split("\n").flatMap((l, i) => (HEX.test(stripTokens(l)) ? [`${f}:${i + 1}`] : [])));
  screenCss.split("\n").forEach((l, i) => { if (HEX.test(stripTokens(l))) bad.push(`index.html <style> line ${i + 1}`); });
  for (const f of list("src/app", ".js")) if (HEX.test(read(f).replace(/&#x?[0-9a-f]+;/gi, ""))) bad.push(`${f}: a hex colour in the app code`);
  assert.deepEqual(bad, [], "Use a token: var(--…) in CSS, or a palette from ui/tokens/icon-colors.js");
});

test("spacing, type size, radius and shadow come from tokens (screens and components)", () => {
  // Layout sizes (width, height, top…) may stay in px. 1px borders and inset outlines are not shadows.
  const RULES = [
    [/(?:^|[;{\s])(padding|margin)(-[a-z]+)?\s*:[^;}]*?\b[1-9]\d*px/, "padding/margin: use var(--sp-*)"],
    [/(?:^|[;{\s])((row-|column-)?gap)\s*:[^;}]*?\b[1-9]\d*px/, "gap: use var(--sp-*)"],
    [/font-size\s*:\s*[\d.]+(px|rem|em)/, "font-size: use var(--fs-*)"],
    [/border(-[a-z]+)*-radius\s*:[^;}]*?\b[1-9]\d*px/, "border-radius: use var(--r-*)"],
    [/rgba?\(/, "colour or shadow: use a token"],
  ];
  const sources = [["index.html <style>", screenCss], ...list("ui", ".css").filter((f) => !f.startsWith("ui/tokens/")).map((f) => [f, read(f)])];
  const bad = [];
  for (const [name, css] of sources) {
    css.split("\n").forEach((line, i) => {
      const clean = line.replace(/--[a-z0-9-]+\s*:\s*[^;}]+/gi, "");
      for (const [re, msg] of RULES) if (re.test(clean)) bad.push(`${name}:${i + 1} ${msg}`);
    });
  }
  assert.deepEqual(bad, []);
});

test("screens do not redefine tokens or shared components", () => {
  assert.doesNotMatch(screenCss, /:root\s*[{[]/, "Tokens belong in ui/tokens/");
  for (const c of components) {
    const own = read(c.file).match(/^\.[a-z][a-z0-9-]*/m)?.[0];
    if (own) assert.doesNotMatch(screenCss, new RegExp(`(^|\\n)\\${own}\\s*\\{`), `${own} is defined in ${c.file}: extend it there, not in a screen`);
  }
});

test("inline style attributes are layout only (no colour, font or radius)", () => {
  const styles = [html, appScript].flatMap((src) => [...src.matchAll(/style="([^"]*)"/g)].map((m) => m[1]));
  const bad = styles.filter((s) => /(^|;)\s*(color|background|font|border-radius|box-shadow)\s*:/i.test(s) || /(padding|margin|gap)[a-z-]*\s*:[^;]*\b[1-9]\d*px/.test(s));
  assert.deepEqual(bad, [], "Move design values to a class from ui/");
});

test("every component sits in a level, is imported by ui/index.css and shown in the catalogue", () => {
  const index = read("ui/index.css");
  const catalogue = read("public/ui.html");
  assert.ok(components.length > 10);
  for (const c of components) {
    assert.ok(LEVELS.includes(c.level), `${c.file}: put it in atoms, molecules or organisms`);
    assert.match(index, new RegExp(`components/${c.level}/${c.name}\\.css`), `${c.file} is not imported by ui/index.css`);
    assert.match(catalogue, new RegExp(`data-component="${c.name}"`), `${c.name} has no section in public/ui.html`);
  }
});

test("a component only imports its own level or the ones below", () => {
  for (const f of list("ui/components", ".js")) {
    const level = LEVELS.indexOf(f.split("/")[2]);
    for (const [, path] of read(f).matchAll(/from\s+["']([^"']+)["']/g)) {
      const target = LEVELS.findIndex((l) => path.includes(`/${l}/`) || path.startsWith(`../${l}`));
      assert.ok(target <= level, `${f} imports ${path}, a higher level`);
    }
  }
});

test("the app does not redefine icons or the sheet: they come from ui/", () => {
  assert.doesNotMatch(appScript, /function (emo|pic|openSheet|closeSheet|toast)\s*\(/);
  assert.doesNotMatch(appScript, /<svg[^`]*<rect/, "Draw icons in ui/icons/");
});

test("screens build components with UI.* helpers, never by writing their classes", () => {
  const HELPER = { btn: "button", mini: "mini", pill: "pill", meter: "meter", "icon-btn": "iconButton", card: "card", panel: "panel",
    "panel-head": "panel", "section-title": "sectionTitle", verdict: "feedback", vhead: "faceHead", list: "list",
    "list-row": "listRow", banner: "banner", "empty-state": "emptyState", stats: "stats", stat: "stat",
    "steps-list": "steps", step: "step", switcher: "switcher", sw: "switcher",
    progress: "progress", deck: "deck", decks: "decks", word: "word", words: "words", flash: "flashcard", dock: "dock", bubble: "bubble", chat: "chat" };
  const re = new RegExp(`class="(${Object.keys(HELPER).join("|")})[\\s"]`, "g");
  const bad = list("src/app", ".js").flatMap((f) => [...read(f).matchAll(re)].map((m) => `${f}: class="${m[1]}… → UI.${HELPER[m[1]]}()`));
  assert.deepEqual(bad, []);
});

test("every sheet is a labelled modal dialog with a close button", () => {
  const sheets = [...html.matchAll(/<div class="sheet" id="sheet-[^"]+"[^>]*>/g)].map((m) => m[0]);
  assert.ok(sheets.length > 0);
  for (const s of sheets) {
    assert.match(s, /role="dialog"/); assert.match(s, /aria-modal="true"/); assert.match(s, /aria-labelledby="/);
  }
  assert.equal((html.match(/data-sheet-close/g) || []).length >= sheets.length, true);
});

test("no emoji used as an icon in the app: icons come from ui/icons (pic, emo)", () => {
  const bad = [...list("src/app", ".js"), "public/index.html"].flatMap((f) =>
    read(f).split("\n").flatMap((l, i) => (/\p{Extended_Pictographic}/u.test(l) ? [`${f}:${i + 1}`] : [])));
  assert.deepEqual(bad, []);
});

test("no dead CSS: every class styled by a screen or a component is used somewhere", () => {
  // Classes built from a value at runtime: avatar colours (av-<colour>) and pill tones (p-<tone>).
  const DYNAMIC = /^(av|p)-/;
  const code = html.replace(/<style>[\s\S]*?<\/style>/, "") + [...list("src/app", ".js"), ...list("ui", ".js"), "public/lang/index.js"].map(read).join("\n");
  const classes = (css) => new Set([...css.replace(/\/\*[\s\S]*?\*\//g, "").matchAll(/\.([a-zA-Z][\w-]*)/g)].map((m) => m[1]));
  const used = (c) => new RegExp(`[\\s"'\`.-]${c.replace(/-/g, "\\-")}(?![\\w-])`).test(code);
  const bad = [["index.html", screenCss], ...list("ui", ".css").map((f) => [f, read(f)])]
    .flatMap(([f, css]) => [...classes(css)].filter((c) => !DYNAMIC.test(c) && !used(c)).map((c) => `${f}: .${c}`));
  assert.deepEqual(bad, []);
});
