// ---------- Training sessions: which exercises a session holds, and the exercises already seen ----------
import { S, state } from "../../data/state.js";
import { LANG, PACK, lvIdx, lvl, mOf, today } from "../../data/packs.js";
import { write } from "../../data/writes.js";
import { weakness } from "../../lib/mastery.js";
import { hkey, matchItem, mixKinds, pickWeighted, pool, shuffle } from "./trainer.js";
export function buildSession(arg, mode){
  mode = mode || (arg? "skill" : "mix");
  const all=pool(), i=lvIdx(lvl()); let items=[];
  if(mode==="skill"){
    items=mixKinds(pickWeighted(all.filter(x=>x.skill===arg), 10));
  } else if(mode==="theme"){
    const own=all.filter(x=>x.th===arg && lvIdx(x.lvl)<=i).map(x=>({...x, boost: lvIdx(x.lvl)===i? 3 : 1}));
    items=mixKinds(pickWeighted(own, 9)); const m=matchItem(arg); if(m) items.splice(4,0,m);
  } else if(mode==="boss"){
    const b=(PACK.boss||{})[arg]||[];
    items=shuffle(b).slice(0,10).map(x=>({...x, skill:(x.sk||[])[0]||null, boss:true, lvl:arg, key:hkey("boss|"+(x.s||x.fr))}));
  } else { // mix: mostly the current level (weak points first), about 2 in 10 from the levels below
    // weak points (this learner's own misses) come up most, then the points not mastered yet
    const w=x=>weakness(S.skills[x.skill]);
    const cur=all.filter(x=>x.lvl===lvl()).map(x=>({...x, boost: 4-mOf(x.skill) + 6*w(x)}));
    const low=all.filter(x=>lvIdx(x.lvl)<i).map(x=>({...x, boost: (mOf(x.skill)<3? 3 : 1) + 6*w(x)}));
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

