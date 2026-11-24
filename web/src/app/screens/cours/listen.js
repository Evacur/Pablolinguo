// ---------- Cours › Écoute: listening extracts with questions (content in /lang/listen.js) ----------
import { S, state } from "../../data/state.js";
import { sameAns, typoFix } from "../../../../../shared/logic/answers.js";
import { $, LANG, esc, lvl } from "../../data/packs.js";
import { markDay, write } from "../../data/writes.js";

export const LISTEN_DONE={};  // lang -> {extract id: best score}
export const listenItems = () => ((window.LISTEN||{})[LANG]||[]);
function listenOk(q, v){ if(v==null) return false; if(q.k==="gap") return q.a.some(a=>sameAns(a,v,LANG) || !!typoFix(a,v,LANG)); return v===q.a; }
export function renderListen(){
  const items=listenItems(); const done=LISTEN_DONE[LANG]||{};
  const L=lvl(); // the level chosen in the header, as in Grammaire: no level row here
  const list=items.filter(x=>x.lvl===L);
  const it=list.find(x=>x.id===state.listenSel);
  if(!it){
    $("coursSheet").innerHTML=`<div class="lesson"><div><h3>Compréhension orale</h3><p class="ex" style="margin-top:var(--sp-1-5)">Écoute un extrait, puis réponds aux questions. Niveau ${L}.</p></div>`
      + (list.length? UI.list(list.map(x=>UI.listRow({lead:emo(done[x.id]!=null?"cool":"think",30), chevron:true, title:`<b>${esc(x.t)}</b>`, sub:`${esc(x.theme)} · ${esc(x.dur)} · ${x.q.length} questions${done[x.id]!=null?` · fait, ${done[x.id]}/${x.q.length}`:""}`, attrs:`data-lsel="${x.id}"`})), {inset:true})
        : UI.emptyState(`Pas encore d'extrait en ${L}`, `Change de niveau en haut de l'écran pour écouter ceux des autres niveaux.`))
      + `</div>`;
    return;
  }
  const m=it.media; let player="";
  if(m.type==="video") player=`<video class="l-video" id="lPlayer" controls playsinline preload="metadata" src="${esc(m.src)}"></video><div class="row">${UI.mini(`↺ 10 s`, {attrs:`data-lback="1"`})}${UI.mini(`Plus lent`, {attrs:`data-lrate="0.75"`})}${UI.mini(`Normal`, {attrs:`data-lrate="1"`})}</div><p class="l-err ex" id="lErr" hidden>Cet extrait n'est pas disponible pour l'instant.</p>`;
  else if(m.type==="youtube") player=`<div class="l-yt"><iframe src="https://www.youtube-nocookie.com/embed/${esc(m.id)}?rel=0&playsinline=1" title="${esc(it.t)}" allow="encrypted-media; picture-in-picture" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div>`;
  else player= state.TTS? `<div class="row">${UI.button(`${pic("speaker",16)} Écouter`, {attrs:`data-lsay="0.9"`})}${UI.mini(`Plus lent`, {attrs:`data-lsay="0.7"`})}</div>` : `<p class="ex">La voix de ton navigateur n'est pas disponible : lis le dialogue plus bas une fois les questions faites.</p>`;
  $("coursSheet").innerHTML=`<div class="lesson">
    ${UI.mini(`‹ Les extraits ${esc(L)}`, {cls:"l-back", attrs:`data-lsel=""`})}
    <div><h3>${esc(it.t)}</h3><p class="ex" style="margin-top:var(--sp-1-5)">${esc(it.theme)} · ${esc(it.dur)} · niveau ${esc(it.lvl)}</p></div>
    ${player}
    <p class="l-credit">Source : ${it.link?`<a href="${esc(it.link)}" target="_blank" rel="noopener">${esc(it.credit)}</a>`:esc(it.credit)}</p>
    <h4>Les questions</h4>
    <div id="lQsWrap"></div>
  </div>`;
  renderListenQs();
  const v=$("lPlayer"); if(v) v.addEventListener("error", ()=>{ v.hidden=true; const e=$("lErr"); if(e) e.hidden=false; }, {once:true});
}
export function renderListenQs(){
  const it=listenItems().find(x=>x.id===state.listenSel); const box=$("lQsWrap"); if(!it||!box) return; const m=it.media;
  const qs=it.q.map((q,i)=>{ const v=state.listenAns[i], ok=state.listenChecked&&listenOk(q,v), bad=state.listenChecked&&!ok;
    let body="";
    if(q.k==="mcq") body=`<div class="l-opts">${q.o.map((o,j)=>`<button class="l-opt${state.listenChecked&&j===q.a?" good":""}${state.listenChecked&&v===j&&j!==q.a?" wrong":""}" data-lopt="${i}:${j}" aria-pressed="${v===j}"${state.listenChecked?" disabled":""}>${esc(o)}</button>`).join("")}</div>`;
    else if(q.k==="tf") body=`<div class="l-opts two">${[[true,"Vrai"],[false,"Faux"]].map(([b,l])=>`<button class="l-opt${state.listenChecked&&b===q.a?" good":""}${state.listenChecked&&v===b&&b!==q.a?" wrong":""}" data-ltf="${i}:${b}" aria-pressed="${v===b}"${state.listenChecked?" disabled":""}>${l}</button>`).join("")}</div>`;
    else body=`<input class="l-gap" data-lgap="${i}" value="${esc(v||"")}" placeholder="Le mot manquant" autocomplete="off" autocapitalize="off" spellcheck="false" id="lgap${i}" aria-label="Mot manquant, question ${i+1}"${state.listenChecked?" disabled":""}>`;
    return `<div class="l-q${ok?" ok":""}${bad?" ko":""}"><p><span class="num">${i+1}</span> ${esc(q.q)}</p>${body}${state.listenChecked?`<p class="l-why">${ok? (q.k==="gap"&&!q.a.some(a=>sameAns(a,v,LANG))? "Juste, avec une faute de frappe : on écrit <b>"+esc(q.a[0])+"</b>. " : "Juste. "):(q.k==="gap"?"Réponse : <b>"+esc(q.a[0])+"</b>. ":"")}${esc(q.why)}</p>`:""}</div>`; }).join("");
  const score=it.q.filter((q,i)=>listenOk(q,state.listenAns[i])).length;
  const after = !state.listenChecked? "" : `<div class="l-score">${emo(score===it.q.length?"party":score>=it.q.length/2?"grin":"meh",30)}<b>${score} / ${it.q.length}</b>${UI.mini(`Recommencer`, {attrs:`data-lretry="1"`})}</div>
      <h4>Ce qui se dit</h4><div class="rule"><span>${esc(it.sum)}</span></div>
      ${m.type==="tts"?`<div class="dia">${m.lines.map(([w,l])=>`<p><span class="who">${esc(w)}</span>${esc(l)}</p>`).join("")}</div>`:""}
      ${it.link?`<p class="ex"><a href="${esc(it.link)}" target="_blank" rel="noopener">Lire la transcription complète</a></p>`:""}`;
  box.innerHTML=`<div class="l-qs">${qs}</div>
    ${state.listenChecked? "" : `<div class="row">${UI.button(`Vérifier mes réponses`, {attrs:`data-lcheck="1"`})}</div>`}
    ${after}`;
}
export function keepGaps(){ document.querySelectorAll("[data-lgap]").forEach(i=>{ state.listenAns[+i.dataset.lgap]=i.value; }); }
export function listenCheck(){
  const it=listenItems().find(x=>x.id===state.listenSel); if(!it) return;
  document.querySelectorAll("[data-lgap]").forEach(i=>{ state.listenAns[+i.dataset.lgap]=i.value; });
  state.listenChecked=true;
  const score=it.q.filter((q,i)=>listenOk(q,state.listenAns[i])).length;
  const done=LISTEN_DONE[LANG]||(LISTEN_DONE[LANG]={}); const first=done[it.id]==null; const best=Math.max(score, done[it.id]||0);
  done[it.id]=best;
  if(S.db){ const code=LANG; write(()=>S.db.doc("listen/"+code).set({d:{...LISTEN_DONE[code]}})); }
  if(first) markDay();
  renderListenQs();
}
