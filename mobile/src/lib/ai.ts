// The AI teacher of the web app (api/ai.js on Vercel). The app sends structured fields, never a prompt;
// the Anthropic key stays on the server, which reads the caller from the Supabase token and applies the quota.
import { SITE } from "./site";
import { supabase } from "./supabase";

export type Correction = { correct: boolean; errors: { wrong: string; right: string; why: string }[]; tip: string };
// "off": the server has no key; "limit": today's quota is used up; "error": network or server.
export type AiFailure = "off" | "limit" | "error";

let off = false; // once the server says it has no AI, the session stops asking

async function call<T>(body: object): Promise<T> {
  if (off) throw "off" as AiFailure;
  const { data } = await supabase.auth.getSession();
  const token = data.session?.access_token;
  if (!token) throw "error" as AiFailure;
  const r = await fetch(`${SITE}/api/ai`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify(body),
  });
  if (r.status === 501) { off = true; throw "off" as AiFailure; }
  if (r.status === 429) throw "limit" as AiFailure;
  if (!r.ok) throw "error" as AiFailure;
  return (await r.json()) as T;
}

export type AiWord = { en: string; fr: string; tip: string; example: string };
// Fills a card for a word the learner types, in French or in the language learnt.
export function aiWord(text: string, lang: string, level: string) {
  return call<AiWord>({ kind: "word", text: text.slice(0, 120), lang, level });
}

// Judges a translation that matched none of the model answers: it may be another correct way to say it.
export function aiCorrect(p: { lang: string; level: string; fr: string; ans: string[]; given: string; skill: string; rule: string }) {
  return call<Correction>({ kind: "correct", ...p, given: p.given.slice(0, 300) });
}
