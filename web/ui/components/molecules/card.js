// Molecule · Card, panel and section title, as HTML strings (styles in card.css).
// Content is HTML the caller already escaped. A panel has a head (title + aside); fold: true makes it a
// <details> that opens on its head. A card has no head: it holds an exercise or a result.
import { tail, extra } from "../../lib/html.js";

export function card(inner, { cls = "", attrs = "" } = {}) {
  return `<div class="card${extra(cls)}"${tail(attrs)}>${inner}</div>`;
}

export function panel(inner, { title = "", aside = "", fold = false, cls = "", attrs = "" } = {}) {
  if (fold) return `<details class="panel fold${extra(cls)}"${tail(attrs)}><summary><h2>${title}</h2>${aside}</summary>${inner}</details>`;
  const head = title ? `<div class="panel-head"><h2>${title}</h2>${aside}</div>` : "";
  return `<div class="panel${extra(cls)}"${tail(attrs)}>${head}${inner}</div>`;
}

export function sectionTitle(title, aside = "") {
  return `<div class="section-title"><h2>${title}</h2>${aside}</div>`;
}
