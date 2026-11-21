// Organism · Sheet: bottom sheet on phones, centred modal from 700px (styles in sheet.css).
// Open with a button data-sheet="NAME" or openSheet("NAME"); close with data-sheet-close, the backdrop or Escape.
// Focus stays inside while open (Tab loops) and goes back to the opener on close.
let sheetOpen = null, sheetFrom = null;

export function openSheet(name) {
  const el = document.getElementById("sheet-" + name); if (!el) return; closeSheet();
  sheetFrom = document.activeElement; sheetOpen = el;
  const bg = document.createElement("div"); bg.className = "sheet-bg"; bg.id = "sheetBg"; bg.addEventListener("click", closeSheet);
  el.before(bg); el.hidden = false; document.body.style.overflow = "hidden";
  const f = el.querySelector("input,textarea,button:not(.x-btn)"); if (f) f.focus({ preventScroll: true });
}

export function closeSheet() {
  if (!sheetOpen) return; sheetOpen.hidden = true; const bg = document.getElementById("sheetBg"); if (bg) bg.remove();
  document.body.style.overflow = ""; sheetOpen = null; if (sheetFrom && sheetFrom.focus) sheetFrom.focus({ preventScroll: true });
}

export function installSheets(doc = document) {
  doc.addEventListener("click", (e) => {
    const o = e.target.closest("[data-sheet]"); if (o) { openSheet(o.dataset.sheet); return; }
    if (e.target.closest("[data-sheet-close]")) closeSheet();
  });
  doc.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && sheetOpen) closeSheet();
    if (e.key === "Tab" && sheetOpen) {
      const f = [...sheetOpen.querySelectorAll("button,input,a,textarea,select")].filter((x) => !x.disabled && x.offsetParent);
      if (!f.length) return; const a = f[0], z = f[f.length - 1];
      if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
      else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
    }
  });
}
