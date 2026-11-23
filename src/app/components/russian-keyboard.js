// ---------- Russian on-screen keyboard ----------
// In Russian, answers are typed on this ЙЦУКЕН keyboard; inputmode="none" keeps the phone's own keyboard closed.
// « ABC » switches back to the phone keyboard (to type in Latin letters); the choice is remembered on this device.
// Two shapes: "phrase" (translation, vocabulary: space and hyphen keys) and "word" (one missing word: bigger keys, no space).
// On a computer, the physical keys type Cyrillic too, by position (event.code), so no Russian layout is needed.
// A keyboard with an empty data-for follows the focused field (listening questions have several gaps).
import { $, LANG } from "../data/packs.js";
const KB_ROWS=["йцукенгшщзхъ","фывапролджэ","ячсмитьбю"];
const KB_CODES={Backquote:"ё",KeyQ:"й",KeyW:"ц",KeyE:"у",KeyR:"к",KeyT:"е",KeyY:"н",KeyU:"г",KeyI:"ш",KeyO:"щ",KeyP:"з",BracketLeft:"х",BracketRight:"ъ",
  KeyA:"ф",KeyS:"ы",KeyD:"в",KeyF:"а",KeyG:"п",KeyH:"р",KeyJ:"о",KeyK:"л",KeyL:"д",Semicolon:"ж",Quote:"э",
  KeyZ:"я",KeyX:"ч",KeyC:"с",KeyV:"м",KeyB:"и",KeyN:"т",KeyM:"ь",Comma:"б",Period:"ю",Slash:"."};
let kbOn=true; try{ kbOn=localStorage.getItem("pl-rukb")!=="off"; }catch(e){ /* no storage: keyboard on by default */ }
let kbLast=null;
const kbUse = () => LANG==="ru" && kbOn;
export const kbAttr = () => LANG!=="ru"? "" : ' data-kb="1"'+(kbOn?' inputmode="none"':"");
export function kbHtml(forId, mode="phrase"){
  if(LANG!=="ru") return "";
  const at=`data-for="${forId}"`;
  if(!kbOn) return `<div class="rkb-off" data-mode="${mode}">${UI.mini(`Clavier russe`, {attrs:`type="button" data-rkmode="on" ${at}`})}</div>`;
  const key=c=>`<button type="button" class="rk" data-rk="${c}" ${at}>${c}</button>`;
  const bottom = mode==="word"
    ? `${key("ё")}<button type="button" class="rk rk-ok" data-rk="⏎" ${at}>Valider</button>`
    : `${key("ё")}${key("-")}<button type="button" class="rk rk-sp" data-rk=" " ${at} aria-label="Espace">espace</button><button type="button" class="rk rk-ok" data-rk="⏎" ${at}>Valider</button>`;
  return `<div class="rkb rkb-${mode}" data-mode="${mode}" role="group" aria-label="Clavier russe">${KB_ROWS.map((r,i)=>`<div class="rk-row">${[...r].map(key).join("")}${i===2?`<button type="button" class="rk rk-w" data-rk="⌫" ${at} aria-label="Effacer">⌫</button>`:""}</div>`).join("")}
    <div class="rk-row"><button type="button" class="rk rk-w" data-rkmode="off" ${at} aria-label="Utiliser le clavier du téléphone">ABC</button>${bottom}</div>
    <p class="rk-hint">Tu peux aussi taper sur ton clavier : chaque touche donne la lettre russe à sa place.</p></div>`;
}
function kbTarget(btn){
  if(btn.dataset.for) return $(btn.dataset.for);
  if(kbLast && kbLast.isConnected && !kbLast.disabled) return kbLast;
  return [...document.querySelectorAll("[data-kb]")].find(i=>!i.disabled) || null;
}
function kbInsert(inp, k){
  const a=inp.selectionStart??inp.value.length, b=inp.selectionEnd??inp.value.length, v=inp.value;
  if(k==="⌫"){ const from= a===b? Math.max(0,a-1) : a; inp.value=v.slice(0,from)+v.slice(b); inp.setSelectionRange(from,from); }
  else { inp.value=v.slice(0,a)+k+v.slice(b); inp.setSelectionRange(a+k.length,a+k.length); }
  inp.dispatchEvent(new Event("input",{bubbles:true}));
}
function kbPress(btn){
  const inp=kbTarget(btn); if(!inp||inp.disabled) return; const k=btn.dataset.rk;
  if(k==="⏎"){
    const f=inp.form; if(f){ f.requestSubmit? f.requestSubmit() : f.dispatchEvent(new Event("submit",{cancelable:true})); return; }
    // No form (listening gaps): go to the next empty gap, or close.
    const next=[...document.querySelectorAll("[data-kb]")].find(i=>i!==inp && !i.disabled && !i.value.trim());
    if(next) next.focus(); else inp.blur();
    return;
  }
  inp.focus(); kbInsert(inp, k);
}
function kbMode(btn){
  kbOn= btn.dataset.rkmode==="on"; try{ localStorage.setItem("pl-rukb", kbOn?"on":"off"); }catch(e){ /* not remembered on this device */ }
  const inp=kbTarget(btn); const box=btn.closest(".rkb,.rkb-off");
  document.querySelectorAll("[data-kb]").forEach(i=>{ if(kbOn) i.setAttribute("inputmode","none"); else i.removeAttribute("inputmode"); });
  if(box) box.outerHTML=kbHtml(btn.dataset.for, box.dataset.mode);
  if(inp){ inp.blur(); inp.focus(); }
}
// Keep the focus (and the caret) in the answer field while a key is pressed.
document.addEventListener("pointerdown", e=>{ if(e.target.closest(".rk")) e.preventDefault(); });
document.addEventListener("click", e=>{ const k=e.target.closest("[data-rk]"); if(k){ kbPress(k); return; } const m=e.target.closest("[data-rkmode]"); if(m) kbMode(m); });
document.addEventListener("focusin", e=>{ if(e.target.matches && e.target.matches("[data-kb]")) kbLast=e.target; });
// Physical keyboard: letters typed by position become Cyrillic. Shift gives a capital; Ctrl, Alt and Cmd shortcuts pass through.
document.addEventListener("keydown", e=>{
  const inp=e.target; if(!kbUse() || !inp.matches || !inp.matches("[data-kb]") || inp.disabled) return;
  if(e.ctrlKey || e.metaKey || e.altKey || e.isComposing) return;
  const c=KB_CODES[e.code]; if(!c) return;
  e.preventDefault(); kbInsert(inp, e.shiftKey && c!=="."? c.toUpperCase() : c);
});

