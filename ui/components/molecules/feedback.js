// Molecule · Feedback after an answer: tone ok | mid | ko, a face and a title, then the details (HTML).
// float: true pins it at the bottom of the exercise (the result sheet). faceHead() is the face + text line
// alone, used by score headers.
import { emo } from "../../icons/emoticons.js";
import { extra } from "../../lib/html.js";

const TONES = ["ok", "mid", "ko"];
export function faceHead(face, size, inner) {
  return `<div class="vhead">${emo(face, size)}${inner}</div>`;
}
export function feedback(tone, title, body = "", { face = "think", size = 44, float = false, cls = "" } = {}) {
  if (!TONES.includes(tone)) throw new Error("feedback: unknown tone " + tone);
  return `<div class="verdict ${tone}${float ? " float" : ""}${extra(cls)}">${faceHead(face, size, `<b>${title}</b>`)}${body}</div>`;
}
