// Atom · Icon button: an icon alone, so the accessible name is required.
export function iconButton(icon, { label, live = false, cls = "", attrs = "" }) {
  if (!label) throw new Error("iconButton: label (aria-label) is required");
  return `<button class="icon-btn${live ? " live" : ""}${cls ? " " + cls : ""}" aria-label="${label}"${attrs ? " " + attrs.trim() : ""}>${icon}</button>`;
}
