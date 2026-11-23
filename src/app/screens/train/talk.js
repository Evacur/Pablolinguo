// ---------- S'entraîner › Parler: a conversation with a character, in a real-life scene ----------
// state.TALK = {scene, lines:[{r:"a"|"u", t, fix}], busy, ended, err, phase:"chat"|"debrief", debrief, added}
// The character is played by /api/ai (kind "chat", streamed); the browser only sends the scene id and the lines.
import { S, state } from "../../data/state.js";
import { $, LANG, PACK, esc, lvl, themePic, today } from "../../data/packs.js";
import { FIX_MARK, MAX_TURNS, SCENES, sceneOf } from "../../../scenes.js";
import { markDay, write } from "../../data/writes.js";
import { micHtml } from "../../lib/voice.js";
import { renderTrainer } from "./exercise.js";

export const TALK_DONE={}; // lang -> {scene id: true} once its goal was reached (doc talks/<lang>)

export function talkList(){
  if(!state.SAMPLE) return UI.emptyState("La conversation n'est pas disponible", S.db? "Elle a besoin de l'IA, qui ne répond pas pour l'instant. Réessaie plus tard." : "Connecte-toi pour parler avec un personnage.", "sleepy");
  const done=TALK_DONE[LANG]||{};
  return `<p class="ex">Une scène de la vie réelle, un personnage qui te répond pour de vrai en ${esc(PACK.name.toLowerCase())}, et un but à atteindre. À la fin, ton bilan.</p>`
    + UI.list(SCENES.map(s=>UI.listRow({icon:themePic(s.theme,22), title:`<b>${esc(s.title)}</b>`, sub:esc(s.goal), trail:done[s.id]? UI.pill(`Réussie`, "good") : "", chevron:true, attrs:`data-talk="${s.id}"`})), {inset:true});
}

const turns=T=>T.lines.filter(l=>l.r==="u").length;
const payload=T=>({scene:T.scene.id, lang:LANG, level:lvl(), lines:T.lines.map(l=>({r:l.r, t:l.t}))});
function start(id){
  const scene=sceneOf(id); if(!scene || !state.SAMPLE) return;
  state.TALK={scene, lines:[], busy:false, ended:false, err:"", phase:"chat", debrief:null, added:{}};
  renderTrainer(); window.scrollTo(0,0); nextLine();
}
// Ask the character for its next line. The text arrives piece by piece and is shown as it comes.
async function nextLine(){
  const T=state.TALK; if(!T || T.busy) return;
  T.busy=true; T.err=""; paint();
  try{
    const full=await state.SAMPLE.chat(payload(T), txt=>{ if(state.TALK!==T) return; const b=$("talkLive"); if(b){ b.textContent=txt.split(FIX_MARK)[0].trim()||"…"; scrollDown(); } });
    if(state.TALK!==T) return;
    const [line, meta=""]=full.split(FIX_MARK); let fix=meta.trim(); const fin=/\bFIN\s*$/.test(fix); fix=fix.replace(/\s*FIN\s*$/, "").trim();
    if(!line.trim()) throw {code:"error"};
    const last=T.lines[T.lines.length-1];
    if(last && last.r==="u" && fix && !/^OK\b/i.test(fix)){ const [right, why=""]=fix.split("|"); if(right.trim()) last.fix={right:right.trim(), why:why.trim()}; }
    T.lines.push({r:"a", t:line.trim()});
    T.ended= fin || turns(T)>=MAX_TURNS;
  }catch(e){
    if(state.TALK!==T) return;
    if(e&&e.code==="not_granted") state.SAMPLE=null;
    T.err= e&&e.code==="rate_limited"? "Tu as atteint la limite de l'IA pour aujourd'hui. Ta conversation reprendra demain." : "Le personnage n'a pas répondu. Vérifie ta connexion et réessaie.";
  }
  T.busy=false;
  if(T.ended) renderTrainer(); else paint();
}
function send(text){
  const T=state.TALK; text=(text||"").trim().slice(0,500); if(!T || T.busy || T.ended || !text) return;
  if(T.err && T.lines.length && T.lines[T.lines.length-1].r==="u") T.lines.pop(); // the line that got no answer is replaced
  T.lines.push({r:"u", t:text}); const i=$("ans"); if(i) i.value="";
  nextLine();
}
async function finish(){
  const T=state.TALK; if(!T || T.busy) return;
  if(!turns(T)){ quit(); return; }
  if(T.lines[T.lines.length-1].r==="u") T.lines.pop(); // a line the character never answered is not judged
  T.phase="debrief"; T.busy=true; T.err=""; renderTrainer(); window.scrollTo(0,0);
  try{
    const r=await state.SAMPLE.debrief(payload(T)); if(state.TALK!==T) return;
    T.debrief={reached:!!r.reached, good:String(r.good||""), errors:(r.errors||[]).slice(0,3), words:(r.words||[]).slice(0,5)};
    if(T.debrief.reached){ const code=LANG; TALK_DONE[code]={...(TALK_DONE[code]||{}), [T.scene.id]:true}; if(S.db) write(()=>S.db.doc("talks/"+code).set({d:{...TALK_DONE[code]}})); }
    markDay(); // a conversation counts in the day
  }catch(e){
    if(state.TALK!==T) return;
    T.err= e&&e.code==="rate_limited"? "Tu as atteint la limite de l'IA pour aujourd'hui. Le bilan sera possible demain." : "Le bilan n'a pas pu être fait. Réessaie.";
  }
  T.busy=false; renderTrainer();
}
function quit(){ state.TALK=null; renderTrainer(); window.scrollTo(0,0); }

function scrollDown(){ const log=$("talkLog"); if(log) log.scrollTop=log.scrollHeight; }
const bubbleOf=l=> l.r==="u"? UI.bubble({who:"me", text:esc(l.t), fix:l.fix? {right:esc(l.fix.right), why:esc(l.fix.why)} : null})
  : UI.bubble({text:esc(l.t), attrs:state.TTS? `data-say="${esc(l.t)}" title="Écouter"` : ""});
// The lines and the state of the buttons, without touching the field: the keyboard stays open between two lines.
function paint(){
  const T=state.TALK, log=$("talkLog"); if(!T || !log) return;
  log.innerHTML=UI.chat([...T.lines.map(bubbleOf), T.busy? UI.bubble({text:`<span id="talkLive">…</span>`}) : ""])
    + (T.err? `<p class="ex" role="alert">${esc(T.err)} ${UI.mini(`Réessayer`, {attrs:`data-talkretry="1"`})}</p>` : "");
  scrollDown();
  const go=$("talkGo"), inp=$("ans"); if(go && inp) go.disabled=T.busy || !inp.value.trim();
  const end=$("talkEnd"); if(end) end.hidden=!turns(T);
  const n=$("talkN"); if(n) n.textContent=`${turns(T)}/${MAX_TURNS}`;
}
export function renderTalk(el){
  const T=state.TALK;
  const top=`<div class="ex-top"><button class="x" data-talkquit="1" aria-label="Quitter la conversation">✕</button><span class="talk-title">${esc(T.scene.title)}</span>${T.phase==="chat"?`<span class="num label" id="talkN">${turns(T)}/${MAX_TURNS}</span>`:""}</div>`;
  if(T.phase==="debrief"){ el.innerHTML=`<div class="rev">${top}${debriefHtml(T)}</div>`; return; }
  el.innerHTML=`<div class="rev talk">${top}<p class="talk-goal"><b>Ton but.</b> ${esc(T.scene.goal)}</p>
    <div class="talk-log" id="talkLog" aria-live="polite"></div>
    ${T.ended? UI.dock({main:UI.button(`Voir mon bilan`, {attrs:`data-talkend="1" id="talkDone"`})})
      : UI.dock({main:`<form class="answer-row" id="talkForm"><input id="ans" autocomplete="off" autocapitalize="sentences" spellcheck="false" enterkeyhint="send" maxlength="500" placeholder="${esc(PACK.placeholder)}" aria-label="Ta réponse">${micHtml("ans")}${UI.button(`Envoyer`, {attrs:`type="submit" id="talkGo" disabled`})}</form>`,
          alt:[UI.button(`Terminer et voir mon bilan`, {variant:"ghost", attrs:`data-talkend="1" id="talkEnd" hidden`})]})}</div>`;
  paint();
  const inp=$("ans"); if(inp){ inp.oninput=()=>{ $("talkGo").disabled=state.TALK.busy || !inp.value.trim(); }; inp.focus({preventScroll:true}); }
  else { const d=$("talkDone"); d&&d.focus({preventScroll:true}); }
}
function debriefHtml(T){
  if(T.busy) return UI.flashcard({tags:emo("think", 60), word:"Je relis ta conversation", body:`<p class="ex">Ton bilan arrive.</p>`});
  if(!T.debrief) return UI.flashcard({tags:emo("sad", 60), word:"Pas de bilan", body:`<p class="ex" role="alert">${esc(T.err)}</p>`})
    + UI.dock({main:UI.button(`Réessayer`, {attrs:`data-talkend="1"`}), alt:[UI.button(`Quitter`, {variant:"ghost", attrs:`data-talkquit="1"`})]});
  const d=T.debrief;
  return UI.card(`${UI.faceHead(d.reached?"party":"think", 60, `<div class="label">Bilan · ${esc(T.scene.title)}</div>`)}
      <div class="prompt">${d.reached? "Scène réussie" : "But pas encore atteint"}</div>
      <p class="ex" style="margin:0">${esc(d.good)}</p>`)
    + (d.errors.length? UI.panel(`<div class="talk-fixes">${d.errors.map(x=>`<div><del class="bad-w">${esc(x.wrong)}</del><br><b>${esc(x.right)}</b><br><span class="ex">${esc(x.why)}</span></div>`).join("")}</div>`, {title:"À corriger", aside:`<span class="label">${d.errors.length} sur cette scène</span>`})
        : UI.panel(`<p class="ex" style="margin:0">Aucune faute importante dans tes messages.</p>`, {title:"À corriger"}))
    + (d.words.length? `<div class="list-group"><span class="label">Mots utiles pour cette scène</span>${UI.words(d.words.map((w,i)=>UI.word({word:esc(w.en), sub:esc(w.fr), trail:T.added[i]? UI.pill(`Ajouté`, "good") : S.db? UI.mini(`Ajouter`, {attrs:`data-talkword="${i}"`}) : ""})))}</div>` : "")
    + UI.dock({main:UI.button(`Terminer`, {attrs:`data-talkquit="1"`}), alt:[UI.button(`Rejouer la scène`, {variant:"ghost", attrs:`data-talk="${T.scene.id}"`})]});
}
document.addEventListener("click", e=>{
  const st=e.target.closest("[data-talk]"); if(st){ start(st.dataset.talk); return; }
  if(e.target.closest("[data-talkquit]")){ quit(); return; }
  if(e.target.closest("[data-talkend]")){ finish(); return; }
  if(e.target.closest("[data-talkretry]")){ nextLine(); return; }
  const tw=e.target.closest("[data-talkword]"); if(tw && state.TALK && state.TALK.debrief){ const T=state.TALK, i=+tw.dataset.talkword, w=T.debrief.words[i]; if(!w || T.added[i]) return;
    T.added[i]=true; const entry={en:String(w.en).slice(0,80), fr:String(w.fr).slice(0,80), tip:"", example:"", lang:LANG, added:today()};
    write(()=>S.db.collection("mywords").add(entry)); renderTrainer(); }
});
document.addEventListener("submit", e=>{ if(e.target.id==="talkForm"){ e.preventDefault(); send($("ans").value); } });
