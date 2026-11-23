// ---------- Exercise screen ----------
import { state } from "../../data/state.js";
import { cheer } from "../../lib/cheer.js";
import { norm, sameAns } from "../../lib/answers.js";
import { $, LANG, PACK, RULES, SKILLS, esc, lvl } from "../../data/packs.js";
import { addXp, questDone, recordSkill } from "../../data/writes.js";
import { diffHtml, say } from "../words.js";
import { kbAttr, kbHtml } from "../../components/russian-keyboard.js";
import { KIND_LBL, shuffle } from "./trainer.js";
import { abcSave, buildSession, saveSeen } from "./alphabet.js";
import { trainerHome } from "./home.js";
import { bossDone, renderEnd } from "./end.js";
import { setupMic, setupSay } from "../../lib/voice.js";
import { show } from "../../app.js";
const blankHtml = (s, fill) => esc(s).replace("___", `<span class="blank">${fill?esc(fill):"&nbsp;"}</span>`);
function itemAnswer(it){ return it.t==="pick"? it.o[it.a] : it.t==="qcm"? it.s.replace("___", it.o[it.a]) : it.t==="gap"? it.s.replace("___", it.a[0]) : it.t==="match"? "" : it.a[0]; }
export function renderTrainer(){
  const el=$("trainer");
  if(!state.T){ document.body.classList.remove("in-ex"); trainerHome(el); return; }
  document.body.classList.add("in-ex");
  if(state.T.i>=state.T.items.length) return renderEnd(el);
  const it=state.T.items[state.T.i]; const sk=it.skill? SKILLS.find(s=>s.id===it.skill) : null;
  const top=`<div class="ex-top"><button class="x" id="quit" aria-label="Quitter la série">✕</button>
    <div class="bar2"><i style="width:${Math.round(state.T.i/state.T.items.length*100)}%"></i></div><span class="num label">${state.T.i+1}/${state.T.items.length}</span></div>`;
  const head=`<div class="row"><span class="kind">${it.join===""?"Écris avec les lettres":it.listen?"Écoute":KIND_LBL[it.t]}</span>${state.T.mode==="boss"?`<span class="kind boss">Défi ${esc(state.T.arg)}</span>`:""}${sk&&state.T.mode!=="boss"?`<span class="label">${esc(sk.name)}</span>`:""}</div>`;
  let body="";
  const done=state.T.phase!=="ask" && state.T.phase!=="judging";
  if(it.t==="tr"){
    body=`<div class="prompt">${esc(it.fr)}</div>
      <form class="answer-row" id="ansForm"><input id="ans" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${esc(PACK.placeholder)}" value="${esc(state.T.given)}" ${done?"disabled":""}${kbAttr()}>${UI.iconButton(`${pic("mic",20)}`, {label:`Dicter`, attrs:`type="button" id="mic" hidden`})}</form>${done?"":kbHtml("ans")}`;
  } else if(it.t==="gap"){
    body=`<div class="prompt">${blankHtml(it.s, done? state.T.given : "")}</div>${it.h?`<span class="hint">(${esc(it.h)})</span>`:""}<p class="ex">${esc(it.fr)}</p>
      <form class="answer-row" id="ansForm"><input id="ans" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Le mot qui manque" value="${esc(state.T.given)}" ${done?"disabled":""}${kbAttr()}></form>${done?"":kbHtml("ans","word")}`;
  } else if(it.t==="qcm"){
    body=`<div class="prompt">${blankHtml(it.s, done? it.o[state.T.picked] : "")}</div><p class="ex">${esc(it.fr)}</p>
      <div class="opts">${it.o.map((o,k)=>`<button class="opt ${done&&k===it.a?"good":""} ${done&&k===state.T.picked&&k!==it.a?"bad":""}" data-opt="${k}" ${done?"disabled":""}>${esc(o)}</button>`).join("")}</div>`;
  } else if(it.t==="pick"){
    body=`${it.big?`<div class="abc-big${[...it.big].length>2?" w":""}" lang="ru">${esc(it.big)}</div>`:""}${it.listen&&state.TTS?`<div class="row" style="justify-content:center">${UI.button(`${pic("speaker",16)} Écouter`, {variant:"ghost", attrs:`data-say="${esc(it.listen)}"`})}</div>`:""}<div class="prompt small">${esc(it.q)}</div>
      <div class="opts">${it.o.map((o,k)=>`<button class="opt ${done&&k===it.a?"good":""} ${done&&k===state.T.picked&&k!==it.a?"bad":""}" data-opt="${k}" ${done?"disabled":""}>${esc(o)}</button>`).join("")}</div>`;
  } else if(it.t==="order"){
    if(!state.T.tiles){ let sh=shuffle(it.words.map((w,k)=>({w,k}))); if(sh.every((x,k)=>x.k===k)) sh=sh.reverse(); state.T.tiles=sh; state.T.built=[]; }
    body=`<div class="prompt small">${esc(it.fr)}</div>
      <div class="built${it.join===""?" letters":""}" aria-label="Ta réponse">${state.T.built.length? state.T.built.map((k,j)=>`<button class="tile on" data-unt="${j}" ${done?"disabled":""}>${esc(state.T.tiles[k].w)}</button>`).join("") : `<span class="label">Touche les ${it.join===""?"lettres":"mots"} dans l'ordre</span>`}</div>
      <div class="tiles">${state.T.tiles.map((x,k)=>`<button class="tile" data-tile="${k}" ${state.T.built.includes(k)||done?"disabled":""}>${esc(x.w)}</button>`).join("")}</div>`;
  } else if(it.t==="match"){
    if(!state.T.m){ state.T.m={left:shuffle(it.pairs.map((p,k)=>k)), right:shuffle(it.pairs.map((p,k)=>k)), sel:null, got:[], miss:0, flash:null}; }
    const M=state.T.m;
    body=`<div class="prompt small">Relie chaque mot à sa traduction</div>
      <div class="match"><div class="col" style="gap:var(--sp-2)">${M.left.map(k=>`<button class="tile wide ${M.got.includes(k)?"good":""} ${M.sel===k?"sel":""}" data-ml="${k}" ${M.got.includes(k)?"disabled":""}>${esc(it.pairs[k].en)}</button>`).join("")}</div>
      <div class="col" style="gap:var(--sp-2)">${M.right.map(k=>`<button class="tile wide ${M.got.includes(k)?"good":""} ${M.flash===k?"bad":""}" data-mr="${k}" ${M.got.includes(k)?"disabled":""}>${esc(it.pairs[k].fr)}</button>`).join("")}</div></div>`;
  }
  const canCheck = it.t==="tr"||it.t==="gap"||(it.t==="order"&&state.T.built.length);
  const foot = state.T.phase==="ask" && it.t!=="qcm" && it.t!=="pick" && it.t!=="match" ? `<div class="ex-foot">${UI.button(`Vérifier`, {attrs:`id="checkBtn" ${canCheck?"":"disabled"}`})}</div>` : "";
  el.innerHTML=top+UI.card(head+body, {cls:"ex-card"})+foot+resultSheet(it, sk);
  if(state.T.phase==="ask"){
    if(it.listen && state.TTS && !state.T.heard){ state.T.heard=true; setTimeout(()=>say(it.listen), 250); }
    const inp=$("ans"); if(inp){ inp.focus({preventScroll:true}); $("ansForm").onsubmit=e=>{ e.preventDefault(); check(inp.value); }; if(it.t==="tr") setupMic(inp); }
    const cb=$("checkBtn"); if(cb) cb.onclick=()=>{ if(it.t==="order") checkOrder(); else check($("ans").value); };
  } else if(done){
    setupSay(it.t==="pick"? it.say : itemAnswer(it));
    if($("next")) { $("next").onclick=nextItem; $("next").focus({preventScroll:true}); }
    if($("mine")) $("mine").onclick=()=>{ finish(true); };
    if($("miss")) $("miss").onclick=()=>{ finish(false); };
  }
  $("quit").onclick=()=>{ state.T=null; renderTrainer(); };
}
function resultSheet(it, sk){
  if(state.T.phase==="ask") return "";
  if(state.T.phase==="judging") return UI.feedback("mid", "Le prof corrige ta réponse…", "", {face:"think", size:40, float:true});
  const ok=state.T.phase==="ok", mid=state.T.phase==="mid";
  const cls= ok?"ok": mid?"mid":"ko";
  const title= ok? (state.T.variant?"Juste ! Ta version marche aussi.": it.t==="match"? (state.T.m.miss? `Fini, avec ${state.T.m.miss} erreur${state.T.m.miss>1?"s":""}`:"Parfait !") : "Juste !") : mid? "Presque, vérifie" : "Pas encore";
  const face= ok?(state.T.variant?"cool":"grin"): mid?"think":"sad";
  let detail="";
  if(it.t==="tr"){
    const d=diffHtml(state.T.given, state.T.best||it.a[0]);
    detail= ok? `<span class="ans">${esc(state.T.variant?state.T.given:it.a[0])}</span>${state.T.variant?`<span class="ex">Version modèle : ${esc(it.a[0])}</span>`:""}`
      : `<span>Toi : ${d.mine}</span><span class="ans">${d.right}</span>${it.a.length>1?`<span class="ex">Aussi accepté : ${it.a.filter(a=>a!==(state.T.best||it.a[0])).slice(0,2).map(esc).join(" · ")}</span>`:""}`;
  } else if(it.t==="order"){
    detail=`<span class="ans">${esc(it.a[0])}</span>`;
  } else if(it.t!=="match"){
    detail=`<span class="ans">${esc(itemAnswer(it))}</span>${!ok&&state.T.given&&it.t==="gap"?`<span>Toi : <del class="bad-w">${esc(state.T.given)}</del></span>`:""}`;
  }
  const errs=(state.T.ai&&Array.isArray(state.T.ai.errors))? state.T.ai.errors.filter(x=>x&&x.why).slice(0,4):[];
  const why= it.why? `<p class="why">${esc(it.why)}</p>` : "";
  const rule= sk? `<details class="fold-in"><summary>La règle · ${esc(sk.name)}</summary><p class="ex">${esc(RULES[sk.id]||"")}</p></details>` : "";
  return UI.feedback(cls, title, `${detail}${why}
    ${errs.length?`<div class="prof">${errs.map(x=>`<div class="perr"><span><del class="bad-w">${esc(x.wrong||"")}</del> → <mark class="add-w">${esc(x.right||"")}</mark></span><span>${esc(x.why)}</span></div>`).join("")}${state.T.ai.tip?`<div class="ex">${pic("bulb",14)} ${esc(state.T.ai.tip)}</div>`:""}</div>`:""}
    ${rule}
    <div class="row">${UI.button(`${pic("speaker",16)} Écouter`, {variant:"ghost", attrs:`id="say" hidden`})}${mid?`${UI.button(`J'avais bon`, {attrs:`id="mine"`})}${UI.button(`C'était faux`, {variant:"destructive", attrs:`id="miss"`})}`:`${UI.button(`Continuer`, {attrs:`id="next"`})}`}</div>`, {face, size:40, float:true});
}
function bestAnswer(it, n){ let best=it.a[0], sc=-1; it.a.forEach(a=>{ const A=norm(a, LANG).split(" "), B=n.split(" "); const c=B.filter(w=>A.includes(w)).length; if(c>sc){sc=c;best=a;} }); return best; }
function check(v){
  const it=state.T.items[state.T.i]; state.T.given=String(v||"").trim(); if(!state.T.given){ const i=$("ans"); i&&i.focus(); return; }
  const n=norm(state.T.given, LANG); state.T.ai=null;
  if(it.t==="gap"){ state.T.phase= it.a.some(a=>sameAns(a,state.T.given,LANG))? "ok" : "ko"; record(state.T.phase==="ok"); renderTrainer(); return; }
  state.T.best=bestAnswer(it,n);
  if(it.a.some(a=>sameAns(a,state.T.given,LANG))){ state.T.phase="ok"; record(true); renderTrainer(); return; }
  const close=it.a.some(a=>similar(norm(a, LANG),n));
  if(!state.SAMPLE){ state.T.phase= close? "mid" : "ko"; if(!close) record(false); renderTrainer(); return; }
  state.T.phase="judging"; renderTrainer(); const idx=state.T.i, sess=state.T; const sk=SKILLS.find(s=>s.id===it.skill)||{name:"",id:""};
  state.SAMPLE.correct({lang:LANG, level:lvl(), fr:it.fr, ans:it.a, given:state.T.given.slice(0,300), skill:sk.name, rule:RULES[sk.id]||""})
  .then(r=>{ if(state.T!==sess||state.T.i!==idx) return; state.T.ai=r||{}; if(r&&r.correct===true){ state.T.phase="ok"; state.T.variant=true; record(true); } else { state.T.phase="ko"; record(false); } renderTrainer(); })
  .catch(e=>{ if(state.T!==sess||state.T.i!==idx) return; if(e&&e.code==="not_granted") state.SAMPLE=null; state.T.phase= close? "mid":"ko"; if(!close) record(false); renderTrainer(); });
}
function checkOrder(){
  const it=state.T.items[state.T.i]; const s=state.T.built.map(k=>state.T.tiles[k].w).join(it.join??" "); state.T.given=s;
  const ok=it.a.some(a=>norm(a, LANG)===norm(s, LANG)); state.T.phase= ok?"ok":"ko"; record(ok); renderTrainer();
}
function similar(a,b){ // word overlap, to spot a valid variant worth self-grading
  const A=a.split(" "), B=b.split(" "); const common=B.filter(w=>A.includes(w)).length; return common/Math.max(A.length,B.length)>=.7;
}
function record(ok){
  cheer(ok); const it=state.T.items[state.T.i]; state.T.results[state.T.i]=ok;
  if(it.skill && !it.boss) recordSkill(it.skill, ok);
  saveSeen(it, ok); addXp(ok?10:2);
}
function finish(ok){ record(ok); nextItem(); }
function nextItem(){
  state.T.i++; state.T.phase="ask"; state.T.given=""; state.T.picked=null; state.T.tiles=null; state.T.built=null; state.T.m=null; state.T.variant=false; state.T.ai=null; state.T.heard=false;
  if(state.T.i>=state.T.items.length && state.T.mode==="abc") abcSave(state.T.arg, state.T.results.filter(Boolean).length);
  if(state.T.i>=state.T.items.length && state.T.mode!=="boss" && state.T.items.length>=6 && !questDone("drill")) addXp(20,"drill");
  if(state.T.i>=state.T.items.length && state.T.mode==="boss") bossDone();
  renderTrainer(); window.scrollTo(0,0);
}
document.addEventListener("click", e=>{
  if(!state.T || state.T.i>=state.T.items.length) return; const it=state.T.items[state.T.i];
  const op=e.target.closest("[data-opt]"); if(op && state.T.phase==="ask"){ state.T.picked=+op.dataset.opt; state.T.given=it.o[state.T.picked]; state.T.phase= state.T.picked===it.a? "ok":"ko"; record(state.T.phase==="ok"); renderTrainer(); return; }
  const tl=e.target.closest("[data-tile]"); if(tl && state.T.phase==="ask"){ state.T.built.push(+tl.dataset.tile); renderTrainer(); return; }
  const un=e.target.closest("[data-unt]"); if(un && state.T.phase==="ask"){ state.T.built.splice(+un.dataset.unt,1); renderTrainer(); return; }
  const ml=e.target.closest("[data-ml]"); if(ml && state.T.phase==="ask"){ state.T.m.sel=+ml.dataset.ml; state.T.m.flash=null; renderTrainer(); return; }
  const mr=e.target.closest("[data-mr]"); if(mr && state.T.phase==="ask" && state.T.m.sel!==null){
    const k=+mr.dataset.mr; if(k===state.T.m.sel){ state.T.m.got.push(k); state.T.m.sel=null; state.T.m.flash=null; } else { state.T.m.miss++; state.T.m.flash=k; }
    if(state.T.m.got.length===it.pairs.length){ state.T.phase= state.T.m.miss<=1? "ok":"ko"; state.T.results[state.T.i]=state.T.phase==="ok"; cheer(state.T.phase==="ok"); addXp(state.T.phase==="ok"?10:2); }
    renderTrainer(); return; }
});
document.addEventListener("click", e=>{
  const tt=e.target.closest("[data-ttheme]"); if(tt){ state.T=buildSession(tt.dataset.ttheme,"theme"); show("train"); return; }
  const bs=e.target.closest("[data-boss]"); if(bs){ state.T=buildSession(bs.dataset.boss,"boss"); show("train"); }
});

