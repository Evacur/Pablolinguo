let coursSel = null, coursTab = "gram", gramLvl = null, gramSel = null;
function renderCours(){
  document.querySelectorAll("#coursTabs button").forEach(b=>b.setAttribute("aria-pressed", b.dataset.ctab===coursTab));
  const sp = (en)=> TTS?`<button class="mini" data-say="${esc(en)}" aria-label="Écouter">🔊</button>`:"";
  $("coursList").hidden=(coursTab==="abc"); $("abcTab").hidden=!PACK.alphabet; if(coursTab==="abc" && !PACK.alphabet) coursTab="gram";
  document.querySelectorAll("#coursTabs button").forEach(b=>b.setAttribute("aria-pressed", b.dataset.ctab===coursTab));
  if(coursTab==="listen"){ renderListen(); return; }
  if(coursTab==="abc"){ renderAbc(); return; }
  if(coursTab==="gram"){
    const L=gramLvl||lvl(); const list=skillsOf(L);
    if(!gramSel || !list.some(s=>s.id===gramSel)) gramSel=([...list].sort((a,b)=>mOf(a.id)-mOf(b.id))[0]||{}).id;
    $("coursList").innerHTML=LV.map(l=>`<button data-glvl="${l}" aria-pressed="${l===L}">${l}</button>`).join("");
    const s=SKILLS.find(x=>x.id===gramSel);
    if(!s){ $("coursSheet").innerHTML=`<div class="lesson"><div class="l-empty">${emo("sleepy",45)}<p><b>Pas encore de fiche en ${L}</b><br><span class="ex">Ce niveau arrive bientôt en ${esc(PACK.name.toLowerCase())}.</span></p></div></div>`; return; }
    $("coursSheet").innerHTML=`<div class="lesson">
      <div class="seg">${list.map(x=>`<button data-gskill="${x.id}" aria-pressed="${x.id===gramSel}">${esc(x.name.split(" : ")[0].split(" (")[0])}</button>`).join("")}</div>
      <h3>${esc(s.name)}</h3>
      <div class="rule"><span>${esc(RULES[s.id]||"")}</span><b>${esc(s.ex)}</b></div>
      <h4>Exemples</h4>
      <table class="ph">${s.q.slice(0,3).map(([fr,ans])=>`<tr><td><b>${esc(ans[0])}</b></td><td>${esc(fr)}</td><td>${sp(ans[0])}</td></tr>`).join("")}</table>
      <div class="row"><button class="btn" data-train="${s.id}">S'entraîner sur ce point</button></div>
    </div>`;
  } else {
    const t = themeOf(today()).theme;
    if(!coursSel) coursSel = (COURS.find(c=>c.theme===t)||COURS[0]).id;
    $("coursList").innerHTML = COURS.map(c=>`<button data-cours="${c.id}" aria-pressed="${c.id===coursSel}">${esc(c.theme)}${c.theme===t?" ★":""}</button>`).join("");
    const c = COURS.find(x=>x.id===coursSel);
    $("coursSheet").innerHTML = `<div class="lesson">
      <div><h3>${esc(c.t)}</h3><p class="ex" style="margin-top:6px">${esc(c.situ)} Niveau ${esc(PACK.coursLevel||"A2 à B1")}.</p></div>
      <h4>Les phrases utiles</h4>
      <table class="ph">${c.ph.map(([en,fr])=>`<tr><td><b>${esc(en)}</b></td><td>${esc(fr)}</td><td>${sp(en)}</td></tr>`).join("")}</table>
      <h4>Mini-dialogue ${TTS?`<button class="mini" data-say="${esc(c.dia.map(d=>d[1]).join(" "))}">🔊 Tout écouter</button>`:""}</h4>
      <div class="dia">${c.dia.map(([w,l])=>`<p><span class="who">${esc(w)}</span>${esc(l)}</p>`).join("")}</div>
      <div class="rule"><b>${esc(c.g.t)}</b><span>${esc(c.g.r)}</span><span class="ex">${c.g.ex.map(esc).join(" · ")}</span></div>
      <details class="fold-in"><summary>Les pièges</summary><ul class="traps">${c.tr.map(([w,r,why])=>`<li><del class="bad-w">${esc(w)}</del> → <mark class="add-w">${esc(r)}</mark><span>${esc(why)}</span></li>`).join("")}</ul></details>
      <details class="fold-in"><summary>À toi : ${c.task.length} phrases</summary>${c.task.map(([fr,en])=>`<p style="margin:8px 0">${esc(fr)}<br><b>${esc(en)}</b> ${sp(en)}</p>`).join("")}</details>
    </div>`;
  }
  if(S.db && !questDone("cours")) addXp(10,"cours");
}

