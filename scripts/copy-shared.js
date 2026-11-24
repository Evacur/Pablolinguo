// The old web app (web/) reads the shared content and voice files by URL (/lang/…, /audio/…), and the landing
// pages live at /laku.html and /confidentialite.html. This copies them into web/public, the folder Vercel serves.
// The copies are generated (gitignored): edit shared/ and landing/, never web/public/lang or web/public/audio.
import { cpSync, rmSync } from "node:fs";

for (const [from, to] of [["shared/content", "web/public/lang"], ["shared/audio", "web/public/audio"]]) {
  rmSync(to, { recursive: true, force: true });
  cpSync(from, to, { recursive: true });
}
for (const page of ["laku.html", "confidentialite.html"]) cpSync("landing/" + page, "web/public/" + page);
console.log("copied shared/content, shared/audio and landing/ into web/public");
