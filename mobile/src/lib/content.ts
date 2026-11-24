// The learning content, the same files as the web app (public/lang). They are bundled into the app:
// both languages are about 1.4 MB and the app then works without loading anything.
import "./window-shim";
import "../../../public/lang/index.js";
import "../../../public/lang/en.js";
import "../../../public/lang/words-en.js";
import "../../../public/lang/en-a.js";
import "../../../public/lang/en-b.js";
import "../../../public/lang/situ-en.js";
import "../../../public/lang/points-en.js";
import "../../../public/lang/lessons-en.js";
import "../../../public/lang/listen-en.js";
import "../../../public/lang/es.js";
import "../../../public/lang/words-es.js";
import "../../../public/lang/es-a.js";
import "../../../public/lang/es-b.js";
import "../../../public/lang/situ-es.js";
import "../../../public/lang/points-es.js";
import "../../../public/lang/lessons-es.js";
import "../../../public/lang/listen-es.js";

// [word in the target language, French, tip, level]
export type Word = [string, string, string?, string?];
export type Skill = { id: string; lvl: string; name: string; ex: string; q: [string, string[]][] };
export type LessonPart = { h: string; p?: string; rows?: string[][] };
export type Lesson = { intro?: string; parts?: LessonPart[] };
// A situation (situ-*.js): key phrases, a dialogue, a grammar point in context, fixes and a task to translate.
export type Situation = {
  id: string;
  theme: string;
  t: string;
  situ: string;
  ph: [string, string][];
  dia: [string, string][];
  g?: { t: string; r: string; ex: string[]; skill?: string };
  tr?: [string, string, string][];
  task?: [string, string][];
};
export type Pack = {
  code: string;
  name: string;
  native: string;
  skills: Skill[];
  rules: Record<string, string>;
  words: Record<string, Word[]>;
  lessons?: Record<string, Lesson>;
  cours: Situation[];
};
export type LangInfo = { code: string; name: string; native: string };

const g = globalThis as unknown as { PACKS: Record<string, Pack>; LANGS: LangInfo[] };

export const LANGS: LangInfo[] = g.LANGS.map(({ code, name, native }) => ({ code, name, native }));
export const packOf = (code: string): Pack => g.PACKS[code] ?? g.PACKS.en;
