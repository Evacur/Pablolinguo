// ---------- Trainer home ----------
import { S, state } from "../../data/state.js";
import { COURS, LANG, PACK, SKILLS, THEMES, bossOpen, esc, themePic, lvIdx, lvl, mOf, skillsOf } from "../../data/packs.js";
import { LV } from "../../lib/levels.js";
import { weakness, weakWhy } from "../../lib/mastery.js";
import { famPic } from "../../data/grammar-families.js";
import { SIT_DONE } from "../cours/index.js";
import { pool, themeCount } from "./trainer.js";
import { mistakes } from "./session.js";
import { badgeOf } from "./end.js";
// S'entraîner: an oval switch (UI.switcher) for the sessions (with this learner's weak points), the themes, the grammar points
// of the level and the level challenge. The tab is kept in state.trainTab.
const SESSIONS=[
  {mode:"mix", face:"cool", t:"Mélange du jour", sub:"10 exercices de ton niveau, surtout tes points faibles · 8 min"},
  {mode:"mistakes", face:"think", t:"Mes fautes", sub:"Les phrases ratées la dernière fois, à refaire · 4 min"},
  {mode:"express", face:"grin", t:"Express", sub:"5 exercices quand tu as 2 minutes"},
  {mode:"review", face:"sleepy", t:"Révision du niveau d'avant", sub:"Pour ne pas oublier · 8 min"},
];
export function trainerHome(el){
  const L=lvl(), open=bossOpen(L), all=pool(), i=lvIdx(L), tab=state.trainTab||"sessions";
  const list=skillsOf(L), boss=(PACK.boss||{})[L]||[], passed=badgeOf(L), done=SIT_DONE[LANG]||{};
  const valid=list.filter(s=>mOf(s.id)>=3).length;
  const head=UI.switcher([{key:"sessions", label:"Séances", icon:pic("clock",20)}, {key:"themes", label:"Thèmes", icon:pic("plane",20)}, {key:"gram", label:"Grammaire", icon:pic("book",20)}, {key:"boss", label:"Défi", icon:emo("devil",22)}], tab, {attr:"data-ttab", label:"S'entraîner"});
  let body="";
  if(tab==="sessions"){
    const weak=SKILLS.filter(s=>lvIdx(s.lvl)<=i && mOf(s.id)<3 && weakness(S.skills[s.id])>0).sort((a,b)=>weakness(S.skills[b.id])-weakness(S.skills[a.id])).slice(0,3);
    const nMiss=mistakes().length, below=LV[i-1];
    body= (weak.length? UI.panel(UI.list(weak.map(s=>UI.listRow({icon:famPic(s.id), title:`<b>${esc(s.name)}</b>`, sub:esc(weakWhy(S.skills[s.id])), trail:UI.mini(`Test`, {as:"span"}), attrs:`data-train="${s.id}"`}))), {title:"Tes points faibles", aside:`<span class="label">d'après tes fautes</span>`}) : "")
      + UI.panel(UI.list(SESSIONS.map(x=>{
          const off= x.mode==="mistakes"? nMiss===0 : x.mode==="review"? !below : false;
          const sub= x.mode==="mistakes"? (nMiss? `${Math.min(nMiss,10)} phrase${nMiss>1?"s":""} ratée${nMiss>1?"s":""} à refaire · 4 min` : "Aucune faute à refaire pour l'instant")
            : x.mode==="review"? (below? `${below} · pour ne pas oublier · 8 min` : "Pas de niveau avant A1") : x.sub;
          return UI.listRow({lead:emo(x.face,30), title:`<b>${x.t}</b>`, sub, chevron:!off, attrs: off? `aria-disabled="true"` : `data-tmode="${x.mode}"`});
        })), {title:"Séances"});
  } else if(tab==="themes"){
    body=UI.panel(`<p class="ex">Les exercices d'un thème, de ton niveau et d'avant. C'est aussi le test de sa situation.</p>`
      + UI.list(THEMES.map(t=>{ const n=themeCount(t), c=COURS.find(x=>x.theme===t);
          return UI.listRow({icon:themePic(t,22), title:`<b>${esc(t)}</b>`, sub:`${n} exercice${n>1?"s":""}${n<4?" à ton niveau, pas encore assez pour un test":""}${c? " · "+esc(c.t) : ""}`, trail: c && done[c.id]!=null? UI.pill(`Validée`) : "", chevron:n>=4, attrs: n>=4? `data-ttheme="${t}"` : `aria-disabled="true"`}); })), {title:"Par thème", aside:`<span class="label">${THEMES.length} thèmes</span>`});
  } else if(tab==="gram"){
    body=UI.panel(`<p class="ex">Le test d'un point : 8 bonnes réponses sur 10 pour gagner un niveau de maîtrise.</p>`
      + UI.list([...list].sort((a,b)=>mOf(a.id)-mOf(b.id)).map(s=>UI.listRow({icon:famPic(s.id), title:`<b>${esc(s.name)}</b>`, sub:esc(s.ex), trail:UI.meter(mOf(s.id), 3, `${mOf(s.id)} sur 3`), attrs:`data-train="${s.id}"`}))), {title:`Grammaire ${L}`, aside:`<span class="label">${valid}/${list.length} points validés</span>`});
  } else {
    body=UI.panel(`
      <p class="ex">${passed? `Tu l'as réussi avec ${passed.best}/10. Tu peux le refaire quand tu veux.`   : open? "Débloqué : 10 phrases plus dures. 8 sur 10 et le niveau est validé." : `Il s'ouvre quand 80 % des points sont validés : encore ${Math.max(0, Math.ceil(list.length*.8)-valid)} à valider. Tu peux déjà le tenter si tu te sens prêt.`}</p>
      <p class="ex">${UI.meter(valid, list.length, `${valid} sur ${list.length}`)}</p>
      <div class="row">${UI.button(`Tenter le défi ${L}`, {variant:open&&!passed?"default":"secondary", attrs:`data-boss="${L}" ${boss.length?"":"disabled"}`})}</div>
    `, {title:`Défi du niveau ${L}`, aside:passed? UI.pill(`Validé`) : `<span class="label">${valid}/${list.length} points validés</span>`});
  }
  el.innerHTML=`<div class="col">${head}<div class="col" role="tabpanel" id="ttab-panel" aria-labelledby="ttab-${tab}">${body}</div></div>`;
}
