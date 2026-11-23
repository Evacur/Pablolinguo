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
    stop() {
      speechSynthesis.cancel();
    },
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
.auth{position:fixed;inset:0;z-index:100;background:var(--bg);display:grid;place-items:center;padding:max(24px,env(safe-area-inset-top,0px)) 16px 24px;overflow:auto}
.auth-box{width:min(400px,100%);display:flex;flex-direction:column;gap:16px}
.auth-hero{display:flex;flex-direction:column;align-items:center;text-align:center;gap:10px;padding:8px 0 4px}
.auth-face{width:96px;height:96px;border-radius:28px;background:#FFE7A3;display:grid;place-items:center;animation:authBob 3.2s ease-in-out infinite}
@keyframes authBob{0%,100%{transform:translateY(0) rotate(-2deg)}50%{transform:translateY(-6px) rotate(2deg)}}
@media (prefers-reduced-motion:reduce){.auth-face{animation:none}}
.auth-box h1{font-family:var(--f-title,serif);font-weight:400;font-size:52px;letter-spacing:-.025em;line-height:.95;margin:0}
.auth-tag{font-family:var(--f-serif,serif);font-style:italic;font-size:19px;color:var(--muted);margin:0}
.auth-faces{display:flex;justify-content:center;gap:6px;opacity:.9}
.auth-card{background:var(--surface);border:1px solid var(--line);border-radius:20px;padding:18px;display:flex;flex-direction:column;gap:12px}
.auth-tabs{display:grid;grid-template-columns:1fr 1fr;gap:2px;background:var(--sunk);padding:3px;border-radius:12px}
.auth-tabs button{border:0;background:none;border-radius:9px;min-height:40px;font:inherit;font-size:14px;font-weight:500;color:var(--muted);cursor:pointer}
.auth-tabs button[aria-pressed="true"]{background:var(--surface);color:var(--fg);box-shadow:var(--shadow)}
.auth-box form{display:flex;flex-direction:column;gap:10px}
.auth-box label{display:flex;flex-direction:column;gap:5px;font-size:12px;color:var(--muted)}
.auth-box input{font:inherit;font-size:16px;border:1px solid var(--line);border-radius:12px;background:var(--bg);color:var(--fg);padding:12px 13px;min-height:46px}
.auth-box input:focus{outline:0;border-color:var(--fg)}
.auth-box .btn{margin-top:4px}
.auth-msg{font-size:13px;min-height:1.2em;color:var(--muted);margin:0}
.auth-msg.err{color:var(--bad)}
.auth-link{background:none;border:0;padding:6px 0;color:var(--fg);text-decoration:underline;text-underline-offset:3px;font:inherit;font-size:13px;align-self:flex-start;cursor:pointer;min-height:32px}
.auth-legal{font-size:12px;color:var(--muted);text-align:center;margin:0}
.auth-legal a{color:inherit}
`;

const face = (type, size) => (typeof window.emo === "function" ? window.emo(type, size) : "");

function authScreen() {
  const st = document.createElement("style");
  st.textContent = CSS;
  document.head.appendChild(st);
  const el = document.createElement("div");
  el.className = "auth";
  el.id = "auth";
  document.body.appendChild(el);
  let mode = "in"; // in | up | forgot
  const draw = (msg = "", err = false, mood = null) => {
    const m = mood || (err ? "sad" : mode === "up" ? "party" : mode === "forgot" ? "think" : "grin");
    const lead = { in: "Content de te revoir. Connecte-toi pour reprendre où tu en étais.", up: "Crée ton compte : ta progression et tes mots restent à toi.", forgot: "Indique ton email : tu recevras un lien pour choisir un nouveau mot de passe." }[mode];
    el.innerHTML = `<div class="auth-box">
      <div class="auth-hero">
        <div class="auth-face" aria-hidden="true">${face(m, 60)}</div>
        <h1>Pablolinguo</h1>
        <p class="auth-tag">Un peu d'anglais ou d'espagnol, chaque jour.</p>
      </div>
      <div class="auth-card">
        ${mode === "forgot" ? "" : `<div class="auth-tabs" role="group" aria-label="Connexion ou inscription"><button type="button" data-mode="in" aria-pressed="${mode === "in"}">Se connecter</button><button type="button" data-mode="up" aria-pressed="${mode === "up"}">Créer un compte</button></div>`}
        <p class="auth-msg">${lead}</p>
        <form id="authForm">
          ${mode === "up" ? '<label>Prénom<input id="aName" autocomplete="given-name" maxlength="40" required></label>' : ""}
          <label>Email<input id="aEmail" type="email" autocomplete="email" required></label>
          ${mode === "forgot" ? "" : `<label>Mot de passe<input id="aPass" type="password" minlength="8" autocomplete="${mode === "in" ? "current-password" : "new-password"}" required></label>`}
          <button class="btn" type="submit" id="aGo">${{ in: "Se connecter", up: "Créer mon compte", forgot: "Recevoir le lien" }[mode]}</button>
        </form>
        <p class="auth-msg ${err ? "err" : ""}" role="status">${msg}</p>
        ${mode === "in" ? '<button class="auth-link" type="button" data-mode="forgot">Mot de passe oublié ?</button>' : ""}
        ${mode === "forgot" ? '<button class="auth-link" type="button" data-mode="in">Retour à la connexion</button>' : ""}
      </div>
      <div class="auth-faces" aria-hidden="true">${["wink", "cool", "wow", "think", "party"].map((t) => face(t, 30)).join("")}</div>
      <p class="auth-legal">${mode === "up" ? "En créant un compte, tu acceptes que ta progression soit enregistrée pour toi seul. " : ""}<a href="/confidentialite.html">Confidentialité</a></p>
    </div>`;
    el.querySelectorAll("[data-mode]").forEach((b) => {
      b.onclick = () => {
        mode = b.dataset.mode;
        draw();
      };
    });
    $("authForm").onsubmit = async (e) => {
      e.preventDefault();
      const email = $("aEmail").value.trim();
      $("aGo").disabled = true;
      if (mode === "forgot") {
        const { error } = await sb.auth.resetPasswordForEmail(email, { redirectTo: location.origin });
        if (error) draw("Envoi impossible pour l'instant. Réessaie dans un moment.", true);
        else draw("C'est envoyé. Ouvre le lien reçu par email pour choisir ton nouveau mot de passe.", false, "wink");
        return;
      }
      const password = $("aPass").value;
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
          draw("C'est presque fini : clique sur le lien reçu par email, puis connecte-toi.", false, "party");
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
  // Back in the foreground: take what another device saved meanwhile. Offline, the next return tries again.
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") db.refresh().catch(() => {});
  });
  window.__plResolve({
    db,
    name: (user.user_metadata && user.user_metadata.name) || "",
    email: user.email || "",
    recovering,
    tts: makeTts(),
    dictation: makeDictation(),
    ai: await makeAi(),
    async signOut() {
      await sb.auth.signOut();
      location.reload();
    },
    async changePassword(password) {
      const { error } = await sb.auth.updateUser({ password });
      if (error) throw error;
    },
    // Deletes the account and, through the database's cascades, all its data. Then signs out.
    async deleteAccount() {
      const { error } = await sb.rpc("delete_my_account");
      if (error) throw error;
      await sb.auth.signOut();
    },
  });
}

// A password-reset link signs the person in: the app then opens the profile on the new-password field.
let recovering = /type=recovery/.test(location.hash + location.search);
const { data } = await sb.auth.getSession();
if (data.session) start(data.session);
else authScreen();
sb.auth.onAuthStateChange((event, session) => {
  if (event === "PASSWORD_RECOVERY") {
    recovering = true;
    window.dispatchEvent(new Event("pl-recovery"));
  }
  if (session && (event === "SIGNED_IN" || event === "INITIAL_SESSION")) start(session);
});
