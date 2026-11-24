// The app's pixel smilies and icons, drawn by the same code as the web app (ui/icons): one source for both.
import { SvgXml } from "react-native-svg";
import { emo } from "../../../ui/icons/emoticons.js";
import { pic } from "../../../ui/icons/pixel-icons.js";

export function Emo({ type, size = 40 }: { type: string; size?: number }) {
  return <SvgXml xml={emo(type, size)} width={size} height={size} accessibilityElementsHidden importantForAccessibility="no" />;
}

export function Pic({ name, size = 20 }: { name: string; size?: number }) {
  return <SvgXml xml={pic(name, size)} width={size} height={size} accessibilityElementsHidden importantForAccessibility="no" />;
}
