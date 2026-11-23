// Atom · Status pill. tone: good (Validée), warn (Nouveau), bad.
const TONES = ["good", "warn", "bad"];
export function pill(label, tone = "good") {
  if (!TONES.includes(tone)) throw new Error("pill: unknown tone " + tone);
  return `<span class="pill p-${tone}">${label}</span>`;
}
