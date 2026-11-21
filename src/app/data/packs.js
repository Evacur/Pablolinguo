// ---------- Language packs (public/lang/*.js). "en" fields in words and sheets mean "the target language". ----------
let LANG="en", PACK=null, SKILLS=[], RULES={}, W={}, THEMES=[], TIPS=[], FAUX=[], SITES=[], COURS=[], ALLW={};
const PACK_LIST = () => window.LANGS; // every language (code, name, native), loaded or not: see public/lang/index.js
function applyPack(code){
  PACK=window.PACKS[code]; LANG=PACK.code; // callers load the language first (window.loadLang)
  try{ localStorage.setItem("pl-lang",LANG); }catch(e){ /* not stored: the next visit starts by loading English, then switches */ }
  SKILLS=PACK.skills; RULES=PACK.rules; W=PACK.words; THEMES=Object.keys(W); TIPS=PACK.tips; FAUX=PACK.faux; SITES=PACK.sites; COURS=PACK.cours;
  ALLW={}; THEMES.forEach(t=>W[t].forEach(w=>{ const k=wkey(w[0]); if(!ALLW[k]) ALLW[k]={en:w[0],fr:w[1],tip:w[2]||"",ex:"",theme:t}; }));
  SRS=SRS_BY[LANG]||{}; srsLoaded=!!SRS_LOADED[LANG]; MY=MY_ALL.filter(m=>(m.lang||"en")===LANG);
  SEEN=SEEN_BY[LANG]||{};
  S.progress=PROG_BY[LANG]||{xp:0,days:{}};
  T=null; VQ=null; coursSel=null; gramSel=null; gramLvl=null; themeSel=null;
}
const srsPath = () => LANG==="en"? "vocab/srs" : "vocab/srs_"+LANG;
// XP and quests are kept per language. English keeps the original doc, so nothing saved before is lost.
const progPath = (c=LANG) => c==="en"? "me/progress" : "me/progress_"+c;

function saveProg(k, d){ const xp=S.progress.xp||0; write(async()=>{ const ref=S.db.doc(progPath()); const g=await ref.get(); if(g.exists) await ref.update({xp, days:{[k]:d}}); else await ref.set({xp, days:{[k]:d}}); }); }
const today = () => new Date().toLocaleDateString("en-CA");
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const mOf = id => (S.skills[id] && S.skills[id].m) || 0;
const lvl = () => S.levels[LANG] || "A2";
const lvIdx = l => LV.indexOf(l);
const skillsOf = l => SKILLS.filter(s=>s.lvl===l);
// A pack can ship some levels only (Russian: A1 and A2 for now); the others show as « bientôt ».
const lvReady = (l, pk=PACK) => !pk || !pk.ready || pk.ready.includes(l);
function pct(l=lvl()){ const list=skillsOf(l); if(!list.length) return 0; let t=0; list.forEach(s=> t+=mOf(s.id)); return Math.round(t/(list.length*3)*100); }
function streak(){
  const days={}; Object.values(PROG_BY).concat([S.progress]).forEach(p=>Object.entries(p.days||{}).forEach(([k,v])=>{ if(v&&v.xp>0) days[k]={xp:1}; })); let n=0; const d=new Date();
  if(!(days[today()]&&days[today()].xp>0)) d.setDate(d.getDate()-1);
  for(;;){ const k=d.toLocaleDateString("en-CA"); if(days[k]&&days[k].xp>0){n++; d.setDate(d.getDate()-1);} else break; }
  return n;
}

