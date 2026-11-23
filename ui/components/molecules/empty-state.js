// Molecule · Empty state. title and text are HTML the caller already escaped.
import { emo } from "../../icons/emoticons.js";
export function emptyState(title, text, face = "sleepy") {
  return `<div class="empty-state">${emo(face, 45)}<p><b>${title}</b><br><span class="ex">${text}</span></p></div>`;
}
