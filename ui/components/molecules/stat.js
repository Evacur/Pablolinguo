// Molecule · KPI tile and the row that holds them (styles in stat.css). icon is HTML from ui/icons
// (emo or pic), value and label are HTML the caller already escaped.
import { extra } from "../../lib/html.js";

export function stat({ icon = "", value = "", label = "" } = {}) {
  return `<div class="stat">${icon ? `<span class="stat-ic" aria-hidden="true">${icon}</span>` : ""}<span class="v">${value}</span><span class="label">${label}</span></div>`;
}
export function stats(items, { cls = "" } = {}) {
  return `<div class="stats${extra(cls)}">${items.map(stat).join("")}</div>`;
}
