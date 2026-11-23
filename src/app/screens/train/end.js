// ---------- End of a series, and the level challenge ----------
import { S, state } from "../../data/state.js";
import { LV, LV_INFO } from "../../lib/levels.js";
import { $, LANG, SKILLS, esc, lvIdx, lvl, today } from "../../data/packs.js";
import { addXp, saveProfile, write } from "../../data/writes.js";
import { buildSession } from "./session.js";
import { renderTrainer } from "./exercise.js";
import { show } from "../../app.js";
export function badgeOf(l){ return ((S.badges||{})[LANG]||{})[l]||null; }
export function bossDone(){
  const ok=state.T.results.filter(Boolean).length, L=state.T.arg, passed=ok>=8; state.T.bossScore=ok; state.T.passed=passed;
  const prev=badgeOf(L);
  if(passed){
    const b={...(S.badges||{})}; b[LANG]={...(b[LANG]||{}), [L]:{best:Math.max(ok, prev?prev.best:0), d:today()}}; S.badges=b;
    write(()=>S.db.doc("me/badges").set(b));
    addXp(100);
    const next=LV[lvIdx(L)+1]; if(next && lvIdx(lvl())<=lvIdx(L)){ S.levels={...S.levels,[LANG]:next}; saveProfile(); state.T.newLevel=next; }
  }
}
export function renderEnd(el){
  const ok=state.T.results.filter(Boolean).length, n=state.T.items.length;
  if(state.T.mode==="boss"){
    const missed=[...new Set(state.T.items.filter((x,k)=>!state.T.results[k]).flatMap(x=>x.sk||[]))].map(id=>SKILLS.find(s=>s.id===id)).filter(Boolean);
    el.innerHTML=state.T.passed? `<div class="win"><div class="confetti" aria-hidden="true">${Array.from({length:18},(_,k)=>`<i style="left:${(k*53)%100}%;animation-delay:${(k%6)*.12}s"></i>`).join("")}</div>
      ${emo("party",90)}<span class="label">Défi ${esc(state.T.arg)} réussi</span><h2>${ok}/${n}</h2>
      <p>${state.T.newLevel? `Niveau ${esc(state.T.arg)} validé. Tu passes au ${esc(state.T.newLevel)} : ${esc(LV_INFO[state.T.newLevel][0].toLowerCase())}.` : `Niveau ${esc(state.T.arg)} validé, bravo.`}</p>
      <div class="row" style="justify-content:center">${UI.button(`Voir mon parcours`, {attrs:`id="toBoard"`})}</div></div>`
    : UI.card(`${UI.faceHead(ok>=6?"wink":"sad", 60, `<div><span class="label">Défi ${esc(state.T.arg)}</span><div class="prompt">${ok}/${n}</div></div>`)}
      <p class="ex">Il faut 8/10 pour valider. Tu peux retenter quand tu veux : les phrases changent à chaque fois.</p>
      ${missed.length?`<div class="col" style="gap:0"><span class="label">À retravailler</span>${UI.list(missed.map(s=>UI.listRow({title:esc(s.name), trail:UI.mini(`S'entraîner`, {as:"span"}), attrs:`data-train="${s.id}"`})))}</div>`:""}
      <div class="row">${UI.button(`Retenter`, {attrs:`id="again"`})}${UI.button(`Retour`, {variant:"ghost", attrs:`id="toBoard"`})}</div>`);
    if($("again")) $("again").onclick=()=>{ state.T=buildSession(state.T.arg,"boss"); renderTrainer(); };
    $("toBoard").onclick=()=>{ state.T=null; show("plan"); };
    return;
  }
  const endFace= ok===n?"party": ok>=n*.6?"wink":"sad";
  el.innerHTML=UI.card(`${UI.faceHead(endFace, 64, `<div><div class="label">Série terminée</div><div class="prompt">${ok}/${n} justes</div></div>`)}
   <p class="ex">${ok===n?"Parfait. Tes points montent.":ok>=n*.6?"Bien joué. Relis les phrases ratées à voix haute.":"Ce n'est pas grave : les phrases ratées reviendront bientôt."}</p>
   <div class="row">${UI.button(`Encore une série`, {attrs:`id="again"`})}${UI.button(`Accueil`, {variant:"ghost", attrs:`id="toBoard"`})}</div>`);
  $("again").onclick=()=>{ state.T=buildSession(state.T.arg,state.T.mode); renderTrainer(); };
  $("toBoard").onclick=()=>{ state.T=null; show("board"); };
}

