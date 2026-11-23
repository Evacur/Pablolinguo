// ---------- End of a series, and the level challenge ----------
import { S, state } from "../../data/state.js";
import { LV, LV_INFO } from "../../lib/levels.js";
import { $, LANG, SKILLS, esc, lvIdx, lvl, mOf, today } from "../../data/packs.js";
import { addXp, recordSkillTest, saveProfile, write } from "../../data/writes.js";
import { MAX, needed, passed } from "../../lib/mastery.js";
import { situationTestDone } from "../cours/index.js";
import { buildSession } from "./session.js";
import { renderTrainer } from "./exercise.js";
import { show } from "../../app.js";
export function badgeOf(l){ return ((S.badges||{})[LANG]||{})[l]||null; }
// A series is over. A series on one grammar point is its test (a pass adds a mastery dot), a series on a theme
// is the test of that situation, and the level challenge can move the learner up a level.
export function seriesDone(){
  const T=state.T, ok=T.results.filter(Boolean).length, n=T.items.length;
  if(T.mode==="boss") return bossDone();
  if(T.mode==="skill"){ const before=mOf(T.arg); recordSkillTest(T.arg, ok, n); T.test={passed:passed(ok,n), need:needed(n), before, after:mOf(T.arg)}; }
  if(T.mode==="theme"){ T.test={passed:passed(ok,n), need:needed(n)}; situationTestDone(T.arg, ok, n); }
}
function bossDone(){
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
  const t=state.T.test, sk=state.T.mode==="skill"? SKILLS.find(s=>s.id===state.T.arg) : null;
  const endFace= ok===n?"party": (t? t.passed : ok>=n*.6)?"wink":"sad";
  const label= t? (state.T.mode==="skill"? `Test · ${esc(sk?sk.name:"")}` : `Test · ${esc(state.T.arg)}`) : "Série terminée";
  const msg= !t? (ok===n?"Parfait.":ok>=n*.6?"Bien joué. Relis les phrases ratées à voix haute.":"Ce n'est pas grave : les phrases ratées reviendront bientôt.")
    : state.T.mode==="skill"? (t.passed? (t.after>t.before? `Test réussi : ce point gagne un niveau de maîtrise (${t.after} sur ${MAX}).${t.after===MAX?" Il est validé.":""}` : `Test réussi. Ce point est déjà validé (${MAX} sur ${MAX}).`)
        : `Il faut ${t.need}/${n} pour valider. Relis le cours et retente : les phrases changent à chaque fois.`)
    : (t.passed? `Situation validée.` : `Il faut ${t.need}/${n} pour valider cette situation. Retente quand tu veux.`);
  el.innerHTML=UI.card(`${UI.faceHead(endFace, 64, `<div><div class="label">${label}</div><div class="prompt">${ok}/${n} justes</div></div>`)}
   <p class="ex">${msg}</p>${t&&state.T.mode==="skill"?`<p class="ex">${UI.meter(mOf(state.T.arg), MAX, `${mOf(state.T.arg)} sur ${MAX}`)}</p>`:""}
   <div class="row">${UI.button(t? (t.passed?`Refaire le test`:`Retenter le test`) : `Encore une série`, {attrs:`id="again"`})}${UI.button(`Accueil`, {variant:"ghost", attrs:`id="toBoard"`})}</div>`);
  $("again").onclick=()=>{ state.T=buildSession(state.T.arg,state.T.mode); renderTrainer(); };
  $("toBoard").onclick=()=>{ state.T=null; show("board"); };
}

