// Language manifest and loader. The app downloads only the files of the language in use:
// each language's pack, its words by level (words-), its exercise banks (-a, -b), its grammar lessons and its listening extracts, in this order.
window.LANGS = [
  { code: "en", name: "Anglais", native: "English", files: ["en.js", "words-en.js", "en-a.js", "en-b.js", "lessons-en.js", "listen-en.js"] },
  { code: "es", name: "Espagnol", native: "Español", files: ["es.js", "words-es.js", "es-a.js", "es-b.js", "lessons-es.js", "listen-es.js"] },
];
(function () {
  const loading = {};
  function script(src) {
    return new Promise(function (ok, ko) {
      const s = document.createElement("script"); s.src = "/lang/" + src;
      s.onload = ok; s.onerror = function () { ko(new Error("lang file " + src)); };
      document.head.appendChild(s);
    });
  }
  // Resolves when window.PACKS[code] and window.LISTEN[code] are ready. Files load one after the other (banks extend the pack).
  window.loadLang = function (code) {
    const lang = window.LANGS.find(function (l) { return l.code === code; });
    if (!lang) return Promise.reject(new Error("unknown language " + code));
    if (!loading[code]) {
      loading[code] = lang.files.reduce(function (p, f) { return p.then(function () { return script(f); }); }, Promise.resolve());
      loading[code].catch(function () { delete loading[code]; }); // a failed download can be retried
    }
    return loading[code];
  };
})();
