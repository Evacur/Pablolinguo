// ---------- Optional voice: dictation + text-to-speech ----------
import { state } from "../data/state.js";
import { $, PACK } from "../data/packs.js";

export function setupMic(inp){
  const b=$("mic"); if(!state.DICT||!b) return; b.hidden=false; let base="";
  b.onclick=()=>{ if(b.classList.contains("live")){ state.DICT.stop().catch(()=>{}); return; }
    base=inp.value? inp.value+" ":""; state.DICT.start(PACK.dict).catch(()=>{ b.hidden=true; }); };
  state.DICT.onState(({state})=>{ const m=$("mic"); if(m) m.classList.toggle("live", state==="listening"); });
  state.DICT.onPartial(({text})=>{ const i=$("ans"); if(i) i.value=base+text; });
  state.DICT.onFinal(({text})=>{ const i=$("ans"); if(i){ base=base+text+" "; i.value=base.trim(); } });
}
export function setupSay(text){ const b=$("say"); if(!state.TTS||!b||!text) return; b.hidden=false; b.onclick=()=>{ state.TTS.speak(text,{language:PACK.tts}).catch(()=>{}); }; }

/* ---------- COURS : situations par thème ---------- */
