// Organism · Toast. toast(face, title, text) fills #toast for 3.2 s; a tap hides it. Text is escaped here.
import { emo } from "../../../../shared/icons/emoticons.js";
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
let timer = null;
export function toast(face, title, text = "") {
  const el = document.getElementById("toast");
  if (!el) return;
  el.innerHTML = `<div class="toast-body">${emo(face, 46)}<div><b>${esc(title)}</b><span>${esc(text)}</span></div></div>`;
  el.hidden = false; el.classList.remove("in"); void el.offsetWidth; el.classList.add("in");
  clearTimeout(timer); timer = setTimeout(() => { el.hidden = true; }, 3200);
}
export function installToast() {
  document.addEventListener("click", (e) => { const el = e.target.closest("#toast"); if (el) el.hidden = true; });
}
