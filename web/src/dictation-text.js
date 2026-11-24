// Dictation transcript: rebuilt from all the recogniser's results at every event.
// Every event rebuilds the whole transcript from the start, so "partial" always carries the full text so far:
// phones that repeat results (Android sends each final again, longer) or reset resultIndex no longer duplicate words.
export function joinResults(results) {
  const finals = [];
  let part = "";
  for (let i = 0; i < results.length; i++) {
    const t = String(results[i][0].transcript || "").trim();
    if (!t) continue;
    if (!results[i].isFinal) { part += (part ? " " : "") + t; continue; }
    const last = finals[finals.length - 1];
    if (last && t.toLowerCase().startsWith(last.toLowerCase())) finals[finals.length - 1] = t; // cumulative repeat (Android)
    else if (!last || last.toLowerCase() !== t.toLowerCase()) finals.push(t);
  }
  const fin = finals.join(" ");
  if (fin && part.toLowerCase().startsWith(fin.toLowerCase())) return { fin, text: part }; // interim repeats the finals
  return { fin, text: (fin + " " + part).trim() };
}
