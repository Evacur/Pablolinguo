// Situations and grammar points: every situation (Cours › Situations) has its words and enough exercises for its
// test, every grammar point has enough exercises for its test, and every exercise is well formed.
import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";
import { LV } from "../shared/logic/levels.js";

const read = (f) => readFileSync(new URL("../shared/content/" + f, import.meta.url), "utf8");
const manifest = vm.runInNewContext(read("index.js") + ";window.LANGS", { window: {} });
const str = (x) => typeof x === "string" && x.trim().length > 0;
const pairs = (r, n, min, max) => Array.isArray(r) && r.length >= min && r.length <= max && r.every((x) => Array.isArray(x) && x.length === n && x.every(str));
// The situations added on 2026-11-23, the same in every language (same id, same theme).
const NEW = { intro: "Intro", hotel: "Hotel", party: "Party", interview: "Interview", admin: "Admin", tech: "Tech", emergency: "Emergency", culture: "Culture" };

const packs = Object.fromEntries(manifest.map((lang) => {
  const ctx = { window: {} };
  for (const f of lang.files) vm.runInNewContext(read(f), ctx);
  return [lang.code, ctx.window.PACKS[lang.code]];
}));
const lvIdx = (l) => LV.indexOf(l);

for (const [code, P] of Object.entries(packs)) {
  const ids = new Set(P.skills.map((s) => s.id));
  const lvOf = Object.fromEntries(P.skills.map((s) => [s.id, s.lvl]));

  test(`${code}: every exercise is well formed and filed under a known grammar point`, () => {
    for (const [sk, list] of Object.entries(P.bank)) {
      assert.ok(ids.has(sk), `bank ${sk}: unknown grammar point`);
      for (const b of list) {
        const at = `${sk}: ${b.fr}`;
        assert.ok(str(b.fr) && str(b.why) && (b.th === null || b.th in P.words), `${at}: fr, why and a known theme`);
        // The explanation is a teacher talking: two short sentences at most, so it fits under the answer (docs/audit.md R29).
        assert.ok(b.why.length <= 240, `${at}: explanation too long (${b.why.length})`);
        if (b.t === "tr") assert.ok(Array.isArray(b.a) && b.a.length && b.a.every(str), `${at}: answers`);
        else if (b.t === "gap") assert.ok(b.s.includes("___") && Array.isArray(b.a) && b.a.length && b.a.every(str), `${at}: gap and answers`);
        else if (b.t === "qcm") assert.ok(b.s.includes("___") && Array.isArray(b.o) && b.o.length >= 3 && b.o.length <= 4 && b.o.every(str) && Number.isInteger(b.a) && b.a >= 0 && b.a < b.o.length, `${at}: 3 or 4 options and the index of the right one`);
        else assert.fail(`${at}: unknown kind ${b.t}`);
      }
    }
  });

  test(`${code}: every grammar point has its rule and enough exercises for its test (10 questions)`, () => {
    for (const s of P.skills) {
      assert.ok(LV.includes(s.lvl) && str(s.name) && str(s.ex), `${s.id}: level, name, example`);
      assert.ok(s.q.length >= 2 && s.q.length <= 8 && s.q.every((q) => str(q[0]) && Array.isArray(q[1]) && q[1].length && q[1].every(str)), `${s.id}: 2 to 8 translations with their answers`);
      assert.ok(str(P.rules[s.id]), `${s.id}: rule`);
      // 14 for its test, plus 3 so a test does not repeat itself too soon (docs/audit.md R29).
      assert.ok(s.q.length + (P.bank[s.id] || []).length >= 17, `${s.id}: at least 17 exercises`);
    }
  });

  test(`${code}: every situation is complete and its test can be taken from its level`, () => {
    assert.deepEqual(new Set(P.cours.map((c) => c.id)).size, P.cours.length, "one id per situation");
    for (const [id, theme] of Object.entries(NEW)) assert.ok(P.cours.some((c) => c.id === id && c.theme === theme), `situation ${id} (${theme})`);
    for (const c of P.cours) {
      assert.ok(str(c.t) && str(c.situ) && c.theme in P.words, `${c.id}: title, situation and a theme with words`);
      assert.ok(pairs(c.ph, 2, 6, 8) && pairs(c.dia, 2, 4, 8) && pairs(c.tr, 3, 2, 3) && pairs(c.task, 2, 2, 3), `${c.id}: phrases, dialogue, traps, task`);
      assert.ok(str(c.g.t) && str(c.g.r) && c.g.ex.every(str) && ids.has(c.g.skill), `${c.id}: grammar with a known point`);
      const ex = Object.entries(P.bank).flatMap(([sk, l]) => l.filter((b) => b.th === c.theme).map((b) => lvOf[sk]));
      assert.ok(ex.length >= 12, `${c.id}: at least 12 exercises (${ex.length})`);
      assert.ok(ex.filter((l) => lvIdx(l) <= lvIdx("A2")).length >= 6, `${c.id}: at least 6 exercises up to A2`);
      if (c.id in NEW) {
        const w = P.words[c.theme];
        assert.ok(w.length >= 30 && w.every((x) => x.length === 4 && x.every(str) && LV.includes(x[3])), `${c.id}: at least 30 words with their level`);
        assert.ok(w.filter((x) => lvIdx(x[3]) <= lvIdx("A2")).length >= 10, `${c.id}: at least 10 words up to A2`);
      }
    }
  });
}

test("the languages offer the same situations", () => {
  const sets = Object.values(packs).map((P) => P.cours.map((c) => c.id + ":" + c.theme).sort().join(","));
  assert.ok(sets.every((s) => s === sets[0]));
});

test("every grammar point belongs to a family with an icon (Cours › Grammaire)", async () => {
  const { FAMILIES, FAMILY_OF } = await import("../web/src/app/data/grammar-families.js");
  const { PIC } = await import("../shared/icons/pixel-icons.js");
  for (const f of Object.values(FAMILIES)) assert.ok(PIC[f.icon], `icon ${f.icon}`);
  const all = Object.values(packs).flatMap((P) => P.skills.map((s) => s.id));
  for (const id of all) assert.ok(FAMILY_OF[id] in FAMILIES, `${id}: no family`);
  for (const id of Object.keys(FAMILY_OF)) assert.ok(all.includes(id), `${id}: not a grammar point`);
});
