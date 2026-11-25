// Line glyphs for controls (back, close, tick), drawn in theme colours. Pixel icons stay for content (./icons).
import { SvgXml } from "react-native-svg";
import { color } from "../theme";

const PATH = { back: "M15 18l-6-6 6-6", close: "M6 6l12 12M18 6L6 18", check: "M5 12l5 5 9-10", next: "M9 6l6 6-6 6" } as const;
export type GlyphName = keyof typeof PATH;

export function Glyph({ name, size = 22, tone = "fg", weight = 2.2 }: { name: GlyphName; size?: number; tone?: keyof typeof color; weight?: number }) {
  const xml = `<svg viewBox="0 0 24 24" fill="none" stroke="${color[tone]}" stroke-width="${weight}" stroke-linecap="round" stroke-linejoin="round"><path d="${PATH[name]}"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} accessibilityElementsHidden importantForAccessibility="no" />;
}
