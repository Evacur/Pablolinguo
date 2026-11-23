// Atom · Progress: `value` out of `max` as a thin bar, read as `label` by screen readers (styles in progress.css).
// size "lg": the bar at the top of a session. A complete bar turns green.
export function progress(value, max, label, { size = "md" } = {}) {
  const pct = max > 0 ? Math.max(0, Math.min(100, Math.round(value / max * 100))) : 0;
  return `<div class="progress${size === "lg" ? " lg" : ""}${max > 0 && value >= max ? " full" : ""}" role="progressbar" aria-label="${label}" aria-valuemin="0" aria-valuemax="${max}" aria-valuenow="${value}"><i style="width:${pct}%"></i></div>`;
}
