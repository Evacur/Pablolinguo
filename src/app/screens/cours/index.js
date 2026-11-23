import { S, state } from "../../data/state.js";
import { $, COURS, LANG, LESSONS, PACK, RULES, SKILLS, esc, lvl, mOf, skillsOf, themePic, today } from "../../data/packs.js";
import { markDay, questDone, write } from "../../data/writes.js";
import { passed } from "../../lib/mastery.js";
import { themeOf } from "../words.js";
import { themeCount } from "../train/trainer.js";
import { renderListen } from "./listen.js";
import { FAMILIES, FAMILY_OF, famPic } from "../../data/grammar-families.js";
const famName=id=>{ const f=FAMILIES[FAMILY_OF[id]]; return f? f.label+" · " : ""; };

export function renderCours(){
  document.querySelectorAll("#coursTabs button").forEach(b=>b.setAttribute("aria-pressed", b.dataset.ctab===state.coursTab));
  const sp = (en)=> state.TTS?`${UI.mini(`${pic("speaker",16)}`, {attrs:`data-say="${esc(en)}" aria-label="Écouter"`})}`:"";
  if(state.coursTab==="listen"){ renderListen(); return; }
  if(state.coursTab==="gram"){ renderGram(sp); }
  else renderSituations(sp);
}


// Cours › Grammaire: the points of a level as a list, then one point as a lesson (the course in parts,
// examples, traps, a tip) ending on « S'entraîner sur ce point ». Lessons live in /lang/lessons-<code>.js.
function renderGram(sp){
  // the level is the one chosen in the header: no level filter here
  const L=lvl(); const list=skillsOf(L);
  const s=SKILLS.find(x=>x.id===state.gramSel);
  if(!s){
    $("coursSheet").innerHTML=`<div class="lesson"><div><h3>Grammaire</h3><p class="ex" style="margin-top:var(--sp-1-5)">Choisis un point : le cours, des exemples, puis l'entraînement. Niveau ${L}.</p></div>`
      + (list.length? UI.list(list.map(x=>UI.listRow({icon:famPic(x.id), title:`<b>${esc(x.name)}</b>`, sub:`${famName(x.id)}${esc(x.ex)}`, trail:UI.meter(mOf(x.id), 3, `${mOf(x.id)} sur 3`), chevron:true, attrs:`data-gskill="${x.id}"`})), {inset:true})
        : UI.emptyState(`Pas encore de cours en ${L}`, `Ce niveau arrive bientôt en ${esc(PACK.name.toLowerCase())}.`))
      + `</div>`;
    return;
  }
  const les=LESSONS[s.id];
  const table=(rows, say)=>`<table class="ph">${rows.map(([a,b,c])=>`<tr><td><b>${esc(a)}</b></td><td>${esc(b)}${c?`<span class="g-note">${esc(c)}</span>`:""}</td>${say&&state.TTS?`<td class="g-say">${sp(a)}</td>`:""}</tr>`).join("")}</table>`;
  const body = les? `<p class="g-intro">${esc(les.intro)}</p>
      ${les.parts.map(pt=>`<h4>${esc(pt.h)}</h4>${pt.p.split(/\n\n+/).map(x=>`<p class="g-p">${esc(x)}</p>`).join("")}${pt.rows&&pt.rows.length?table(pt.rows):""}`).join("")}
      <h4>Exemples</h4>${table(les.ex, true)}
      ${les.traps&&les.traps.length?`<h4>Les pièges</h4><ul class="traps">${les.traps.map(([w,r,why])=>`<li><del class="bad-w">${esc(w)}</del> → <mark class="add-w">${esc(r)}</mark><span>${esc(why)}</span></li>`).join("")}</ul>`:""}
      ${les.tip?`<div class="rule"><b>L'astuce</b><span>${esc(les.tip)}</span></div>`:""}`
    : `<div class="rule"><span>${esc(RULES[s.id]||"")}</span><b>${esc(s.ex)}</b></div>
      <h4>Exemples</h4>${table(s.q.slice(0,3).map(([fr,ans])=>[ans[0],fr]), true)}`;
  $("coursSheet").innerHTML=`<div class="lesson">
    ${UI.mini(`‹ Les points ${esc(L)}`, {cls:"l-back", attrs:`data-gskill=""`})}
    <div><h3>${esc(s.name)}</h3><p class="ex" style="margin-top:var(--sp-1-5)">Niveau ${esc(s.lvl)} · ${UI.meter(mOf(s.id), 3, `${mOf(s.id)} sur 3`)}</p></div>
    ${body}
    <div class="row">${UI.button(`S'entraîner sur ce point`, {attrs:`data-train="${s.id}"`})}</div>
    <p class="ex">C'est le test du point : 8 bonnes réponses sur 10 lui font gagner un niveau de maîtrise, et 3 sur 3 le valident.</p>
  </div>`;
}

// Cours › Situations: the situations as a list, then one as a sheet (useful phrases, dialogue, the grammar it
// uses, traps) ending on its test. A situation is validated by passing that test (lib/mastery.js: passed).
export const SIT_DONE={};  // lang -> {situation id: best score out of 100}
export function situationTestDone(theme, score, total){
  const c=COURS.find(x=>x.theme===theme); if(!c) return;
  const done=SIT_DONE[LANG]||(SIT_DONE[LANG]={}); const pct=Math.round(score/total*100);
  if(!passed(score, total) || (done[c.id]||0)>=pct) return;
  done[c.id]=pct;
  if(S.db){ const code=LANG; write(()=>S.db.doc("situations/"+code).set({d:{...SIT_DONE[code]}})); }
}
function renderSituations(sp){
  const t=themeOf(today()).theme, done=SIT_DONE[LANG]||{};
  const c=COURS.find(x=>x.id===state.coursSel);
  if(!c){
    $("coursSheet").innerHTML=`<div class="lesson"><div><h3>Situations</h3><p class="ex" style="margin-top:var(--sp-1-5)">Les phrases utiles d'une situation de la vie, un dialogue, la grammaire qui va avec, puis un test. Niveau ${esc(PACK.coursLevel||"A2 à B1")}.</p></div>`
      + UI.list(COURS.map(x=>UI.listRow({icon:themePic(x.theme, 22), title:`<b>${esc(x.t)}</b>`, sub:`${esc(x.theme)}${x.theme===t?" · thème du jour":""} · ${esc(x.situ)}`, trail:done[x.id]!=null?UI.pill(`Validée`):"", chevron:true, attrs:`data-cours="${x.id}"`})), {inset:true})
      + `</div>`;
    return;
  }
  const g=SKILLS.find(x=>x.id===c.g.skill), nTest=themeCount(c.theme);
  if(S.db && !questDone("cours")) markDay("cours"); // the day's mission: open a situation
  $("coursSheet").innerHTML = `<div class="lesson">
    ${UI.mini(`‹ Les situations`, {cls:"l-back", attrs:`data-cours=""`})}
    <div><h3>${esc(c.t)}</h3><p class="ex" style="margin-top:var(--sp-1-5)">${esc(c.situ)} ${done[c.id]!=null?UI.pill(`Validée`):""}</p></div>
    <h4>Les phrases utiles</h4>
    <table class="ph">${c.ph.map(([en,fr])=>`<tr><td><b>${esc(en)}</b></td><td>${esc(fr)}</td>${state.TTS?`<td class="g-say">${sp(en)}</td>`:""}</tr>`).join("")}</table>
    <h4>Mini-dialogue ${state.TTS?`${UI.mini(`${pic("speaker",16)} Tout écouter`, {attrs:`data-say="${esc(c.dia.map(d=>d[1]).join(" "))}"`})}`:""}</h4>
    <div class="dia">${c.dia.map(([w,l])=>`<p><span class="who">${esc(w)}</span>${esc(l)}</p>`).join("")}</div>
    <h4>La grammaire de la situation</h4>
    <div class="rule"><b>${esc(c.g.t)}</b><span>${esc(c.g.r)}</span><span class="ex">${c.g.ex.map(esc).join(" · ")}</span>${g?UI.mini(`Le cours : ${esc(g.name)}`, {attrs:`data-glesson="${g.id}"`}):""}</div>
    <h4>Les pièges</h4>
    <ul class="traps">${c.tr.map(([w,r,why])=>`<li><del class="bad-w">${esc(w)}</del> → <mark class="add-w">${esc(r)}</mark><span>${esc(why)}</span></li>`).join("")}</ul>
    <h4>À toi</h4>
    ${c.task.map(([fr,en])=>`<details class="fold-in"><summary>${esc(fr)}</summary><p><b>${esc(en)}</b> ${sp(en)}</p></details>`).join("")}
    ${nTest>=4? `<div class="row">${UI.button(`Passer le test de la situation`, {attrs:`data-ttheme="${esc(c.theme)}"`})}</div>` : `<p class="ex">Le test de cette situation arrive au niveau suivant : il n'y a pas encore assez d'exercices à ton niveau.</p>`}
  </div>`;
}
