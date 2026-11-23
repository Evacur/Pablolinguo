// ---------- Render: accueil ----------
import { PROG_BY, S, state } from "../data/state.js";
import { LV, LV_INFO, QUESTS } from "../lib/levels.js";
import { weakness, weakWhy } from "../lib/mastery.js";
import { $, LANG, PACK, PACK_LIST, SKILLS, esc, lvIdx, lvReady, lvl, mOf, pct, skillsOf, streak, today } from "../data/packs.js";
import { questDone } from "../data/writes.js";
import { prevLang, renderAvatar } from "./profile.js";
import { renderWotd } from "./words.js";
import { badgeOf } from "./train/end.js";
export function setStatus(t){ const el=$("status"); el.textContent=t||""; el.hidden=!t; }
export function hello(){ const h=new Date().getHours(); return (h<5||h>=18?"Bonsoir":"Bonjour")+(S.name?" "+S.name:""); }
export function render(){
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
}
export function renderTopStats(xp){
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
export function toggleLvlPop(open){ const o= open ?? $("lvlPop").hidden; $("lvlPop").hidden=!o; $("lvlBtn").setAttribute("aria-expanded", o); }
// « À revoir »: this learner's weak points, from their own answers (lib/mastery.js: weakness), at their level
// and below; then points of their level they have not worked on yet.
function renderSkills(){
  const i=lvIdx(lvl());
  const weak=SKILLS.filter(s=>lvIdx(s.lvl)<=i && weakness(S.skills[s.id])>0 && mOf(s.id)<3).sort((a,b)=>weakness(S.skills[b.id])-weakness(S.skills[a.id]));
  const fresh=skillsOf(lvl()).filter(s=>!weak.includes(s) && mOf(s.id)<3).sort((a,b)=>mOf(a.id)-mOf(b.id));
  const list=[...weak, ...fresh].slice(0,3);
  $("skills").innerHTML = list.length? list.map(s=>{ const m=mOf(s.id);
    return UI.listRow({as:"div", title:esc(s.name), sub:esc(weakWhy(S.skills[s.id])), trail:`
    ${UI.meter(m, 3, `${m} sur 3`)}
    ${UI.mini(`S'entraîner`, {attrs:`data-train="${s.id}"`})}`}); }).join("")
    : `<p class="ex">Tous les points du ${lvl()} sont maîtrisés. Tente le défi du niveau dans S'entraîner.</p>`;
}
export function renderQuests(){
  const d=(S.progress.days||{})[today()]||{q:[]}; const done=QUESTS.filter(q=>d.q.includes(q.id)).length;
  $("todayLbl").textContent=done+"/"+QUESTS.length;
  $("quests").innerHTML=QUESTS.map(q=>{ const on=d.q.includes(q.id); return UI.listRow({check:on, title:esc(q.t), chevron:q.auto&&!on, trail:q.auto&&!on? "" : `<span class="num">+${q.xp}</span>`, attrs:`data-quest="${q.id}" ${q.auto?`data-auto="${q.auto}"`:""} aria-pressed="${on}"`}); }).join("");
}
export function renderOnb(){
  if(!state.onbMode) return;
  const first=state.onbMode==="first", askLang=first && !S.lang, cur=S.levels[LANG];
  $("onbEmo").innerHTML=emo(first?"grin":"cool",30);
  $("onbKicker").textContent= first? "Bienvenue sur Pablolinguo" : "Ton profil";
  $("onbTitle").textContent= askLang? "Quelle langue veux-tu apprendre ?" : (first||state.onbMode==="newlang")&&!cur? `Quel est ton niveau d'${PACK.name.toLowerCase()} ?` : "Niveau et compte";
  $("onbText").textContent= askLang? "Tu pourras en changer, ou apprendre les deux, dans ton profil." : "Les phrases, la grammaire et les fiches s'adaptent à ton niveau. Tu pourras le changer quand tu veux. Pas sûr ? Prends A2.";
  $("langLbl").hidden=$("langPick").hidden= !askLang; // afterwards the EN / ES switch in the header does it
  $("lvlLbl").hidden=$("lvlPick").hidden= askLang;
  $("lvlLbl").textContent="Niveau en "+PACK.name.toLowerCase();
  $("onbNote").hidden= !first || askLang;
  $("onbClose").hidden= first || (!cur && !(state.onbMode==="newlang" && prevLang));
  $("onbClose").textContent= state.onbMode==="newlang" && !cur? "Revenir à l'"+(((window.PACKS||{})[prevLang]||{}).name||"").toLowerCase() : "Fermer";
  $("langPick").innerHTML=PACK_LIST().map(p=>`<button data-lang="${p.code}" aria-pressed="${!askLang && p.code===LANG}"><span class="code">${p.code.toUpperCase()}</span><span><b>${esc(p.name)}</b><span class="d">${esc(p.native)}${S.levels[p.code]?" · niveau "+S.levels[p.code]+" · "+((PROG_BY[p.code]||{}).xp||0)+" XP":""}</span></span></button>`).join("");
  $("lvlPick").innerHTML=LV.map(l=>`<button data-lvl="${l}" aria-pressed="${cur===l}"${lvReady(l)?"":" disabled"}><span class="code">${l}</span><span><b>${esc(LV_INFO[l][0])}${lvReady(l)?"":" · bientôt"}</b><span class="d">${esc(LV_INFO[l][1])}</span></span></button>`).join("");
}

