// Exercise sessions, as the web app builds and checks them (src/app/screens/train/trainer.js, session.js,
// exercise.js). The answer checker itself is shared: src/app/lib/answers.js.
import { accentFix, norm, sameAns, typoFix } from "../../../src/app/lib/answers.js";
import { fitsLevel, LV } from "../../../src/app/lib/levels.js";
import { weakness } from "../../../src/app/lib/mastery.js";
import type { Pack } from "./content";

export type Item = {
  t: "tr" | "gap" | "qcm" | "order" | "match";
  th?: string | null; // the situation theme of a bank exercise
  pairs?: { en: string; fr: string }[]; // match: four words to link to their translation
  skill: string;
  lvl: string;
  fr: string;
  s?: string; // the sentence with ___ (gap, qcm)
  a: string[] | number; // right answers, or the index of the right option (qcm)
  o?: string[]; // options (qcm)
  h?: string; // hint (gap)
  why?: string;
  words?: string[]; // tiles (order)
  key: string;
};
// theme: the test of a situation, 9 exercises of its theme (level and below) and one « associe » with its words.
export type Mode = "practice" | "test" | "express" | "theme";
export const SIZE: Record<Mode, number> = { practice: 5, test: 10, express: 5, theme: 9 };
export const KIND_LBL: Record<Item["t"], string> = { tr: "Traduis", gap: "Complète", qcm: "Choisis", order: "Remets dans l'ordre", match: "Associe" };

export function shuffle<T>(a: T[]): T[] {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
}
// Same key as the web app (hkey), so an exercise seen on one device counts as seen on the other.
export const hkey = (s: string) => {
  let h = 5381;
  for (const c of String(s)) h = ((h << 5) + h + c.charCodeAt(0)) | 0;
  return (h >>> 0).toString(36);
};

type Raw = { t: string; fr: string; s?: string; a: string[] | number; o?: string[]; h?: string; why?: string; th?: string | null };
type PackWithBank = Pack & { bank?: Record<string, Raw[]> };

const POOLS = new Map<string, Item[]>();
export function pool(pack: Pack): Item[] {
  const cached = POOLS.get(pack.code);
  if (cached) return cached;
  const bank = (pack as PackWithBank).bank ?? {};
  const items: Item[] = [];
  for (const sk of pack.skills) {
    sk.q.forEach((q) => items.push({ t: "tr", skill: sk.id, lvl: sk.lvl, fr: q[0], a: q[1], key: "" }));
    (bank[sk.id] ?? []).forEach((b) => {
      if (b.t === "tr" || b.t === "gap" || b.t === "qcm") items.push({ ...b, t: b.t, skill: sk.id, lvl: sk.lvl, key: "" });
    });
  }
  items.forEach((it) => (it.key = hkey(it.skill + "|" + it.t + "|" + (it.s || it.fr))));
  POOLS.set(pack.code, items);
  return items;
}

// Every word the app knows: a typed known word is a real mistake, not a typo (their / there).
const KNOWN = new Map<string, Set<string>>();
export function knownWords(pack: Pack): Set<string> {
  const cached = KNOWN.get(pack.code);
  if (cached) return cached;
  const set = new Set<string>();
  const add = (x: unknown) => {
    if (typeof x === "string") norm(x.replace(/___/g, " "), pack.code).split(" ").forEach((w: string) => w && set.add(w));
  };
  pool(pack).forEach((it) => {
    if (Array.isArray(it.a)) it.a.forEach(add);
    (it.o ?? []).forEach(add);
    add(it.s);
  });
  Object.values(pack.words).forEach((l) => l.forEach((w) => add(w[0])));
  KNOWN.set(pack.code, set);
  return set;
}

// A translation of 4 to 11 words can be played as « rebuild the sentence ».
function asOrder(it: Item): Item {
  if (!Array.isArray(it.a)) return it;
  const w = String(it.a[0]).replace(/[¿¡]/g, "").replace(/[.!?]+$/, "").split(/\s+/);
  if (w.length < 4 || w.length > 11) return it;
  if (w[0] !== "I" && !/^I'/.test(w[0])) w[0] = w[0].charAt(0).toLowerCase() + w[0].slice(1);
  return { ...it, t: "order", words: w };
}
const mixKinds = (items: Item[]) => {
  let n = 0;
  return items.map((it) => (it.t === "tr" && n < 3 && Math.random() < 0.4 ? (n++, asOrder(it)) : it));
};

// Seen exercises: right recently = rarely picked again, wrong = picked more (as on the web).
export type Seen = Record<string, { d: string; ok: boolean }>;
function weightOf(it: Item, seen: Seen, today: string) {
  const s = seen[it.key];
  if (!s) return 1;
  const days = (new Date(today).getTime() - new Date(s.d).getTime()) / 86400000;
  if (s.ok) return days < 3 ? 0.05 : days < 10 ? 0.3 : 0.8;
  return days < 1 ? 0.5 : 3;
}
function pickWeighted(list: Item[], n: number, seen: Seen, today: string, boost: (it: Item) => number = () => 1) {
  const out: Item[] = [];
  const rest = list.map((it) => ({ it, w: weightOf(it, seen, today) * boost(it) }));
  while (out.length < n && rest.length) {
    const tot = rest.reduce((a, x) => a + x.w, 0);
    let r = Math.random() * tot;
    let k = 0;
    for (; k < rest.length - 1; k++) {
      r -= rest[k].w;
      if (r <= 0) break;
    }
    out.push(rest[k].it);
    rest.splice(k, 1);
  }
  return out;
}

// practice: 5 exercises of one point; test: 10 of one point (a pass adds a dot); express: 5 of the level, weak points first.
export function buildSession(pack: Pack, mode: Mode, arg: string, level: string, skills: Record<string, { m?: number }>, seen: Seen, today: string) {
  const all = pool(pack);
  if (mode === "theme") {
    const i = LV.indexOf(level);
    const own = all.filter((x) => x.th === arg && LV.indexOf(x.lvl) <= i);
    const items = mixKinds(pickWeighted(own, SIZE.theme, seen, today, (x) => (x.lvl === level ? 3 : 1)));
    const m = matchItem(pack, arg, level);
    if (m) items.splice(4, 0, m);
    return items;
  }
  if (mode === "express") {
    const boost = (x: Item) => 4 - (skills[x.skill]?.m ?? 0) + 6 * weakness(skills[x.skill]);
    return mixKinds(pickWeighted(all.filter((x) => x.lvl === level), SIZE.express, seen, today, boost));
  }
  return mixKinds(pickWeighted(all.filter((x) => x.skill === arg), SIZE[mode], seen, today));
}

export type Verdict = { ok: boolean; best: string; fix?: [string, string][] };
const answers = (it: Item): string[] => (Array.isArray(it.a) ? it.a : []);

// Typed answers: same answer (case, punctuation, Spanish accents aside), then a keyboard slip, else a mistake.
export function checkTyped(it: Item, given: string, lang: string, known: Set<string>): Verdict {
  const list = answers(it);
  const exact = list.find((a) => sameAns(a, given, lang));
  if (exact != null) return { ok: true, best: exact, fix: (accentFix(exact, given, lang) as [string, string][] | null) ?? undefined };
  for (const a of list) {
    const f = typoFix(a, given, lang, known);
    if (f) return { ok: true, best: a, fix: f as [string, string][] };
  }
  const n = norm(given, lang).split(" ");
  let best = list[0] ?? "";
  let sc = -1;
  list.forEach((a) => {
    const c = n.filter((w: string) => norm(a, lang).split(" ").includes(w)).length;
    if (c > sc) {
      sc = c;
      best = a;
    }
  });
  return { ok: false, best };
}
export function checkOrder(it: Item, built: string[], lang: string): Verdict {
  const s = built.join(" ");
  const list = answers(it);
  return { ok: list.some((a) => norm(a, lang) === norm(s, lang)), best: list[0] ?? "" };
}
export function checkOption(it: Item, picked: number): Verdict {
  const right = typeof it.a === "number" ? it.a : -1;
  return { ok: picked === right, best: (it.o ?? [])[right] ?? "" };
}

// Exercises of a situation theme the learner can do (their level and below). A test needs at least 4.
export function themeCount(pack: Pack, theme: string, level: string) {
  const i = LV.indexOf(level);
  return pool(pack).filter((x) => x.th === theme && LV.indexOf(x.lvl) <= i).length;
}

// « Associe »: four short words of the theme, at the learner's level, to link to their French (web: matchItem).
export function matchItem(pack: Pack, theme: string, level: string): Item | null {
  const list = shuffle((pack.words[theme] ?? []).filter((w) => w[0].split(" ").length <= 3 && fitsLevel(w[3], level))).slice(0, 4);
  if (list.length < 4) return null;
  return { t: "match", th: theme, skill: "", lvl: level, fr: "", a: [], key: "m" + theme, pairs: list.map((w) => ({ en: w[0], fr: w[1] })) };
}
