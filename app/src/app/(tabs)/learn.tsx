// Apprendre: the grammar points of a level, each with its mastery dots. Tapping one opens its sheet.
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import { LV } from "../../../../shared/logic/levels.js";
import { Emo, Pic } from "../../components/icons";
import { Card, Chip, Dots, Empty, Row, Screen, Text } from "../../components/ui";
import { dotsOf, useAccount } from "../../lib/data";
import { THEME_PIC } from "../../lib/words";
import { space } from "../../theme";

export default function Learn() {
  const state = useAccount();
  const [picked, setPicked] = useState<string | null>(null);
  const [tab, setTab] = useState<"gram" | "situ">("gram");
  if (state.status !== "ready") return null;
  const a = state.account;
  const levels = (LV as string[]).filter((l) => a.pack.skills.some((sk) => sk.lvl === l));
  const level = picked && levels.includes(picked) ? picked : levels.includes(a.level) ? a.level : levels[0];
  const list = a.pack.skills.filter((sk) => sk.lvl === level);

  return (
    <Screen>
      <Text variant="display">Apprendre</Text>
      <View style={{ flexDirection: "row", gap: space[2] }}>
        <Chip label="Grammaire" on={tab === "gram"} onPress={() => setTab("gram")} />
        <Chip label="Situations" on={tab === "situ"} onPress={() => setTab("situ")} />
      </View>
      {tab === "situ" ? (
        <Card>
          {a.pack.cours.map((c) => (
            <Row key={c.id} lead={THEME_PIC[c.theme] ? <Pic name={THEME_PIC[c.theme]} size={24} /> : undefined} title={c.t} sub={c.situ}
              end={a.situations[c.id] ? <Emo type="cool" size={24} /> : undefined}
              onPress={() => router.push({ pathname: "/situation/[id]", params: { id: c.id } })} />
          ))}
        </Card>
      ) : null}
      {tab === "gram" ? <>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: space[2] }}>
        {levels.map((l) => <Chip key={l} label={l} on={l === level} onPress={() => setPicked(l)} />)}
      </ScrollView>
      {list.length === 0 ? (
        <Empty title="Rien pour ce niveau" text="Les points de ce niveau arrivent bientôt." />
      ) : (
        <View style={{ gap: space[2] }}>
          <Text variant="label">Grammaire · {list.length} points</Text>
          <Card>
            {list.map((sk) => (
              <Row
                key={sk.id}
                title={sk.name}
                sub={sk.ex}
                end={<Dots n={dotsOf(a.skills, sk.id)} />}
                onPress={() => router.push({ pathname: "/sheet/[id]", params: { id: sk.id } })}
              />
            ))}
          </Card>
        </View>
      )}
      </> : null}
    </Screen>
  );
}
