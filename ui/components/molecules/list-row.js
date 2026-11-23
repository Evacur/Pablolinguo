// Molecule · List rows, as HTML strings (styles in list-row.css). Variants:
//   choice  a row to pick in a choiceList: title, trail (meter, pill, mini…)
//   link    a row that opens something: lead (icon), title, sub, chevron
//   task    a daily mission: done check, title, trail
//   info    a row with text and actions: title, sub, trail
// Content is HTML the caller already escaped; attrs is the rest of the tag (data-*, aria-*).
import { tail } from "../../lib/html.js";

export function listRow(variant, { title = "", sub = "", lead = "", trail = "", done = false, attrs = "" } = {}) {
  if (variant === "choice") return `<button${tail(attrs)}><span>${title}${sub ? `<small class="ex">${sub}</small>` : ""}</span>${trail}</button>`;
  if (variant === "link")
    return `<button class="l-item"${tail(attrs)}><span class="l-ico" aria-hidden="true">${lead}</span><span class="l-t"><b>${title}</b><small>${sub}</small></span><span class="chev" aria-hidden="true">›</span></button>`;
  if (variant === "task")
    return `<button class="quest ${done ? "done" : ""}"${tail(attrs)} aria-pressed="${done}"><span class="box">${done ? "✓" : ""}</span><span class="qt">${title}</span>${trail}</button>`;
  if (variant === "info") return `<div class="skill"><div><div class="nm">${title}</div><div class="ex">${sub}</div></div>${trail}</div>`;
  throw new Error("listRow: unknown variant " + variant);
}

export function choiceList(rows) {
  return `<div class="pick">${rows.join("")}</div>`;
}
