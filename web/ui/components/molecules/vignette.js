// Molecule · Vignette (styles in vignette.css): a picture on a colour, a title and a short status, as a tile to tap.
// icon is HTML from pic() or emo(), title and trail are HTML the caller already escaped; tint is one of TINTS;
// attrs carries the data-* the screen listens to. UI.vignettes scrolls them sideways on a phone, in a grid when wide.
import { tail } from "../../lib/html.js";

export const TINTS = ["sun", "sky", "rose", "mint", "lilac"];

export function vignette({ icon = "", tint = "sun", title = "", trail = "", attrs = "" } = {}) {
  if (!TINTS.includes(tint)) throw new Error("vignette: unknown tint " + tint);
  return `<button type="button" class="vignette"${tail(attrs)}><span class="vignette-art" data-tint="${tint}" aria-hidden="true">${icon}</span><span class="vignette-title">${title}</span>${trail ? `<span class="vignette-trail">${trail}</span>` : ""}</button>`;
}
export function vignettes(items) { return `<div class="vignettes">${items.join("")}</div>`; }
