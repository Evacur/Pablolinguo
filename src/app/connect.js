// ---------- Connect to the account (runtime.js resolves window.PLReady after sign-in) ----------
(async()=>{
  const rt=await window.PLReady; await BOOT; if(!PACK) return;
  DICT=rt.dictation; TTS=rt.tts; SAMPLE=rt.ai; RT=rt; renderMyBox();
  S.name=rt.name||""; S.email=rt.email||""; renderAvatar();
  const recover=()=>{ if(RT) RT.recovering=true; openMe("password"); setTimeout(()=>{ const i=$("pPass"); if(i) i.focus(); },50); };
  if(rt.recovering) setTimeout(recover, 300); addEventListener("pl-recovery", recover);
  const db=rt.db; S.db=db;
  db.doc("me/profile").onSnapshot(function onProfile(s){
    const d=s.exists? s.data() : {}; const levels={...(d.levels||{})};
    const saved=PACK_LIST().some(l=>l.code===d.lang)? d.lang : (levels.en||LV.includes(d.level)? "en" : null);
    if(saved && !window.PACKS[saved]){ window.loadLang(saved).then(()=>onProfile(s), ()=>toast("sad","Langue indisponible","Le contenu n'a pas pu se charger. Vérifie ta connexion puis réessaie.")); return; }
    if(LV.includes(d.level) && !levels.en) levels.en=d.level; // profiles saved before languages existed
    if(typeof d.name==="string" && d.name) S.name=d.name;
    if(d.avatar && AV_FACES.includes(d.avatar.e) && AV_COLS.includes(d.avatar.c)) S.avatar={e:d.avatar.e,c:d.avatar.c};
    if(d.theme) applyTheme(d.theme);
    renderAvatar(); if(!$("me").hidden && !["name","password"].includes(ME.stack[ME.stack.length-1])) renderMe();
    S.levels=levels; const lang=saved;
    if(lang && lang!==LANG){ applyPack(lang); }
    S.lang=lang;
    if(!S.profileLoaded){ S.profileLoaded=true; if(!lang || !levels[lang]) openProfile("first"); }
    render(); if(!$("view-board").hidden) renderWotd();
    document.body.classList.remove("is-loading"); // the skeleton gives way to the real values
    const v=VIEWS.find(x=>!$("view-"+x).hidden); if(v && v!=="board" && !T) show(v); // redraw with the saved language and level
  }, ()=>{});
  db.doc("me/badges").onSnapshot(s=>{ S.badges=s.exists? s.data() : {}; render(); }, ()=>{});
  PACK_LIST().forEach(p=>db.doc("listen/"+p.code).onSnapshot(s=>{ LISTEN_DONE[p.code]=s.exists? {...(s.data().d||{})} : {}; }, ()=>{}));
  PACK_LIST().filter(p=>p.abc).forEach(p=>db.doc("abc/"+p.code).onSnapshot(s=>{ ABC_DONE[p.code]=s.exists? {...(s.data().d||{})} : {}; if(!T && p.code===LANG && !$("view-train").hidden) renderTrainer(); }, ()=>{}));
  PACK_LIST().forEach(p=>db.doc("seen/"+p.code).onSnapshot(s=>{ SEEN_BY[p.code]=s.exists? {...(s.data().k||{})} : {}; if(p.code===LANG) SEEN=SEEN_BY[LANG]; }, ()=>{}));
  db.collection("skills").onSnapshot(s=>{ const o={}; s.docs.forEach(d=>o[d.id]=d.data()); S.skills=o; render(); }, ()=>{});
  PACK_LIST().forEach(p=>db.doc(progPath(p.code)).onSnapshot(s=>{ PROG_BY[p.code]={xp:0,days:{},...(s.exists? s.data() : {})}; if(p.code===LANG) S.progress=PROG_BY[LANG]; render(); }, ()=>{}));
  PACK_LIST().forEach(p=>{ const path= p.code==="en"? "vocab/srs" : "vocab/srs_"+p.code;
    db.doc(path).onSnapshot(s=>{ SRS_LOADED[p.code]=s.exists; SRS_BY[p.code]=s.exists? {...(s.data().w||{})} : {};
      if(p.code!==LANG) return; srsLoaded=SRS_LOADED[LANG]; SRS=SRS_BY[LANG];
      if(!$("view-words").hidden && (!VQ||VQ.phase==="ask")) { VQ=null; renderWords(); } render(); }, ()=>{}); });
  db.collection("mywords").onSnapshot(s=>{ MY_ALL=s.docs.map(d=>({id:d.id,...d.data()})).sort((a,b)=>String(b.added||"").localeCompare(String(a.added||""))); MY=MY_ALL.filter(m=>(m.lang||"en")===LANG); renderMyWords(); }, ()=>{});
})();

