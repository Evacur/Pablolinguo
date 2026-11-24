// The streak: how many days in a row something was done, in any language. Pure, tested in tests/streak.test.js.
// A day counts when its `a` (things done that day) is above 0. Days saved before XP were removed (2026-11-23)
// have no `a`: their `xp` above 0 counts the same. Today not done yet does not break the streak.
const key = (d) => d.toLocaleDateString("en-CA");
export function streakOf(progressList, todayKey){
  const active = new Set();
  progressList.forEach(p => Object.entries((p && p.days) || {}).forEach(([k, v]) => { if (v && (v.a > 0 || v.xp > 0)) active.add(k); }));
  const d = new Date(todayKey + "T12:00:00");
  if (!active.has(todayKey)) d.setDate(d.getDate() - 1);
  let n = 0;
  while (active.has(key(d))) { n++; d.setDate(d.getDate() - 1); }
  return n;
}
