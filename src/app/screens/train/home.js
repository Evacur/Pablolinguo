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
    <div class="col" style="gap:6px"><span class="hello">Russe · on commence par lire</span><h2>${esc(nx.t)}</h2>
    <span class="serif">Leçon ${nxi} sur ${abcLessons().length} de l'alphabet · ${esc(nx.sub)}</span></div>
    <button class="btn" data-abc="${nx.id}">${emo("wink",15)}Commencer</button>
  </div>
  <div class="row"><button class="mini" id="startMix">Je lis déjà le cyrillique : mélange du jour</button></div>` : `
  <div class="banner">
    <span class="face">${emo("think",45)}</span>
    <div class="col" style="gap:6px"><span class="hello">${esc(PACK.name)} · niveau ${L}</span><h2>Mélange du jour</h2>
    <span class="serif">10 exercices variés, surtout tes points faibles</span></div>
    <button class="btn" id="startMix">${emo("wink",15)}Commencer</button>
  </div>`) + `
  <div class="section-title"><h2>Par thème</h2><span class="label">exercices de ton niveau et d'avant</span></div>
  <div class="themes">${THEMES.map(t=>{ const n=thCount(t); return `<button class="theme" data-ttheme="${t}" ${n<4?"disabled":""}><b>${esc(t)}</b><span class="label">${n} exercices</span></button>`; }).join("")}</div>
  <div class="panel boss-card">
    <div class="panel-head"><h2>Défi du niveau ${L}</h2>${passed?`<span class="pill p-good">Validé</span>`:`<span class="label">${p} % maîtrisé</span>`}</div>
    <p class="ex">${passed? `Tu l'as réussi avec ${passed.best}/10. Tu peux le refaire quand tu veux.` : p>=80? "Débloqué : 10 phrases bonus plus dures. 8/10 et le niveau est validé." : "Il se débloque à 80 % des points maîtrisés. Tu peux déjà le tenter si tu te sens prêt."}</p>
    <div class="row"><button class="btn ${p>=80&&!passed?"":"ghost"}" data-boss="${L}" ${boss.length?"":"disabled"}>Tenter le défi</button></div>
  </div>
  <details class="panel fold"><summary><h2>Par point de grammaire</h2><span class="label">${list.length} points</span></summary><div class="pick">${list.map(s=>`<button data-train="${s.id}"><span>${esc(s.name)}</span><span class="meter" aria-label="${mOf(s.id)} sur 3">${[0,1,2].map(i=>`<i class="${i<mOf(s.id)?"on":""}"></i>`).join("")}</span></button>`).join("")}</div></details>`;
  $("startMix").onclick=()=>{ T=buildSession(); renderTrainer(); };
}

