// ---------- Optional voice: dictation + text-to-speech ----------
let DICT=null, TTS=null;
// Dictation works like the microphone in chat apps: tap the mic, speak, the words appear live in a
// listening bar (cancel ✕ / keep ✓), then land in the answer field so you can fix them before checking.
// It uses the browser's own speech recognition (free). When the browser has none, the mic stays visible
// but greyed, and tapping it explains how to dictate with the phone keyboard instead.
let MIC=null;
const micHtml = id => `${UI.iconButton(pic("mic",22), {label:DICT?"Dicter ta réponse":"Dictée indisponible sur ce navigateur", cls:DICT?"mic":"mic off", attrs:`type="button" data-mic="${id}"`})}<div class="dict" role="status"><button type="button" class="dict-x" data-dict="cancel" aria-label="Annuler la dictée">✕</button><span class="wave" aria-hidden="true">${"<i></i>".repeat(9)}</span><span class="dict-t" data-ph="Parle en ${esc((PACK.name||"").toLowerCase())}…"></span><button type="button" class="dict-ok" data-dict="ok" aria-label="Garder ce texte">✓</button></div>`;
const micEls = () => MIC && document.body.contains(MIC.inp) ? MIC : null;
function micShow(){ const m=micEls(); if(!m) return; const t=m.form.querySelector(".dict-t"); if(t) t.textContent=(m.fin+" "+m.part).trim(); const d=m.form.querySelector(".dict"); if(d){ d.classList.add("hear"); clearTimeout(m.ht); m.ht=setTimeout(()=>d.classList.remove("hear"),350); } }
function micEnd(keep){
  const m=MIC; MIC=null; if(!m) return; clearTimeout(m.ht);
  if(!document.body.contains(m.inp)) return;
  m.form.classList.remove("listening");
  const said=(m.fin+" "+m.part).replace(/\s+/g," ").trim();
  if(keep && said){ m.inp.value=(m.before? m.before.trim()+" " : "")+said; m.inp.dispatchEvent(new Event("input",{bubbles:true})); }
  if(!matchMedia("(pointer:coarse)").matches) m.inp.focus({preventScroll:true});
}
function micStart(btn){
  if(!DICT){ toast("think","Dictée indisponible ici","Ton navigateur ne la propose pas. Touche le micro de ton clavier, ou ouvre l'app dans Chrome ou Safari."); return; }
  const form=btn.closest("form"), inp=$(btn.dataset.mic); if(!form||!inp||inp.disabled) return;
  if(MIC){ DICT.abort().catch(()=>{}); micEnd(false); }
  MIC={form, inp, before:inp.value, fin:"", part:"", keep:true};
  form.classList.add("listening"); micShow();
  DICT.start(PACK.dict||PACK.tts||"en-US").catch(()=>{ micEnd(false); toast("sad","Le micro n'a pas démarré","Réessaie, ou utilise le micro de ton clavier."); });
}
function initDict(){
  if(!DICT) return;
  DICT.onPartial(({text})=>{ if(MIC){ MIC.part=text; micShow(); } });
  DICT.onFinal(({text})=>{ if(MIC){ MIC.fin=(MIC.fin+" "+text).trim(); MIC.part=""; micShow(); } });
  DICT.onState(({state})=>{ if(state==="idle" && MIC) micEnd(MIC.keep); });
  DICT.onError(({error})=>{
    const msg= error==="not-allowed"||error==="service-not-allowed"? ["Autorise le micro","Ton navigateur bloque le micro pour Pablolinguo. Autorise-le dans ses réglages, ou utilise le micro du clavier."]
      : error==="no-speech"? ["Je n'ai rien entendu","Touche le micro puis parle tout de suite, près du téléphone."]
      : error==="network"? ["Pas de connexion","La dictée du navigateur a besoin d'internet."]
      : error==="aborted"? null : ["La dictée s'est arrêtée","Réessaie, ou utilise le micro de ton clavier."];
    if(msg) toast("think", msg[0], msg[1]);
  });
}
document.addEventListener("click", e=>{
  const m=e.target.closest("[data-mic]"); if(m){ e.preventDefault(); micStart(m); return; }
  const d=e.target.closest("[data-dict]"); if(d && MIC){ e.preventDefault();
    if(d.dataset.dict==="ok"){ MIC.keep=true; DICT.stop().catch(()=>{}); setTimeout(()=>{ if(MIC) micEnd(true); },1200); }
    else { MIC.keep=false; DICT.abort().catch(()=>{}); micEnd(false); } }
});
function setupSay(text){ const b=$("say"); if(!TTS||!b||!text) return; b.hidden=false; b.onclick=()=>{ TTS.speak(text,{language:PACK.tts}).catch(()=>{}); }; }

/* ---------- COURS : situations par thème ---------- */
