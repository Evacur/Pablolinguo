// ---------- Answers: one checker for exercises, words and listening ----------
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
const sameAns = (a, given) => norm(a)===norm(given) || (LANG==="ru" && /[a-z]/i.test(given) && ruLoose(a)===ruLoose(given));
const norm = s => LANG==="ru"? normRu(s) : LANG==="en"? normEn(s) : String(s).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g," ").replace(/\s+/g," ").trim();
const normEn = s => (" "+s.toLowerCase().replace(/[’`]/g,"'")+" ")
  .replace(/won't/g,"will not").replace(/can't/g,"can not").replace(/cannot/g,"can not").replace(/shan't/g,"shall not")
  .replace(/n't/g," not").replace(/'m/g," am").replace(/'re/g," are").replace(/'ve/g," have").replace(/'ll/g," will").replace(/'d/g," would").replace(/'s/g," is")
  .replace(/[^a-z0-9 ]/g," ").replace(/\s+/g," ").trim();
