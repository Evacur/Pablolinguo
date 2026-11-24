// Molecule · Deck (styles in deck.css): a theme of words as a tile. icon, title and tag are HTML the caller already
// escaped; value out of max words are learnt; attrs carries the data-* the screen listens to.
import { progress } from "../atoms/progress.js";
import { tail } from "../../lib/html.js";

export function deck({ icon = "", title = "", value = 0, max = 0, tag = "", attrs = "" } = {}) {
  return `<button type="button" class="deck"${tail(attrs)}><span class="deck-top"><span aria-hidden="true">${icon}</span>${tag}</span><span class="deck-title">${title}</span>${progress(value, max, `${value} sur ${max}`)}<span class="label">${value} sur ${max} appris</span></button>`;
}
export function decks(items) { return `<div class="decks">${items.join("")}</div>`; }
