// Choosing the level of the language being learnt: on the first visit, and from the profile.
import { View } from "react-native";
import { LV, LV_INFO } from "../../../shared/logic/levels.js";
import { useAccount } from "../lib/data";
import { space } from "../theme";
import { Emo } from "./icons";
import { Card, Screen, Text, Sheet } from "./ui";

// From the profile it is a sheet (`onClose`); on the first visit a plain page, since a level must be chosen.
export function LevelPicker({ first, onDone, onClose }: { first?: boolean; onDone?: () => void; onClose?: () => void }) {
  const state = useAccount();
  if (state.status !== "ready") return null;
  const a = state.account;
  // Only the levels this language has content for.
  const levels = (LV as string[]).filter((l) => a.pack.skills.some((sk) => sk.lvl === l));
  const info = LV_INFO as Record<string, string[]>;
  const body = (
    <>
      <View style={{ alignItems: "center", gap: space[3], marginTop: onClose ? 0 : space[6] }}>
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
    </>
  );
  return onClose ? <Sheet onClose={onClose}>{body}</Sheet> : <Screen tabs={false}>{body}</Screen>;
}
