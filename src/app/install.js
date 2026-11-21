// ---------- Install on the phone (web app: icon on the home screen, no store) ----------
(function(){
  const ua = navigator.userAgent;
  const standalone = matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;
  const ios = /iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
  let ask=null;
  const box=$("install");
  // Shared with the profile's "Installer l'app" page.
  window.__plInstall={ standalone, ios, can:()=>!!ask,
    prompt: async()=>{ if(!ask) return; ask.prompt(); const r=await ask.userChoice; ask=null; if(r.outcome==="accepted") box.hidden=true; if(!$("me").hidden) renderMe(); } };
  addEventListener("beforeinstallprompt", e=>{ e.preventDefault(); ask=e;
    if(!bannerOff){ $("installText").textContent="Une icône sur ton écran d'accueil, l'app s'ouvre en plein écran."; $("installGo").hidden=false; box.hidden=false; } });
  addEventListener("appinstalled", ()=>{ box.hidden=true; });
  let bannerOff = standalone; try { bannerOff = bannerOff || localStorage.getItem("pl-install-hidden")==="1"; } catch(e) { /* private mode: show it again next time */ }
  if(bannerOff) return;
  $("installEmo").innerHTML=emo("wink",30);
  $("installNo").onclick=()=>{ bannerOff=true; box.hidden=true; try{ localStorage.setItem("pl-install-hidden","1"); }catch(e){ /* not stored: the banner comes back next visit */ } };
  $("installGo").onclick=()=>window.__plInstall.prompt();
  if(ios){
    $("installText").textContent = /CriOS|FxiOS|EdgiOS/.test(ua)
      ? "Ouvre ce lien dans Safari, touche Partager puis « Sur l'écran d'accueil »."
      : "Touche le bouton Partager en bas, puis « Sur l'écran d'accueil ».";
    box.hidden=false; return;
  }
  // Some Android browsers never send the install prompt: explain the menu instead.
  if(/Android/.test(ua)) setTimeout(()=>{ if(ask || !box.hidden || bannerOff) return; $("installText").textContent="Ouvre le menu ⋮ du navigateur, puis « Ajouter à l'écran d'accueil »."; box.hidden=false; }, 3000);
})();

