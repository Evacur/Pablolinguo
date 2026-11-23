// ---------- Words, tips, sites ----------
// ---------- Words, tips, sites ----------
import { PROG_BY, S, state } from "../data/state.js";
import { cheer } from "../lib/cheer.js";
import { norm, typoFix } from "../lib/answers.js";
import { micHtml } from "../lib/voice.js";
import { $, ALLW, FAUX, LANG, PACK, THEMES, TIPS, esc, lvl, saveProg, srsPath, themePic, today } from "../data/packs.js";
import { LV, fitsLevel } from "../lib/levels.js";
import { weakness } from "../lib/mastery.js";
import { write } from "../data/writes.js";
import { speak } from "../lib/voice.js";
import { renderQuests, renderTopStats } from "./home.js";
import { knownWords, shuffle } from "./train/trainer.js";
const DAY0 = new Date("2026-10-21T12:00:00");
export function themeOf(dateStr){ const n=Math.round((new Date(dateStr+"T12:00:00")-DAY0)/86400000), N=THEMES.length; return {theme:THEMES[((n%N)+N)%N], cycle:Math.floor(n/N)}; } // one theme a day, in turn
// ---- More words (merged into W) ----

// ---- Spaced repetition ----
const INTERVALS = [0,1,3,7,14,30]; // days to wait after reaching box b
export const wkey = en => (LANG==="en"? en : en.normalize("NFD").replace(/[\u0300-\u036f]/g,"")).toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"").slice(0,60) || "w";
// The words this learner sees: their level and below, their own words, and any word already in their reviews.
const forMe = (k, w) => !!(state.SRS[k] || w.mine || fitsLevel(w.lv, lvl()));
function allWords(){ const o={...ALLW}; state.MY.forEach(m=>{ const k=wkey(m.en); o[k]={en:m.en,fr:m.fr,tip:m.tip||"",ex:m.example||"",theme:"Mes mots",mine:m.id}; }); return o; }
const addDays=(d,n)=>{ const x=new Date(d+"T12:00:00"); x.setDate(x.getDate()+n); return x.toLocaleDateString("en-CA"); };
  export const SRS_BY = {}, SRS_LOADED = {}, SRS_SEEN = {}; // SRS_SEEN: the reviews of that language have arrived (even when there are none yet)
 
// A review is a full-screen session: state.VQ = {queue:[keys], total, phase, given, ok, extra, only, done, right}; null outside one.
const boxOf = k => (state.SRS[k] && state.SRS[k].b) || 0;
// only: a theme, to review that theme alone. Then its due words and a few new ones; if nothing is due, its least known words.
function buildQueue(extraNew=0, only=null){
  const all=allWords(); const t=today(); const within=k=>!only || all[k].theme===only;
  const due=Object.keys(state.SRS).filter(k=>all[k] && within(k) && state.SRS[k].due<=t).sort((a,b)=>(state.SRS[a].due+boxOf(a)).localeCompare(state.SRS[b].due+boxOf(b)));
  const {theme}=themeOf(t);
  const fresh=Object.keys(all).filter(k=>!state.SRS[k] && within(k) && fitsLevel(all[k].lv, lvl())); // new words: the learner's level and below
  const easiest=list=>list.sort((a,b)=>LV.indexOf(all[a].lv)-LV.indexOf(all[b].lv));
  if(only){
    const q=shuffle(due.slice(0,25)).concat(easiest(fresh).slice(0, 5+extraNew));
    return q.length? q : shuffle(Object.keys(state.SRS).filter(k=>all[k] && within(k)).sort((a,b)=>boxOf(a)-boxOf(b)).slice(0,10));
  }
  const mine=fresh.filter(k=>all[k].mine);
  const ofTheme=easiest(fresh.filter(k=>all[k].theme===theme && !all[k].mine));
  const others=shuffle(fresh.filter(k=>all[k].theme!==theme && !all[k].mine));
  const newOnes=[...mine, ...ofTheme, ...others].slice(0, 5+extraNew);
  return shuffle(due.slice(0,25)).concat(newOnes);
}
function startReview(extra=0, only=null){ const queue=buildQueue(extra, only); state.VQ={queue, total:queue.length, phase:"ask", given:"", extra, only, done:0, right:0}; renderWords(); }
// What the page counts: words due today, all the words of this level, new words left.
function counts(){
  const all=allWords(), t=today(); const c={due:0, total:0, fresh:0};
  Object.keys(all).forEach(k=>{ if(!forMe(k, all[k])) return; c.total++; const s=state.SRS[k];
    if(!s){ c.fresh++; return; } if(s.due<=t) c.due++; });
  return c;
}
const plural=(n, one, many=one+"s")=> `${n} ${n>1?many:one}`;
function renderReview(el){
  const Q=state.VQ, all=allWords(); const left=Q.queue.length;
  const top=`<div class="ex-top"><button class="x" data-vquit="1" aria-label="Quitter la révision">✕</button>${UI.progress(Q.total-left, Q.total, "Avancement de la révision", {size:"lg"})}${left?`<span class="num label">${Q.total-left+1}/${Q.total}</span>`:""}</div>`;
  if(!left){
    el.innerHTML=`<div class="rev">${top}${UI.flashcard({tags:emo(Q.done&&Q.right===Q.done?"party":"wink", 60), word:Q.done? `${Q.right}/${Q.done} justes` : "Rien à revoir",
      body:`<p class="ex">${Q.done? "Les mots ratés reviendront demain. Les mots réussis reviendront plus tard : 1 jour, puis 3, 7, 14 et 30 jours." : "Tout est à jour. Tu peux prendre de l'avance avec de nouveaux mots."}</p>`})}
      ${UI.dock({main:UI.button(`Terminer`, {attrs:`data-vquit="1" id="vNext"`}), alt:[UI.button(`5 nouveaux mots`, {variant:"ghost", attrs:`data-vmore="1"`})]})}</div>`;
    const n=$("vNext"); n&&n.focus({preventScroll:true}); return;
  }
  const k=Q.queue[0]; const w=all[k]; const b=boxOf(k); const isNew=!state.SRS[k] || (Q.phase==="show" && state.SRS[k].ok+state.SRS[k].ko===1);
  const tags=`${UI.pill(isNew?"Nouveau":"Révision", isNew?"warn":"good")}<span class="label">${esc(w.theme)}</span>`;
  if(Q.phase==="ask"){
    // The field and its button sit in one row just above the keyboard; Entrée checks too. The two ways out stay quiet under it.
    el.innerHTML=`<div class="rev">${top}${UI.flashcard({tags, word:esc(w.fr), body:UI.meter(b, 5, `Niveau ${b} sur 5`)})}
      ${UI.dock({main:`<form class="answer-row" id="vForm"><input id="vIn" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="done" placeholder="${esc(PACK.placeholder)}" aria-label="Traduction">${micHtml("vIn")}${UI.button(`Vérifier`, {attrs:`type="submit" id="vGo" disabled`})}</form>`,
        alt:[UI.button(`Je sèche`, {variant:"ghost", attrs:`data-vgive="1"`}), UI.button(`Passer`, {variant:"ghost", attrs:`data-vskip="1"`})]})}</div>`;
    const i=$("vIn"); i.oninput=()=>{ $("vGo").disabled=!i.value.trim(); }; i.focus({preventScroll:true});
  } else {
    const fb=UI.feedback(Q.ok?"ok":"ko", Q.ok?(Q.typo?"Juste, avec une faute de frappe":"Juste !"):Q.given?"Pas tout à fait":"La réponse", `
      ${Q.ok&&Q.typo?`<span class="fix">Faute de frappe corrigée : ${Q.typo.map(([g,r])=>`<del class="bad-w">${esc(g)}</del> → <mark class="add-w">${esc(r)}</mark>`).join(" · ")}</span>`:""}
      ${Q.given&&!Q.ok?`<span>Toi : ${diffHtml(Q.given, w.en).mine}</span>`:""}
      <span class="ans">${Q.ok?esc(w.en):diffHtml(Q.given||"", w.en).right}</span>
      ${w.tip?`<span class="ex">${pic("bulb",14)} ${esc(w.tip)}</span>`:""}${w.ex?`<span class="ex"><i>${esc(w.ex)}</i></span>`:""}
      <span class="ex">${Q.ok?`Il reviendra dans ${plural(INTERVALS[b], "jour")}.`:"Il revient un peu plus tard dans cette série, puis demain."}</span>`, {face:Q.ok?(b>=3?"cool":"grin"):Q.given?"sad":"wink"});
    el.innerHTML=`<div class="rev">${top}${UI.flashcard({tags, word:esc(w.fr), body:fb})}
      ${UI.dock({main:`${state.TTS? UI.iconButton(pic("speaker",20), {label:"Écouter", attrs:`type="button" data-say="${esc(w.en)}" data-ex="${esc(w.ex)}"`}) : ""}${UI.button(`Suivant`, {attrs:`data-vnext="1" id="vNext"`})}`})}</div>`;
    const n=$("vNext"); n&&n.focus({preventScroll:true});
  }
}
// The session fits what is visible: on a phone the keyboard hides the bottom of the page without resizing it, so the
// height comes from visualViewport and the field stays right above the keys.
const vv=window.visualViewport;
function fitViewport(){ document.documentElement.style.setProperty("--vvh", Math.round(vv? vv.height : window.innerHeight)+"px"); if(state.VQ && document.body.classList.contains("in-rev")) window.scrollTo(0,0); }
if(vv) vv.addEventListener("resize", fitViewport); else window.addEventListener("resize", fitViewport);
fitViewport();
function answerWord(given){
  if(!state.VQ || state.VQ.phase!=="ask" || !state.VQ.queue.length) return;
  const k=state.VQ.queue[0]; const w=allWords()[k]; given=(given||"").trim();
  const exact = !!given && (wnorm(given)===wnorm(w.en));
  const fix = given && !exact ? typoFix(wnorm(w.en), wnorm(given), LANG, knownWords()) : null;
  const ok = exact || !!fix;
  state.VQ.ok=ok; state.VQ.given=given; state.VQ.typo=fix; state.VQ.phase="show"; state.VQ.done++; if(ok) state.VQ.right++;
  const cur=Object.assign({b:0,ok:0,ko:0}, state.SRS[k]||{});
  if(ok){ cur.b=Math.min(5,cur.b+1); cur.ok++; cur.due=addDays(today(), INTERVALS[cur.b]); }
  else { cur.b=0; cur.ko++; cur.due=today(); }
  state.SRS={...state.SRS,[k]:cur}; say(w.en, w.ex); cheer(ok);
  SRS_BY[LANG]=state.SRS; const code=LANG; // the write reads the word when its turn comes (audit R4)
  write(async()=>{ const ref=S.db.doc(srsPath(code)); const all=SRS_BY[code]||{}; if(SRS_LOADED[code]) await ref.update({w:{[k]:all[k]}}); else { await ref.set({w:all}); SRS_LOADED[code]=true; if(code===LANG) state.srsLoaded=true; } });
  bumpReviews();
  renderWords();
}
function bumpReviews(){
  const kd=today(); const days=S.progress.days||{}; const d=Object.assign({q:[],wv:0}, days[kd]||{});
  d.wv=(d.wv||0)+1; d.a=(d.a||0)+1; // a: the day counts for the streak (data/writes.js: markDay)
  if(d.wv>=10 && !d.q.includes("words")){ d.q=[...d.q,"words"]; toast("party","Mission mots accomplie","10 mots révisés"); }
  S.progress={...S.progress, days:{...days,[kd]:d}}; PROG_BY[LANG]=S.progress; saveProg(kd);
  renderQuests(); renderTopStats();
}
function nextCard(){ const k=state.VQ.queue.shift(); if(!state.VQ.ok){ state.VQ.queue.splice(Math.min(3,state.VQ.queue.length),0,k); } state.VQ.phase="ask"; state.VQ.given=""; renderWords(); }
function skipCard(){ const k=state.VQ.queue.shift(); state.VQ.queue.push(k); renderWords(); }
const wnorm = s => LANG==="en"? norm(s, LANG).replace(/^to /,"").replace(/^(a|an|the) /,"") : norm(s, LANG).replace(/^(el|la|los|las|un|una|unos|unas) /,"");
export function say(word, ex){ speak([word, ex||""]); }

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

// ---- The page: today's review, the figures, then themes, own words, false friends and tips ----
function wordRow(k,w){
  const b=boxOf(k);
  return UI.word({word:esc(w.en), sub:esc(w.fr), tip:w.tip? esc(w.tip) : "", trail:`${UI.meter(b, 5, `Niveau ${b} sur 5`)}${state.TTS? UI.iconButton(pic("speaker",18), {label:"Écouter", attrs:`type="button" data-say="${esc(w.en)}" data-ex="${esc(w.ex||"")}"`}) : ""}${w.mine? UI.iconButton(pic("trash",18), {label:"Supprimer ce mot", attrs:`type="button" data-wdel="${esc(w.mine)}"`}) : ""}`});
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
// A word added or deleted: the page shows it, a running review is left alone.
export function renderMyWords(){ if(!state.VQ) renderWords(); }
document.addEventListener("click", e=>{
  if(e.target.closest("[data-vgive]")){ answerWord(""); return; }
  if(e.target.closest("[data-vskip]")){ skipCard(); return; }
  if(e.target.closest("[data-vnext]")){ nextCard(); return; }
  if(e.target.closest("[data-vmore]")){ startReview(((state.VQ&&state.VQ.extra)||0)+5, (state.VQ&&state.VQ.only)||null); return; }
  if(e.target.closest("[data-vquit]")){ state.VQ=null; renderWords(); window.scrollTo(0,0); return; }
  const vs=e.target.closest("[data-vstart]"); if(vs){ startReview(0, vs.dataset.vstart||null); window.scrollTo(0,0); return; }
  const wt=e.target.closest("[data-wtab]"); if(wt){ state.wordsTab=wt.dataset.wtab; renderWords(); return; }
  const wf=e.target.closest("[data-wfilter]"); if(wf){ state.wordsFilter=wf.dataset.wfilter; renderWords(); return; }
  if(e.target.closest("[data-wback]")){ state.themeSel=null; renderWords(); window.scrollTo(0,0); return; }
});
document.addEventListener("submit", e=>{ if(e.target.id==="vForm"){ e.preventDefault(); if($("vIn").value.trim()) answerWord($("vIn").value); } });
const WTABS=[{key:"themes", label:"Thèmes", icon:"plane"}, {key:"mine", label:"Mes mots", icon:"pencil"}, {key:"faux", label:"Faux amis", icon:"scales"}, {key:"tips", label:"Astuces", icon:"bulb"}];
function wordsHome(){
  const c=counts(), all=allWords(), {theme:day}=themeOf(today()), tab=state.wordsTab;
  const nDue=Math.min(c.due,25), nNew=Math.min(c.fresh,5), n=nDue+nNew;
  const head=`<div class="page-head"><div><h2>Mots</h2><span class="label">${esc(PACK.name)} ${lvl()} · ${plural(c.total, "mot")}</span></div>${UI.button(`+ Ajouter`, {size:"sm", attrs:`type="button" data-sheet="addWord" aria-haspopup="dialog"`})}</div>`;
  const hero= S.db && !SRS_SEEN[LANG]? UI.banner({face:"think", kicker:"Révision du jour", title:"Un instant", sub:"Tes mots arrivent."})
    : n? UI.banner({face:"nerd", kicker:"Révision du jour", title:plural(n, "mot"), sub:`${[nDue? `${nDue} à revoir` : "", nNew? plural(nNew, "nouveau", "nouveaux") : ""].filter(Boolean).join(" et ")}. Environ ${Math.max(1, Math.round(n/3))} min.`, action:UI.button(`Commencer`, {attrs:`data-vstart=""`})})
    : UI.banner({face:"cool", kicker:"Révision du jour", title:"Tout est à jour", sub:"Rien à revoir aujourd'hui. Chaque mot revient au bon moment : 1 jour, puis 3, 7, 14 et 30."});
  const sw=UI.switcher(WTABS.map(t=>({key:t.key, label:t.label, icon:pic(t.icon,20)})), tab, {attr:"data-wtab", label:"Parcourir"});
  let body="";
  if(tab==="themes"){
    const by={}; Object.keys(all).forEach(k=>{ const w=all[k]; if(w.mine || !forMe(k,w)) return; const t=by[w.theme]||(by[w.theme]={n:0,ok:0}); t.n++; if(boxOf(k)>=3) t.ok++; });
    body=UI.decks([day, ...THEMES.filter(t=>t!==day)].filter(t=>by[t]).map(t=>UI.deck({icon:themePic(t,22), title:esc(t), value:by[t].ok, max:by[t].n, tag:t===day? UI.pill(`Aujourd'hui`, "warn") : "", attrs:`data-wtheme="${esc(t)}"`})));
  } else if(tab==="mine"){
    body= state.MY.length? `<div class="row">${UI.button(`Réviser mes mots`, {variant:"secondary", attrs:`data-vstart="Mes mots"`})}</div>`+UI.words(state.MY.map(m=>wordRow(wkey(m.en), {en:m.en, fr:m.fr, tip:m.tip||"", ex:m.example||"", mine:m.id})))
      : UI.emptyState("Pas encore de mot à toi", "Ajoute un mot entendu, lu ou cherché : il arrive dans ta révision.", "wink");
  } else if(tab==="faux"){
    body=`<div class="fa">${FAUX.map(f=>`<div><b>${esc(f[0])}</b>= ${esc(f[1])}<br><s>pas</s> ${esc(f[2])}</div>`).join("")}</div>`;
  } else {
    // memo tips: the ones about this learner's weak points first (lib/mastery.js: weakness)
    const tw=t=>t[3]? weakness(S.skills[t[3]]) : 0;
    body=`<div class="tips">${TIPS.map((t,k)=>[t,k]).sort((a,b)=>tw(b[0])-tw(a[0]) || a[1]-b[1]).map(([t])=>`<div class="tip-item"><span class="k">${esc(t[0])}</span><div><b>${esc(t[1])}${tw(t)>0?` ${UI.pill(`Pour toi`, "warn")}`:""}</b><span>${esc(t[2])}</span></div></div>`).join("")}</div>`;
  }
  return head+sw+hero+`<div class="col" role="tabpanel" aria-labelledby="wtab-${tab}">${body}</div>`;
}
const WFILTERS=[["all","Tous"], ["todo","À apprendre"], ["known","Appris"]];
function themePage(){
  const t=state.themeSel, all=allWords(), f=state.wordsFilter;
  const keys=Object.keys(all).filter(k=>all[k].theme===t && !all[k].mine && forMe(k, all[k])).sort((a,b)=>LV.indexOf(all[a].lv)-LV.indexOf(all[b].lv));
  const known=keys.filter(k=>boxOf(k)>=3).length;
  const shown=keys.filter(k=> f==="todo"? boxOf(k)<3 : f==="known"? boxOf(k)>=3 : true);
  return `<div class="row">${UI.button(`‹ Mots`, {variant:"ghost", size:"sm", cls:"back", attrs:`type="button" data-wback="1"`})}</div>
    <div class="page-head"><div><h2>${esc(t)}</h2><span class="label">${known} sur ${keys.length} appris</span></div><span aria-hidden="true">${themePic(t,30)}</span></div>
    ${UI.progress(known, keys.length, `${known} sur ${keys.length} appris`)}
    <div class="row wtools">${UI.button(`Réviser ce thème`, {attrs:`data-vstart="${esc(t)}"`})}<div class="seg">${WFILTERS.map(([k,l])=>`<button type="button" data-wfilter="${k}" aria-pressed="${k===f}">${l}</button>`).join("")}</div></div>
    ${shown.length? UI.words(shown.map(k=>wordRow(k, all[k]))) : UI.emptyState(f==="known"? "Aucun mot appris ici pour l'instant" : "Tout est appris ici", f==="known"? "Un mot est appris après trois bonnes réponses, à quelques jours d'écart." : "Tu peux quand même le réviser pour ne rien oublier.", f==="known"?"think":"cool")}`;
}
export function renderWords(){
  const el=$("wordsRoot"); if(!el || $("view-words").hidden) return;
  document.body.classList.toggle("in-ex", !!state.VQ); document.body.classList.toggle("in-rev", !!state.VQ);
  if(state.VQ){ renderReview(el); return; }
  el.innerHTML= state.themeSel && THEMES.includes(state.themeSel)? themePage() : wordsHome();
  renderMyBox();
}
export function renderWotd(){
  const all=allWords(); const {theme}=themeOf(today());
  const ofTheme=Object.keys(all).filter(k=>all[k].theme===theme && forMe(k, all[k]));
  const k=ofTheme.find(k=>!state.SRS[k]) || ofTheme[0];
  const w=all[k]; if(!w) return;
  $("wotdTheme").textContent=theme;
  $("wotd").innerHTML=`<span class="en">${esc(w.en)}</span><span class="ex">${esc(w.fr)}</span>${w.tip?`<span class="ex">${esc(w.tip)}</span>`:""}<div class="row" style="margin-top:var(--sp-1-5)">${state.TTS?`${UI.mini(`${pic("speaker",16)} Écouter`, {attrs:`data-say="${esc(w.en)}" data-ex="${esc(w.ex||"")}"`})}`:""}${UI.mini(`Réviser mes mots`, {attrs:`data-view="words"`})}</div>`;
}


