// Mots: what is due today and the themes, with how many words of each the learner knows.
import { router } from "expo-router";
import { View } from "react-native";
import { Pic } from "../../components/icons";
import { Button, Card, Progress, Row, Screen, Text } from "../../components/ui";
import { today, useAccount } from "../../lib/data";
import { reviewCounts, themeCounts } from "../../lib/words";
import { space } from "../../theme";

// The icon of each theme, as on the web app (src/app/data/packs.js: THEME_PIC).
const THEME_PIC: Record<string, string> = {
  Work: "briefcase", Travel: "plane", Health: "heart", Climbing: "mountain", Food: "apple", Restaurant: "cup", Home: "house", Shopping: "bag",
  Weather: "cloud", City: "city", Family: "family", Nature: "tree", Intro: "hand", Hotel: "bed", Party: "party", Interview: "tie", Admin: "bank",
  Tech: "laptop", Emergency: "siren", Culture: "film",
};

export default function Words() {
  const state = useAccount();
  if (state.status !== "ready") return null;
  const a = state.account;
  const { due, fresh } = reviewCounts(a.pack, a.srs, a.level, today());
  const themes = Object.keys(a.pack.words);

  return (
    <Screen>
      <Text variant="display">Mots</Text>
      <Card tint="tintSky">
        <Text variant="title">{due > 0 ? `${due} mot${due > 1 ? "s" : ""} à revoir` : "Tout est à jour"}</Text>
        <Text variant="muted">{fresh} nouveaux mots à ton niveau. Une révision prend les mots à revoir, puis 5 nouveaux.</Text>
        <Button label={due > 0 ? "Réviser" : "Apprendre 5 nouveaux mots"} onPress={() => router.push("/review")} />
      </Card>
      <View style={{ gap: space[2] }}>
        <Text variant="label">Thèmes</Text>
        <Card>
          {themes.map((t) => {
            const c = themeCounts(a.pack, a.srs, a.level, t);
            return (
              <Row
                key={t}
                lead={THEME_PIC[t] ? <Pic name={THEME_PIC[t]} size={24} /> : undefined}
                title={t}
                sub={`${c.known} sur ${c.total} connus`}
                end={<View style={{ width: 64 }}><Progress value={c.known} max={c.total} /></View>}
              />
            );
          })}
        </Card>
      </View>
    </Screen>
  );
}
