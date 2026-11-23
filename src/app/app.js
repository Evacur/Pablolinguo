import { S, state } from "./data/state.js";
import { $, LANG, PACK, PACK_LIST, SKILLS, applyPack } from "./data/packs.js";
import { applyTheme, chain, questDone, saveProfile, toggleQuest, write } from "./data/writes.js";
import { closeProfile, meBack, meGo, openMe, prevLang, renderMe, setLang, setLevel } from "./screens/profile.js";
import { hello, render, toggleLvlPop } from "./screens/home.js";
import { addMyWord, renderMyWords, renderWords, say } from "./screens/words.js";
import { buildSession } from "./screens/train/session.js";
import { renderTrainer } from "./screens/train/exercise.js";
import { keepGaps, listenCheck, listenItems, renderListen, renderListenQs } from "./screens/cours/listen.js";
import { renderCours } from "./screens/cours/index.js";

async function deleteAccount(){
  const b=$("delGo"); b.disabled=true; $("delMsg").textContent="Suppression en cours…";
  try{ await chain; await state.RT.deleteAccount(); location.replace("/"); }
  catch(e){ b.disabled=false; $("delMsg").textContent="La suppression n'a pas marché. Réessaie dans un moment."; }
}
export const VIEWS=["board","train","words","cours"];
export function show(v){
  VIEWS.forEach(x=>{ $("view-"+x).hidden = x!==v; $("tab-"+x).setAttribute("aria-selected", x===v); });
  if(v!=="train") document.body.classList.remove("in-ex");
  if(v==="train") renderTrainer(); if(v==="words") renderWords(); if(v==="cours") renderCours();
  window.scrollTo(0,0);
  try{ history.replaceState(null,"","#"+v); }catch(e){}
}
document.addEventListener("click", e=>{
  if(e.target.closest("#lvlBtn")){ toggleLvlPop(); return; }
  const av=e.target.closest("[data-av]"); if(av){ S.avatar={...S.avatar,e:av.dataset.av}; renderMe(); saveProfile(); return; }
  const avc=e.target.closest("[data-avc]"); if(avc){ S.avatar={...S.avatar,c:avc.dataset.avc}; renderMe(); saveProfile(); return; }
  if(e.target.closest("#meBack")){ meBack(); return; }
  const mg=e.target.closest("[data-me]"); if(mg){ meGo(mg.dataset.me); return; }
  const ma=e.target.closest("[data-me-act]"); if(ma){ meAct(ma.dataset.meAct); return; }
  if(!$("lvlPop").hidden && !e.target.closest("#lvlPop")) toggleLvlPop(false);
  const lv=e.target.closest("[data-lvl]"); if(lv){ setLevel(lv.dataset.lvl); return; }
  const lg=e.target.closest("[data-lang]"); if(lg){ toggleLvlPop(false); setLang(lg.dataset.lang); return; }
  if(e.target.closest("[data-profile]")){ openMe(); return; }
  if(e.target.closest("#onbClose")){ if(state.onbMode==="newlang" && !S.levels[LANG] && prevLang){ state.onbMode=null; $("onb").hidden=true; setLang(prevLang); } else closeProfile(); return; }

  if(e.target.closest("#delNo")){ meBack(); return; }
  if(e.target.closest("#delGo")){ deleteAccount(); return; }
  const ct=e.target.closest("[data-ctab]"); if(ct){ state.coursTab=ct.dataset.ctab; if($("view-cours").hidden) show("cours"); else renderCours(); return; }
  const go=e.target.closest("[data-go]"); if(go){ state.T=null; show(go.dataset.go); return; }
  const tab=e.target.closest("[data-view]"); if(tab){ show(tab.dataset.view); return; }
  const tr=e.target.closest("[data-train]"); if(tr){ state.T=buildSession(tr.dataset.train); show("train"); return; }
  const q=e.target.closest("[data-quest]"); if(q){ if(q.dataset.auto && !questDone(q.dataset.quest)){ state.T=null; show(q.dataset.auto); return; } toggleQuest(q.dataset.quest); return; }
  const sy=e.target.closest("[data-say]"); if(sy){ say(sy.dataset.say, sy.dataset.ex); return; }
  const wd=e.target.closest("[data-wdel]"); if(wd){ const id=wd.dataset.wdel; state.MY=state.MY.filter(m=>m.id!==id); state.MY_ALL=state.MY_ALL.filter(m=>m.id!==id); renderMyWords(); write(()=>S.db.doc("mywords/"+id).delete()); return; }
  const ll=e.target.closest("[data-llvl]"); if(ll){ state.listenLvl=ll.dataset.llvl; state.listenSel=null; renderListen(); return; }
  const ls=e.target.closest("[data-lsel]"); if(ls){ state.listenSel=ls.dataset.lsel||null; state.listenAns={}; state.listenChecked=false; if(state.TTS&&state.TTS.stop) state.TTS.stop(); renderListen(); window.scrollTo(0,0); return; }
  const lo=e.target.closest("[data-lopt]"); if(lo){ const [i,j]=lo.dataset.lopt.split(":").map(Number); keepGaps(); state.listenAns[i]=j; renderListenQs(); return; }
  const lt=e.target.closest("[data-ltf]"); if(lt){ const [i,b]=lt.dataset.ltf.split(":"); keepGaps(); state.listenAns[+i]=(b==="true"); renderListenQs(); return; }
  if(e.target.closest("[data-lcheck]")){ listenCheck(); return; }
  if(e.target.closest("[data-lretry]")){ state.listenAns={}; state.listenChecked=false; renderListenQs(); return; }
  const lr=e.target.closest("[data-lrate]"); if(lr){ const v=$("lPlayer"); if(v) v.playbackRate=+lr.dataset.lrate; return; }
  if(e.target.closest("[data-lback]")){ const v=$("lPlayer"); if(v) v.currentTime=Math.max(0,v.currentTime-10); return; }
  const lsy=e.target.closest("[data-lsay]"); if(lsy){ const it=listenItems().find(x=>x.id===state.listenSel); if(state.TTS&&it&&it.media.lines) state.TTS.speak(it.media.lines.map(([,t])=>({text:t, language:PACK.tts, rate:+lsy.dataset.lsay}))).catch(()=>{ /* speech cancelled or no voice: nothing to show */ }); return; }
  const co=e.target.closest("[data-cours]"); if(co){ state.coursSel=co.dataset.cours; renderCours(); return; }
  const gle=e.target.closest("[data-glesson]"); if(gle){ const s=SKILLS.find(x=>x.id===gle.dataset.glesson); if(s){ state.coursTab="gram"; state.gramSel=s.id; renderCours(); window.scrollTo(0,0); } return; }
  const gs=e.target.closest("[data-gskill]"); if(gs){ state.gramSel=gs.dataset.gskill; renderCours(); return; }
  const th=e.target.closest("[data-wtheme]"); if(th){ state.themeSel=th.dataset.wtheme; renderWords(); return; }
});
function meAct(a){
  if(a==="signout"){ if(state.RT&&state.RT.signOut) state.RT.signOut(); return; }
  if(a==="install"){ const i=window.__plInstall; if(i&&i.prompt) i.prompt(); return; }
  if(a.startsWith("theme-")){ applyTheme(a.slice(6)); saveProfile(); renderMe(); return; }
}
document.addEventListener("keydown", e=>{ if(e.key==="Escape" && !$("me").hidden && $("onb").hidden) meBack(); if((e.key==="Enter"||e.key===" ") && e.target.matches&&e.target.matches('.avatar[data-me]')){ e.preventDefault(); meGo("avatar"); } });
document.addEventListener("submit", e=>{
  if(e.target.id==="nameForm"){ e.preventDefault(); S.name=$("pName").value.trim().slice(0,40); $("hello").textContent=hello(); saveProfile(); toast("wink","C'est noté", S.name? "Salut "+S.name+" !" : "Prénom retiré."); meBack(); return; }
  if(e.target.id==="myForm"){ e.preventDefault(); addMyWord(); }
  if(e.target.id==="pwForm"){ e.preventDefault(); const pw=$("pPass").value; if(!state.RT||!state.RT.changePassword) return;
    $("pwGo").disabled=true; $("pwMsg").textContent="";
    state.RT.changePassword(pw).then(()=>{ $("pPass").value=""; $("pwMsg").textContent="C'est fait : utilise ce nouveau mot de passe la prochaine fois."; toast("cool","Mot de passe changé","Il sert dès ta prochaine connexion."); },
      err=>{ $("pwMsg").textContent= String(err&&err.message||"").includes("different")? "Choisis un mot de passe différent de l'actuel." : "Changement impossible pour l'instant. Réessaie dans un moment."; })
      .finally(()=>{ $("pwGo").disabled=false; }); }
});
document.querySelectorAll("[data-emo]").forEach(x=>{ x.innerHTML=emo(x.dataset.emo,24); });
// Boot: load the last language used on this device (English the first time), then draw. Until then, taps are ignored.
const BOOT_LANG=(()=>{ try{ const l=localStorage.getItem("pl-lang"); return PACK_LIST().some(x=>x.code===l)? l : "en"; }catch(e){ return "en"; } })();
document.addEventListener("click", e=>{ if(!PACK && !e.target.closest("#bootErr")){ e.stopPropagation(); e.preventDefault(); } }, true);
export const BOOT=window.loadLang(BOOT_LANG).then(()=>{
  applyPack(BOOT_LANG);
  const h=(location.hash||"").slice(1); render(); show(VIEWS.includes(h)?h:"board");
}, ()=>{ $("bootErr").hidden=false; document.querySelectorAll(".wrap,.tabbar").forEach(x=>{ x.hidden=true; }); });

