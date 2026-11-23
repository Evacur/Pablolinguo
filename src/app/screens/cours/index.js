import { S, state } from "../../data/state.js";
import { LV } from "../../lib/levels.js";
import { $, COURS, PACK, RULES, SKILLS, esc, lvl, mOf, skillsOf, today } from "../../data/packs.js";
import { addXp, questDone } from "../../data/writes.js";
import { themeOf } from "../words.js";
import { renderListen } from "./listen.js";

export function renderCours(){
  document.querySelectorAll("#coursTabs button").forEach(b=>b.setAttribute("aria-pressed", b.dataset.ctab===state.coursTab));
  const sp = (en)=> state.TTS?`${UI.mini(`${pic("speaker",16)}`, {attrs:`data-say="${esc(en)}" aria-label="Écouter"`})}`:"";
  document.querySelectorAll("#coursTabs button").forEach(b=>b.setAttribute("aria-pressed", b.dataset.ctab===state.coursTab));
  if(state.coursTab==="listen"){ renderListen(); return; }
  if(state.coursTab==="gram"){
    const L=state.gramLvl||lvl(); const list=skillsOf(L);
    if(!state.gramSel || !list.some(s=>s.id===state.gramSel)) state.gramSel=([...list].sort((a,b)=>mOf(a.id)-mOf(b.id))[0]||{}).id;
    $("coursList").innerHTML=LV.map(l=>`<button data-glvl="${l}" aria-pressed="${l===L}">${l}</button>`).join("");
    const s=SKILLS.find(x=>x.id===state.gramSel);
    if(!s){ $("coursSheet").innerHTML=`<div class="lesson">${UI.emptyState(`Pas encore de fiche en ${L}`, `Ce niveau arrive bientôt en ${esc(PACK.name.toLowerCase())}.`)}</div>`; return; }
    $("coursSheet").innerHTML=`<div class="lesson">
      <div class="seg">${list.map(x=>`<button data-gskill="${x.id}" aria-pressed="${x.id===state.gramSel}">${esc(x.name.split(" : ")[0].split(" (")[0])}</button>`).join("")}</div>
      <h3>${esc(s.name)}</h3>
      <div class="rule"><span>${esc(RULES[s.id]||"")}</span><b>${esc(s.ex)}</b></div>
      <h4>Exemples</h4>
      <table class="ph">${s.q.slice(0,3).map(([fr,ans])=>`<tr><td><b>${esc(ans[0])}</b></td><td>${esc(fr)}</td><td>${sp(ans[0])}</td></tr>`).join("")}</table>
      <div class="row">${UI.button(`S'entraîner sur ce point`, {attrs:`data-train="${s.id}"`})}</div>
    </div>`;
  } else {
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

