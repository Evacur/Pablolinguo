// ---------- Optional voice: dictation + text-to-speech ----------
import { state } from "../data/state.js";
import { $, PACK } from "../data/packs.js";

// Dictation: the callbacks are registered once (the runtime has no way to remove one), and read the current base.
let micBase="", micBound=null;
export function setupMic(inp){
  const b=$("mic"); if(!state.DICT||!b) return; b.hidden=false; micBase="";
  b.onclick=()=>{ if(b.classList.contains("live")){ state.DICT.stop().catch(()=>{}); return; }
    micBase=inp.value? inp.value+" ":""; state.DICT.start(PACK.dict).catch(()=>{ b.hidden=true; }); };
  if(micBound===state.DICT) return; micBound=state.DICT;
  state.DICT.onState(({state})=>{ const m=$("mic"); if(m) m.classList.toggle("live", state==="listening"); });
  state.DICT.onPartial(({text})=>{ const i=$("ans"); if(i) i.value=micBase+text; });
  state.DICT.onFinal(({text})=>{ const i=$("ans"); if(i){ micBase=micBase+text+" "; i.value=micBase.trim(); } });
}
export function setupSay(text){ const b=$("say"); if(!state.TTS||!b||!text) return; b.hidden=false; b.onclick=()=>{ state.TTS.speak(text,{language:PACK.tts}).catch(()=>{}); }; }

/* ---------- COURS : situations par thème ---------- */
