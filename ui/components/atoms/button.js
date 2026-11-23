// Atom · Button and mini button, as HTML strings for the screens' templates (styles in button.css and mini.css).
// The label is HTML: escape user text with esc() before passing it. attrs is the rest of the tag (id, data-*, type…).
const VARIANT = { default: "", secondary: " secondary", ghost: " ghost", destructive: " bad" };
const tail = (attrs) => (attrs ? " " + attrs.trim() : "");
const extra = (cls) => (cls ? " " + cls : "");

export function button(label, { variant = "default", size = "md", cls = "", attrs = "" } = {}) {
  if (!(variant in VARIANT)) throw new Error("button: unknown variant " + variant);
  return `<button class="btn${VARIANT[variant]}${size === "sm" ? " btn-sm" : ""}${extra(cls)}"${tail(attrs)}>${label}</button>`;
}

// Tertiary action or filter. as: "span" for a non-interactive tag with the same look.
export function mini(label, { tone = "default", as = "button", cls = "", attrs = "" } = {}) {
  return `<${as} class="mini${tone === "danger" ? " del" : ""}${extra(cls)}"${tail(attrs)}>${label}</${as}>`;
}
