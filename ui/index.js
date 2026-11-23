// Pablolinguo UI behaviours, icons and component templates, built by esbuild into public/ui.js
// (classic script, loaded before the app). Screens build components with these, never by writing their classes.
import { openSheet, closeSheet, installSheets } from "./components/organisms/sheet.js";
import { emo } from "./icons/emoticons.js";
import { pic } from "./icons/pixel-icons.js";
import { button, mini } from "./components/atoms/button.js";
import { iconButton } from "./components/atoms/icon-button.js";
import { pill } from "./components/atoms/pill.js";
import { meter } from "./components/atoms/meter.js";

installSheets();
Object.assign(window, { openSheet, closeSheet, emo, pic, UI: { button, mini, iconButton, pill, meter } });
