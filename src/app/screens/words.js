// ---------- Words, tips, sites ----------
// ---------- Words, tips, sites ----------
import { PROG_BY, S, state } from "../data/state.js";
import { cheer } from "../lib/cheer.js";
import { norm, ruLat, ruLoose } from "../lib/answers.js";
import { $, ALLW, FAUX, LANG, PACK, THEMES, TIPS, W, esc, saveProg, srsPath, today } from "../data/packs.js";
import { write } from "../data/writes.js";
import { renderQuests, renderTopStats } from "./home.js";
import { kbAttr, kbHtml } from "../components/russian-keyboard.js";
import { shuffle } from "./train/trainer.js";
const DAY0 = new Date("2026-10-21T12:00:00");
export function themeOf(dateStr){ const n=Math.round((new Date(dateStr+"T12:00:00")-DAY0)/86400000); return {theme:THEMES[((n%12)+12)%12], cycle:Math.floor(n/12)}; }
function todaysWords(){ const {theme,cycle}=themeOf(today()); const list=W[theme]; const start=(cycle%2)*5; return {theme, words:list.slice(start,start+5)}; }
// ---- More words (merged into W) ----

// ---- Spaced repetition ----
const INTERVALS = [0,1,3,7,14,30]; // days to wait after reaching box b
export const wkey = en => (LANG==="en"? en : LANG==="ru"? ruLat(en) : en.normalize("NFD").replace(/[\u0300-\u036f]/g,"")).toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"").slice(0,60) || "w";
function allWords(){ const o={...ALLW}; state.MY.forEach(m=>{ const k=wkey(m.en); o[k]={en:m.en,fr:m.fr,tip:m.tip||"",ex:m.example||"",theme:"Mes mots",mine:m.id}; }); return o; }
const addDays=(d,n)=>{ const x=new Date(d+"T12:00:00"); x.setDate(x.getDate()+n); return x.toLocaleDateString("en-CA"); };
  export const SRS_BY = {}, SRS_LOADED = {};
 
 // review session: {queue:[keys], cur, phase, given, ok, extraNew}
const boxOf = k => (state.SRS[k] && state.SRS[k].b) || 0;
function buildQueue(extraNew=0){
  const all=allWords(); const t=today();
  const due=Object.keys(state.SRS).filter(k=>all[k] && state.SRS[k].due<=t).sort((a,b)=>(state.SRS[a].due+boxOf(a)).localeCompare(state.SRS[b].due+boxOf(b)));
  const {theme}=themeOf(t);
  const fresh=Object.keys(all).filter(k=>!state.SRS[k]);
  const mine=fresh.filter(k=>all[k].mine);
  const ofTheme=fresh.filter(k=>all[k].theme===theme && !all[k].mine);
  const others=shuffle(fresh.filter(k=>all[k].theme!==theme && !all[k].mine));
  const newOnes=[...mine, ...ofTheme, ...others].slice(0, 5+extraNew);
  return shuffle(due.slice(0,25)).concat(newOnes);
}
function startReview(extra=0){ state.VQ={queue:buildQueue(extra), phase:"ask", given:"", extra, done:0, right:0}; renderReview(); }
function renderReview(){
  const el=$("review"); if(!el) return; const all=allWords();
  const dueN=Object.keys(state.SRS).filter(k=>all[k] && state.SRS[k].due<=today()).length;
  const learned=Object.keys(state.SRS).filter(k=>all[k] && state.SRS[k].b>=3).length;
  $("vStats").textContent=`${dueN} à revoir · ${learned}/${Object.keys(all).length} appris`;
  if(!state.VQ) startReview();
  if(!state.VQ.queue.length){
    el.innerHTML=UI.card(`${UI.faceHead(state.VQ.done&&state.VQ.right===state.VQ.done?"party":"wink", 60, `<div class="label">Révision terminée</div>`)}<div class="prompt">${state.VQ.done? state.VQ.right+"/"+state.VQ.done+" justes":"Rien à revoir pour l'instant"}</div>
      <p class="ex" style="margin:0">Les mots ratés reviendront demain. Les mots réussis reviendront plus tard : 1 jour, puis 3, 7, 14 et 30 jours.</p>
      <div class="row">${UI.button(`5 nouveaux mots`, {attrs:`data-vmore="1"`})}</div>`); return;
  }
  const k=state.VQ.queue[0]; const w=all[k]; const b=boxOf(k); const isNew=!state.SRS[k];
  let html=`<div class="row" style="justify-content:space-between"><span class="row">${UI.pill(isNew?"Nouveau":"Révision", isNew?"warn":"good")}<span class="label">${esc(w.theme)}</span></span>
    ${UI.meter(b, 5, `Niveau ${b} sur 5`)}</div>
    <div class="prompt">${esc(w.fr)}</div>`;
  if(state.VQ.phase==="ask"){
    html+=`<form class="answer-row" id="vForm"><input id="vIn" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${esc(PACK.placeholder)}" aria-label="Traduction"${kbAttr()}>${UI.button(`Vérifier`, {attrs:`type="submit"`})}</form>${kbHtml("vIn")}
      <div class="row">${UI.button(`Je sèche`, {variant:"ghost", attrs:`data-vgive="1"`})}${UI.button(`Changer de mot`, {variant:"ghost", attrs:`data-vskip="1"`})}<span class="ex">${state.VQ.queue.length} carte${state.VQ.queue.length>1?"s":""} restante${state.VQ.queue.length>1?"s":""}</span></div>`;
  } else {
    html+=UI.feedback(state.VQ.ok?"ok":"ko", state.VQ.ok?"Juste !":state.VQ.given?"Pas tout à fait":"La réponse", `
      ${state.VQ.given&&!state.VQ.ok?`<span>Toi : ${diffHtml(state.VQ.given, w.en).mine}</span>`:""}
      <span class="ans">${state.VQ.ok?esc(w.en):diffHtml(state.VQ.given||"", w.en).right}</span>
      ${w.tip?`<span class="ex">${pic("bulb",14)} ${esc(w.tip)}</span>`:""}${w.ex?`<span class="ex"><i>${esc(w.ex)}</i></span>`:""}
      <span class="ex">${state.VQ.ok?`Il reviendra dans ${INTERVALS[boxOf(k)]} jour${INTERVALS[boxOf(k)]>1?"s":""}.`:"Il revient un peu plus tard dans cette série, puis demain."}</span>`, {face:state.VQ.ok?(boxOf(k)>=3?"cool":"grin"):state.VQ.given?"sad":"wink"})+`
      <div class="row">${UI.button(`Suivant`, {attrs:`data-vnext="1" id="vNext"`})}${UI.button(`${pic("speaker",16)} Écouter`, {variant:"ghost", attrs:`data-say="${esc(w.en)}" data-ex="${esc(w.ex)}" ${state.TTS?"":"hidden"}`})}</div>`;
  }
  el.innerHTML=UI.card(html);
  if(state.VQ.phase==="ask"){ const i=$("vIn"); i&&i.focus({preventScroll:true}); } else { const n=$("vNext"); n&&n.focus({preventScroll:true}); }
}
function answerWord(given){
  const k=state.VQ.queue[0]; const w=allWords()[k]; given=(given||"").trim();
  const ok = !!given && (wnorm(given)===wnorm(w.en) || (LANG==="ru" && /[a-z]/i.test(given) && ruLoose(given)===ruLoose(w.en)));
  state.VQ.ok=ok; state.VQ.given=given; state.VQ.phase="show"; state.VQ.done++; if(ok) state.VQ.right++;
  const cur=Object.assign({b:0,ok:0,ko:0}, state.SRS[k]||{});
  if(ok){ cur.b=Math.min(5,cur.b+1); cur.ok++; cur.due=addDays(today(), INTERVALS[cur.b]); }
  else { cur.b=0; cur.ko++; cur.due=today(); }
  state.SRS={...state.SRS,[k]:cur}; say(w.en, w.ex); cheer(ok);
  write(async()=>{ const ref=S.db.doc(srsPath()); if(state.srsLoaded) await ref.update({w:{[k]:cur}}); else { await ref.set({w:state.SRS}); state.srsLoaded=true; } });
  bumpReviews(ok);
  renderReview();
}
function bumpReviews(ok){
  const kd=today(); const days=S.progress.days||{}; const d=Object.assign({q:[],xp:0,wv:0}, days[kd]||{});
  d.wv=(d.wv||0)+1; const gain=ok?3:1; d.xp=(d.xp||0)+gain; let total=(S.progress.xp||0)+gain;
  if(d.wv>=10 && !d.q.includes("words")){ d.q=[...d.q,"words"]; d.xp+=15; total+=15; toast("party","Mission mots accomplie","10 mots révisés, +15 XP"); }
  S.progress={...S.progress, xp:total, days:{...days,[kd]:d}}; PROG_BY[LANG]=S.progress; saveProg(kd, d);
  renderQuests(); renderTopStats(total);
}
function nextCard(){ const k=state.VQ.queue.shift(); if(!state.VQ.ok){ state.VQ.queue.splice(Math.min(3,state.VQ.queue.length),0,k); } state.VQ.phase="ask"; state.VQ.given=""; renderReview(); }
function skipCard(){ const k=state.VQ.queue.shift(); state.VQ.queue.push(k); renderReview(); }
const wnorm = s => LANG==="en"? norm(s, LANG).replace(/^to /,"").replace(/^(a|an|the) /,"") : LANG==="ru"? norm(s, LANG) : norm(s, LANG).replace(/^(el|la|los|las|un|una|unos|unas) /,"");
export function say(word, ex){ if(!state.TTS) return; const lines=[{text:word, language:PACK.tts, rate:.85}]; if(ex) lines.push({text:ex, language:PACK.tts, rate:.9}); state.TTS.speak(lines).catch(()=>{}); }

// word-level diff: returns {mine, right} html with wrong words struck and missing words marked
export function diffHtml(given, right){
  const a=given.split(/\s+/).filter(Boolean), b=right.split(/\s+/).filter(Boolean);
  const k=x=>norm(x, LANG);
  const n=a.length, m=b.length; const L=Array.from({length:n+1},()=>Array(m+1).fill(0));
  for(let i=n-1;i>=0;i--) for(let j=m-1;j>=0;j--) L[i][j]= k(a[i])===k(b[j])? L[i+1][j+1]+1 : Math.max(L[i+1][j],L[i][j+1]);
  const ina=new Set(), inb=new Set(); let i=0,j=0;
  while(i<n&&j<m){ if(k(a[i])===k(b[j])){ina.add(i);inb.add(j);i++;j++;} else if(L[i+1][j]>=L[i][j+1]) i++; else j++; }
  return { mine:a.map((w,x)=>ina.has(x)?esc(w):`<del class="bad-w">${esc(w)}</del>`).join(" ") || "–",
           right:b.map((w,x)=>inb.has(x)||!given?esc(w):`<mark class="add-w">${esc(w)}</mark>`).join(" ") };
}

// ---- Browse grid + my words ----
 const revealed = new Set();
function browseCard(k,w){
  const b=boxOf(k); const open=revealed.has(k);
  return `<div class="wcard ${b>=3?"known":""}">${w.mine?`${UI.mini(`×`, {attrs:`style="align-self:flex-end;padding:var(--sp-0-5) var(--sp-2)" data-wdel="${esc(w.mine)}" aria-label="Supprimer"`})}`:""}
   <span class="fr">${esc(w.fr)}</span>${open?`<span class="en">${esc(w.en)}</span>${w.tip?`<span class="tip">${esc(w.tip)}</span>`:""}${w.ex?`<span class="tip"><i>${esc(w.ex)}</i></span>`:""}`:`<span class="en hide">${esc(w.en)}</span>`}
   <div class="row">${open?`${UI.mini(`${pic("speaker",16)}`, {attrs:`aria-label="Écouter" data-say="${esc(w.en)}" data-ex="${esc(w.ex)}" ${state.TTS?"":"hidden"}`})}`:`${UI.mini(`Voir`, {attrs:`data-wshow="${k}"`})}`}
   ${UI.meter(b, 5, `Niveau ${b} sur 5`)}</div></div>`;
}
export async function addMyWord(){
  const inp=$("myWord"), msg=$("myMsg"), btn=$("myAdd"); const v=inp.value.trim(); if(!v) { inp.focus(); return; }
  if(!S.db){ msg.textContent="Connecte-toi pour enregistrer tes mots."; return; }
  let entry=null;
  const manual=v.split("=").map(x=>x.trim());
  if(manual.length===2 && manual[0] && manual[1]) entry={en:manual[0], fr:manual[1], tip:"", example:""};
  if(state.SAMPLE){
    btn.disabled=true; msg.textContent="L'IA prépare ta carte…";
    try{
      const r=await state.SAMPLE.word(v.slice(0,120), LANG);
      if(r && r.en && r.fr) entry={en:String(r.en).slice(0,80), fr:String(r.fr).slice(0,80), tip:String(r.tip||"").slice(0,160), example:String(r.example||"").slice(0,160)};
    }catch(e){ if(e&&e.code==="not_granted"){ state.SAMPLE=null; renderMyBox(); } if(!entry){ msg.textContent= e&&e.code==="rate_limited" ? "L'IA est très demandée, réessaie dans un moment." : `L'IA n'a pas pu répondre. Écris « mot en ${PACK.name.toLowerCase()} = mot français ».`; btn.disabled=false; return; } }
    btn.disabled=false;
  }
  if(!entry){ msg.textContent="Écris-le comme ça : deadline = échéance"; return; }
  inp.value=""; msg.textContent="Ajouté : "+entry.en+" = "+entry.fr+". Il arrive dans ta révision.";
  write(()=>S.db.collection("mywords").add({...entry, lang:LANG, added:today()}));
}
export function renderMyBox(){ const hint=$("myHint"); if(hint) hint.textContent = state.SAMPLE? `Tape un mot en français ou en ${PACK.name.toLowerCase()} : l'IA trouve la traduction, une astuce et un exemple, puis la voix te le dit.` : `Écris-le comme ça : ${LANG==="es"?"la fecha límite":"deadline"} = échéance`; }
export function renderMyWords(){
  const el=$("myWords"); if(!el) return;
  el.innerHTML = state.MY.length? state.MY.map(m=>browseCard(wkey(m.en), {en:m.en,fr:m.fr,tip:m.tip||"",ex:m.example||"",mine:m.id})).join("") : `<p class="ex" style="margin:0;grid-column:1/-1">Tes mots à toi apparaîtront ici, et dans ta révision.</p>`;
  $("myCount").textContent = state.MY.length? state.MY.length+" mot"+(state.MY.length>1?"s":"") : ""; $("myFold").hidden=!state.MY.length;
}
document.addEventListener("click", e=>{
  if(e.target.closest("[data-vgive]")){ answerWord(""); return; }
  if(e.target.closest("[data-vskip]")){ skipCard(); return; }
  if(e.target.closest("[data-vnext]")){ nextCard(); return; }
  if(e.target.closest("[data-vmore]")){ startReview(((state.VQ&&state.VQ.extra)||0)+5); return; }
  const ws=e.target.closest("[data-wshow]"); if(ws){ revealed.add(ws.dataset.wshow); renderWords(); return; }
});
document.addEventListener("submit", e=>{ if(e.target.id==="vForm"){ e.preventDefault(); answerWord($("vIn").value); } });
export function renderWords(){
  const {theme}=themeOf(today());
  renderReview();
  $("tips").innerHTML=TIPS.map(t=>`<div class="tip-item"><span class="k">${esc(t[0])}</span><div><b>${esc(t[1])}</b><span>${esc(t[2])}</span></div></div>`).join("");
  $("fauxamis").innerHTML=FAUX.map(f=>`<div><b>${esc(f[0])}</b>= ${esc(f[1])}<br><s>pas</s> ${esc(f[2])}</div>`).join("");
  const sel=state.themeSel||theme; const all=allWords();
  $("allCount").textContent=Object.keys(all).length+" mots";
  $("themeSeg").innerHTML=THEMES.map(t=>`<button data-wtheme="${t}" aria-pressed="${t===sel}">${t}</button>`).join("");
  $("allWords").innerHTML=Object.entries(all).filter(([k,w])=>w.theme===sel).map(([k,w])=>browseCard(k,w)).join("");
  renderMyBox(); renderMyWords();
}
export function renderWotd(){
  const all=allWords(); const {theme}=themeOf(today());
  const k=Object.keys(all).find(k=>all[k].theme===theme && !state.SRS[k]) || Object.keys(all).find(k=>all[k].theme===theme);
  const w=all[k]; if(!w) return;
  $("wotdTheme").textContent=theme;
  $("wotd").innerHTML=`<span class="en">${esc(w.en)}</span><span class="ex">${esc(w.fr)}</span>${w.tip?`<span class="ex">${esc(w.tip)}</span>`:""}<div class="row" style="margin-top:var(--sp-1-5)">${state.TTS?`${UI.mini(`${pic("speaker",16)} Écouter`, {attrs:`data-say="${esc(w.en)}" data-ex="${esc(w.ex||"")}"`})}`:""}${UI.mini(`Réviser mes mots`, {attrs:`data-view="words"`})}</div>`;
}


