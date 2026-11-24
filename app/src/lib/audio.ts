// Reads texts aloud with the Google voice files the site hosts (shared/audio/<lang>/<key>.mp3, served at /audio/…, made once by
// scripts/tts.py): the same files as the web app, streamed from the site, nothing copied into the app.
// A text without a file (a word the learner added) stays silent: the device voice would need expo-speech,
// a new dependency not agreed yet (docs/audit.md R17).
import { createAudioPlayer, setAudioModeAsync, type AudioPlayer } from "expo-audio";
import { audioKey } from "../../../shared/logic/audio-key.js";
import { SITE } from "./site";

export const audioUrl = (lang: string, text: string) => `${SITE}/audio/${lang}/${audioKey(text)}.mp3`;

let player: AudioPlayer | null = null;
let listener: { remove: () => void } | null = null;
let run = 0;

// Plays the lines one after the other; a new call (or stopSpeech) cuts the one before.
export function speak(lang: string, lines: string[], rate = 1) {
  const list = lines.map((t) => t.trim()).filter(Boolean);
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
    p.replace({ uri: audioUrl(lang, list[i]) });
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
