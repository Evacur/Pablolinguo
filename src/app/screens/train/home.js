// ---------- Trainer home ----------
function trainerHome(el){
  const L=lvl(), p=pct(L), all=pool(), i=lvIdx(L);
  const list=[...skillsOf(L)].sort((a,b)=>mOf(a.id)-mOf(b.id));
  const boss=(PACK.boss||{})[L]||[], passed=badgeOf(L);
  const thCount=t=> all.filter(x=>x.th===t && lvIdx(x.lvl)<=i).length;
  const nx= LANG==="ru" && L==="A1"? abcNext() : null, nxi= nx? abcLessons().indexOf(nx)+1 : 0;
  el.innerHTML= (nx? `
  <div class="banner">
    <span class="face">${emo("think",45)}</span>
    <div class="col" style="gap:var(--sp-1-5)"><span class="hello">Russe · on commence par lire</span><h2>${esc(nx.t)}</h2>
    <span class="serif">Leçon ${nxi} sur ${abcLessons().length} de l'alphabet · ${esc(nx.sub)}</span></div>
    ${UI.button(`${emo("wink",15)}Commencer`, {attrs:`data-abc="${nx.id}"`})}
  </div>
  <div class="row">${UI.mini(`Je lis déjà le cyrillique : mélange du jour`, {attrs:`id="startMix"`})}</div>` : `
  <div class="banner">
    <span class="face">${emo("think",45)}</span>
    <div class="col" style="gap:var(--sp-1-5)"><span class="hello">${esc(PACK.name)} · niveau ${L}</span><h2>Mélange du jour</h2>
    <span class="serif">10 exercices variés, surtout tes points faibles</span></div>
    ${UI.button(`${emo("wink",15)}Commencer`, {attrs:`id="startMix"`})}
  </div>`) + `
  <div class="section-title"><h2>Par thème</h2><span class="label">exercices de ton niveau et d'avant</span></div>
  <div class="themes">${THEMES.map(t=>{ const n=thCount(t); return `<button class="theme" data-ttheme="${t}" ${n<4?"disabled":""}><b>${esc(t)}</b><span class="label">${n} exercices</span></button>`; }).join("")}</div>
  <div class="panel boss-card">
    <div class="panel-head"><h2>Défi du niveau ${L}</h2>${passed?`${UI.pill(`Validé`)}`:`<span class="label">${p} % maîtrisé</span>`}</div>
    <p class="ex">${passed? `Tu l'as réussi avec ${passed.best}/10. Tu peux le refaire quand tu veux.` : p>=80? "Débloqué : 10 phrases bonus plus dures. 8/10 et le niveau est validé." : "Il se débloque à 80 % des points maîtrisés. Tu peux déjà le tenter si tu te sens prêt."}</p>
    <div class="row">${UI.button(`Tenter le défi`, {variant:p>=80&&!passed?"default":"ghost", attrs:`data-boss="${L}" ${boss.length?"":"disabled"}`})}</div>
  </div>
  <details class="panel fold"><summary><h2>Par point de grammaire</h2><span class="label">${list.length} points</span></summary><div class="pick">${list.map(s=>`<button data-train="${s.id}"><span>${esc(s.name)}</span>${UI.meter(mOf(s.id), 3, `${mOf(s.id)} sur 3`)}</button>`).join("")}</div></details>`;
  $("startMix").onclick=()=>{ T=buildSession(); renderTrainer(); };
}

