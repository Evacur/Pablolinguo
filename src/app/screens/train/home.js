// ---------- Trainer home ----------
import { state } from "../../data/state.js";
import { $, LANG, PACK, THEMES, esc, lvIdx, lvl, mOf, pct, skillsOf } from "../../data/packs.js";
import { pool } from "./trainer.js";
import { abcLessons, abcNext, buildSession } from "./alphabet.js";
import { renderTrainer } from "./exercise.js";
import { badgeOf } from "./end.js";
export function trainerHome(el){
  const L=lvl(), p=pct(L), all=pool(), i=lvIdx(L);
  const list=[...skillsOf(L)].sort((a,b)=>mOf(a.id)-mOf(b.id));
  const boss=(PACK.boss||{})[L]||[], passed=badgeOf(L);
  const thCount=t=> all.filter(x=>x.th===t && lvIdx(x.lvl)<=i).length;
  const nx= LANG==="ru" && L==="A1"? abcNext() : null, nxi= nx? abcLessons().indexOf(nx)+1 : 0;
  el.innerHTML= (nx? `
  ${UI.banner({kicker:"Russe · on commence par lire", title:esc(nx.t), sub:`Leçon ${nxi} sur ${abcLessons().length} de l'alphabet · ${esc(nx.sub)}`,
    action:UI.button(`${emo("wink",15)}Commencer`, {attrs:`data-abc="${nx.id}"`})})}
  <div class="row">${UI.mini(`Je lis déjà le cyrillique : mélange du jour`, {attrs:`id="startMix"`})}</div>` : `
  ${UI.banner({kicker:`${esc(PACK.name)} · niveau ${L}`, title:"Mélange du jour", sub:"10 exercices variés, surtout tes points faibles",
    action:UI.button(`${emo("wink",15)}Commencer`, {attrs:`id="startMix"`})})}`) + `
  ${UI.sectionTitle("Par thème", `<span class="label">exercices de ton niveau et d'avant</span>`)}
  <div class="themes">${THEMES.map(t=>{ const n=thCount(t); return `<button class="theme" data-ttheme="${t}" ${n<4?"disabled":""}><b>${esc(t)}</b><span class="label">${n} exercices</span></button>`; }).join("")}</div>
  ${UI.panel(`
    <p class="ex">${passed? `Tu l'as réussi avec ${passed.best}/10. Tu peux le refaire quand tu veux.` : p>=80? "Débloqué : 10 phrases bonus plus dures. 8/10 et le niveau est validé." : "Il se débloque à 80 % des points maîtrisés. Tu peux déjà le tenter si tu te sens prêt."}</p>
    <div class="row">${UI.button(`Tenter le défi`, {variant:p>=80&&!passed?"default":"ghost", attrs:`data-boss="${L}" ${boss.length?"":"disabled"}`})}</div>
  `, {title:`Défi du niveau ${L}`, aside:passed? UI.pill(`Validé`) : `<span class="label">${p} % maîtrisé</span>`, cls:"boss-card"})}
  ${UI.panel(UI.list(list.map(s=>UI.listRow({title:esc(s.name), trail:UI.meter(mOf(s.id), 3, `${mOf(s.id)} sur 3`), attrs:`data-train="${s.id}"`}))), {title:"Par point de grammaire", aside:`<span class="label">${list.length} points</span>`, fold:true})}`;
  $("startMix").onclick=()=>{ state.T=buildSession(); renderTrainer(); };
}

