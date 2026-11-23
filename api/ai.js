// AI teacher. The browser never sends a prompt: it sends structured fields, and the
// prompt is built here, so a signed-in account cannot use this route as a free LLM.
import Anthropic from "@anthropic-ai/sdk";
import { zodOutputFormat } from "@anthropic-ai/sdk/helpers/zod";
import { z } from "zod";
import { SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY } from "../src/config.js";
import { FIX_MARK, MAX_TURNS, sceneOf } from "../src/scenes.js";

const MODEL = process.env.AI_MODEL || "claude-haiku-5-5";
// The conversation (kind chat and debrief) can run on a stronger model than the short corrections: set AI_CHAT_MODEL in Vercel.
const CHAT_MODEL = process.env.AI_CHAT_MODEL || MODEL;
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

// ---------- Conversation with a character (S'entraîner › Parler) ----------
// The browser sends a scene id and the lines said so far; the character, the goal and the rules are written here.
// The learner's lines are free text by nature: they are bounded in size and number, and each turn counts in the quota.
const Debrief = z.object({
  reached: z.boolean(),
  good: z.string(),
  errors: z.array(z.object({ wrong: z.string(), right: z.string(), why: z.string() })),
  words: z.array(z.object({ en: z.string(), fr: z.string() })),
});
// lines: [{r: "a" | "u", t}], starting with the character and strictly alternating. Returns null if it is not that.
function linesOf(b) {
  const raw = Array.isArray(b.lines) ? b.lines : null;
  if (!raw || raw.length > MAX_TURNS * 2 + 1) return null;
  const lines = raw.map((l) => ({ r: l && l.r, t: cut(l && l.t, 500).trim() }));
  if (!lines.every((l, i) => l.t && l.r === (i % 2 ? "u" : "a"))) return null;
  return lines;
}
const START = "(La scène commence. Dis ta première réplique.)";
function buildChat(b) {
  const scene = sceneOf(b.scene), lines = linesOf(b);
  if (!scene || !lines || (lines.length && lines.length % 2)) return null; // empty (the character opens) or ending on the learner
  const lang = langOf(b), level = levelOf(b);
  return {
    stream: true,
    system: `Tu joues un personnage dans une scène de la vie réelle, pour un francophone de niveau ${level} qui pratique ${THE[code(b)]}.
Ton personnage : ${scene.who}. But de l'élève (il le connaît) : ${scene.goal}
Règles :
- Parle uniquement en ${lang}, comme le ferait vraiment ce personnage : naturel, 1 à 2 phrases courtes, vocabulaire de niveau ${level}.
- Reste dans la scène. Ne sois jamais professeur, ne commente pas la langue, ne traduis pas. Si l'élève sort de la scène ou te demande autre chose, ramène-le à la scène en une phrase, dans ton rôle.
- Fais avancer la scène : pose une question ou ajoute un petit obstacle réaliste, pour que l'élève doive parler. Ne lui donne pas tout de suite ce qu'il veut.
- Quand son but est atteint, ou après une dizaine d'échanges, conclus la scène naturellement.
- Après ta réplique, va à la ligne et écris ${FIX_MARK} puis, sur la même ligne : si le dernier message de l'élève contient une faute de langue qui compte (pas la ponctuation ni les majuscules), sa phrase corrigée en ${lang}, puis " | ", puis pourquoi en français en 15 mots maximum ; sinon écris seulement OK. Pour ta toute première réplique, écris ${FIX_MARK} OK. Si ta réplique conclut la scène (but atteint, ou conversation terminée), ajoute le mot FIN à la fin de cette ligne.`,
    messages: [{ role: "user", content: START }, ...lines.map((l) => ({ role: l.r === "a" ? "assistant" : "user", content: l.t }))],
  };
}
function buildDebrief(b) {
  const scene = sceneOf(b.scene), lines = linesOf(b);
  if (!scene || !lines || lines.length < 2) return null;
  const lang = langOf(b);
  return {
    schema: Debrief,
    prompt: `Tu es un prof ${OF[code(b)]} bienveillant et précis pour un francophone de niveau ${levelOf(b)}. Il vient de jouer une scène en ${lang} avec un personnage (${scene.who}). Son but : ${scene.goal}
La conversation (P = le personnage, E = l'élève) :
${lines.map((l) => (l.r === "a" ? "P : " : "E : ") + l.t).join("\n")}
Fais son bilan, en ne jugeant que les messages de l'élève. "reached" : true si son but est atteint. "good" : ce qu'il a bien fait, en français, une phrase concrète de 25 mots maximum. "errors" : ses 3 fautes les plus utiles à corriger au maximum, avec "wrong" ce qu'il a écrit, "right" la bonne forme en ${lang}, "why" pourquoi en français simple (20 mots maximum) ; vide s'il n'y en a pas. "words" : 5 mots ou expressions au maximum, en ${lang}, que le personnage a utilisés ou qui auraient aidé l'élève dans cette scène, avec "en" le mot en ${lang} et "fr" sa traduction française courte.`,
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
  const job = body.kind === "word" ? buildWord(body) : body.kind === "correct" ? buildCorrection(body)
    : body.kind === "chat" ? buildChat(body) : body.kind === "debrief" ? buildDebrief(body) : null;
  if (!job) return res.status(400).json({ error: "kind" });

  const used = await supabase("/rest/v1/rpc/bump_ai_usage", token, { method: "POST", body: "{}" });
  if (!used.ok) return res.status(500).json({ error: "quota" });
  if (Number(await used.json()) > DAILY_LIMIT) return res.status(429).json({ error: "limit" });
  const total = await supabase("/rest/v1/rpc/ai_calls_today", token, { method: "POST", body: "{}" });
  if (!total.ok) return res.status(500).json({ error: "quota" });
  if (Number(await total.json()) > APP_DAILY_LIMIT) return res.status(429).json({ error: "limit" });

  try {
    const client = new Anthropic();
    if (job.stream) {
      // The character's line is sent as it is written, so the conversation feels live. Plain text, no JSON.
      const stream = client.messages.stream({ model: CHAT_MODEL, max_tokens: 400, output_config: { effort: "low" }, system: job.system, messages: job.messages });
      let started = false;
      stream.on("text", (delta) => {
        if (!started) { started = true; res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store", "X-Accel-Buffering": "no" }); }
        res.write(delta);
      });
      try {
        const final = await stream.finalMessage();
        if (!started) return res.status(502).json({ error: final.stop_reason === "refusal" ? "no_answer" : "upstream" });
        return res.end();
      } catch (e) {
        if (!started) throw e;
        console.error("ai stream cut:", e && e.status, e && e.name);
        return res.end(); // the line stops where it is; the screen keeps what arrived
      }
    }
    const response = await client.messages.parse({
      model: body.kind === "debrief" ? CHAT_MODEL : MODEL,
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
