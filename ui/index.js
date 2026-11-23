// Pablolinguo UI behaviours, icons and component templates, built by esbuild into public/ui.js
// (classic script, loaded before the app). Screens build components with these, never by writing their classes.
import { openSheet, closeSheet, installSheets } from "./components/organisms/sheet.js";
import { emo } from "./icons/emoticons.js";
import { pic } from "./icons/pixel-icons.js";
import { button, mini } from "./components/atoms/button.js";
import { iconButton } from "./components/atoms/icon-button.js";
import { pill } from "./components/atoms/pill.js";
import { meter } from "./components/atoms/meter.js";
import { emptyState } from "./components/molecules/empty-state.js";
import { card, panel, sectionTitle } from "./components/molecules/card.js";
import { feedback, faceHead } from "./components/molecules/feedback.js";
import { listRow, list } from "./components/molecules/list-row.js";
import { banner } from "./components/organisms/banner.js";
import { toast, installToast } from "./components/organisms/toast.js";

installSheets();
installToast();
Object.assign(window, { openSheet, closeSheet, toast, emo, pic, UI: { button, mini, iconButton, pill, meter, emptyState, card, panel, sectionTitle, feedback, faceHead, listRow, list, banner } });
