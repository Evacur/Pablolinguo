// Organism · Banner: the dark hero card with the main action of a screen (styles in banner.css).
// kicker, title, sub and action are HTML the caller already escaped; action is usually UI.button().
// tone "sun" is the warm card of a level (Accueil); without a tone the banner keeps its pale purple.
import { emo } from "../../../../shared/icons/emoticons.js";

export function banner({ face = "think", kicker = "", title = "", sub = "", action = "", tone = "" } = {}) {
  if (tone && tone !== "sun") throw new Error("banner: unknown tone " + tone);
  return `<div class="banner${tone ? " " + tone : ""}"><span class="face">${emo(face, 45)}</span><div class="col banner-text"><span class="hello">${kicker}</span><h2>${title}</h2>${sub ? `<span class="serif">${sub}</span>` : ""}</div>${action}</div>`;
}
