// Browser runtime: sign-in screen, then hands the dashboard (public/index.html)
// a per-account document store, voice output, dictation and the AI teacher.
import { createClient } from "@supabase/supabase-js";
import { SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY } from "./config.js";
import { createStore } from "./store.js";

const sb = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
const $ = (id) => document.getElementById(id);

// ---------- Voice output (browser speech synthesis) ----------
function makeTts() {
  if (!("speechSynthesis" in window)) return null;
  const pickVoice = (lang) => {
    const vs = speechSynthesis.getVoices();
    const base = lang.slice(0, 2);
    return vs.find((v) => v.lang === lang) || vs.find((v) => v.lang && v.lang.startsWith(base)) || null;
  };
  const one = (text, lang, rate) =>
    new Promise((resolve, reject) => {
      const u = new SpeechSynthesisUtterance(text);
      u.lang = lang === "en" ? "en-GB" : lang === "es" ? "es-ES" : lang;
      const v = pickVoice(lang);
      if (v) u.voice = v;
      u.rate = rate || 0.9;
      u.onend = () => resolve();
      u.onerror = (e) => reject(e);
      speechSynthesis.speak(u);
    });
  return {
    async speak(input, opts = {}) {
      speechSynthesis.cancel();
      const lines = Array.isArray(input) ? input : [{ text: String(input), language: opts.language, rate: opts.rate }];
      for (const l of lines) await one(l.text, l.language || "en", l.rate);
    },
  };
}

// ---------- Dictation (browser speech recognition, Chrome / Safari) ----------
function makeDictation() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) return null;
  const cbs = { state: [], partial: [], final: [] };
  let rec = null;
  const emit = (k, v) => cbs[k].forEach((f) => f(v));
  return {
    async start(lang = "en-US") {
      rec = new SR();
      rec.lang = lang;
      rec.interimResults = true;
      rec.continuous = false;
      rec.onstart = () => emit("state", { state: "listening" });
      rec.onend = () => emit("state", { state: "idle" });
      rec.onerror = () => emit("state", { state: "idle" });
      rec.onresult = (e) => {
        let text = "";
        let final = false;
        for (let i = e.resultIndex; i < e.results.length; i++) {
          text += e.results[i][0].transcript;
          if (e.results[i].isFinal) final = true;
        }
        emit(final ? "final" : "partial", { text });
      };
      rec.start();
    },
    async stop() {
      if (rec) rec.stop();
    },
    onState: (f) => cbs.state.push(f),
    onPartial: (f) => cbs.partial.push(f),
    onFinal: (f) => cbs.final.push(f),
  };
}

// ---------- AI teacher (server route /api/ai, prompts built server-side) ----------
async function makeAi() {
  try {
    const r = await fetch("/api/ai");
    if (!r.ok || !(await r.json()).enabled) return null;
  } catch {
    // No server route (static preview): the app falls back to exact-match checking.
    return null;
  }
  const call = async (body) => {
    const { data } = await sb.auth.getSession();
    const token = data.session && data.session.access_token;
    const r = await fetch("/api/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: "Bearer " + token },
      body: JSON.stringify(body),
    });
    if (r.status === 429) throw { code: "rate_limited" };
    if (r.status === 501) throw { code: "not_granted" };
    if (!r.ok) throw { code: "error" };
    return r.json();
  };
  return {
    word: (text, lang) => call({ kind: "word", text, lang }),
    correct: (p) => call({ kind: "correct", ...p }),
  };
}

// ---------- Sign-in screen ----------
const CSS = `
.auth{position:fixed;inset:0;z-index:100;background:var(--bg);display:grid;place-items:center;padding:24px 16px;overflow:auto}
.auth-box{width:min(380px,100%);display:flex;flex-direction:column;gap:14px}
.auth-box h1{font-family:var(--f-display);font-stretch:125%;font-weight:800;font-size:30px;letter-spacing:-.02em;text-transform:uppercase;margin:0}
.auth-box p{margin:0;color:var(--muted)}
.auth-box form{display:flex;flex-direction:column;gap:10px;margin-top:6px}
.auth-box label{display:flex;flex-direction:column;gap:5px;font-size:12px;color:var(--muted)}
.auth-box input{font:inherit;font-size:15px;border:1px solid var(--line);border-radius:10px;background:var(--surface);color:var(--fg);padding:11px 13px}
.auth-box input:focus{outline:0;border-color:var(--fg)}
.auth-box .auth-legal{font-size:12px}
.auth-msg{font-size:13px;min-height:1.2em}
.auth-msg.err{color:var(--bad)}
.auth-switch{background:none;border:0;padding:0;color:var(--fg);text-decoration:underline;text-underline-offset:3px;font-size:13px;align-self:flex-start}
.chip.out{cursor:pointer}
`;

function authScreen() {
  const st = document.createElement("style");
  st.textContent = CSS;
  document.head.appendChild(st);
  const el = document.createElement("div");
  el.className = "auth";
  el.id = "auth";
  document.body.appendChild(el);
  let mode = "in";
  const draw = (msg = "", err = false) => {
    el.innerHTML = `<div class="auth-box">
      <h1>Pablolinguo</h1>
      <p class="serif">Ta route vers le B2 en anglais.</p>
      <p>${mode === "in" ? "Connecte-toi pour retrouver ta progression." : "Crée ton compte : ta progression, tes mots et tes notes restent à toi."}</p>
      <form id="authForm">
        ${mode === "up" ? '<label>Prénom<input id="aName" autocomplete="given-name" maxlength="40" required></label>' : ""}
        <label>Email<input id="aEmail" type="email" autocomplete="email" required></label>
        <label>Mot de passe<input id="aPass" type="password" minlength="8" autocomplete="${mode === "in" ? "current-password" : "new-password"}" required></label>
        <button class="btn" type="submit" id="aGo">${mode === "in" ? "Se connecter" : "Créer mon compte"}</button>
      </form>
      <div class="auth-msg ${err ? "err" : ""}" role="status">${msg}</div>
      <button class="auth-switch" id="aSwitch" type="button">${mode === "in" ? "Pas encore de compte ? Créer un compte" : "Déjà un compte ? Se connecter"}</button>
      <p class="auth-legal">${mode === "up" ? "En créant un compte, tu acceptes que ta progression soit enregistrée pour toi seul. " : ""}<a href="/confidentialite.html">Confidentialité</a></p>
    </div>`;
    $("aSwitch").onclick = () => {
      mode = mode === "in" ? "up" : "in";
      draw();
    };
    $("authForm").onsubmit = async (e) => {
      e.preventDefault();
      const email = $("aEmail").value.trim();
      const password = $("aPass").value;
      $("aGo").disabled = true;
      if (mode === "in") {
        const { error } = await sb.auth.signInWithPassword({ email, password });
        if (error) draw(error.message.includes("not confirmed") ? "Confirme d'abord ton email avec le lien reçu." : "Email ou mot de passe incorrect.", true);
      } else {
        const name = $("aName").value.trim().slice(0, 40);
        const { data, error } = await sb.auth.signUp({
          email,
          password,
          options: { data: { name }, emailRedirectTo: location.origin },
        });
        if (error) draw(error.message.includes("registered") ? "Ce mail a déjà un compte. Connecte-toi." : "Création impossible : " + error.message, true);
        else if (!data.session) {
          mode = "in";
          draw("C'est presque fini : clique sur le lien reçu par email, puis connecte-toi.");
        }
      }
    };
  };
  draw();
  return el;
}

// ---------- Boot ----------
let started = false;
async function start(session) {
  if (started) return;
  started = true;
  const auth = $("auth");
  if (auth) auth.remove();
  const user = session.user;
  const db = await createStore(sb, user.id);
  const chips = document.querySelector(".chips");
  if (chips) {
    const out = document.createElement("button");
    out.className = "chip out";
    out.type = "button";
    out.textContent = "Se déconnecter";
    out.onclick = async () => {
      await sb.auth.signOut();
      location.reload();
    };
    chips.appendChild(out);
  }
  window.__plResolve({
    db,
    name: (user.user_metadata && user.user_metadata.name) || "",
    tts: makeTts(),
    dictation: makeDictation(),
    ai: await makeAi(),
    // Deletes the account and, through the database's cascades, all its data. Then signs out.
    async deleteAccount() {
      const { error } = await sb.rpc("delete_my_account");
      if (error) throw error;
      await sb.auth.signOut();
    },
  });
}

const { data } = await sb.auth.getSession();
if (data.session) start(data.session);
else authScreen();
sb.auth.onAuthStateChange((event, session) => {
  if (session && (event === "SIGNED_IN" || event === "INITIAL_SESSION")) start(session);
});
