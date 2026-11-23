// ---------- Optional voice: dictation + text-to-speech ----------
import { state } from "../data/state.js";
import { $, LANG, PACK } from "../data/packs.js";
import { audioPath } from "./audio-key.js";

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
export function setupSay(text){ const b=$("say"); if(!state.TTS||!b||!text) return; b.hidden=false; b.onclick=()=>speak([text]); }

// Reads texts aloud with the Google voice files (public/audio, made once by scripts/tts.py), one after the other.
// A text without a file (a word the learner added, a file missing offline) and every text after it go to the device voice.
// lines: strings or {text, rate}. One shared <audio>: iOS lets it play again once a tap has started it.
let player=null, run=0;
export function speak(lines, rate=1){
  const list=lines.map(l=>typeof l==="string"? {text:l} : l).filter(l=>l.text && String(l.text).trim());
  const me=++run; stopSpeech(false);
  if(!player) player=new Audio();
  const device=from=>{ if(me!==run||!state.TTS) return; state.TTS.speak(list.slice(from).map(l=>({text:l.text, language:PACK.tts, rate:(l.rate||rate)*.9}))).catch(()=>{ /* speech cancelled or no voice */ }); };
  const next=i=>{
    if(me!==run||i>=list.length) return;
    player.onended=()=>next(i+1);
    player.onerror=()=>device(i);
    player.src=audioPath(LANG, list[i].text); player.playbackRate=list[i].rate||rate;
    player.play().catch(e=>{ if(e && e.name!=="AbortError") device(i); });
  };
  next(0);
}
export function stopSpeech(all=true){
  if(all) run++;
  if(player){ player.onended=null; player.onerror=null; player.pause(); }
  if(state.TTS&&state.TTS.stop) state.TTS.stop();
}

/* ---------- COURS : situations par thème ---------- */
