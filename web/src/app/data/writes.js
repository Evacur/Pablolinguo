// ---------- Writes (one at a time) ----------
import { QUESTS } from "../../../../shared/logic/levels.js";
import { afterAnswer, afterTest, passed } from "../../../../shared/logic/mastery.js";
import { PROG_BY, S } from "./state.js";
import { LANG, saveProg, today } from "./packs.js";
import { planDone, render, setStatus } from "../screens/home.js";
export let chain = Promise.resolve();
export function write(fn){ if(!S.db||!S.writable) return; chain = chain.then(fn).catch(e=>{ if(e&&e.code==="invalid_argument"){S.writable=false; setStatus("Tu peux voir la page, mais pas enregistrer ici.");} else setStatus("Enregistrement impossible pour l'instant. Réessaie dans un moment."); }); }
// A day counts for the streak as soon as something was done in it: `a` counts what was done that day (an answer,
// a listening extract, a mission). `q` lists the missions done. There are no XP any more (Pi, 2026-11-23): older
// days keep their `xp` field, which the streak still reads (data/packs.js: streak).
export function markDay(questId){
  const k=today(); const days=S.progress.days||{}; const d=Object.assign({q:[]}, days[k]||{});
  d.a=(d.a||0)+1; const newQuest= questId && !d.q.includes(questId); if(newQuest) d.q=[...d.q, questId];
  S.progress = {...S.progress, days:{...days, [k]:d}}; PROG_BY[LANG]=S.progress;
  // « Tout est fait » only when the whole plan of the day is done, as the home shows it (not only the missions)
  if(newQuest){ const all=planDone(), q=QUESTS.find(x=>x.id===questId); toast(all?"party":"wink", all?"Tout est fait pour aujourd'hui !":"Bien joué", all?"Journée parfaite. À demain !":(q?q.t:"")); }
  render(); saveProg(k);
}
export function questDone(id){ const d=(S.progress.days||{})[today()]; return !!(d && d.q && d.q.includes(id)); }
export function toggleQuest(id){
  const k=today(); const days=S.progress.days||{}; const d=Object.assign({q:[]}, days[k]||{});
  if(d.q.includes(id)){ d.q=d.q.filter(x=>x!==id); S.progress={...S.progress, days:{...days,[k]:d}}; PROG_BY[LANG]=S.progress; render(); saveProg(k); }
  else markDay(id);
}
export function recordSkill(id, ok, inTest){ saveSkill(id, afterAnswer(S.skills[id], ok, inTest)); }
// A test on one grammar point is over: a pass adds a mastery dot (lib/mastery.js).
export function recordSkillTest(id, score, total){ const c=afterTest(S.skills[id], score, total); if(passed(score, total)) c.pd=today(); saveSkill(id, c); } // pd: day of the last pass
function saveSkill(id, cur){
  cur.last=today(); S.skills={...S.skills,[id]:cur};
  write(()=>S.skills[id] && S.db.doc("skills/"+id).set(S.skills[id])); // the latest version when the write runs (audit R4)
}
export const AV_FACES=["grin","wink","cool","laugh","love","kiss","party","wow","nerd","cowboy","smirk","think","meh","sleepy","sad","angry"], AV_COLS=["sun","sky","mint","rose","lilac","ink"];
export function saveProfile(){ write(()=>S.db.doc("me/profile").set({lang:LANG, levels:{...S.levels}, name:S.name||"", avatar:{...S.avatar}, theme:S.theme})); }
export function applyTheme(t){ S.theme= t==="dark"? "dark" : "light"; if(S.theme==="dark") document.documentElement.dataset.theme="dark"; else delete document.documentElement.dataset.theme;
  try{ localStorage.setItem("pl-theme", S.theme); }catch(e){ /* no storage: the profile still keeps the choice */ } }
