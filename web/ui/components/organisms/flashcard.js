// Organism · Flashcard (styles in flashcard.css): one card on a stage of colour. art: a picture above the word
// (HTML from pic() or emo()); tags: HTML above the word (a pill, the theme, a face); word: what to translate;
// body: HTML under it (the level, then the verdict once answered). All already escaped.
export function flashcard({ art = "", tags = "", word = "", body = "" } = {}) {
  return `<div class="flash-stage"><div class="flash">${art ? `<div class="flash-art" aria-hidden="true">${art}</div>` : ""}${tags ? `<div class="flash-tags">${tags}</div>` : ""}<div class="flash-word">${word}</div>${body}</div></div>`;
}
