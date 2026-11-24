// Words and their review state, as the web app stores them (src/app/screens/words.js).
// Pure: tested with the web app's tests where the logic is shared, and kept in step with words.js by hand.
import { fitsLevel } from "../../../src/app/lib/levels.js";
import type { Pack } from "./content";

export type Srs = Record<string, { b: number; ok: number; ko: number; due: string }>;

// The key of a word in the review document. Same rule as wkey in src/app/screens/words.js: changing it
// would lose every account's reviews.
export const wkey = (lang: string, en: string): string =>
  (lang === "en" ? en : en.normalize("NFD").replace(/[̀-ͯ]/g, ""))
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_|_$/g, "")
    .slice(0, 60) || "w";

// Words due today and new words of the learner's level, as the Mots page counts them.
export function reviewCounts(pack: Pack, srs: Srs, level: string, today: string) {
  const seen = new Set<string>();
  let due = 0;
  let fresh = 0;
  for (const list of Object.values(pack.words)) {
    for (const w of list) {
      const k = wkey(pack.code, w[0]);
      if (seen.has(k)) continue;
      seen.add(k);
      const s = srs[k];
      if (s) {
        if (s.due <= today) due++;
      } else if (fitsLevel(w[3], level)) fresh++;
    }
  }
  return { due, fresh };
}

// How many words of a theme the learner knows (reviewed right at least once and not failed last time).
export function themeCounts(pack: Pack, srs: Srs, level: string, theme: string) {
  const list = (pack.words[theme] ?? []).filter((w) => fitsLevel(w[3], level) || srs[wkey(pack.code, w[0])]);
  const known = list.filter((w) => (srs[wkey(pack.code, w[0])]?.b ?? 0) > 0).length;
  return { total: list.length, known };
}

// The icon of each theme, as on the web app (src/app/data/packs.js: THEME_PIC).
export const THEME_PIC: Record<string, string> = {
  Work: "briefcase", Travel: "plane", Health: "heart", Climbing: "mountain", Food: "apple", Restaurant: "cup", Home: "house", Shopping: "bag",
  Weather: "cloud", City: "city", Family: "family", Nature: "tree", Intro: "hand", Hotel: "bed", Party: "party", Interview: "tie", Admin: "bank",
  Tech: "laptop", Emergency: "siren", Culture: "film",
};
