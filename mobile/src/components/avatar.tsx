// The learner's avatar: a pixel smiley on a round pastel background, as on the web app.
import { View } from "react-native";
import { avBg } from "../lib/avatar";
import { radius } from "../theme";
import { Emo } from "./icons";

export function Avatar({ e, c, size }: { e?: string; c?: string; size: number }) {
  return (
    <View style={{ width: size, height: size, borderRadius: radius.pill, backgroundColor: avBg(c), alignItems: "center", justifyContent: "center" }}>
      <Emo type={e ?? "grin"} size={Math.round(size * 0.62)} />
    </View>
  );
}
