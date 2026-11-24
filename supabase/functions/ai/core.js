// AI teacher, shared by its two hosts: the Supabase Edge Function (index.ts, what the app calls) and the
// Vercel route (api/ai.js, what the old site calls until it is deleted). Each host only passes its
// environment, a Supabase fetcher and an Anthropic client: the rules below live once.
// The caller never sends a prompt: it sends structured fields, and the prompt is built here, so a
// signed-in account cannot use this route as a free LLM.
import { zodOutputFormat } from "@anthropic-ai/sdk/helpers/zod";
import { z } from "zod";

const Word = z.object({ en: z.string(), fr: z.string(), tip: z.string(), example: z.string() });
const Correction = z.object({
  correct: z.boolean(),
  errors: z.array(z.object({ wrong: z.string(), right: z.string(), why: z.string() })),
  tip: z.string(),
});

const cut = (v, n) => String(v ?? "").slice(0, n);
// Only languages the app ships a pack for; anything else falls back to English.
const LANGS = { en: "anglais", es: "espagnol" };
const THE = { en: "l'anglais", es: "l'espagnol" };
const OF = { en: "d'anglais", es: "d'espagnol" };
const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];
const code = (b) => (LANGS[b.lang] ? b.lang : "en");
const langOf = (b) => LANGS[code(b)];
const levelOf = (b) => (LEVELS.includes(b.level) ? b.level : "B1");

function buildWord(b) {
  return {
    schema: Word,
    prompt: `Tu aides un francophone de niveau ${levelOf(b)} qui apprend ${THE[code(b)]}. Mot ou expression donné (en français ou en ${langOf(b)}) : "${cut(b.text, 120)}".
Donne : "en" le mot ou l'expression en ${langOf(b)}, naturel et courant (avec l'article pour un nom si la langue en a) ; "fr" la traduction française courte ; "tip" une astuce mémo en français, 15 mots maximum (piège, faux ami, prononciation ou image) ; "example" une phrase simple et naturelle en ${langOf(b)} qui l'utilise, 12 mots maximum.`,
  };
}

function buildCorrection(b) {
  const ans = Array.isArray(b.ans) ? b.ans.slice(0, 6).map((a) => cut(a, 200)) : [];
  return {
    schema: Correction,
    prompt: `Tu es un prof ${OF[code(b)]} bienveillant et précis pour un francophone de niveau ${levelOf(b)}. Il traduit une phrase en ${langOf(b)}.
Phrase française : "${cut(b.fr, 300)}"
Traductions modèles : ${JSON.stringify(ans)}
Réponse de l'élève : "${cut(b.given, 300)}"
Point de grammaire travaillé : ${cut(b.skill, 80)}. Règle : ${cut(b.rule, 400)}
Juge si la réponse est correcte et naturelle en ${langOf(b)}, même si elle diffère des modèles. Les fautes de frappe évidentes, la ponctuation et les accents oubliés ne comptent pas comme des fautes.
"correct" : true ou false. "errors" : pour chaque faute, "wrong" le mot ou groupe faux de l'élève, "right" la correction, "why" pourquoi en français simple (25 mots maximum) ; vide si la réponse est correcte. "tip" : une astuce courte en français pour ne plus refaire l'erreur, ou une chaîne vide.`,
  };
}

// env: the host's environment (ANTHROPIC_API_KEY, AI_MODEL, AI_DAILY_LIMIT, AI_APP_DAILY_LIMIT).
// supabase(path, token, init): a fetch to the project's API on the caller's own token.
// anthropic(): builds the Anthropic client (only called once every check passed).
// Returns { status, body } for the host to send.
export async function answer({ method, authorization, body }, { env, supabase, anthropic }) {
  const enabled = Boolean(env.ANTHROPIC_API_KEY);
  if (method === "GET") return { status: 200, body: { enabled } };
  if (method !== "POST") return { status: 405, body: { error: "method" } };
  if (!enabled) return { status: 501, body: { error: "disabled" } };

  // The caller's identity comes from their Supabase token, never from the body.
  const token = String(authorization || "").replace(/^Bearer /, "");
  if (!token) return { status: 401, body: { error: "auth" } };
  const who = await supabase("/auth/v1/user", token);
  if (!who.ok) return { status: 401, body: { error: "auth" } };

  // The request is checked before the quota moves, so a malformed call costs nothing.
  const b = body && typeof body === "object" ? body : {};
  const job = b.kind === "word" ? buildWord(b) : b.kind === "correct" ? buildCorrection(b) : null;
  if (!job) return { status: 400, body: { error: "kind" } };

  // Cost ceilings. Per account and per day, then for the whole app per day (all accounts together).
  // At Haiku 5.5 prices a call costs at most about $0.001, so the whole app tops out near $0.50 a day.
  const used = await supabase("/rest/v1/rpc/bump_ai_usage", token, { method: "POST", body: "{}" });
  if (!used.ok) return { status: 500, body: { error: "quota" } };
  if (Number(await used.json()) > Number(env.AI_DAILY_LIMIT || 50)) return { status: 429, body: { error: "limit" } };
  const total = await supabase("/rest/v1/rpc/ai_calls_today", token, { method: "POST", body: "{}" });
  if (!total.ok) return { status: 500, body: { error: "quota" } };
  if (Number(await total.json()) > Number(env.AI_APP_DAILY_LIMIT || 500)) return { status: 429, body: { error: "limit" } };

  try {
    const response = await anthropic().messages.parse({
      model: env.AI_MODEL || "claude-haiku-5-5",
      max_tokens: 2000, // the answers are a few lines of JSON; this caps the cost of one call
      output_config: { effort: "low", format: zodOutputFormat(job.schema) },
      messages: [{ role: "user", content: job.prompt }],
    });
    if (response.stop_reason === "refusal" || !response.parsed_output) return { status: 502, body: { error: "no_answer" } };
    return { status: 200, body: response.parsed_output };
  } catch (e) {
    // Logged without the user's text; the caller only gets a generic error.
    console.error("ai failed:", e && e.status, e && e.name);
    return { status: e && e.status === 429 ? 429 : 502, body: { error: "upstream" } };
  }
}
