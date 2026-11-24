// Organism · Dock (styles in dock.css): the bottom zone of a session. main: the field and the strong action
// (an answer form, or buttons); alt: up to two quiet actions, as UI.button(…, {variant: "ghost"}).
export function dock({ main = "", alt = [] } = {}) {
  return `<div class="dock"><div class="dock-main">${main}</div>${alt.length ? `<div class="dock-alt">${alt.join("")}</div>` : ""}</div>`;
}
