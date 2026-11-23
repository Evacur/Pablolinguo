// ---------- Answers: one checker for exercises, words and listening ----------
// Answers are compared loosely: case, punctuation and (outside English) accents and ¿ ¡ do not count.
// lang: the code of the language being learnt ("en", "es").
export const sameAns = (a, given, lang) => norm(a, lang)===norm(given, lang);
export const norm = (s, lang) => lang==="en"? normEn(s) : String(s).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g," ").replace(/\s+/g," ").trim();
const normEn = s => (" "+s.toLowerCase().replace(/[’`]/g,"'")+" ")
  .replace(/won't/g,"will not").replace(/can't/g,"can not").replace(/cannot/g,"can not").replace(/shan't/g,"shall not")
  .replace(/n't/g," not").replace(/'m/g," am").replace(/'re/g," are").replace(/'ve/g," have").replace(/'ll/g," will").replace(/'d/g," would").replace(/'s/g," is")
  .replace(/[^a-z0-9 ]/g," ").replace(/\s+/g," ").trim();
