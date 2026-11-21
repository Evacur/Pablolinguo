// ---------- End of a series, and the level challenge ----------
function badgeOf(l){ return ((S.badges||{})[LANG]||{})[l]||null; }
function bossDone(){
  const ok=T.results.filter(Boolean).length, L=T.arg, passed=ok>=8; T.bossScore=ok; T.passed=passed;
  const prev=badgeOf(L);
  if(passed){
    const b={...(S.badges||{})}; b[LANG]={...(b[LANG]||{}), [L]:{best:Math.max(ok, prev?prev.best:0), d:today()}}; S.badges=b;
    write(()=>S.db.doc("me/badges").set(b));
    addXp(100);
    const next=LV[lvIdx(L)+1]; if(next && lvIdx(lvl())<=lvIdx(L)){ S.levels={...S.levels,[LANG]:next}; saveProfile(); T.newLevel=next; }
  }
}
function renderEnd(el){
  const ok=T.results.filter(Boolean).length, n=T.items.length;
  if(T.mode==="boss"){
    const missed=[...new Set(T.items.filter((x,k)=>!T.results[k]).flatMap(x=>x.sk||[]))].map(id=>SKILLS.find(s=>s.id===id)).filter(Boolean);
    el.innerHTML=T.passed? `<div class="win"><div class="confetti" aria-hidden="true">${Array.from({length:18},(_,k)=>`<i style="left:${(k*53)%100}%;animation-delay:${(k%6)*.12}s"></i>`).join("")}</div>
      ${emo("party",90)}<span class="label">Défi ${esc(T.arg)} réussi</span><h2>${ok}/${n}</h2>
      <p>${T.newLevel? `Niveau ${esc(T.arg)} validé. Tu passes au ${esc(T.newLevel)} : ${esc(LV_INFO[T.newLevel][0].toLowerCase())}.` : `Niveau ${esc(T.arg)} validé, bravo.`}</p>
      <div class="row" style="justify-content:center"><button class="btn" id="toBoard">Voir mon parcours</button></div></div>`
    : `<div class="card"><div class="vhead">${emo(ok>=6?"wink":"sad",60)}<div><span class="label">Défi ${esc(T.arg)}</span><div class="prompt">${ok}/${n}</div></div></div>
      <p class="ex">Il faut 8/10 pour valider. Tu peux retenter quand tu veux : les phrases changent à chaque fois.</p>
      ${missed.length?`<div class="col" style="gap:0"><span class="label">À retravailler</span><div class="pick">${missed.map(s=>`<button data-train="${s.id}"><span>${esc(s.name)}</span><span class="mini">S'entraîner</span></button>`).join("")}</div></div>`:""}
      <div class="row"><button class="btn" id="again">Retenter</button><button class="btn ghost" id="toBoard">Retour</button></div></div>`;
    if($("again")) $("again").onclick=()=>{ T=buildSession(T.arg,"boss"); renderTrainer(); };
    $("toBoard").onclick=()=>{ T=null; show("plan"); };
    return;
  }
  if(T.mode==="abc"){
    const les=abcLessons().find(l=>l.id===T.arg)||{}, pass=ok>=8, nx=abcNext();
    el.innerHTML=`<div class="card"><div class="vhead">${emo(pass?"party":ok>=5?"wink":"sad",64)}<div><div class="label">${esc(les.t||"Alphabet")}</div><div class="prompt">${ok}/${n} justes</div></div></div>
      <p class="ex">${pass? (nx? `Leçon validée. La suivante : ${esc(nx.t.toLowerCase())}.` : "Tu as fini l'alphabet. Place aux premières phrases.") : "Il faut 8/10 pour valider la leçon. Les lettres changent d'ordre à chaque fois."}</p>
      <div class="row">${pass&&nx? `<button class="btn" data-abc="${nx.id}">Leçon suivante</button>` : pass? `<button class="btn" id="mixNow">Mélange du jour</button>` : `<button class="btn" data-abc="${esc(T.arg)}">Recommencer</button>`}<button class="btn ghost" id="toBoard">Accueil</button></div></div>`;
    if($("mixNow")) $("mixNow").onclick=()=>{ T=buildSession(); renderTrainer(); };
    $("toBoard").onclick=()=>{ T=null; show("board"); };
    return;
  }
  const endFace= ok===n?"party": ok>=n*.6?"wink":"sad";
  el.innerHTML=`<div class="card"><div class="vhead">${emo(endFace,64)}<div><div class="label">Série terminée</div><div class="prompt">${ok}/${n} justes</div></div></div>
   <p class="ex">${ok===n?"Parfait. Tes points montent.":ok>=n*.6?"Bien joué. Relis les phrases ratées à voix haute.":"Ce n'est pas grave : les phrases ratées reviendront bientôt."}</p>
   <div class="row"><button class="btn" id="again">Encore une série</button><button class="btn ghost" id="toBoard">Accueil</button></div></div>`;
  $("again").onclick=()=>{ T=buildSession(T.arg,T.mode); renderTrainer(); };
  $("toBoard").onclick=()=>{ T=null; show("board"); };
}

