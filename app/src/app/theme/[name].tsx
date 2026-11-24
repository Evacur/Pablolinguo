// The words of a theme: those of the learner's level and below, plus any already reviewed, each with its
// translation, its tip, how well it is known (0 to 5, the review box) and the Google voice.
import { router, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";
import { fitsLevel } from "../../../../shared/logic/levels.js";
import { Pic } from "../../components/icons";
import { Button, Card, Empty, IconButton, Progress, Row, Screen, Text } from "../../components/ui";
import { speak, stopSpeech } from "../../lib/audio";
import { useAccount } from "../../lib/data";
import { THEME_PIC, themeCounts, wkey } from "../../lib/words";
import { space } from "../../theme";

export default function ThemeWords() {
  const { name } = useLocalSearchParams<{ name: string }>();
  const state = useAccount();
  useEffect(() => stopSpeech, []);
  if (state.status !== "ready") return null;
  const a = state.account;
  const words = (a.pack.words[name] ?? []).filter((w) => fitsLevel(w[3], a.level) || a.srs[wkey(a.lang, w[0])]);
  if (!words.length) return <Screen tabs={false}><Empty face="sad" title="Thème introuvable" /><Button label="Fermer" variant="secondary" onPress={() => router.back()} /></Screen>;
  const c = themeCounts(a.pack, a.srs, a.level, name);

  return (
    <Screen tabs={false}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: space[3] }}>
        {THEME_PIC[name] ? <Pic name={THEME_PIC[name]} size={40} /> : null}
        <View style={{ flex: 1, gap: space[1] }}>
          <Text variant="display">{name}</Text>
          <Text variant="muted">{c.known} sur {c.total} connus</Text>
        </View>
      </View>
      <Progress value={c.known} max={c.total} />
      <Card>
        {words.map((w) => {
          const b = a.srs[wkey(a.lang, w[0])]?.b ?? 0;
          return (
            <Row key={w[0]} title={w[0]} sub={[w[1], w[2]].filter(Boolean).join(" · ")}
              end={
                <View style={{ flexDirection: "row", alignItems: "center", gap: space[1] }}>
                  <Text variant="label">{b}/5</Text>
                  <IconButton name="speaker" label={`Écouter ${w[0]}`} onPress={() => speak(a.lang, [w[0]])} />
                </View>
              } />
          );
        })}
      </Card>
      <Button label="Fermer" variant="secondary" onPress={() => router.back()} />
    </Screen>
  );
}
