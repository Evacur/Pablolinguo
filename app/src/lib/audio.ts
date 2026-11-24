/// <reference types="expo/types" />
// ↑ types require.context; expo-env.d.ts (made by expo start, not versioned) is absent on a fresh checkout.
// Reads texts aloud with the Google voice files (shared/audio/<lang>/<key>.mp3, made once by scripts/tts.py).
// The files ship inside the app: Metro bundles every mp3 of the folder as an asset, so listening works
// offline and the app needs no web server for its sounds (docs/audit.md R24).
// A text without a file (a word the learner added) stays silent: the device voice would need expo-speech,
// a new dependency not agreed yet (docs/audit.md R17).
import { createAudioPlayer, setAudioModeAsync, type AudioPlayer } from "expo-audio";
import { audioKey } from "../../../shared/logic/audio-key.js";

// require.context's arguments must be literals for Metro: one line per language folder.
const FILES: Record<string, ReturnType<typeof require.context>> = {
  en: require.context("../../../shared/audio/en", false, /\.mp3$/),
  es: require.context("../../../shared/audio/es", false, /\.mp3$/),
};
const KNOWN: Record<string, Set<string>> = {};

// The bundled asset for a text, or null when no file was generated for it.
export function audioAsset(lang: string, text: string): number | null {
  const files = FILES[lang];
  if (!files) return null;
  KNOWN[lang] ??= new Set(files.keys());
  const key = `./${audioKey(text)}.mp3`;
  return KNOWN[lang].has(key) ? (files(key) as number) : null;
}

let player: AudioPlayer | null = null;
let listener: { remove: () => void } | null = null;
let run = 0;

// Plays the lines one after the other, skipping those without a file; a new call (or stopSpeech) cuts the one before.
export function speak(lang: string, lines: string[], rate = 1) {
  const list = lines
    .map((t) => audioAsset(lang, t.trim()))
    .filter((a): a is number => a !== null);
  const me = ++run;
  if (!player) {
    player = createAudioPlayer(null);
    // Plays even with the iPhone's silent switch on, like a video app: the learner pressed « Écouter ».
    setAudioModeAsync({ playsInSilentMode: true }).catch(() => { /* the default mode still plays with the switch off */ });
  }
  const p = player;
  listener?.remove();
  let i = 0;
  const play = () => {
    if (me !== run || i >= list.length) return;
    p.replace(list[i]);
    p.setPlaybackRate(rate);
    p.play();
  };
  listener = p.addListener("playbackStatusUpdate", (st) => {
    if (me === run && st.didJustFinish) { i++; play(); }
  });
  play();
}

export function stopSpeech() {
  run++;
  listener?.remove();
  listener = null;
  player?.pause();
}
