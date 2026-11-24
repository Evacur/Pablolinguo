// Molecule · Word (styles in word.css): a word, its translation and an optional tip, then `trail` (its level, the
// voice, a delete button). Everything is HTML the caller already escaped.
import { pic } from "../../../../shared/icons/pixel-icons.js";

export function word({ word = "", sub = "", tip = "", trail = "" } = {}) {
  return `<div class="word"><span class="word-main"><span class="word-en">${word}</span><span class="word-fr">${sub}</span>${tip ? `<span class="word-tip"><span aria-hidden="true">${pic("bulb", 12)}</span><span>${tip}</span></span>` : ""}</span>${trail ? `<span class="word-trail">${trail}</span>` : ""}</div>`;
}
export function words(rows) { return `<div class="words">${rows.join("")}</div>`; }
