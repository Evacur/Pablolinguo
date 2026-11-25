// Language manifest and loader. The app downloads only the files of the language in use:
// each language's pack, its words by level (words-), its exercise banks (-a, -b), the situations added on 2026-11-23 (situ-),
// the grammar points added the same day (points-), three more exercises per point (more-), the grammar points added on 2026-11-25 (points2-), the grammar lessons and the listening extracts, in this order.
window.LANGS = [
  { code: "en", name: "Anglais", native: "English", files: ["en.js", "words-en.js", "en-a.js", "en-b.js", "situ-en.js", "points-en.js", "more-en.js", "points2-en.js", "lessons-en.js", "listen-en.js"] },
  { code: "es", name: "Espagnol", native: "Español", files: ["es.js", "words-es.js", "es-a.js", "es-b.js", "situ-es.js", "points-es.js", "more-es.js", "points2-es.js", "lessons-es.js", "listen-es.js"] },
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
