// ---------- Answers: one checker for exercises, words and listening ----------
// Answers are compared loosely: case, punctuation and (outside English) accents and ¿ ¡ do not count.
// lang: the code of the language being learnt ("en", "es").
export const sameAns = (a, given, lang) => norm(a, lang)===norm(given, lang);
export const norm = (s, lang) => lang==="en"? normEn(s) : String(s).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g," ").replace(/\s+/g," ").trim();
const normEn = s => (" "+s.toLowerCase().replace(/[’`]/g,"'")+" ")
  .replace(/won't/g,"will not").replace(/can't/g,"can not").replace(/cannot/g,"can not").replace(/shan't/g,"shall not")
  .replace(/n't/g," not").replace(/'m/g," am").replace(/'re/g," are").replace(/'ve/g," have").replace(/'ll/g," will").replace(/'d/g," would").replace(/'s/g," is")
  .replace(/[^a-z0-9 ]/g," ").replace(/\s+/g," ").trim();
// ---------- Typos are accepted, real mistakes are not ----------
// A word counts as a typo when: it is 1 letter off from the expected word (2 for words of 8+ letters):
// a swapped, missing, extra or wrong letter; it is not another word the app knows (their/there, is/are);
// the change is not a grammatical ending (go/goes, walk/walked, hablo/habla, comemos/comimos);
// and the expected word has at least 3 letters (a, an, is, to carry grammar). At most 2 typos per answer,
// and the words must be the same, in the same order. A missing or extra space (every day/everyday) is a typo too.
function osa(a,b){ const n=a.length, m=b.length; const d=Array.from({length:n+1},(_,i)=>{ const r=Array(m+1).fill(0); r[0]=i; return r; }); for(let j=0;j<=m;j++) d[0][j]=j;
  for(let i=1;i<=n;i++) for(let j=1;j<=m;j++){ const c=a[i-1]===b[j-1]?0:1; d[i][j]=Math.min(d[i-1][j]+1,d[i][j-1]+1,d[i-1][j-1]+c); if(i>1&&j>1&&a[i-1]===b[j-2]&&a[i-2]===b[j-1]) d[i][j]=Math.min(d[i][j],d[i-2][j-2]+1); }
  return d[n][m]; }
const EN_END=new Set(["","s","es","ed","d","ing","er","est","ly","ies","ied","y","en","n"]);
function gramEnding(r,g,lang){
  let p=0; while(p<r.length&&p<g.length&&r[p]===g[p]) p++;
  const tr=r.slice(p), tg=g.slice(p);
  if(lang==="en") return EN_END.has(tr)&&EN_END.has(tg);
  return p>=r.length-4 && /^[aeiourmns]*$/.test(tr+tg);
}
// known: the words the app already knows in this language (a typed known word is a real mistake, not a typo).
export function typoFix(right, given, lang, known=new Set()){
  const R=norm(right, lang), G=norm(given, lang); if(!R||!G||R===G) return null;
  if(R.replace(/ /g,"")===G.replace(/ /g,"")) return [[given.trim(), right.trim()]];
  const a=R.split(" "), b=G.split(" "); if(a.length!==b.length) return null;
  const K=known, col=x=>x.replace(/(.)\1+/g,"$1"), bad=[];
  for(let i=0;i<a.length;i++){ const r=a[i], g=b[i]; if(r===g) continue;
    if(r.length<3 || K.has(g)) return null;
    if(col(r)!==col(g) && gramEnding(r,g,lang)) return null;
    if(osa(r,g) > (r.length>=8?2:1)) return null;
    bad.push(i); }
  if(!bad.length || bad.length>2) return null;
  const clean=w=>w.replace(/^[¿¡"«(]+|[.,!?;:"»)]+$/g,"");
  // Show the words as typed: map each normalised word back to the raw word it came from (didn't → did not).
  const owner=t=>{ const raw=t.trim().split(/\s+/), map=[]; raw.forEach(w=>{ const n=norm(w, lang); (n? n.split(" "):[]).forEach(()=>map.push(clean(w))); }); return map; };
  const ro=owner(right), go=owner(given), ok= ro.length===a.length && go.length===b.length;
  return bad.map(i=> ok? [go[i], ro[i]] : [b[i], a[i]]);
}
// Spanish: the answer passes without accents, but the missing accent is pointed out (esta → está).
export function accentFix(right, given, lang){
  if(lang!=="es") return null;
  const p=x=>String(x).toLowerCase().replace(/[^\p{L}\p{N} ]/gu," ").replace(/\s+/g," ").trim();
  const a=p(right).split(" "), b=p(given).split(" "); if(a.length!==b.length) return null;
  const f=[]; a.forEach((w,i)=>{ if(w!==b[i]) f.push([b[i],w]); }); return f.length? f : null;
}
