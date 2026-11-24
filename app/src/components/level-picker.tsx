// Choosing the level of the language being learnt: on the first visit, and from the profile.
import { View } from "react-native";
import { LV, LV_INFO } from "../../../shared/logic/levels.js";
import { useAccount } from "../lib/data";
import { space } from "../theme";
import { Emo } from "./icons";
import { Card, Screen, Text } from "./ui";

export function LevelPicker({ first, onDone }: { first?: boolean; onDone?: () => void }) {
  const state = useAccount();
  if (state.status !== "ready") return null;
  const a = state.account;
  // Only the levels this language has content for.
  const levels = (LV as string[]).filter((l) => a.pack.skills.some((sk) => sk.lvl === l));
  const info = LV_INFO as Record<string, string[]>;
  return (
    <Screen tabs={false}>
      <View style={{ alignItems: "center", gap: space[3], marginTop: space[6] }}>
        <Emo type="think" size={75} />
        <Text variant="display" center>{first ? "Ton niveau en " + a.pack.name.toLowerCase() : "Changer de niveau"}</Text>
        <Text variant="muted" center>Choisis où tu en es. Tu pourras le changer à tout moment dans ton profil.</Text>
      </View>
      <View style={{ gap: space[3] }}>
        {levels.map((l) => (
          <Card key={l} tint={a.hasLevel && l === a.level ? "tintMint" : undefined} label={`Niveau ${l}, ${info[l]?.[0] ?? ""}`}
            onPress={() => { a.setLevel(l); onDone?.(); }}>
            <Text variant="title">{l} · {info[l]?.[0] ?? ""}</Text>
            <Text variant="muted">{info[l]?.[1] ?? ""}</Text>
          </Card>
        ))}
      </View>
    </Screen>
  );
}
