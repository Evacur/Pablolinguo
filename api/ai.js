// AI teacher. The browser never sends a prompt: it sends structured fields, and the
// prompt is built here, so a signed-in account cannot use this route as a free LLM.
import Anthropic from "@anthropic-ai/sdk";
import { zodOutputFormat } from "@anthropic-ai/sdk/helpers/zod";
import { z } from "zod";
import { SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY } from "../shared/config.js";

const MODEL = process.env.AI_MODEL || "claude-haiku-5-5";
// Cost ceilings. Per account and per day, then for the whole app per day (all accounts together).
// At Haiku 5.5 prices a call costs at most about $0.001, so the whole app tops out near $0.50 a day.
const DAILY_LIMIT = Number(process.env.AI_DAILY_LIMIT || 50);
const APP_DAILY_LIMIT = Number(process.env.AI_APP_DAILY_LIMIT || 500);

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
Donne : "en" le mot ou l'expression en ${langOf(b)}, naturel et courant (avec l'article pour un nom si la langue en a) ; "fr" la traduction française courte ; "tip" une astuce mémo en français, 15 mots maximum (piège, faux ami, prononciation ou image) ; "example" une phrase simple et naturelle en ${langOf(b)} qui l'utilise, 12 mots maximum.${code(b) === "ru" ? ' Le russe s\'écrit en cyrillique, sans accents toniques.' : ""}`,
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

// The caller's identity comes from their Supabase token, never from the body.
async function supabase(path, token, init = {}) {
  return fetch(SUPABASE_URL + path, {
    ...init,
    headers: { apikey: SUPABASE_PUBLISHABLE_KEY, Authorization: "Bearer " + token, "Content-Type": "application/json" },
  });
}

export default async function handler(req, res) {
  const enabled = Boolean(process.env.ANTHROPIC_API_KEY);
  if (req.method === "GET") return res.status(200).json({ enabled });
  if (req.method !== "POST") return res.status(405).json({ error: "method" });
  if (!enabled) return res.status(501).json({ error: "disabled" });

  const token = String(req.headers.authorization || "").replace(/^Bearer /, "");
  if (!token) return res.status(401).json({ error: "auth" });
  const who = await supabase("/auth/v1/user", token);
  if (!who.ok) return res.status(401).json({ error: "auth" });

  // The request is checked before the quota moves, so a malformed call costs nothing.
  const body = req.body || {};
  const job = body.kind === "word" ? buildWord(body) : body.kind === "correct" ? buildCorrection(body) : null;
  if (!job) return res.status(400).json({ error: "kind" });

  const used = await supabase("/rest/v1/rpc/bump_ai_usage", token, { method: "POST", body: "{}" });
  if (!used.ok) return res.status(500).json({ error: "quota" });
  if (Number(await used.json()) > DAILY_LIMIT) return res.status(429).json({ error: "limit" });
  const total = await supabase("/rest/v1/rpc/ai_calls_today", token, { method: "POST", body: "{}" });
  if (!total.ok) return res.status(500).json({ error: "quota" });
  if (Number(await total.json()) > APP_DAILY_LIMIT) return res.status(429).json({ error: "limit" });

  try {
    const client = new Anthropic();
    const response = await client.messages.parse({
      model: MODEL,
      max_tokens: 2000, // the answers are a few lines of JSON; this caps the cost of one call
      output_config: { effort: "low", format: zodOutputFormat(job.schema) },
      messages: [{ role: "user", content: job.prompt }],
    });
    if (response.stop_reason === "refusal" || !response.parsed_output) return res.status(502).json({ error: "no_answer" });
    return res.status(200).json(response.parsed_output);
  } catch (e) {
    // Logged without the user's text; the client only gets a generic error.
    console.error("ai route failed:", e && e.status, e && e.name);
    return res.status(e && e.status === 429 ? 429 : 502).json({ error: "upstream" });
  }
}
