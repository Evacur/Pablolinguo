// Molecule · Plan step: a numbered line of a plan (styles in step.css). state: "done" (ticked, struck through),
// "now" (the step to do, open with its actions in body) or "next" (closed; attrs makes it a button that opens it).
// title, sub and body are HTML the caller already escaped.
import { tail } from "../../lib/html.js";

export function step({ n = 1, title = "", sub = "", state = "next", body = "", attrs = "" } = {}) {
  const mark = state === "done" ? `<span class="step-n" role="img" aria-label="Fait">✓</span>` : `<span class="step-n" aria-hidden="true">${n}</span>`;
  const text = `<span class="step-t">${title}</span>${sub ? `<span class="step-sub">${sub}</span>` : ""}`;
  if (state === "now") return `<div class="step now">${mark}<div class="step-main">${text}${body ? `<div class="step-body">${body}</div>` : ""}</div></div>`;
  const tag = state === "next" && attrs ? "button" : "div";
  return `<${tag} class="step ${state}"${tag === "button" ? ' type="button"' : ""}${tail(attrs)}>${mark}<span class="step-main">${text}</span></${tag}>`;
}
export function steps(items) {
  return `<div class="steps-list">${items.map((it, i) => step({ n: i + 1, ...it })).join("")}</div>`;
}
