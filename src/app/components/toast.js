let toastT=null;
function toast(type, title, text){
  const el=$("toast"); if(!el) return;
  el.innerHTML=`<div class="toast-bar">Pablolinguo <span aria-hidden="true">✕</span></div><div class="toast-body">${emo(type,46)}<div><b>${esc(title)}</b><span>${esc(text||"")}</span></div></div>`;
  el.hidden=false; el.classList.remove("in"); void el.offsetWidth; el.classList.add("in");
  clearTimeout(toastT); toastT=setTimeout(()=>{ el.hidden=true; }, 3200);
}
document.addEventListener("click", e=>{ if(e.target.closest("#toast")) $("toast").hidden=true; });
let combo=0;
function cheer(ok){
  if(ok){ combo++; if(combo===3) toast("cool","3 d'affilée !","Tu es chaud aujourd'hui."); else if(combo===6) toast("party","6 d'affilée !!","Incroyable, continue."); }
  else { if(combo>=3) toast("wow","Oups, la série s'arrête","Ce n'est pas grave, lis la règle."); combo=0; }
}

