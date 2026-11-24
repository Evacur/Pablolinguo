// ---------- Apprendre: the list (grammar points, situations) and the sheet of the one chosen ----------
// One sheet per grammar point holds its lesson, its practice and its test; a situation holds its phrases and its test.
// On a phone the sheet replaces the list; on a wide screen it opens beside it (CSS: .learn).
import { S, state } from "../../data/state.js";
import { $, COURS, FAUX, LANG, LESSONS, PACK, RULES, SKILLS, TIPS, bossOpen, esc, lvIdx, lvl, mOf, skillsOf, themePic, today, validated } from "../../data/packs.js";
import { markDay, questDone, write } from "../../data/writes.js";
import { MAX, passed, weakness, weakWhy } from "../../../../../shared/logic/mastery.js";
import { themeOf } from "../words.js";
import { themeCount } from "../train/trainer.js";
import { mistakes } from "../train/session.js";
import { badgeOf } from "../train/end.js";
import { renderListen } from "./listen.js";
import { FAMILIES, FAMILY_OF, famPic } from "../../data/grammar-families.js";
const famName=id=>{ const f=FAMILIES[FAMILY_OF[id]]; return f? f.label+" · " : ""; };
const plural=(n, one, many=one+"s")=> `${n} ${n>1?many:one}`;
const cur=on=> on? ` aria-current="true"` : "";
const back=(label, attrs)=>UI.mini(`‹ ${label}`, {cls:"l-back", attrs});
// Two extra sheets beside the grammar points: false friends and memo tips.
const EXTRA={"@faux":"Faux amis", "@tips":"Astuces"};

export function renderCours(){
  const tab=state.coursTab, root=$("learn"), listEl=$("learnList"), top=listEl.scrollTop;
  document.querySelectorAll("#coursTabs button").forEach(b=>b.setAttribute("aria-pressed", b.dataset.ctab===tab));
  const sp = (en)=> state.TTS?`${UI.mini(`${pic("speaker",16)}`, {attrs:`data-say="${esc(en)}" aria-label="Écouter"`})}`:"";
  root.classList.toggle("solo", tab==="listen");
  if(tab==="listen"){ root.classList.remove("open"); $("coursList").innerHTML=""; renderListen(); return; }
  let open;
  if(tab==="gram"){
    const s=SKILLS.find(x=>x.id===state.gramSel), extra=EXTRA[state.gramSel]? state.gramSel : null;
    open=!!(s||extra);
    $("coursList").innerHTML=gramList();
    $("coursSheet").innerHTML= s? gramSheet(s, sp) : extra? extraSheet(extra) : hint("Choisis un point", "Son cours, son entraînement et son test s'ouvrent ici.");
  } else {
    const c=COURS.find(x=>x.id===state.coursSel);
    open=!!c;
    $("coursList").innerHTML=situList();
    $("coursSheet").innerHTML= c? situSheet(c, sp) : hint("Choisis une situation", "Ses phrases utiles, son dialogue et son test s'ouvrent ici.");
  }
  root.classList.toggle("open", open);
  listEl.scrollTop=top; // the list keeps its place when a row is chosen
}
const hint=(title, text)=>UI.emptyState(title, text, "think");

// ---- Grammaire ----
function gramList(){
  const L=lvl(), i=lvIdx(L), list=skillsOf(L), sel=state.gramSel, valid=validated(L);
  if(!list.length) return UI.emptyState(`Pas encore de cours en ${L}`, `Ce niveau arrive bientôt en ${esc(PACK.name.toLowerCase())}.`);
  const row=(x, sub)=>UI.listRow({icon:famPic(x.id), title:`<b>${esc(x.name)}</b>`, sub, trail:UI.meter(mOf(x.id), MAX, `${mOf(x.id)} sur ${MAX}`), attrs:`data-gskill="${x.id}"${cur(x.id===sel)}`});
  const weak=SKILLS.filter(s=>lvIdx(s.lvl)<=i && mOf(s.id)<MAX && weakness(S.skills[s.id])>0).sort((a,b)=>weakness(S.skills[b.id])-weakness(S.skills[a.id])).slice(0,3);
  const open=bossOpen(L), done=badgeOf(L), boss=(PACK.boss||{})[L]||[], need=Math.max(0, Math.ceil(list.length*.8)-valid);
  const challenge=UI.listRow({icon:emo("devil",20), title:`<b>Défi du niveau ${L}</b>`,
    sub: done? `Réussi avec ${done.best}/10. Tu peux le refaire quand tu veux.` : open? "Débloqué : 10 phrases plus dures, 8 sur 10 pour valider le niveau." : `Encore ${plural(need, "point")} à valider pour l'ouvrir. Tu peux déjà le tenter.`,
    trail: done? UI.pill(`Validé`) : "", chevron:boss.length>0, attrs: boss.length? `data-boss="${L}"` : `aria-disabled="true"`});
  const extras=[FAUX.length? UI.listRow({icon:pic("scales"), title:`<b>Faux amis</b>`, sub:`${FAUX.length} mots qui ressemblent au français`, chevron:true, attrs:`data-gskill="@faux"${cur(sel==="@faux")}`}) : "",
    TIPS.length? UI.listRow({icon:pic("bulb"), title:`<b>Astuces</b>`, sub:`${TIPS.length} moyens de retenir`, chevron:true, attrs:`data-gskill="@tips"${cur(sel==="@tips")}`}) : ""].filter(Boolean);
  return (weak.length? UI.sectionTitle(`À reprendre`, `<span class="label">d'après tes fautes</span>`)+UI.list(weak.map(s=>row(s, esc(weakWhy(S.skills[s.id]))))) : "")
    + UI.sectionTitle(`Niveau ${L}`, `<span class="label">${valid} sur ${list.length} validés</span>`)
    + UI.list([...list.map(x=>row(x, `${famName(x.id)}${esc(x.ex)}`)), challenge])
    + (extras.length? UI.sectionTitle(`À savoir`)+UI.list(extras) : "");
}
// The sheet of a point: a picture, the title, then its three steps (the lesson, the practice, the test) and the lesson itself.
function gramSheet(s, sp){
  const les=LESSONS[s.id], m=mOf(s.id), miss=mistakes().filter(x=>x.skill===s.id).length;
  const table=(rows, say)=>`<table class="ph">${rows.map(([a,b,c])=>`<tr><td><b>${esc(a)}</b></td><td>${esc(b)}${c?`<span class="g-note">${esc(c)}</span>`:""}</td>${say&&state.TTS?`<td class="g-say">${sp(a)}</td>`:""}</tr>`).join("")}</table>`;
  const body = les? `<p class="g-intro">${esc(les.intro)}</p>
      ${les.parts.map(pt=>`<h4>${esc(pt.h)}</h4>${pt.p.split(/\n\n+/).map(x=>`<p class="g-p">${esc(x)}</p>`).join("")}${pt.rows&&pt.rows.length?table(pt.rows):""}`).join("")}
      <h4>Exemples</h4>${table(les.ex, true)}
      ${les.traps&&les.traps.length?`<h4>Les pièges</h4><ul class="traps">${les.traps.map(([w,r,why])=>`<li><del class="bad-w">${esc(w)}</del> → <mark class="add-w">${esc(r)}</mark><span>${esc(why)}</span></li>`).join("")}</ul>`:""}
      ${les.tip?`<div class="rule"><b>L'astuce</b><span>${esc(les.tip)}</span></div>`:""}`
    : `<div class="rule"><span>${esc(RULES[s.id]||"")}</span><b>${esc(s.ex)}</b></div>
      <h4>Exemples</h4>${table(s.q.slice(0,3).map(([fr,ans])=>[ans[0],fr]), true)}`;
  const steps=[
    UI.listRow({icon:"1", title:`<b>Le cours</b>`, sub: les? `${plural(les.parts.length, "partie")} · ${plural(les.ex.length, "exemple")}` : "La règle et des exemples", chevron:true, attrs:`data-lscroll="lCourse"`}),
    UI.listRow({icon:"2", title:`<b>S'entraîner</b>`, sub:`5 exercices sur ce point${miss? ` · ${plural(miss, "phrase ratée", "phrases ratées")} à refaire` : ""}`, chevron:true, attrs:`data-practice="${s.id}"`}),
    UI.listRow({icon:"3", title:`<b>Le test</b>`, sub: m>=MAX? "Point validé. Tu peux le repasser." : `8 bonnes réponses sur 10 pour gagner un niveau de maîtrise`, trail:UI.meter(m, MAX, `${m} sur ${MAX}`), chevron:true, attrs:`data-train="${s.id}"`}),
  ];
  return `<div class="lesson">
    ${back("Grammaire", `data-gskill=""`)}
    ${UI.cover(famPic(s.id, 56)+emo("think", 96)+pic("book", 56))}
    <div><h3>${esc(s.name)}</h3><p class="ex l-facts"><span>Niveau ${esc(s.lvl)}</span><span>${famName(s.id).replace(" · ","")}</span></p></div>
    ${UI.list(steps, {inset:true})}
    <div class="l-body" id="lCourse">${body}</div>
    <div class="fiche-foot">${UI.button(`S'entraîner`, {attrs:`data-practice="${s.id}"`})}${UI.button(`Passer le test`, {variant:"secondary", attrs:`data-train="${s.id}"`})}</div>
  </div>`;
}
function extraSheet(key){
  const head=(t, sub)=>`${back("Grammaire", `data-gskill=""`)}<div><h3>${t}</h3><p class="ex l-facts"><span>${sub}</span></p></div>`;
  if(key==="@faux") return `<div class="lesson">${head("Faux amis", "Ils ressemblent au français et veulent dire autre chose.")}
    <div class="fa">${FAUX.map(f=>`<div><b>${esc(f[0])}</b>= ${esc(f[1])}<br><s>pas</s> ${esc(f[2])}</div>`).join("")}</div></div>`;
  // memo tips: the ones about this learner's weak points first (lib/mastery.js: weakness)
  const tw=t=>t[3]? weakness(S.skills[t[3]]) : 0;
  return `<div class="lesson">${head("Astuces", "Des moyens simples de retenir. Celles de tes points faibles d'abord.")}
    <div class="tips">${TIPS.map((t,k)=>[t,k]).sort((a,b)=>tw(b[0])-tw(a[0]) || a[1]-b[1]).map(([t])=>`<div class="tip-item"><span class="k">${esc(t[0])}</span><div><b>${esc(t[1])}${tw(t)>0?` ${UI.pill(`Pour toi`, "warn")}`:""}</b><span>${esc(t[2])}</span></div></div>`).join("")}</div></div>`;
}

// ---- Situations: a situation is validated by passing its test (lib/mastery.js: passed) ----
export const SIT_DONE={};  // lang -> {situation id: best score out of 100}
export function situationTestDone(theme, score, total){
  const c=COURS.find(x=>x.theme===theme); if(!c) return;
  const done=SIT_DONE[LANG]||(SIT_DONE[LANG]={}); const pct=Math.round(score/total*100);
  if(!passed(score, total) || (done[c.id]||0)>=pct) return;
  done[c.id]=pct;
  if(S.db){ const code=LANG; write(()=>S.db.doc("situations/"+code).set({d:{...SIT_DONE[code]}})); }
}
function situList(){
  const t=themeOf(today()).theme, done=SIT_DONE[LANG]||{}, sel=state.coursSel;
  const list=[...COURS].sort((a,b)=>(b.theme===t)-(a.theme===t));
  return UI.sectionTitle(`Situations`, `<span class="label">${Object.keys(done).length} sur ${COURS.length} validées</span>`)
    + UI.list(list.map(x=>UI.listRow({icon:themePic(x.theme, 22), title:`<b>${esc(x.t)}</b>`, sub:`${x.theme===t?"Thème du jour · ":""}${esc(x.situ)}`, trail:done[x.id]!=null?UI.pill(`Validée`):"", attrs:`data-cours="${x.id}"${cur(x.id===sel)}`})));
}
function situSheet(c, sp){
  const done=SIT_DONE[LANG]||{}, g=SKILLS.find(x=>x.id===c.g.skill), nTest=themeCount(c.theme);
  if(S.db && !questDone("cours")) markDay("cours"); // the day's mission: open a situation
  const steps=[
    UI.listRow({icon:"1", title:`<b>Les phrases utiles</b>`, sub:`${plural(c.ph.length, "phrase")} et un mini-dialogue`, chevron:true, attrs:`data-lscroll="lCourse"`}),
    nTest>=4? UI.listRow({icon:"2", title:`<b>Le test</b>`, sub:"8 bonnes réponses sur 10 pour valider la situation", trail:done[c.id]!=null?UI.pill(`Validée`):"", chevron:true, attrs:`data-ttheme="${esc(c.theme)}"`})
      : UI.listRow({icon:"2", title:`<b>Le test</b>`, sub:"Il arrive au niveau suivant : pas encore assez d'exercices à ton niveau", as:"div"}),
  ];
  return `<div class="lesson">
    ${back("Situations", `data-cours=""`)}
    ${UI.cover(themePic(c.theme, 96), {tint:"sun"})}
    <div><h3>${esc(c.t)}</h3><p class="ex l-facts"><span>${esc(c.situ)}</span></p></div>
    ${UI.list(steps, {inset:true})}
    <div class="l-body" id="lCourse">
    <h4>Les phrases utiles</h4>
    <table class="ph">${c.ph.map(([en,fr])=>`<tr><td><b>${esc(en)}</b></td><td>${esc(fr)}</td>${state.TTS?`<td class="g-say">${sp(en)}</td>`:""}</tr>`).join("")}</table>
    <h4>Mini-dialogue ${state.TTS?`${UI.mini(`${pic("speaker",16)} Tout écouter`, {attrs:`data-say="${esc(c.dia.map(d=>d[1]).join(" "))}"`})}`:""}</h4>
    <div class="dia">${c.dia.map(([w,l])=>`<p><span class="who">${esc(w)}</span>${esc(l)}</p>`).join("")}</div>
    <h4>La grammaire de la situation</h4>
    <div class="rule"><b>${esc(c.g.t)}</b><span>${esc(c.g.r)}</span><span class="ex">${c.g.ex.map(esc).join(" · ")}</span>${g?UI.mini(`Le cours : ${esc(g.name)}`, {attrs:`data-glesson="${g.id}"`}):""}</div>
    <h4>Les pièges</h4>
    <ul class="traps">${c.tr.map(([w,r,why])=>`<li><del class="bad-w">${esc(w)}</del> → <mark class="add-w">${esc(r)}</mark><span>${esc(why)}</span></li>`).join("")}</ul>
    <h4>À toi</h4>
    ${c.task.map(([fr,en])=>`<details class="fold-in"><summary>${esc(fr)}</summary><p><b>${esc(en)}</b> ${sp(en)}</p></details>`).join("")}
    </div>
    ${nTest>=4? `<div class="fiche-foot">${UI.button(`Passer le test`, {attrs:`data-ttheme="${esc(c.theme)}"`})}</div>` : ""}
  </div>`;
}
