// Makes the Google voice files the app plays (public/audio/<lang>/<key>.mp3, key: src/app/lib/audio-key.js).
// Every text the app reads aloud: words, exercise answers, lesson examples, situations, listening lines.
// Only the missing files are made, so rerun it after adding content. Voice chosen by Pi on 2026-11-23: Chirp 3 HD Aoede.
//   GOOGLE_TTS_KEY=… NODE_USE_ENV_PROXY=1 node scripts/tts.js          (the key lives in the cloud environment, never in the repo)
//   node scripts/tts.js --dry                                           (counts the characters, calls nothing)
// Price: the first million characters a month are free, then $30 per million (cloud.google.com/text-to-speech/pricing).
import { readFileSync, existsSync, mkdirSync, writeFileSync, readdirSync, unlinkSync } from "node:fs";
import vm from "node:vm";
import { audioKey } from "../src/app/lib/audio-key.js";

const VOICE = { en: "en-US-Chirp3-HD-Aoede", es: "es-ES-Chirp3-HD-Aoede" };
const dry = process.argv.includes("--dry"), prune = process.argv.includes("--prune");

export function textsOf(code) {
  const ctx = { window: { PACKS: {}, LISTEN: {} } }; ctx.window.window = ctx.window; vm.createContext(ctx);
  const W = ctx.window;
  vm.runInContext(readFileSync("public/lang/index.js", "utf8").replace(/\(function \(\) \{[\s\S]*$/, ""), ctx);
  W.LANGS.find((l) => l.code === code).files.forEach((f) => vm.runInContext(readFileSync("public/lang/" + f, "utf8"), ctx));
  const P = W.PACKS[code], T = new Set();
  Object.values(P.words).forEach((a) => a.forEach((w) => T.add(w[0])));
  // same as itemAnswer in src/app/screens/train/exercise.js
  const ans = (it) => it.t === "qcm" ? it.s.replace("___", it.o[it.a]) : it.t === "gap" ? it.s.replace("___", it.a[0]) : it.t === "match" ? "" : Array.isArray(it.a) ? it.a[0] : "";
  const walk = (o) => { if (Array.isArray(o)) return o.forEach(walk);
    if (o && typeof o === "object") { if (typeof o.t === "string" && "fr" in o && "a" in o) { const t = ans(o); if (typeof t === "string") T.add(t); return; } Object.values(o).forEach(walk); } };
  walk(P.bank); walk(P.boss);
  (P.skills || []).forEach((s) => { const les = (P.lessons || {})[s.id];
    if (les) (les.ex || []).forEach((r) => T.add(r[0])); else (s.q || []).slice(0, 3).forEach(([, a]) => a && T.add(a[0])); });
  (P.cours || []).forEach((c) => { (c.ph || []).forEach((r) => T.add(r[0])); (c.task || []).forEach((r) => T.add(r[1]));
    if (c.dia && c.dia.length) T.add(c.dia.map((d) => d[1]).join(" ")); });
  (W.LISTEN[code] || []).forEach((it) => it.media && it.media.lines && it.media.lines.forEach(([, t]) => T.add(t)));
  return [...T].map((t) => (typeof t === "string" ? t.trim() : "")).filter(Boolean);
}

async function synth(code, text) {
  const body = { input: { text }, voice: { languageCode: VOICE[code].slice(0, 5), name: VOICE[code] }, audioConfig: { audioEncoding: "MP3" } };
  for (let a = 0; a < 8; a++) {
    const r = await fetch("https://texttospeech.googleapis.com/v1/text:synthesize", {
      method: "POST", headers: { "Content-Type": "application/json", "X-Goog-Api-Key": process.env.GOOGLE_TTS_KEY }, body: JSON.stringify(body) }).catch(() => null);
    if (r && r.ok) return Buffer.from((await r.json()).audioContent, "base64");
    if (r && ![429, 500, 503].includes(r.status)) throw new Error(`Google ${r.status} for « ${text} »`);
    await new Promise((ok) => setTimeout(ok, 1000 * 2 ** a));
  }
  throw new Error(`Google keeps refusing « ${text} »`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  if (!dry && !process.env.GOOGLE_TTS_KEY) throw new Error("GOOGLE_TTS_KEY is not set");
  for (const code of Object.keys(VOICE)) {
    const dir = `public/audio/${code}`; mkdirSync(dir, { recursive: true });
    const texts = [...new Set(textsOf(code))];
    const todo = texts.filter((t) => !existsSync(`${dir}/${audioKey(t)}.mp3`));
    const chars = todo.reduce((n, t) => n + t.length, 0);
    console.log(`${code}: ${texts.length} texts, ${todo.length} to make (${chars} characters)`);
    if (prune) { const keep = new Set(texts.map((t) => audioKey(t) + ".mp3"));
      readdirSync(dir).filter((f) => !keep.has(f)).forEach((f) => { unlinkSync(`${dir}/${f}`); console.log("removed", f); }); }
    if (dry) continue;
    let i = 0, done = 0;
    const worker = async () => { while (i < todo.length) { const t = todo[i++]; writeFileSync(`${dir}/${audioKey(t)}.mp3`, await synth(code, t));
      if (++done % 200 === 0) console.log(`${code}: ${done}/${todo.length}`); } };
    await Promise.all(Array.from({ length: 6 }, worker));
  }
}
