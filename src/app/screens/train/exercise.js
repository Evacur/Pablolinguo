// ---------- Exercise screen ----------
const blankHtml = (s, fill) => esc(s).replace("___", `<span class="blank">${fill?esc(fill):"&nbsp;"}</span>`);
function itemAnswer(it){ return it.t==="pick"? it.o[it.a] : it.t==="qcm"? it.s.replace("___", it.o[it.a]) : it.t==="gap"? it.s.replace("___", it.a[0]) : it.t==="match"? "" : it.a[0]; }
function renderTrainer(){
  const el=$("trainer");
  if(!T){ document.body.classList.remove("in-ex"); trainerHome(el); return; }
  document.body.classList.add("in-ex");
  if(T.i>=T.items.length) return renderEnd(el);
  const it=T.items[T.i]; const sk=it.skill? SKILLS.find(s=>s.id===it.skill) : null;
  const top=`<div class="ex-top"><button class="x" id="quit" aria-label="Quitter la série">✕</button>
    <div class="bar2"><i style="width:${Math.round(T.i/T.items.length*100)}%"></i></div><span class="num label">${T.i+1}/${T.items.length}</span></div>`;
  const head=`<div class="row"><span class="kind">${it.join===""?"Écris avec les lettres":it.listen?"Écoute":KIND_LBL[it.t]}</span>${T.mode==="boss"?`<span class="kind boss">Défi ${esc(T.arg)}</span>`:""}${sk&&T.mode!=="boss"?`<span class="label">${esc(sk.name)}</span>`:""}</div>`;
  let body="";
  const done=T.phase!=="ask" && T.phase!=="judging";
  if(it.t==="tr"){
    body=`<div class="prompt">${esc(it.fr)}</div>
      <form class="answer-row" id="ansForm"><input id="ans" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${esc(PACK.placeholder)}" value="${esc(T.given)}" ${done?"disabled":""}${kbAttr()}><button type="button" class="icon-btn" id="mic" hidden aria-label="Dicter">🎙</button></form>${done?"":kbHtml("ans")}`;
  } else if(it.t==="gap"){
    body=`<div class="prompt">${blankHtml(it.s, done? T.given : "")}</div>${it.h?`<span class="hint">(${esc(it.h)})</span>`:""}<p class="ex">${esc(it.fr)}</p>
      <form class="answer-row" id="ansForm"><input id="ans" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Le mot qui manque" value="${esc(T.given)}" ${done?"disabled":""}${kbAttr()}></form>${done?"":kbHtml("ans","word")}`;
  } else if(it.t==="qcm"){
    body=`<div class="prompt">${blankHtml(it.s, done? it.o[T.picked] : "")}</div><p class="ex">${esc(it.fr)}</p>
      <div class="opts">${it.o.map((o,k)=>`<button class="opt ${done&&k===it.a?"good":""} ${done&&k===T.picked&&k!==it.a?"bad":""}" data-opt="${k}" ${done?"disabled":""}>${esc(o)}</button>`).join("")}</div>`;
  } else if(it.t==="pick"){
    body=`${it.big?`<div class="abc-big${[...it.big].length>2?" w":""}" lang="ru">${esc(it.big)}</div>`:""}${it.listen&&TTS?`<div class="row" style="justify-content:center"><button class="btn ghost" data-say="${esc(it.listen)}">🔊 Écouter</button></div>`:""}<div class="prompt small">${esc(it.q)}</div>
      <div class="opts">${it.o.map((o,k)=>`<button class="opt ${done&&k===it.a?"good":""} ${done&&k===T.picked&&k!==it.a?"bad":""}" data-opt="${k}" ${done?"disabled":""}>${esc(o)}</button>`).join("")}</div>`;
  } else if(it.t==="order"){
    if(!T.tiles){ let sh=shuffle(it.words.map((w,k)=>({w,k}))); if(sh.every((x,k)=>x.k===k)) sh=sh.reverse(); T.tiles=sh; T.built=[]; }
    body=`<div class="prompt small">${esc(it.fr)}</div>
      <div class="built${it.join===""?" letters":""}" aria-label="Ta réponse">${T.built.length? T.built.map((k,j)=>`<button class="tile on" data-unt="${j}" ${done?"disabled":""}>${esc(T.tiles[k].w)}</button>`).join("") : `<span class="label">Touche les ${it.join===""?"lettres":"mots"} dans l'ordre</span>`}</div>
      <div class="tiles">${T.tiles.map((x,k)=>`<button class="tile" data-tile="${k}" ${T.built.includes(k)||done?"disabled":""}>${esc(x.w)}</button>`).join("")}</div>`;
  } else if(it.t==="match"){
    if(!T.m){ T.m={left:shuffle(it.pairs.map((p,k)=>k)), right:shuffle(it.pairs.map((p,k)=>k)), sel:null, got:[], miss:0, flash:null}; }
    const M=T.m;
    body=`<div class="prompt small">Relie chaque mot à sa traduction</div>
      <div class="match"><div class="col" style="gap:8px">${M.left.map(k=>`<button class="tile wide ${M.got.includes(k)?"good":""} ${M.sel===k?"sel":""}" data-ml="${k}" ${M.got.includes(k)?"disabled":""}>${esc(it.pairs[k].en)}</button>`).join("")}</div>
      <div class="col" style="gap:8px">${M.right.map(k=>`<button class="tile wide ${M.got.includes(k)?"good":""} ${M.flash===k?"bad":""}" data-mr="${k}" ${M.got.includes(k)?"disabled":""}>${esc(it.pairs[k].fr)}</button>`).join("")}</div></div>`;
  }
  const canCheck = it.t==="tr"||it.t==="gap"||(it.t==="order"&&T.built.length);
  const foot = T.phase==="ask" && it.t!=="qcm" && it.t!=="pick" && it.t!=="match" ? `<div class="ex-foot"><button class="btn" id="checkBtn" ${canCheck?"":"disabled"}>Vérifier</button></div>` : "";
  el.innerHTML=top+`<div class="card ex-card">${head}${body}</div>`+foot+resultSheet(it, sk);
  if(T.phase==="ask"){
    if(it.listen && TTS && !T.heard){ T.heard=true; setTimeout(()=>say(it.listen), 250); }
    const inp=$("ans"); if(inp){ inp.focus({preventScroll:true}); $("ansForm").onsubmit=e=>{ e.preventDefault(); check(inp.value); }; if(it.t==="tr") setupMic(inp); }
    const cb=$("checkBtn"); if(cb) cb.onclick=()=>{ if(it.t==="order") checkOrder(); else check($("ans").value); };
  } else if(done){
    setupSay(it.t==="pick"? it.say : itemAnswer(it));
    if($("next")) { $("next").onclick=nextItem; $("next").focus({preventScroll:true}); }
    if($("mine")) $("mine").onclick=()=>{ finish(true); };
    if($("miss")) $("miss").onclick=()=>{ finish(false); };
  }
  $("quit").onclick=()=>{ T=null; renderTrainer(); };
}
function resultSheet(it, sk){
  if(T.phase==="ask") return "";
  if(T.phase==="judging") return `<div class="res mid"><div class="vhead">${emo("think",40)}<b>Le prof corrige ta réponse…</b></div></div>`;
  const ok=T.phase==="ok", mid=T.phase==="mid";
  const cls= ok?"ok": mid?"mid":"ko";
  const title= ok? (T.variant?"Juste ! Ta version marche aussi.": it.t==="match"? (T.m.miss? `Fini, avec ${T.m.miss} erreur${T.m.miss>1?"s":""}`:"Parfait !") : "Juste !") : mid? "Presque, vérifie" : "Pas encore";
  const face= ok?(T.variant?"cool":"grin"): mid?"think":"sad";
  let detail="";
  if(it.t==="tr"){
    const d=diffHtml(T.given, T.best||it.a[0]);
    detail= ok? `<span class="ans">${esc(T.variant?T.given:it.a[0])}</span>${T.variant?`<span class="ex">Version modèle : ${esc(it.a[0])}</span>`:""}`
      : `<span>Toi : ${d.mine}</span><span class="ans">${d.right}</span>${it.a.length>1?`<span class="ex">Aussi accepté : ${it.a.filter(a=>a!==(T.best||it.a[0])).slice(0,2).map(esc).join(" · ")}</span>`:""}`;
  } else if(it.t==="order"){
    detail=`<span class="ans">${esc(it.a[0])}</span>`;
  } else if(it.t!=="match"){
    detail=`<span class="ans">${esc(itemAnswer(it))}</span>${!ok&&T.given&&it.t==="gap"?`<span>Toi : <del class="bad-w">${esc(T.given)}</del></span>`:""}`;
  }
  const errs=(T.ai&&Array.isArray(T.ai.errors))? T.ai.errors.filter(x=>x&&x.why).slice(0,4):[];
  const why= it.why? `<p class="why">${esc(it.why)}</p>` : "";
  const rule= sk? `<details class="fold-in"><summary>La règle · ${esc(sk.name)}</summary><p class="ex">${esc(RULES[sk.id]||"")}</p></details>` : "";
  return `<div class="res ${cls}"><div class="vhead">${emo(face,40)}<b>${title}</b></div>${detail}${why}
    ${errs.length?`<div class="prof">${errs.map(x=>`<div class="perr"><span><del class="bad-w">${esc(x.wrong||"")}</del> → <mark class="add-w">${esc(x.right||"")}</mark></span><span>${esc(x.why)}</span></div>`).join("")}${T.ai.tip?`<div class="ex">💡 ${esc(T.ai.tip)}</div>`:""}</div>`:""}
    ${rule}
    <div class="row"><button class="btn ghost" id="say" hidden>🔊 Écouter</button>${mid?`<button class="btn" id="mine">J'avais bon</button><button class="btn bad" id="miss">C'était faux</button>`:`<button class="btn" id="next">Continuer</button>`}</div></div>`;
}
function bestAnswer(it, n){ let best=it.a[0], sc=-1; it.a.forEach(a=>{ const A=norm(a).split(" "), B=n.split(" "); const c=B.filter(w=>A.includes(w)).length; if(c>sc){sc=c;best=a;} }); return best; }
function check(v){
  const it=T.items[T.i]; T.given=String(v||"").trim(); if(!T.given){ const i=$("ans"); i&&i.focus(); return; }
  const n=norm(T.given); T.ai=null;
  if(it.t==="gap"){ T.phase= it.a.some(a=>sameAns(a,T.given))? "ok" : "ko"; record(T.phase==="ok"); renderTrainer(); return; }
  T.best=bestAnswer(it,n);
  if(it.a.some(a=>sameAns(a,T.given))){ T.phase="ok"; record(true); renderTrainer(); return; }
  const close=it.a.some(a=>similar(norm(a),n));
  if(!SAMPLE){ T.phase= close? "mid" : "ko"; if(!close) record(false); renderTrainer(); return; }
  T.phase="judging"; renderTrainer(); const idx=T.i, sess=T; const sk=SKILLS.find(s=>s.id===it.skill)||{name:"",id:""};
  SAMPLE.correct({lang:LANG, level:lvl(), fr:it.fr, ans:it.a, given:T.given.slice(0,300), skill:sk.name, rule:RULES[sk.id]||""})
  .then(r=>{ if(T!==sess||T.i!==idx) return; T.ai=r||{}; if(r&&r.correct===true){ T.phase="ok"; T.variant=true; record(true); } else { T.phase="ko"; record(false); } renderTrainer(); })
  .catch(e=>{ if(T!==sess||T.i!==idx) return; if(e&&e.code==="not_granted") SAMPLE=null; T.phase= close? "mid":"ko"; if(!close) record(false); renderTrainer(); });
}
function checkOrder(){
  const it=T.items[T.i]; const s=T.built.map(k=>T.tiles[k].w).join(it.join??" "); T.given=s;
  const ok=it.a.some(a=>norm(a)===norm(s)); T.phase= ok?"ok":"ko"; record(ok); renderTrainer();
}
function similar(a,b){ // word overlap, to spot a valid variant worth self-grading
  const A=a.split(" "), B=b.split(" "); const common=B.filter(w=>A.includes(w)).length; return common/Math.max(A.length,B.length)>=.7;
}
function record(ok){
  cheer(ok); const it=T.items[T.i]; T.results[T.i]=ok;
  if(it.skill && !it.boss) recordSkill(it.skill, ok);
  saveSeen(it, ok); addXp(ok?10:2);
}
function finish(ok){ record(ok); nextItem(); }
function nextItem(){
  T.i++; T.phase="ask"; T.given=""; T.picked=null; T.tiles=null; T.built=null; T.m=null; T.variant=false; T.ai=null; T.heard=false;
  if(T.i>=T.items.length && T.mode==="abc") abcSave(T.arg, T.results.filter(Boolean).length);
  if(T.i>=T.items.length && T.mode!=="boss" && T.items.length>=6 && !questDone("drill")) addXp(20,"drill");
  if(T.i>=T.items.length && T.mode==="boss") bossDone();
  renderTrainer(); window.scrollTo(0,0);
}
document.addEventListener("click", e=>{
  if(!T || T.i>=T.items.length) return; const it=T.items[T.i];
  const op=e.target.closest("[data-opt]"); if(op && T.phase==="ask"){ T.picked=+op.dataset.opt; T.given=it.o[T.picked]; T.phase= T.picked===it.a? "ok":"ko"; record(T.phase==="ok"); renderTrainer(); return; }
  const tl=e.target.closest("[data-tile]"); if(tl && T.phase==="ask"){ T.built.push(+tl.dataset.tile); renderTrainer(); return; }
  const un=e.target.closest("[data-unt]"); if(un && T.phase==="ask"){ T.built.splice(+un.dataset.unt,1); renderTrainer(); return; }
  const ml=e.target.closest("[data-ml]"); if(ml && T.phase==="ask"){ T.m.sel=+ml.dataset.ml; T.m.flash=null; renderTrainer(); return; }
  const mr=e.target.closest("[data-mr]"); if(mr && T.phase==="ask" && T.m.sel!==null){
    const k=+mr.dataset.mr; if(k===T.m.sel){ T.m.got.push(k); T.m.sel=null; T.m.flash=null; } else { T.m.miss++; T.m.flash=k; }
    if(T.m.got.length===it.pairs.length){ T.phase= T.m.miss<=1? "ok":"ko"; T.results[T.i]=T.phase==="ok"; cheer(T.phase==="ok"); addXp(T.phase==="ok"?10:2); }
    renderTrainer(); return; }
});
document.addEventListener("click", e=>{
  const tt=e.target.closest("[data-ttheme]"); if(tt){ T=buildSession(tt.dataset.ttheme,"theme"); show("train"); return; }
  const bs=e.target.closest("[data-boss]"); if(bs){ T=buildSession(bs.dataset.boss,"boss"); show("train"); }
});

