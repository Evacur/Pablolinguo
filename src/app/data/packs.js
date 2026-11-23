// ---------- Language packs (public/lang/*.js). "en" fields in words and sheets mean "the target language". ----------
import { bossReady } from "../lib/mastery.js";
import { streakOf } from "../lib/streak.js";
import { PROG_BY, S, state } from "./state.js";
import { LV } from "../lib/levels.js";
import { write } from "./writes.js";
import { SRS_BY, SRS_LOADED, wkey } from "../screens/words.js";
import { SEEN_BY } from "../screens/train/trainer.js";
export let LANG="en", PACK=null, SKILLS=[], RULES={}, W={}, THEMES=[], TIPS=[], FAUX=[], COURS=[], LESSONS={}, ALLW={};
export const PACK_LIST = () => window.LANGS; // every language (code, name, native), loaded or not: see public/lang/index.js
export function applyPack(code){
  PACK=window.PACKS[code]; LANG=PACK.code; // callers load the language first (window.loadLang)
  try{ localStorage.setItem("pl-lang",LANG); }catch(e){ /* not stored: the next visit starts by loading English, then switches */ }
  SKILLS=PACK.skills; RULES=PACK.rules; W=PACK.words; THEMES=Object.keys(W); TIPS=PACK.tips; FAUX=PACK.faux; COURS=PACK.cours; LESSONS=PACK.lessons||{};
  ALLW={}; THEMES.forEach(t=>W[t].forEach(w=>{ const k=wkey(w[0]); if(!ALLW[k]) ALLW[k]={en:w[0],fr:w[1],tip:w[2]||"",ex:"",theme:t,lv:w[3]||""}; }));
  state.SRS=SRS_BY[LANG]||{}; state.srsLoaded=!!SRS_LOADED[LANG]; state.MY=state.MY_ALL.filter(m=>(m.lang||"en")===LANG);
  state.SEEN=SEEN_BY[LANG]||{};
  S.progress=PROG_BY[LANG]||{days:{}};
  state.T=null; state.TALK=null; state.VQ=null; state.coursSel=null; state.gramSel=null; state.themeSel=null;
}
export const srsPath = (c=LANG) => c==="en"? "vocab/srs" : "vocab/srs_"+c;
// Days of activity and missions are kept per language. English keeps the original doc, so nothing saved before is lost.
export const progPath = (c=LANG) => c==="en"? "me/progress" : "me/progress_"+c;

// A queued write reads the progress when its turn comes, not when it was queued: an older write then never sends,
// and echoes back through onSnapshot, a day older than what the screen already shows (slow network, audit R4).
export function saveProg(k){ const code=LANG; write(async()=>{ const p=PROG_BY[code]||{}, d=(p.days||{})[k]; if(!d) return;
  const ref=S.db.doc(progPath(code)); const g=await ref.get(); if(g.exists) await ref.update({days:{[k]:d}}); else await ref.set({days:{[k]:d}}); }); }
export const today = () => new Date().toLocaleDateString("en-CA");
export const $ = id => document.getElementById(id);
export const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
export const mOf = id => (S.skills[id] && S.skills[id].m) || 0;
export const lvl = () => S.levels[LANG] || "A2";
export const lvIdx = l => LV.indexOf(l);
export const skillsOf = l => SKILLS.filter(s=>s.lvl===l);
// A pack can ship some levels only (pack.ready); the others show as « bientôt ».
export const lvReady = (l, pk=PACK) => !pk || !pk.ready || pk.ready.includes(l);
export function pct(l=lvl()){ const list=skillsOf(l); if(!list.length) return 0; let t=0; list.forEach(s=> t+=mOf(s.id)); return Math.round(t/(list.length*3)*100); }
// The level challenge opens when 80 % of the level's grammar points are validated (3 dots out of 3), as the screens say.
export function validated(l=lvl()){ return skillsOf(l).filter(s=>mOf(s.id)>=3).length; }
export function bossOpen(l=lvl()){ return bossReady(skillsOf(l).map(s=>mOf(s.id))); }
export function streak(){ return streakOf(Object.values(PROG_BY).concat([S.progress]), today()); }


// The pixel icon of each theme (ui/icons/pixel-icons.js), shown beside situations and theme cards.
const THEME_PIC={Work:"briefcase", Travel:"plane", Health:"heart", Climbing:"mountain", Food:"apple", Restaurant:"cup", Home:"house", Shopping:"bag",
  Weather:"cloud", City:"city", Family:"family", Nature:"tree", Intro:"hand", Hotel:"bed", Party:"party", Interview:"tie", Admin:"bank", Tech:"laptop",
  Emergency:"siren", Culture:"film"};
export const themePic=(theme, size=20)=> THEME_PIC[theme]? pic(THEME_PIC[theme], size) : "";
