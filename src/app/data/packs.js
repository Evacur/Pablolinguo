// ---------- Language packs (public/lang/*.js). "en" fields in words and sheets mean "the target language". ----------
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
  S.progress=PROG_BY[LANG]||{xp:0,days:{}};
  state.T=null; state.VQ=null; state.coursSel=null; state.gramSel=null; state.themeSel=null;
}
export const srsPath = () => LANG==="en"? "vocab/srs" : "vocab/srs_"+LANG;
// XP and quests are kept per language. English keeps the original doc, so nothing saved before is lost.
export const progPath = (c=LANG) => c==="en"? "me/progress" : "me/progress_"+c;

export function saveProg(k, d){ const xp=S.progress.xp||0; write(async()=>{ const ref=S.db.doc(progPath()); const g=await ref.get(); if(g.exists) await ref.update({xp, days:{[k]:d}}); else await ref.set({xp, days:{[k]:d}}); }); }
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
export function streak(){
  const days={}; Object.values(PROG_BY).concat([S.progress]).forEach(p=>Object.entries(p.days||{}).forEach(([k,v])=>{ if(v&&v.xp>0) days[k]={xp:1}; })); let n=0; const d=new Date();
  if(!(days[today()]&&days[today()].xp>0)) d.setDate(d.getDate()-1);
  for(;;){ const k=d.toLocaleDateString("en-CA"); if(days[k]&&days[k].xp>0){n++; d.setDate(d.getDate()-1);} else break; }
  return n;
}


// The pixel icon of each theme (ui/icons/pixel-icons.js), shown beside situations and theme cards.
const THEME_PIC={Work:"briefcase", Travel:"plane", Health:"heart", Climbing:"mountain", Food:"apple", Restaurant:"cup", Home:"house", Shopping:"bag",
  Weather:"cloud", City:"city", Family:"family", Nature:"tree", Intro:"hand", Hotel:"bed", Party:"party", Interview:"tie", Admin:"bank", Tech:"laptop",
  Emergency:"siren", Culture:"film"};
export const themePic=(theme, size=20)=> THEME_PIC[theme]? pic(THEME_PIC[theme], size) : "";
