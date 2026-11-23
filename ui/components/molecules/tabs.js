// Molecule · Content tabs (styles in tabs.css), after Laku's SegmentedTabs: full-width equal segments, a line under
// the active one. A tablist that switches content inside a screen, distinct from the bottom tabbar (navigation).
// items: [{key, label, icon, count}] (label and icon are HTML the caller already escaped); attr: the data attribute
// each tab carries with its key, so the screen handles the click.
export function tabs(items, active, { attr = "data-tab", label = "" } = {}) {
  return `<div class="tabs" role="tablist"${label ? ` aria-label="${label}"` : ""}>${items.map((t) => {
    const on = t.key === active;
    return `<button type="button" class="tab" role="tab" id="${attr.replace(/^data-/, "")}-${t.key}" aria-selected="${on}" ${on ? "" : `tabindex="-1" `}${attr}="${t.key}">${t.icon ? `<span class="tab-ic" aria-hidden="true">${t.icon}</span>` : ""}<span>${t.label}</span>${t.count ? `<span class="tab-count">${t.count}</span>` : ""}</button>`;
  }).join("")}</div>`;
}
