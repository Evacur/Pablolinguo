// Atom · Meter: `value` dots on out of `max`, read as `label` by screen readers.
export function meter(value, max, label) {
  return `<span class="meter" aria-label="${label}">${Array.from({ length: max }, (_, i) => `<i class="${i < value ? "on" : ""}"></i>`).join("")}</span>`;
}
