// Small helpers shared by the component templates: extra classes and the rest of an opening tag.
export const tail = (attrs) => (attrs ? " " + attrs.trim() : "");
export const extra = (cls) => (cls ? " " + cls : "");
