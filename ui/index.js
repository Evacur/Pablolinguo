// Pablolinguo UI behaviours and icons, built by esbuild into public/ui.js (classic script, loaded before the app script).
import { openSheet, closeSheet, installSheets } from "./components/organisms/sheet.js";
import { emo } from "./icons/emoticons.js";
import { pic } from "./icons/pixel-icons.js";

installSheets();
Object.assign(window, { openSheet, closeSheet, emo, pic });
