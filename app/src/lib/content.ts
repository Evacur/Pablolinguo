// The learning content, the same files as the web app (shared/content). They are bundled into the app:
// both languages are about 1.4 MB and the app then works without loading anything.
import "./window-shim";
import "../../../shared/content/index.js";
import "../../../shared/content/en.js";
import "../../../shared/content/words-en.js";
import "../../../shared/content/en-a.js";
import "../../../shared/content/en-b.js";
import "../../../shared/content/situ-en.js";
import "../../../shared/content/points-en.js";
import "../../../shared/content/lessons-en.js";
import "../../../shared/content/listen-en.js";
import "../../../shared/content/es.js";
import "../../../shared/content/words-es.js";
import "../../../shared/content/es-a.js";
import "../../../shared/content/es-b.js";
import "../../../shared/content/situ-es.js";
import "../../../shared/content/points-es.js";
import "../../../shared/content/lessons-es.js";
import "../../../shared/content/listen-es.js";

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
