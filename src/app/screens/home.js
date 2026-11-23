// ---------- Render: accueil ----------
import { S, state } from "../data/state.js";
import { LV, LV_INFO, QUESTS } from "../lib/levels.js";
import { weakness, weakWhy } from "../lib/mastery.js";
import { $, bossOpen, validated, COURS, LANG, PACK, PACK_LIST, SKILLS, esc, lvIdx, lvReady, lvl, mOf, pct, skillsOf, streak, themePic, today } from "../data/packs.js";
import { questDone } from "../data/writes.js";
import { prevLang, renderAvatar } from "./profile.js";
import { themeOf } from "./words.js";
import { mistakes } from "./train/session.js";
import { badgeOf } from "./train/end.js";
export function setStatus(t){ const el=$("status"); el.textContent=t||""; el.hidden=!t; }
export function hello(){ const h=new Date().getHours(); return (h<5||h>=18?"Bonsoir":"Bonjour")+(S.name?" "+S.name:""); }
export function render(){
  const L=lvl();
  $("lvlChip").textContent=L; $("langChip").textContent=PACK.name; $("langCode").textContent=LANG.toUpperCase();
  $("lvlBtn").setAttribute("aria-label", PACK.name+", niveau "+L+". Changer de langue ou de niveau");
  renderLvlPop(); renderAvatar();
  $("hello").textContent=hello();
  const day=new Date().toLocaleDateString("fr-FR", {weekday:"long", day:"numeric", month:"long"}); $("homeDate").textContent=day.charAt(0).toUpperCase()+day.slice(1);
  renderTopStats();
  renderKpis(); renderQuests(); renderFree();
}
// Sessions to start at any time, outside the plan of the day.
function renderFree(){
  const nMiss=mistakes().length, below=LV[lvIdx(lvl())-1];
  const items=[{mode:"express", face:"wink", tint:"sky", t:"Express", sub:"5 exercices · 2 min"},
    {mode:"mistakes", face:"meh", tint:"rose", t:"Mes fautes", sub: nMiss? `${Math.min(nMiss,10)} à refaire · 4 min` : "Rien à refaire", off:!nMiss},
    below? {mode:"review", face:"sleepy", tint:"lilac", t:`Révision ${below}`, sub:"Pour ne pas oublier · 8 min"} : null].filter(Boolean);
  $("homeFree").innerHTML=UI.sectionTitle(`Séance libre`)+UI.vignettes(items.map(x=>UI.vignette({icon:emo(x.face,48), tint:x.tint, title:x.t, trail:`<span class="label">${x.sub}</span>`, attrs: x.off? `disabled` : `data-tmode="${x.mode}"`})));
}
// Right answers among this learner's answers of the last 7 days (state.SEEN keeps the last answer of each exercise).
function success7(){
  const from=new Date(Date.now()-6*864e5).toLocaleDateString("en-CA");
  const recent=Object.values(state.SEEN||{}).filter(x=>x && x.d>=from);
  return recent.length? Math.round(recent.filter(x=>x.ok).length/recent.length*100) : null;
}
function renderKpis(){
  const L=lvl(), list=skillsOf(L), st=streak(), ok=success7();
  $("kpis").innerHTML=UI.stats([
    {icon:pic("flame",22), value:`${st} j`, label:"Série"},
    {icon:emo("cool",24), value:`${list.filter(s=>mOf(s.id)>=3).length}/${list.length}`, label:`Points ${L} validés`},
    {icon:emo(ok==null?"sleepy":ok>=70?"grin":"think",24), value:ok==null?"–":`${ok} %`, label:"Réussite 7 jours"}], {cls:"side"});
}
export function renderTopStats(){
  const st=streak(); $("streak").textContent=st; $("streakIco").innerHTML=pic("flame",20);
  $("streakBox").classList.toggle("off", !st); $("streakBox").setAttribute("aria-label", st+" jour"+(st>1?"s":"")+" de série");
}
function renderLvlPop(){
  const L=lvl();
  $("lvlPop").innerHTML=`<p class="lp-h">Langue</p><div class="lp-lang">${PACK_LIST().map(p=>`<button data-lang="${p.code}" aria-pressed="${p.code===LANG}">${esc(p.name)}</button>`).join("")}</div><p class="lp-h">Niveau en ${esc(PACK.name.toLowerCase())}</p>`+LV.map(l=>{ const b=badgeOf(l); const st= l===L? "ton niveau" : b? "validé" : pct(l)? pct(l)+" %" : "";
    return `<button data-lvl="${l}" aria-pressed="${l===L}"${lvReady(l)?"":" disabled"}><span class="code">${l}</span><span class="nm">${esc(LV_INFO[l][0])}</span><span class="st">${lvReady(l)?st:"bientôt"}</span></button>`; }).join("")
    +`<p class="lvlnote">Changer de niveau n'efface rien : ta progression sur chaque niveau reste enregistrée.</p>`
;
}
export function toggleLvlPop(open){ const o= open ?? $("lvlPop").hidden; $("lvlPop").hidden=!o; $("lvlBtn").setAttribute("aria-expanded", o); }
// The plan of the day: this learner's weak point (lib/mastery.js: weakness), then the daily missions (QUESTS).
// The first step not done is the big card at the top, with its button; the others are rows under it.
function weakStep(){
  const i=lvIdx(lvl()), t=today();
  const passed=SKILLS.find(s=>S.skills[s.id] && S.skills[s.id].pd===t);
  if(passed) return {id:"weak", done:true, title:`Test réussi : ${esc(passed.name)}`, sub:"Un point de plus vers la maîtrise"};
  const weak=SKILLS.filter(s=>lvIdx(s.lvl)<=i && mOf(s.id)<3 && weakness(S.skills[s.id])>0).sort((a,b)=>weakness(S.skills[b.id])-weakness(S.skills[a.id]))[0];
  const s=weak || skillsOf(lvl()).filter(x=>mOf(x.id)<3).sort((a,b)=>mOf(a.id)-mOf(b.id))[0];
  if(!s) return null;
  return {id:"weak", done:false, face:"think", title:esc(s.name), sub:`${weak?"Ton point faible":"Un nouveau point"} · ${esc(weakWhy(S.skills[s.id]))}`,
    attrs:`data-glesson="${s.id}"`, cta:"Reprendre", more:UI.button(`Passer le test`, {variant:"ghost", attrs:`data-train="${s.id}"`})};
}
// The level challenge is not a step of the plan: when it opens, a card above the plan offers it (Pi, 2026-11-23).
// Its title is in the language learnt, its text in French; it opens nothing by itself.
const BOSS_CALL={en:"It's time!!!!", es:"¡Es la hora!!!!"};
function renderBoss(){
  const L=lvl(), open=bossOpen(L) && !badgeOf(L);
  $("bossCard").hidden=!open;
  $("bossCard").innerHTML= open? UI.banner({face:"devil", kicker:`Défi ${L}`, title:esc(BOSS_CALL[LANG]||BOSS_CALL.en),
    sub:`${validated(L)} points ${L} sur ${skillsOf(L).length} validés. Montre ce que tu vaux : 8 phrases justes sur 10 et le ${L} est à toi.`,
    action:UI.button(`Tenter le défi ${L}`, {attrs:`data-boss="${L}"`})}) : "";
}
function planItems(){
  const sit=COURS.find(c=>c.theme===themeOf(today()).theme);
  return [weakStep(),
    {id:"drill", face:"cool", title:"La séance du jour", sub:"10 exercices de ton niveau, surtout tes points faibles · 8 min", attrs:`data-tmode="mix"`, cta:"Commencer"},
    {id:"words", face:"nerd", title:"Réviser 10 mots", sub:"Les mots qui reviennent aujourd'hui · 4 min", attrs:`data-go="words"`, cta:"Réviser mes mots"},
    {id:"cours", face:"wow", title:sit? `Situation : ${esc(sit.t)}` : "Une situation", sub:"Ses phrases utiles et son dialogue · 5 min", attrs:`data-hsit="${sit?sit.id:""}"`, cta:"Ouvrir la situation"},
  ].filter(Boolean).map(x=>{ const q=QUESTS.find(q=>q.id===x.id); return {...x, done: x.done || (q? questDone(q.id) : false)}; });
}
// Every step of the plan of the day is done (data/writes.js says « Tout est fait » only then).
export const planDone=()=>planItems().every(x=>x.done);
export function renderQuests(){
  renderBoss();
  const items=planItems(), next=items.find(x=>!x.done), rest=items.filter(x=>x!==next), nDone=items.filter(x=>x.done).length;
  $("homeHero").innerHTML= next? UI.banner({tone:"sun", face:next.face, kicker:"À faire maintenant", title:next.title, sub:next.sub, action:`<div class="row">${UI.button(next.cta, {attrs:next.attrs})}${next.more||""}</div>`})
    : UI.banner({tone:"sun", face:"party", kicker:"Aujourd'hui", title:"Tout est fait", sub:"Bravo. Reviens demain pour garder ta série."});
  $("plan").innerHTML= rest.length? UI.sectionTitle(next? `Ensuite` : `Fait aujourd'hui`, `<span class="label">${nDone} sur ${items.length}</span>`)
    + UI.list(rest.map(x=>UI.listRow({check:!!x.done, title:`<b>${x.title}</b>`, sub: x.done? "Fait" : x.sub, chevron:!x.done, attrs: x.done? `aria-disabled="true"` : x.attrs}))) : "";
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
  $("langPick").innerHTML=PACK_LIST().map(p=>`<button data-lang="${p.code}" aria-pressed="${!askLang && p.code===LANG}"><span class="code">${p.code.toUpperCase()}</span><span><b>${esc(p.name)}</b><span class="d">${esc(p.native)}${S.levels[p.code]?" · niveau "+S.levels[p.code]:""}</span></span></button>`).join("");
  $("lvlPick").innerHTML=LV.map(l=>`<button data-lvl="${l}" aria-pressed="${cur===l}"${lvReady(l)?"":" disabled"}><span class="code">${l}</span><span><b>${esc(LV_INFO[l][0])}${lvReady(l)?"":" · bientôt"}</b><span class="d">${esc(LV_INFO[l][1])}</span></span></button>`).join("");
}

