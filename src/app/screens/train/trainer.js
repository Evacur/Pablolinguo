// ---------- Trainer ----------
// Answers are compared loosely: case, punctuation and (outside English) accents and ¿ ¡ do not count.
// Russian: both the expected answer and the typed one go through the same Latin transliteration,
// so Cyrillic, Latin (privet, khorosho / xorosho) and ё / е all compare equal.
const RU_LAT={"а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ё":"e","ж":"zh","з":"z","и":"i","й":"y","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sch","ъ":"","ы":"y","ь":"","э":"e","ю":"yu","я":"ya"};
const ruLat = s => String(s).normalize("NFC").toLowerCase().replace(/[а-яё]/g, c=>RU_LAT[c]).normalize("NFD").replace(/[\u0300-\u036f]/g,"")
  .replace(/['’`ʹʼ]/g,"").replace(/shch|shh/g,"sch").replace(/kh|x/g,"h").replace(/ts|tz/g,"c").replace(/j/g,"y").replace(/y[eo]/g,"e").replace(/iy|yy|yi|ii/g,"i");
const normRu = s => ruLat(s).replace(/[^a-z0-9 ]/g," ").replace(/\s+/g," ").trim();
// A second, looser comparison for answers typed in Latin letters, so French-style spellings
// (soumka, tchaï, jourrnal, Rossia) pass too. Only used when the typed answer contains Latin letters.
const RU_FR={"а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ё":"io","ж":"j","з":"z","и":"i","й":"i","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"ch","щ":"ch","ъ":"","ы":"i","ь":"","э":"e","ю":"iu","я":"ia"};
const ruLoose = s => String(s).normalize("NFC").toLowerCase().replace(/[а-яё]/g, c=>RU_FR[c]).normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/['’`ʹʼ]/g,"")
  .replace(/shch|chtch|sch|tch|sh/g,"ch").replace(/zh/g,"j").replace(/kh|x/g,"h").replace(/ts|tz/g,"c").replace(/ou/g,"u").replace(/w/g,"v").replace(/y/g,"i").replace(/ie/g,"e")
  .replace(/[^a-z0-9 ]/g," ").replace(/([a-z])\1+/g,"$1").replace(/\s+/g," ").trim();
// ---------- Typos are accepted, real mistakes are not ----------
// A word counts as a typo when: it is 1 letter off from the expected word (2 for words of 8+ letters):
// a swapped, missing, extra or wrong letter; it is not another word the app knows (their/there, is/are);
// the change is not a grammatical ending (go/goes, walk/walked, hablo/habla, comemos/comimos);
// and the expected word has at least 3 letters (a, an, is, to carry grammar). At most 2 typos per answer,
// and the words must be the same, in the same order. A missing or extra space (every day/everyday) is a typo too.
function osa(a,b){ const n=a.length, m=b.length; const d=Array.from({length:n+1},(_,i)=>{ const r=Array(m+1).fill(0); r[0]=i; return r; }); for(let j=0;j<=m;j++) d[0][j]=j;
  for(let i=1;i<=n;i++) for(let j=1;j<=m;j++){ const c=a[i-1]===b[j-1]?0:1; d[i][j]=Math.min(d[i-1][j]+1,d[i][j-1]+1,d[i-1][j-1]+c); if(i>1&&j>1&&a[i-1]===b[j-2]&&a[i-2]===b[j-1]) d[i][j]=Math.min(d[i][j],d[i-2][j-2]+1); }
  return d[n][m]; }
let KNOWN=null;
function knownWords(){
  if(KNOWN && KNOWN.lang===LANG) return KNOWN.set;
  const set=new Set(); const add=x=>{ if(typeof x==="string") norm(x.replace(/___/g," ")).split(" ").forEach(w=>{ if(w) set.add(w); }); };
  pool().forEach(it=>{ (Array.isArray(it.a)?it.a:[]).forEach(add); if(it.t==="qcm") (it.o||[]).forEach(add); (it.words||[]).forEach(add); add(it.s); });
  Object.values(ALLW||{}).forEach(w=>{ add(w.en); add(w.ex); });
  KNOWN={lang:LANG,set}; return set;
}
const EN_END=new Set(["","s","es","ed","d","ing","er","est","ly","ies","ied","y","en","n"]);
function gramEnding(r,g){
  let p=0; while(p<r.length&&p<g.length&&r[p]===g[p]) p++;
  const tr=r.slice(p), tg=g.slice(p);
  if(LANG==="en") return EN_END.has(tr)&&EN_END.has(tg);
  if(LANG==="ru") return p>=r.length-3;
  return p>=r.length-4 && /^[aeiourmns]*$/.test(tr+tg);
}
function typoFix(right, given){
  const R=norm(right), G=norm(given); if(!R||!G||R===G) return null;
  if(R.replace(/ /g,"")===G.replace(/ /g,"")) return [[given.trim(), right.trim()]];
  const a=R.split(" "), b=G.split(" "); if(a.length!==b.length) return null;
  const K=knownWords(), col=x=>x.replace(/(.)\1+/g,"$1"), bad=[];
  for(let i=0;i<a.length;i++){ const r=a[i], g=b[i]; if(r===g) continue;
    if(r.length<3 || K.has(g)) return null;
    if(col(r)!==col(g) && gramEnding(r,g)) return null;
    if(osa(r,g) > (r.length>=8?2:1)) return null;
    bad.push(i); }
  if(!bad.length || bad.length>2) return null;
  const clean=w=>w.replace(/^[¿¡"«(]+|[.,!?;:"»)]+$/g,"");
  const ra=right.trim().split(/\s+/), ga=given.trim().split(/\s+/), raw= ra.length===a.length && ga.length===b.length;
  return bad.map(i=> raw? [clean(ga[i]), clean(ra[i])] : [b[i], a[i]]);
}
// Spanish: the answer passes without accents, but the missing accent is pointed out (esta → está).
function accentFix(right, given){
  if(LANG!=="es") return null;
  const p=x=>String(x).toLowerCase().replace(/[^\p{L}\p{N} ]/gu," ").replace(/\s+/g," ").trim();
  const a=p(right).split(" "), b=p(given).split(" "); if(a.length!==b.length) return null;
  const f=[]; a.forEach((w,i)=>{ if(w!==b[i]) f.push([b[i],w]); }); return f.length? f : null;
}
const sameAns = (a, given) => norm(a)===norm(given) || (LANG==="ru" && /[a-z]/i.test(given) && ruLoose(a)===ruLoose(given));
const norm = s => LANG==="ru"? normRu(s) : LANG==="en"? normEn(s) : String(s).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g," ").replace(/\s+/g," ").trim();
const normEn = s => (" "+s.toLowerCase().replace(/[’`]/g,"'")+" ")
  .replace(/won't/g,"will not").replace(/can't/g,"can not").replace(/cannot/g,"can not").replace(/shan't/g,"shall not")
  .replace(/n't/g," not").replace(/'m/g," am").replace(/'re/g," are").replace(/'ve/g," have").replace(/'ll/g," will").replace(/'d/g," would").replace(/'s/g," is")
  .replace(/[^a-z0-9 ]/g," ").replace(/\s+/g," ").trim();
// ---------- Trainer: exercise pool, sessions, five exercise kinds ----------
// Kinds: tr (translate), gap (fill the blank), qcm (multiple choice), order (rebuild the sentence), match (word pairs).
let T=null; // {mode, arg, items, i, results, phase, given, picked, tiles, ...}
function shuffle(a){ a=[...a]; for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]];} return a; }
const KIND_LBL={tr:"Traduis", gap:"Complète", qcm:"Choisis", pick:"Lis", order:"Remets dans l'ordre", match:"Associe"};
const hkey = s => { let h=5381; for(const c of String(s)) h=((h<<5)+h+c.charCodeAt(0))|0; return (h>>>0).toString(36); };

// Every grammar item of the pack: the base drill sentences (translate) plus the exercise bank.
let POOL_CACHE=null;
function pool(){
  if(POOL_CACHE && POOL_CACHE.lang===LANG) return POOL_CACHE.items;
  const items=[]; const bank=PACK.bank||{};
  SKILLS.forEach(s=>{
    s.q.forEach(q=>items.push({t:"tr", skill:s.id, lvl:s.lvl, fr:q[0], a:q[1], th:null}));
    (bank[s.id]||[]).forEach(b=>items.push({...b, skill:s.id, lvl:s.lvl}));
  });
  items.forEach(it=>{ it.key=hkey(it.skill+"|"+it.t+"|"+(it.s||it.fr)); });
  POOL_CACHE={lang:LANG, items}; return items;
}
// Seen items: answered right recently = rarely picked again; answered wrong = picked more.
let SEEN={}; const SEEN_BY={};
function weightOf(it){
  const s=SEEN[it.key]; if(!s) return 1;
  const days=(new Date(today())-new Date(s.d))/86400000;
  if(s.ok) return days<3? .05 : days<10? .3 : .8;
  return days<1? .5 : 3;
}
function pickWeighted(list, n){
  const out=[]; let rest=list.map(it=>({it, w:weightOf(it)*(it.boost||1)}));
  while(out.length<n && rest.length){
    const tot=rest.reduce((a,x)=>a+x.w,0); let r=Math.random()*tot, k=0;
    for(;k<rest.length-1;k++){ r-=rest[k].w; if(r<=0) break; }
    out.push(rest[k].it); rest.splice(k,1);
  }
  return out;
}
// A translate item with a medium sentence can be played as "rebuild the sentence".
function asOrder(it){
  // Tiles without the final punctuation or the capital of the first word, so they don't give the order away.
  const w=String(it.a[0]).replace(/[¿¡]/g,"").replace(/[.!?]+$/,"").split(/\s+/);
  if(w.length<4 || w.length>11) return it;
  if(w[0]!=="I" && !/^I'/.test(w[0])) w[0]=w[0].charAt(0).toLowerCase()+w[0].slice(1);
  return {...it, t:"order", words:w};
}
function matchItem(theme){
  const th=theme||themeOf(today()).theme; const list=shuffle((W[th]||[]).filter(w=>w[0].split(" ").length<=3)).slice(0,4);
  if(list.length<4) return null;
  return {t:"match", th, key:"m"+th, pairs:list.map(w=>({en:w[0], fr:w[1]}))};
}
function mixKinds(items){ // turn about a third of the translations into word-order puzzles
  // Russian A1: tiles first (words, or letters for a single word), the keyboard comes in as the level is mastered.
  const ru=LANG==="ru" && lvl()==="A1", m=ru? pct("A1") : 0;
  const p= ru? (m<30? 1 : m<60? .6 : .4) : .4, max= ru? 10 : 3;
  let n=0; return items.map(it=> it.t==="tr" && n<max && Math.random()<p ? (n++, ru? asTiles(it) : asOrder(it)) : it);
}
function asTiles(it){
  const w=String(it.a[0]).replace(/[.!?]+$/,"").trim(); const words=w.split(/\s+/);
  if(words.length>=2 && words.length<=11){ words[0]=words[0].charAt(0).toLowerCase()+words[0].slice(1); return {...it, t:"order", words}; }
  const L=[...w.toLowerCase()]; if(L.length<2 || L.length>8) return it;
  return {...it, t:"order", words:L, join:""};
}

