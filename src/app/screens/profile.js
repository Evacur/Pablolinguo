// ---------- Profile: hub + pages (same row pattern and back button everywhere) ----------
import { PROG_BY, S, state } from "../data/state.js";
import { LV } from "../lib/levels.js";
import { $, LANG, PACK, PACK_LIST, applyPack, esc, lvReady, streak } from "../data/packs.js";
import { AV_COLS, AV_FACES, saveProfile } from "../data/writes.js";
import { render, renderOnb, toggleLvlPop } from "./home.js";
import { VIEWS, show } from "../app.js";
export const ME={stack:["home"]};
const ME_TITLES={home:"Profil",name:"Prénom",avatar:"Avatar",theme:"Apparence",password:"Mot de passe",install:"Installer l'app",privacy:"Confidentialité",about:"À propos",delete:"Supprimer mon compte"};
export function openMe(page){ toggleLvlPop(false); ME.stack= page && page!=="home"? ["home",page] : ["home"]; $("me").hidden=false; renderMe(); }
function closeMe(){ $("me").hidden=true; }
export function meGo(page){ ME.stack.push(page); renderMe(); $("me").scrollTo(0,0); }
export function meBack(){ if(ME.stack.length>1){ ME.stack.pop(); renderMe(); } else closeMe(); }
// Profile rows and groups are the design system's list rows (UI.listRow, UI.list).
const rowi=(o)=>UI.listRow({title:esc(o.label), sub:o.sub? esc(o.sub) : "", icon:o.ico!=null? o.ico : "", trail:o.val!=null? o.val : "",
  on:!!o.check, chevron:!!o.go && !o.check, danger:!!o.bad, href:o.href||"", as:o.go||o.act||o.href? "button" : "div",
  attrs:(o.go? `data-me="${o.go}"` : o.act? `data-me-act="${o.act}"` : "")+(o.pressed!=null? ` aria-pressed="${o.pressed}"` : "")});
const grp=(label, rows)=>UI.list(rows, {inset:true, label:label? esc(label) : ""});
const xpAll=()=>PACK_LIST().reduce((t,p)=>t+((PROG_BY[p.code]||{}).xp||0),0);
export function renderAvatar(){ const el=$("avBtn"); if(el){ el.className="avatar av-"+S.avatar.c; el.innerHTML=emo(S.avatar.e,24); } const n=$("meName"); if(n) n.textContent=S.name||"Moi"; }
const bigAv=(clickable)=>`<span class="avatar big av-${S.avatar.c}" ${clickable?'data-me="avatar" role="button" tabindex="0" aria-label="Changer d\'avatar"':""}>${emo(S.avatar.e,60)}</span>`;
export function renderMe(){
  renderAvatar();
  const page=ME.stack[ME.stack.length-1]; $("meTitle").textContent=ME_TITLES[page]||"Profil";
  $("meBackIco").textContent= ME.stack.length>1? "‹" : "×"; $("meBack").setAttribute("aria-label", ME.stack.length>1? "Retour" : "Fermer le profil");
  const b=$("meBody"); const inst=window.__plInstall||{};
  if(page==="home"){
    b.innerHTML=`<div class="me-hero">${bigAv(true)}<h3>${esc(S.name||"Toi")}</h3><span class="ex">${esc(S.email||"")}</span>
      <div class="me-stats"><div><b>${streak()}</b><span>jours de série</span></div><div><b>${xpAll()}</b><span>XP au total</span></div><div><b>${Object.keys(state.SRS).filter(k=>state.SRS[k].b>=3).length}</b><span>mots appris</span></div></div></div>`
    + grp("Profil",[rowi({ico:pic("pencil"),label:"Prénom",val:esc(S.name||"À ajouter"),go:"name"}), rowi({ico:emo(S.avatar.e,15),label:"Avatar",val:"",go:"avatar"})])
    + grp("Préférences",[rowi({ico:pic(S.theme==="dark"?"moon":"sun"),label:"Apparence",val:S.theme==="dark"?"Sombre":"Clair",go:"theme"}), rowi({ico:pic("phone"),label:"Installer l'app",val:inst.standalone?"Installée":"Écran d'accueil",go:"install"})])
    + grp("Compte",[rowi({ico:pic("mail"),label:"Email",val:esc(S.email||"–")}), rowi({ico:pic("key"),label:"Mot de passe",val:"Modifier",go:"password"}), rowi({ico:pic("door"),label:"Se déconnecter",act:"signout"})])
    + grp("Infos",[rowi({ico:pic("lock"),label:"Confidentialité",sub:"Ce qui est enregistré et pourquoi",go:"privacy"}), rowi({ico:pic("info"),label:"À propos",go:"about"})])
    + grp("",[rowi({ico:pic("trash"),label:"Supprimer mon compte",bad:true,go:"delete"})]);
  } else if(page==="name"){
    b.innerHTML=`<form class="me-form" id="nameForm"><label class="label" for="pName">Ton prénom</label><input id="pName" maxlength="40" autocomplete="given-name" placeholder="Ton prénom" value="${esc(S.name||"")}">${UI.button(`Enregistrer`, {attrs:`type="submit"`})}</form><p class="me-note">Il sert à te dire bonjour sur l'accueil. Personne d'autre ne le voit.</p>`;
    setTimeout(()=>$("pName").focus(),50);
  } else if(page==="avatar"){
    b.innerHTML=`<div class="av-preview">${bigAv(false)}</div>
      ${grp("Le smiley",[`<div style="padding:var(--sp-3)"><div class="av-pick">${AV_FACES.map(f=>`<button data-av="${f}" class="av-${S.avatar.c}" aria-pressed="${f===S.avatar.e}" aria-label="${f}">${emo(f,30)}</button>`).join("")}</div></div>`])}
      ${grp("La couleur",[`<div style="padding:var(--sp-3) var(--sp-3-5)"><div class="av-cols">${AV_COLS.map(c=>`<button data-avc="${c}" class="av-${c}" aria-pressed="${c===S.avatar.c}" aria-label="${c}"></button>`).join("")}</div></div>`])}`;
  } else if(page==="theme"){
    b.innerHTML=grp("",[rowi({ico:pic("sun"),label:"Clair",sub:"Le fond blanc, par défaut",act:"theme-light",check:S.theme!=="dark",pressed:S.theme!=="dark"}), rowi({ico:pic("moon"),label:"Sombre",sub:"Plus doux le soir",act:"theme-dark",check:S.theme==="dark",pressed:S.theme==="dark"})])+`<p class="me-note">Ce choix suit ton compte : tu le retrouves sur tes autres appareils.</p>`;
  } else if(page==="password"){
    b.innerHTML=`<form class="me-form" id="pwForm"><label class="label" for="pPass" id="pwLbl">${state.RT&&state.RT.recovering?"Choisis ton nouveau mot de passe":"Nouveau mot de passe"}</label><input id="pPass" type="password" minlength="8" autocomplete="new-password" placeholder="8 caractères minimum" required>${UI.button(`Changer le mot de passe`, {attrs:`type="submit" id="pwGo"`})}<p class="ex" id="pwMsg" role="status"></p></form><p class="me-note">Tu l'as oublié ? Déconnecte-toi, puis touche « Mot de passe oublié ? » sur la page de connexion.</p>`;
  } else if(page==="install"){
    b.innerHTML= inst.standalone? `<p class="me-note">Pablolinguo est déjà installé sur cet appareil.</p>`
      : grp("",[inst.ios? rowi({ico:"1",label:"Touche le bouton Partager",sub:"En bas de Safari (le carré avec une flèche)"}) : rowi({ico:"1",label:"Ouvre le menu ⋮ du navigateur",sub:"En haut à droite de Chrome"}),
          rowi({ico:"2",label:inst.ios?"Choisis « Sur l'écran d'accueil »":"Choisis « Ajouter à l'écran d'accueil »"}), rowi({ico:"3",label:"Ouvre Pablolinguo depuis l'icône",sub:"Elle s'ouvre en plein écran, comme une app"})])
        + (inst.can&&inst.can()? `${UI.button(`Installer maintenant`, {attrs:`data-me-act="install"`})}` : "");
  } else if(page==="privacy"){
    b.innerHTML=`<div class="privacy" id="privBody"><p class="ex">Chargement…</p></div>`;
    fetch("/confidentialite.html").then(r=>r.text()).then(t=>{ const d=new DOMParser().parseFromString(t,"text/html"); const m=d.querySelector("main"); if(!m) throw 0;
      m.querySelectorAll("h1, main > a").forEach(x=>x.remove()); const el=$("privBody"); if(el) el.innerHTML=m.innerHTML; })
      .catch(()=>{ const el=$("privBody"); if(el) el.innerHTML=`<p>Page indisponible pour l'instant. <a href="/confidentialite.html">L'ouvrir à part</a></p>`; });
  } else if(page==="about"){
    b.innerHTML=`<div class="me-hero">${emo("party",60)}<h3>Pablolinguo</h3><span class="ex">Un peu d'anglais ou d'espagnol, chaque jour.</span></div>`
      + grp("",[rowi({label:"Langues",val:"Anglais, espagnol"}), rowi({label:"Niveaux",val:"A1 à C2"}), rowi({label:"Corrections",val:"Par l'IA Claude"}), rowi({label:"Smileys",val:"Dessinés pour l'app"})]);
  } else if(page==="delete"){
    b.innerHTML=`<div class="me-hero">${emo("sad",60)}</div><p><b>Tout sera effacé pour de bon</b> : ton compte, ta progression dans les deux langues et tes mots. Ça ne peut pas être annulé.</p>
      <div class="me-form">${UI.button(`Oui, tout supprimer`, {variant:"destructive", attrs:`id="delGo"`})}${UI.button(`Annuler`, {variant:"ghost", attrs:`id="delNo"`})}<p class="ex" id="delMsg" role="status"></p></div>`;
  }
}
export function setLevel(l){
  if(!LV.includes(l)) return;
  if(!lvReady(l)){ toast("think","Bientôt", PACK.name+" "+l+" arrive bientôt. Pour l'instant : "+PACK.ready.join(", ")+"."); return; }
  S.levels={...S.levels,[LANG]:l}; state.T=null; state.gramSel=null; saveProfile();
  if(state.onbMode==="first"||state.onbMode==="newlang") closeProfile(); else renderOnb();
  toggleLvlPop(false);
  const v=VIEWS.find(x=>!$("view-"+x).hidden)||"board"; render(); show(v);
  toast("cool",PACK.name+" · "+l,"Tout suit ton nouveau niveau. Rien n'est effacé : tu retrouves ta progression si tu reviens.");
}
export function setLang(code){
  if(!PACK_LIST().some(l=>l.code===code)) return;
  if(!(window.PACKS||{})[code]){ window.loadLang(code).then(()=>setLang(code), ()=>toast("sad","Langue indisponible","Le contenu n'a pas pu se charger. Vérifie ta connexion puis réessaie.")); return; }
  if(code===LANG && S.lang===code){ renderOnb(); return; }
  prevLang=LANG; S.lang=code; applyPack(code); saveProfile();
  const v=VIEWS.find(x=>!$("view-"+x).hidden)||"board"; render(); show(v);
  if(!S.levels[code]){ openProfile("newlang"); return; } // pick a level, or tap the other language to go back
  renderOnb();
  if(!state.onbMode) toast("cool", PACK.name+" · "+S.levels[code], (S.progress.xp||0)+" XP en "+PACK.name.toLowerCase()+". Ta progression est gardée pour chaque langue.");
}
// One overlay for the first visit (language, then level) and for the profile settings.
export let prevLang=null;
export function openProfile(mode){ toggleLvlPop(false); state.onbMode=mode; renderOnb(); $("onb").hidden=false; }
export function closeProfile(){ if(!S.levels[LANG]) return; state.onbMode=null; $("onb").hidden=true; }

