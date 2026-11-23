// ---------- Render: accueil ----------
function setStatus(t){ const el=$("status"); el.textContent=t||""; el.hidden=!t; }
function hello(){ const h=new Date().getHours(); return (h<5||h>=18?"Bonsoir":"Bonjour")+(S.name?" "+S.name:""); }
function render(){
  const L=lvl(), p=pct(L), info=LV_INFO[L], next=LV[lvIdx(L)+1];
  $("lvlChip").textContent=L; $("langChip").textContent=PACK.name; $("langCode").textContent=LANG.toUpperCase();
  $("lvlBtn").setAttribute("aria-label", PACK.name+", niveau "+L+". Changer de langue ou de niveau");
  renderLvlPop(); renderAvatar();
  $("hello").textContent=hello();
  $("bLvl").textContent=L; $("bLvlName").textContent=info[0];
  $("bPct").textContent=p+" %"; $("bFill").style.width=p+"%";
  const drilled=questDone("drill");
  $("bannerTitle").textContent= drilled? "Séance faite, bravo" : "Ta séance du jour";
  $("bannerSub").textContent= drilled? "Tu peux en refaire une, ou passer aux mots." : "10 exercices variés de ton niveau";
  $("bannerEmo").innerHTML=emo(drilled?"cool":"grin",45);
  $("ctaEmo").innerHTML=emo("wink",15);
  const badge=badgeOf(L), open=p>=80;
  $("steps").innerHTML=`<span class="${open?"on":""}">${open?"✓":"1"} · 80 % des points</span><span class="${open?"on":""}">${open?"✓":"2"} · Défi débloqué</span><span class="${badge?"on":""}">${badge?"✓":"3"} · ${L} validé</span>`;
  $("levelUpBtn").hidden=!open||!!badge; $("levelUpBtn").dataset.boss=L;
  renderTopStats(S.progress.xp||0);
  renderSkills(); renderQuests(); renderWotd();
  if(!$("view-plan").hidden) renderPlan();
}
function renderTopStats(xp){
  const st=streak(); $("streak").textContent=st; $("xp").textContent=xp; $("streakIco").innerHTML=pic("flame",20);
  $("streakBox").classList.toggle("off", !st); $("streakBox").setAttribute("aria-label", st+" jour"+(st>1?"s":"")+" de série"); $("xpBox").setAttribute("aria-label", xp+" XP");
}
function renderLvlPop(){
  const L=lvl();
  $("lvlPop").innerHTML=`<p class="lp-h">Langue</p><div class="lp-lang">${PACK_LIST().map(p=>`<button data-lang="${p.code}" aria-pressed="${p.code===LANG}">${esc(p.name)}</button>`).join("")}</div><p class="lp-h">Niveau en ${esc(PACK.name.toLowerCase())}</p>`+LV.map(l=>{ const b=badgeOf(l); const st= l===L? "ton niveau" : b? "validé" : pct(l)? pct(l)+" %" : "";
    return `<button data-lvl="${l}" aria-pressed="${l===L}"${lvReady(l)?"":" disabled"}><span class="code">${l}</span><span class="nm">${esc(LV_INFO[l][0])}</span><span class="st">${lvReady(l)?st:"bientôt"}</span></button>`; }).join("")
    +`<p class="lvlnote">Changer de niveau n'efface rien : ta progression sur chaque niveau reste enregistrée.</p>`
;
}
function toggleLvlPop(open){ const o= open ?? $("lvlPop").hidden; $("lvlPop").hidden=!o; $("lvlBtn").setAttribute("aria-expanded", o); }
function renderSkills(){
  const list=skillsOf(lvl()).filter(s=>mOf(s.id)<3).sort((a,b)=>mOf(a.id)-mOf(b.id)).slice(0,3);
  $("skills").innerHTML = list.length? list.map(s=>{ const m=mOf(s.id);
    return UI.listRow("info", {title:esc(s.name), sub:esc(s.ex), trail:`
    ${UI.meter(m, 3, `${m} sur 3`)}
    ${UI.mini(`S'entraîner`, {attrs:`data-train="${s.id}"`})}`}); }).join("")
    : `<p class="ex">Tous les points du ${lvl()} sont maîtrisés. Passe au niveau suivant dans Parcours.</p>`;
}
function renderQuests(){
  const d=(S.progress.days||{})[today()]||{q:[]}; const done=QUESTS.filter(q=>d.q.includes(q.id)).length;
  $("todayLbl").textContent=done+"/"+QUESTS.length;
  $("quests").innerHTML=QUESTS.map(q=>{ const on=d.q.includes(q.id); return UI.listRow("task", {done:on, title:esc(q.t), trail:q.auto&&!on?`<span class="go" aria-hidden="true">›</span>`:`<span class="xp">+${q.xp}</span>`, attrs:`data-quest="${q.id}" ${q.auto?`data-auto="${q.auto}"`:""}`}); }).join("");
}
function renderPlan(){
  const L=lvl(), i=lvIdx(L), info=PACK.levels||{};
  $("ladderTitle").textContent=PACK.name+" : les niveaux de A1 à C2";
  $("ladder").innerHTML=LV.map((l,k)=>{ const badge=badgeOf(l); const c=badge||k<i?"done":k===i?"now":""; const d=info[l]||{}; const list=skillsOf(l); const nb=((PACK.boss||{})[l]||[]).length;
    return `<details class="lvl ${c}" ${k===i?"open":""}><summary><span class="code">${l}</span><span><b>${esc(LV_INFO[l][0])}${k===i?" · ton niveau":""}</b><span class="d">${esc(LV_INFO[l][1])}</span></span>
      <span class="label">${badge?`${UI.pill(`Validé ${badge.best}/10`)}`:k===i?pct(l)+" %":k<i?"✓":""}</span></summary>
      <div class="lvl-body">
        ${d.can?`<div><span class="label">Ce que tu sais faire</span><ul>${d.can.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div>`:""}
        ${d.ex?`<div class="sample"><b>${esc(d.ex)}</b><div class="ex">${esc(d.fr||"")}</div></div>`:""}
        <div><span class="label">Grammaire · ${list.length} points</span>${UI.choiceList(list.map(s=>UI.listRow("choice", {title:esc(s.name), trail:UI.meter(mOf(s.id), 3, `${mOf(s.id)} sur 3`), attrs:`data-train="${s.id}"`})))}</div>
        ${d.hours?`<p class="ex">Repère : environ ${d.hours} h d'apprentissage au total pour atteindre ce niveau.</p>`:""}
        <div class="row">${nb?`${UI.button(`Tenter le défi ${l}`, {attrs:`data-boss="${l}"`})}`:""}${k!==i&&lvReady(l)?`${UI.button(`Choisir ce niveau`, {variant:"ghost", attrs:`data-lvl="${l}"`})}`:""}${lvReady(l)?"":`<p class="ex">Ce niveau arrive bientôt en ${esc(PACK.name.toLowerCase())}.</p>`}</div>
      </div></details>`; }).join("");
  $("sites").innerHTML=SITES.map(s=>`<li><span class="tag">${esc(s[0])}</span><div><b><a href="${s[2]}" target="_blank" rel="noopener">${esc(s[1])}</a></b><span class="d">${esc(s[3])}</span></div></li>`).join("");
}
function renderOnb(){
  if(!onbMode) return;
  const first=onbMode==="first", askLang=first && !S.lang, cur=S.levels[LANG];
  $("onbEmo").innerHTML=emo(first?"grin":"cool",30);
  $("onbKicker").textContent= first? "Bienvenue sur Pablolinguo" : "Ton profil";
  $("onbTitle").textContent= askLang? "Quelle langue veux-tu apprendre ?" : (first||onbMode==="newlang")&&!cur? `Quel est ton niveau d'${PACK.name.toLowerCase()} ?` : "Niveau et compte";
  $("onbText").textContent= askLang? "Tu pourras en changer, ou apprendre les deux, dans ton profil." : "Les phrases, la grammaire et les fiches s'adaptent à ton niveau. Tu pourras le changer quand tu veux. Pas sûr ? Prends A2.";
  $("langLbl").hidden=$("langPick").hidden= !askLang; // afterwards the EN / ES switch in the header does it
  $("lvlLbl").hidden=$("lvlPick").hidden= askLang;
  $("lvlLbl").textContent="Niveau en "+PACK.name.toLowerCase();
  $("onbNote").hidden= !first || askLang;
  $("onbClose").hidden= first || (!cur && !(onbMode==="newlang" && prevLang));
  $("onbClose").textContent= onbMode==="newlang" && !cur? "Revenir à l'"+(((window.PACKS||{})[prevLang]||{}).name||"").toLowerCase() : "Fermer";
  $("langPick").innerHTML=PACK_LIST().map(p=>`<button data-lang="${p.code}" aria-pressed="${!askLang && p.code===LANG}"><span class="code">${p.code.toUpperCase()}</span><span><b>${esc(p.name)}</b><span class="d">${esc(p.native)}${S.levels[p.code]?" · niveau "+S.levels[p.code]+" · "+((PROG_BY[p.code]||{}).xp||0)+" XP":""}</span></span></button>`).join("");
  $("lvlPick").innerHTML=LV.map(l=>`<button data-lvl="${l}" aria-pressed="${cur===l}"${lvReady(l)?"":" disabled"}><span class="code">${l}</span><span><b>${esc(LV_INFO[l][0])}${lvReady(l)?"":" · bientôt"}</b><span class="d">${esc(LV_INFO[l][1])}</span></span></button>`).join("");
}

