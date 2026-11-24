// Name of the pre-generated Google voice file for a text: shared/audio/<lang>/<key>.mp3 (scripts/tts.js makes them).
// FNV-1a 32 bits over the UTF-8 bytes of the trimmed text, in 8 hex digits: scripts/tts.py computes the same key.
export function audioKey(text){
  const bytes = new TextEncoder().encode(String(text).trim());
  let h = 0x811c9dc5;
  for (const b of bytes){ h ^= b; h = Math.imul(h, 0x01000193) >>> 0; }
  return h.toString(16).padStart(8, "0");
}
export const audioPath = (lang, text) => `/audio/${lang}/${audioKey(text)}.mp3`;
