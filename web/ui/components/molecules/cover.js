// Molecule · Cover (styles in cover.css): the picture at the head of a sheet, on a band of colour.
// art is HTML from pic() or emo(); tint is one of the vignette tints (sun, sky, rose, mint, lilac).
import { TINTS } from "./vignette.js";

export function cover(art, { tint = "sky" } = {}) {
  if (!TINTS.includes(tint)) throw new Error("cover: unknown tint " + tint);
  return `<div class="cover" data-tint="${tint}" aria-hidden="true">${art}</div>`;
}
