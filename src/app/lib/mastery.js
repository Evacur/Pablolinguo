// Mastery of a grammar point (0 to 3 dots) and the tests that validate it. A dot is earned only by passing a
// test on that point: a series of « S'entraîner sur ce point » with at least PASS of right answers. Answers given
// anywhere else are counted, and two misses in a row take a dot back, but they never add one.
const PASS = 0.8;
export const MAX = 3;
const RECENT = 10;
const fresh = (cur) => Object.assign({ m: 0, run: 0, ok: 0, ko: 0 }, cur || {});

// Right answers needed to pass a test of `total` questions (8 out of 10).
export const needed = (total) => Math.ceil(total * PASS);
export const passed = (score, total) => total > 0 && score >= needed(total);

// One answer. In a test on this point (inTest) it is only counted: the test's result decides.
export function afterAnswer(cur, ok, inTest = false) {
  const c = fresh(cur);
  c.h = ((c.h || "") + (ok ? "1" : "0")).slice(-RECENT); // the last answers, newest last
  if (inTest) { if (ok) c.ok++; else c.ko++; return c; }
  if (ok) { c.ok++; c.run = c.run > 0 ? c.run + 1 : 1; }
  else {
    c.ko++; c.run = c.run < 0 ? c.run - 1 : -1;
    if (c.run <= -2 && c.m > 0) { c.m--; c.run = 0; }
  }
  return c;
}

// The end of a test on this point: a pass adds a dot (up to MAX) and keeps the best score.
export function afterTest(cur, score, total) {
  const c = fresh(cur);
  if (passed(score, total)) { c.m = Math.min(MAX, c.m + 1); c.run = 0; c.pass = (c.pass || 0) + 1; }
  return c;
}

// How much a point needs work for this learner, from their own answers: the share of misses among their last
// answers (or all of them for older records), weighted up when mastery is low. 0 = never answered or no misses.
export function weakness(r) {
  if (!r || !(r.ok + r.ko)) return 0;
  const h = r.h || "";
  const miss = h ? [...h].filter((x) => x === "0").length / h.length : r.ko / (r.ok + r.ko);
  return miss * (1 + (MAX - (r.m || 0)) / MAX);
}
// Why a point is suggested, in a few words.
export function weakWhy(r) {
  if (!r || !(r.ok + r.ko)) return "Pas encore travaillé";
  const h = r.h || "", n = h ? h.length : r.ok + r.ko, k = h ? [...h].filter((x) => x === "0").length : r.ko;
  return h ? `${k} faute${k > 1 ? "s" : ""} sur tes ${n} dernières réponses` : `${k} faute${k > 1 ? "s" : ""} sur ${n} réponses`;
}
