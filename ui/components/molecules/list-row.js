// Molecule · List row and list, as HTML strings (styles in list-row.css). Content is HTML the caller already
// escaped. A row is a <button> when it does something (attrs carries its data-*), a link with href, or a <div>.
//   lead     raw HTML before the text (a face)        icon   HTML in a small framed square (profile)
//   check    true / false: a mission checkbox, done when true
//   trail    HTML at the end (value, meter, pill, mini) chevron  a › at the end   on  a ✓ at the end
//   done     struck-through title                     danger  red text (sign out, delete)
import { tail } from "../../lib/html.js";

export function listRow({ title = "", sub = "", lead = "", icon = "", check, trail = "", chevron = false, on = false,
  done = false, danger = false, href = "", as = "button", attrs = "" } = {}) {
  const tag = href ? "a" : as;
  const cls = `list-row${done || check === true ? " done" : ""}${danger ? " danger" : ""}`;
  const typeAttr = tag === "button" && !/\btype=/.test(attrs) ? ' type="button"' : "";
  const head = check !== undefined ? `<span class="lr-lead lr-check" aria-hidden="true">${check ? "✓" : ""}</span>`
    : icon ? `<span class="lr-lead lr-icon" aria-hidden="true">${icon}</span>` : lead ? `<span class="lr-lead" aria-hidden="true">${lead}</span>` : "";
  const end = (trail ? `<span class="lr-trail">${trail}</span>` : "") + (on ? `<span class="lr-on" aria-hidden="true">✓</span>` : "")
    + (chevron ? `<span class="lr-chev" aria-hidden="true">›</span>` : "");
  return `<${tag} class="${cls}"${href ? ` href="${href}"` : ""}${typeAttr}${tail(attrs)}>${head}<span class="lr-main"><span class="lr-title">${title}</span>${sub ? `<span class="lr-sub">${sub}</span>` : ""}</span>${end}</${tag}>`;
}

// inset: rows inside a bordered surface. label: a small caption above it.
export function list(rows, { inset = false, label = "" } = {}) {
  const body = `<div class="list${inset ? " inset" : ""}">${rows.join("")}</div>`;
  return label ? `<div class="list-group"><span class="label">${label}</span>${body}</div>` : body;
}
