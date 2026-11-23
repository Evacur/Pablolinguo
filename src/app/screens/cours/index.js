import { S, state } from "../../data/state.js";
import { LV } from "../../lib/levels.js";
import { $, COURS, LESSONS, PACK, RULES, SKILLS, esc, lvl, mOf, skillsOf, today } from "../../data/packs.js";
import { addXp, questDone } from "../../data/writes.js";
import { themeOf } from "../words.js";
import { renderListen } from "./listen.js";

export function renderCours(){
  document.querySelectorAll("#coursTabs button").forEach(b=>b.setAttribute("aria-pressed", b.dataset.ctab===state.coursTab));
  const sp = (en)=> state.TTS?`${UI.mini(`${pic("speaker",16)}`, {attrs:`data-say="${esc(en)}" aria-label="Écouter"`})}`:"";
  document.querySelectorAll("#coursTabs button").forEach(b=>b.setAttribute("aria-pressed", b.dataset.ctab===state.coursTab));
  if(state.coursTab==="listen"){ renderListen(); return; }
  if(state.coursTab==="gram"){ renderGram(sp); }
  else {
    const t = themeOf(today()).theme;
    if(!state.coursSel) state.coursSel = (COURS.find(c=>c.theme===t)||COURS[0]).id;
    $("coursList").innerHTML = COURS.map(c=>`<button data-cours="${c.id}" aria-pressed="${c.id===state.coursSel}">${esc(c.theme)}${c.theme===t?" ★":""}</button>`).join("");
    const c = COURS.find(x=>x.id===state.coursSel);
    $("coursSheet").innerHTML = `<div class="lesson">
      <div><h3>${esc(c.t)}</h3><p class="ex" style="margin-top:var(--sp-1-5)">${esc(c.situ)} Niveau ${esc(PACK.coursLevel||"A2 à B1")}.</p></div>
      <h4>Les phrases utiles</h4>
      <table class="ph">${c.ph.map(([en,fr])=>`<tr><td><b>${esc(en)}</b></td><td>${esc(fr)}</td><td>${sp(en)}</td></tr>`).join("")}</table>
      <h4>Mini-dialogue ${state.TTS?`${UI.mini(`${pic("speaker",16)} Tout écouter`, {attrs:`data-say="${esc(c.dia.map(d=>d[1]).join(" "))}"`})}`:""}</h4>
      <div class="dia">${c.dia.map(([w,l])=>`<p><span class="who">${esc(w)}</span>${esc(l)}</p>`).join("")}</div>
      <div class="rule"><b>${esc(c.g.t)}</b><span>${esc(c.g.r)}</span><span class="ex">${c.g.ex.map(esc).join(" · ")}</span></div>
      <details class="fold-in"><summary>Les pièges</summary><ul class="traps">${c.tr.map(([w,r,why])=>`<li><del class="bad-w">${esc(w)}</del> → <mark class="add-w">${esc(r)}</mark><span>${esc(why)}</span></li>`).join("")}</ul></details>
      <details class="fold-in"><summary>À toi : ${c.task.length} phrases</summary>${c.task.map(([fr,en])=>`<p style="margin:var(--sp-2) 0">${esc(fr)}<br><b>${esc(en)}</b> ${sp(en)}</p>`).join("")}</details>
    </div>`;
  }
  if(S.db && !questDone("cours")) addXp(10,"cours");
}


// Cours › Grammaire: the points of a level as a list, then one point as a lesson (the course in parts,
// examples, traps, a tip) ending on « S'entraîner sur ce point ». Lessons live in /lang/lessons-<code>.js.
function renderGram(sp){
  const L=state.gramLvl||lvl(); const list=skillsOf(L);
  $("coursList").innerHTML=LV.map(l=>`<button data-glvl="${l}" aria-pressed="${l===L}">${l}</button>`).join("");
  const s=list.find(x=>x.id===state.gramSel);
  if(!s){
    $("coursSheet").innerHTML=`<div class="lesson"><div><h3>Grammaire</h3><p class="ex" style="margin-top:var(--sp-1-5)">Choisis un point : le cours, des exemples, puis l'entraînement. Niveau ${L}.</p></div>`
      + (list.length? UI.list(list.map(x=>UI.listRow({title:`<b>${esc(x.name)}</b>`, sub:esc(x.ex), trail:UI.meter(mOf(x.id), 3, `${mOf(x.id)} sur 3`), chevron:true, attrs:`data-gskill="${x.id}"`})), {inset:true})
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
  </div>`;
}
