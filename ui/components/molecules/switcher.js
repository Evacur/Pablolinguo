// Molecule · Switcher (styles in switcher.css), after the navigation pill of Laku's TabBar: an oval of round icon
// buttons where only the active one opens into a dark capsule with its label. It switches the content of a screen;
// the bottom tabbar stays the navigation.
// items: [{key, label, icon}] (label is plain text the caller already escaped, icon is HTML from pic() or emo());
// attr: the data attribute each tab carries with its key, so the screen handles the click.
export function switcher(items, active, { attr = "data-tab", label = "" } = {}) {
  return `<div class="switcher" role="tablist"${label ? ` aria-label="${label}"` : ""}>${items.map((t) => {
    const on = t.key === active;
    return `<button type="button" class="sw" role="tab" id="${attr.replace(/^data-/, "")}-${t.key}" aria-selected="${on}" aria-label="${t.label}" title="${t.label}" ${on ? "" : `tabindex="-1" `}${attr}="${t.key}"><span class="sw-ic" aria-hidden="true">${t.icon || ""}</span>${on ? `<span class="sw-label">${t.label}</span>` : ""}</button>`;
  }).join("")}</div>`;
}
