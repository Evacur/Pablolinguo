// Molecule · Bubble (styles in bubble.css): a line of a conversation. who: "them" (the character) or "me".
// text, fix.right and fix.why are HTML the caller already escaped. attrs on a "them" bubble makes it a button
// (tap to hear it). fix: the corrected sentence and why, folded under the learner's line.
import { tail } from "../../lib/html.js";

export function bubble({ who = "them", text = "", fix = null, attrs = "" } = {}) {
  const tag = who === "them" && attrs ? "button" : "div";
  return `<${tag}${tag === "button" ? ' type="button"' : ""} class="bubble ${who === "me" ? "out" : "in"}"${tail(attrs)}>${text}</${tag}>`
    + (fix ? `<details class="bubble-fix"><summary>Une correction</summary><div><b>${fix.right}</b>${fix.why}</div></details>` : "");
}
export function chat(lines) { return `<div class="chat">${lines.join("")}</div>`; }
