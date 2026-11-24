// The avatar choices of the web app (src/app/data/writes.js: AV_FACES, AV_COLS) and their colour tokens.
import { color } from "../theme";

export const AV_FACES = ["grin", "wink", "cool", "laugh", "love", "kiss", "party", "wow", "nerd", "cowboy", "smirk", "think", "meh", "sleepy", "sad", "angry"];
export const AV_COLS = ["sun", "sky", "mint", "rose", "lilac", "ink"] as const;
const BG: Record<string, string> = { sun: color.avSun, sky: color.avSky, mint: color.avMint, rose: color.avRose, lilac: color.avLilac, ink: color.avInk };
export const avBg = (c?: string) => BG[c ?? "sun"] ?? color.avSun;
