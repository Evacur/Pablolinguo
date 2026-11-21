// Design system guardrails (docs/design-system.md): colours live in tokens only, and inline styles never carry design values.
import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const html = readFileSync(new URL("../public/index.html", import.meta.url), "utf8");
const css = html.slice(html.indexOf("<style>"), html.indexOf("</style>"));

test("CSS colours are tokens: hex values only inside custom-property definitions", () => {
  const bad = css.split("\n").flatMap((line, i) => {
    const withoutTokens = line.replace(/--[a-z0-9-]+\s*:\s*[^;}]+/gi, "");
    return /#[0-9a-f]{3,8}\b/i.test(withoutTokens) ? [`style line ${i + 1}: ${line.trim().slice(0, 90)}`] : [];
  });
  assert.deepEqual(bad, [], "Use a token (var(--…)) instead of a raw colour");
});

test("inline style attributes are layout only (no colour, font or radius)", () => {
  const styles = [...html.matchAll(/style="([^"]*)"/g)].map((m) => m[1]);
  const bad = styles.filter((s) => /(^|;)\s*(color|background|font|border-radius|box-shadow)\s*:/i.test(s));
  assert.deepEqual(bad, [], "Move design values to a class from the design system");
});

test("every sheet is a labelled modal dialog with a close button", () => {
  const sheets = [...html.matchAll(/<div class="sheet" id="sheet-[^"]+"[^>]*>/g)].map((m) => m[0]);
  assert.ok(sheets.length > 0);
  for (const s of sheets) {
    assert.match(s, /role="dialog"/); assert.match(s, /aria-modal="true"/); assert.match(s, /aria-labelledby="/);
  }
  assert.equal((html.match(/data-sheet-close/g) || []).length >= sheets.length, true);
});
