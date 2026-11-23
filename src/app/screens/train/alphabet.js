// ---------- Russian alphabet lessons (PACK.abcLessons): letters → sounds, reading, listening, letter tiles ----------
import { S, state } from "../../data/state.js";
import { LANG, PACK, lvIdx, lvl, mOf, today } from "../../data/packs.js";
import { write } from "../../data/writes.js";
import { hkey, matchItem, mixKinds, pickWeighted, pool, shuffle } from "./trainer.js";
export const ABC_DONE={};  // lang -> {lesson id: best score out of 10}
export const abcLessons = () => PACK.abcLessons || [];
export const abcBest = id => (ABC_DONE[LANG]||{})[id];
export const abcNext = () => abcLessons().find(l=>!(abcBest(l.id)>=8));
function abcPick3(right, cands){ const d=[]; for(const x of cands){ if(x && x!==right && !d.includes(x)) d.push(x); if(d.length===3) break; } const o=shuffle([right,...d]); return {o, a:o.indexOf(right)}; }
function abcItems(id){
  const Ls=abcLessons(), k=Ls.findIndex(l=>l.id===id), les=Ls[k]; if(!les) return [];
  const SON=PACK.abcSon||{}, FAKE=PACK.abcFake||{}, A=PACK.alphabet||[];
  const known=[...Ls.slice(0,k+1).map(l=>l.letters).join("")], words=Ls.slice(0,k+1).flatMap(l=>l.words);
  const up=c=>c.toUpperCase()+c, info=c=>A.find(x=>x.l===up(c))||{};
  const spell=w=>[...w].map(c=>(SON[c]||c).split(" (")[0].split(",")[0]).join(" · ");
  const exOf=c=>{ const w=les.words.find(([x])=>x.includes(c)); return w? w[0] : info(c).ex||""; };
  const base={skill:"ru_alphabet", th:"Home", abc:id};
  const letters=shuffle([...les.letters]).slice(0,4);
  const items=letters.map(c=>({...base, t:"pick", big:up(c), q:"Comment se lit cette lettre ?", ...abcPick3(SON[c], [FAKE[c], ...shuffle(known.filter(x=>x!==c).map(x=>SON[x]))]), say:exOf(c),
    why: (info(c).fr||"")+(FAKE[c]? ` Attention, elle ressemble à une lettre latine mais ne se lit pas « ${FAKE[c]} ».` : "")}));
  shuffle([...les.letters]).slice(0,1).forEach(c=>items.push({...base, t:"pick", q:`Quelle lettre se lit « ${SON[c]} » ?`, ...abcPick3(up(c), shuffle(known.filter(x=>x!==c)).map(up)), say:exOf(c), why:info(c).fr||""}));
  const meaning=(w,fr)=>({...base, t:"pick", big:w, q:"Que veut dire ce mot ?", ...abcPick3(fr, shuffle(words.map(x=>x[1]))), say:w, why:`Lettre par lettre : ${spell(w)}.`});
  const mine=shuffle(les.words.slice());
  mine.slice(0,2).forEach(([w,fr])=>items.push(meaning(w,fr)));
  if(state.TTS){ const [w]=mine[2]||mine[0]; items.push({...base, t:"pick", listen:w, q:"Écoute et choisis le mot que tu entends", ...abcPick3(w, shuffle(words.map(x=>x[0]).filter(x=>x!==w)).sort((a,b)=>Math.abs(a.length-w.length)-Math.abs(b.length-w.length))), say:w, why:`Lettre par lettre : ${spell(w)}.`}); }
  mine.filter(([w])=>w.length>=3 && w.length<=7).slice(0,2).forEach(([w,fr])=>items.push({...base, t:"order", fr:`« ${fr} » en russe`, words:[...w], join:"", a:[w], why:`Lettre par lettre : ${spell(w)}.`}));
  for(const [w,fr] of shuffle(words.slice())){ if(items.length>=10) break; if(!items.some(x=>x.big===w)) items.push(meaning(w,fr)); }
  const first=items.slice(0,letters.length), rest=shuffle(items.slice(letters.length));
  return first.concat(rest).slice(0,10);
}
export function abcSave(id, score){
  const d=ABC_DONE[LANG]||(ABC_DONE[LANG]={}); if(d[id]!=null && d[id]>=score) return;
  d[id]=score; if(S.db){ const path="abc/"+LANG, body={d:{...d}}; write(()=>S.db.doc(path).set(body)); }
}
export function buildSession(arg, mode){
  mode = mode || (arg? "skill" : "mix");
  const all=pool(), i=lvIdx(lvl()); let items=[];
  if(mode==="skill"){
    items=mixKinds(pickWeighted(all.filter(x=>x.skill===arg), 10));
  } else if(mode==="theme"){
    const own=all.filter(x=>x.th===arg && lvIdx(x.lvl)<=i).map(x=>({...x, boost: lvIdx(x.lvl)===i? 3 : 1}));
    items=mixKinds(pickWeighted(own, 9)); const m=matchItem(arg); if(m) items.splice(4,0,m);
  } else if(mode==="abc"){
    items=abcItems(arg);
  } else if(mode==="boss"){
    const b=(PACK.boss||{})[arg]||[];
    items=shuffle(b).slice(0,10).map(x=>({...x, skill:(x.sk||[])[0]||null, boss:true, lvl:arg, key:hkey("boss|"+(x.s||x.fr))}));
  } else { // mix: mostly the current level (weak points first), about 2 in 10 from the levels below
    const cur=all.filter(x=>x.lvl===lvl()).map(x=>({...x, boost: 4-mOf(x.skill)}));
    const low=all.filter(x=>lvIdx(x.lvl)<i).map(x=>({...x, boost: mOf(x.skill)<3? 3 : 1}));
    items=pickWeighted(cur, low.length? 7 : 9).concat(pickWeighted(low, low.length? 2 : 0));
    items=mixKinds(shuffle(items)); const m=matchItem(); if(m) items.splice(5,0,m);
  }
  return {mode, arg, items, i:0, results:[], phase:"ask", given:""};
}
export function saveSeen(it, ok){
  if(!it.key || it.t==="match") return;
  state.SEEN={...state.SEEN, [it.key]:{d:today(), ok}};
  const keys=Object.keys(state.SEEN); if(keys.length>600){ keys.sort((a,b)=>state.SEEN[a].d.localeCompare(state.SEEN[b].d)).slice(0,keys.length-600).forEach(k=>delete state.SEEN[k]); }
  const path="seen/"+LANG, body={k:state.SEEN}; write(()=>S.db.doc(path).set(body));
}

