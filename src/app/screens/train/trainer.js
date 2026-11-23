// ---------- Trainer: exercise pool, sessions, five exercise kinds ----------
// Kinds: tr (translate), gap (fill the blank), qcm (multiple choice), order (rebuild the sentence), match (word pairs).
 // {mode, arg, items, i, results, phase, given, picked, tiles, ...}
import { state } from "../../data/state.js";
import { ALLW, LANG, PACK, SKILLS, W, lvl, today } from "../../data/packs.js";
import { norm } from "../../lib/answers.js";
import { themeOf } from "../words.js";
import { fitsLevel } from "../../lib/levels.js";
export function shuffle(a){ a=[...a]; for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]];} return a; }
export const KIND_LBL={tr:"Traduis", gap:"Complète", qcm:"Choisis", order:"Remets dans l'ordre", match:"Associe"};
export const hkey = s => { let h=5381; for(const c of String(s)) h=((h<<5)+h+c.charCodeAt(0))|0; return (h>>>0).toString(36); };

// Every grammar item of the pack: the base drill sentences (translate) plus the exercise bank.
let POOL_CACHE=null;
export function pool(){
  if(POOL_CACHE && POOL_CACHE.lang===LANG) return POOL_CACHE.items;
  const items=[]; const bank=PACK.bank||{};
  SKILLS.forEach(s=>{
    s.q.forEach(q=>items.push({t:"tr", skill:s.id, lvl:s.lvl, fr:q[0], a:q[1], th:null}));
    (bank[s.id]||[]).forEach(b=>items.push({...b, skill:s.id, lvl:s.lvl}));
  });
  items.forEach(it=>{ it.key=hkey(it.skill+"|"+it.t+"|"+(it.s||it.fr)); });
  POOL_CACHE={lang:LANG, items}; return items;
}
// Every word the app knows in this language: a typed word from this list is a real mistake, not a typo (their/there).
let KNOWN=null;
export function knownWords(){
  if(KNOWN && KNOWN.lang===LANG) return KNOWN.set;
  const set=new Set(); const add=x=>{ if(typeof x==="string") norm(x.replace(/___/g," "), LANG).split(" ").forEach(w=>{ if(w) set.add(w); }); };
  pool().forEach(it=>{ (Array.isArray(it.a)?it.a:[]).forEach(add); if(it.t==="qcm") (it.o||[]).forEach(add); (it.words||[]).forEach(add); add(it.s); });
  Object.values(ALLW||{}).forEach(w=>{ add(w.en); add(w.ex); });
  KNOWN={lang:LANG,set}; return set;
}
// Seen items: answered right recently = rarely picked again; answered wrong = picked more.
 export const SEEN_BY={};
function weightOf(it){
  const s=state.SEEN[it.key]; if(!s) return 1;
  const days=(new Date(today())-new Date(s.d))/86400000;
  if(s.ok) return days<3? .05 : days<10? .3 : .8;
  return days<1? .5 : 3;
}
export function pickWeighted(list, n){
  const out=[]; let rest=list.map(it=>({it, w:weightOf(it)*(it.boost||1)}));
  while(out.length<n && rest.length){
    const tot=rest.reduce((a,x)=>a+x.w,0); let r=Math.random()*tot, k=0;
    for(;k<rest.length-1;k++){ r-=rest[k].w; if(r<=0) break; }
    out.push(rest[k].it); rest.splice(k,1);
  }
  return out;
}
// A translate item with a medium sentence can be played as "rebuild the sentence".
function asOrder(it){
  // Tiles without the final punctuation or the capital of the first word, so they don't give the order away.
  const w=String(it.a[0]).replace(/[¿¡]/g,"").replace(/[.!?]+$/,"").split(/\s+/);
  if(w.length<4 || w.length>11) return it;
  if(w[0]!=="I" && !/^I'/.test(w[0])) w[0]=w[0].charAt(0).toLowerCase()+w[0].slice(1);
  return {...it, t:"order", words:w};
}
export function matchItem(theme){
  const th=theme||themeOf(today()).theme; const list=shuffle((W[th]||[]).filter(w=>w[0].split(" ").length<=3 && fitsLevel(w[3], lvl()))).slice(0,4);
  if(list.length<4) return null;
  return {t:"match", th, key:"m"+th, pairs:list.map(w=>({en:w[0], fr:w[1]}))};
}
export function mixKinds(items){ // turn about a third of the translations into word-order puzzles
  let n=0; return items.map(it=> it.t==="tr" && n<3 && Math.random()<.4 ? (n++, asOrder(it)) : it);
}

