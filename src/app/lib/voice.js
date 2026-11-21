// ---------- Optional voice: dictation + text-to-speech ----------
let DICT=null, TTS=null;
function setupMic(inp){
  const b=$("mic"); if(!DICT||!b) return; b.hidden=false; let base="";
  b.onclick=()=>{ if(b.classList.contains("live")){ DICT.stop().catch(()=>{}); return; }
    base=inp.value? inp.value+" ":""; DICT.start(PACK.dict).catch(()=>{ b.hidden=true; }); };
  DICT.onState(({state})=>{ const m=$("mic"); if(m) m.classList.toggle("live", state==="listening"); });
  DICT.onPartial(({text})=>{ const i=$("ans"); if(i) i.value=base+text; });
  DICT.onFinal(({text})=>{ const i=$("ans"); if(i){ base=base+text+" "; i.value=base.trim(); } });
}
function setupSay(text){ const b=$("say"); if(!TTS||!b||!text) return; b.hidden=false; b.onclick=()=>{ TTS.speak(text,{language:PACK.tts}).catch(()=>{}); }; }

/* ---------- COURS : situations par thème ---------- */
