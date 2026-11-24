// The Google voice files (shared/audio/<lang>/<key>.mp3, made by scripts/tts.js) are found by a key computed from the text.
// The app and the script must compute the same key.
import test from "node:test";
import assert from "node:assert/strict";
import { audioKey, audioPath } from "../shared/logic/audio-key.js";

test("the key is FNV-1a over UTF-8, stable and blind to outer spaces", () => {
  assert.equal(audioKey(""), "811c9dc5");
  assert.equal(audioKey("a"), "e40c292c");
  assert.equal(audioKey(" bread "), audioKey("bread"));
  assert.notEqual(audioKey("el sofá"), audioKey("el sofa"), "accents matter: they change the sound");
  assert.equal(audioPath("es", "el sofá"), `/audio/es/${audioKey("el sofá")}.mp3`);
});
// A text without its file is not a failure: the app falls back to the device voice. `node scripts/tts.js --dry` counts them.
