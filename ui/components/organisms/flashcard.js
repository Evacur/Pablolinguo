// Organism · Flashcard (styles in flashcard.css). tags: HTML above the word (a pill, the theme, a face);
// word: what to translate; body: HTML under it (the level, then the verdict once answered). All already escaped.
export function flashcard({ tags = "", word = "", body = "" } = {}) {
  return `<div class="flash">${tags ? `<div class="flash-tags">${tags}</div>` : ""}<div class="flash-word">${word}</div>${body}</div>`;
}
