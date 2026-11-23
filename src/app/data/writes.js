// ---------- Writes (one at a time) ----------
import { QUESTS } from "../lib/levels.js";
import { afterAnswer, afterTest, passed } from "../lib/mastery.js";
import { PROG_BY, S } from "./state.js";
import { LANG, saveProg, today } from "./packs.js";
import { render, setStatus } from "../screens/home.js";
export let chain = Promise.resolve();
export function write(fn){ if(!S.db||!S.writable) return; chain = chain.then(fn).catch(e=>{ if(e&&e.code==="invalid_argument"){S.writable=false; setStatus("Tu peux voir la page, mais pas enregistrer ici.");} else setStatus("Enregistrement impossible pour l'instant. Réessaie dans un moment."); }); }
export function addXp(n, questId){
  const k=today(); const days=S.progress.days||{}; const d=Object.assign({q:[],xp:0}, days[k]||{});
  d.xp=(d.xp||0)+n; if(questId && !d.q.includes(questId)){ d.q=[...d.q, questId]; const all=QUESTS.every(q=>d.q.includes(q.id)); toast(all?"party":"wink", all?"Tout est fait pour aujourd'hui !":"Bien joué", all?"Journée parfaite. À demain !":"+"+n+" XP"); }
  S.progress = {...S.progress, xp:(S.progress.xp||0)+n, days:{...days, [k]:d}}; PROG_BY[LANG]=S.progress;
  render(); saveProg(k, d);
}
export function questDone(id){ const d=(S.progress.days||{})[today()]; return !!(d && d.q && d.q.includes(id)); }
export function toggleQuest(id){
  const k=today(); const days=S.progress.days||{}; const d=Object.assign({q:[],xp:0}, days[k]||{});
  const qd=QUESTS.find(q=>q.id===id);
  if(d.q.includes(id)){ d.q=d.q.filter(x=>x!==id); d.xp=Math.max(0,(d.xp||0)-qd.xp); S.progress={...S.progress, xp:Math.max(0,(S.progress.xp||0)-qd.xp), days:{...days,[k]:d}}; PROG_BY[LANG]=S.progress; render(); saveProg(k, d); }
  else addXp(qd.xp, id);
}
export function recordSkill(id, ok, inTest){ saveSkill(id, afterAnswer(S.skills[id], ok, inTest)); }
// A test on one grammar point is over: a pass adds a mastery dot (lib/mastery.js).
export function recordSkillTest(id, score, total){ const c=afterTest(S.skills[id], score, total); if(passed(score, total)) c.pd=today(); saveSkill(id, c); } // pd: day of the last pass
function saveSkill(id, cur){
  cur.last=today(); S.skills={...S.skills,[id]:cur};
  write(()=>S.db.doc("skills/"+id).set(cur));
}
export const AV_FACES=["grin","wink","cool","laugh","love","kiss","party","wow","nerd","cowboy","smirk","think","meh","sleepy","sad","angry"], AV_COLS=["sun","sky","mint","rose","lilac","ink"];
export function saveProfile(){ const body={lang:LANG, levels:{...S.levels}, name:S.name||"", avatar:{...S.avatar}, theme:S.theme}; write(()=>S.db.doc("me/profile").set(body)); }
export function applyTheme(t){ S.theme= t==="dark"? "dark" : "light"; if(S.theme==="dark") document.documentElement.dataset.theme="dark"; else delete document.documentElement.dataset.theme;
  try{ localStorage.setItem("pl-theme", S.theme); }catch(e){ /* no storage: the profile still keeps the choice */ } }
