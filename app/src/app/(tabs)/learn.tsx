// Apprendre: the grammar points of a level (the situations have their own tab since 25/11), each with its mastery dots. Tapping one opens its sheet.
// A card on top trains on the level on screen, like the review card of Mots.
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import { LV } from "../../../../shared/logic/levels.js";
import { Button, Card, Chip, Dots, Empty, Row, Screen, Text, Section } from "../../components/ui";
import { dotsOf, useAccount } from "../../lib/data";
import { space } from "../../theme";

export default function Learn() {
  const state = useAccount();
  const [picked, setPicked] = useState<string | null>(null);
  if (state.status !== "ready") return null;
  const a = state.account;
  const levels = (LV as string[]).filter((l) => a.pack.skills.some((sk) => sk.lvl === l));
  const level = picked && levels.includes(picked) ? picked : levels.includes(a.level) ? a.level : levels[0];
  const list = a.pack.skills.filter((sk) => sk.lvl === level);

  return (
    <Screen>
      <Text variant="display">Apprendre</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: space[2] }}>
        {levels.map((l) => <Chip key={l} label={l} on={l === level} onPress={() => setPicked(l)} />)}
      </ScrollView>
      {list.length > 0 ? (
        <Card tint="tintMint">
          <Text variant="title">{`S'entraîner au niveau ${level}`}</Text>
          <Text variant="muted">5 exercices sur les points de ce niveau, les plus fragiles d'abord.</Text>
          <Button label="S'entraîner" onPress={() => router.push({ pathname: "/session", params: { mode: "express", arg: level } })} />
        </Card>
      ) : null}
      {list.length === 0 ? (
        <Empty title="Rien pour ce niveau" text="Les points de ce niveau arrivent bientôt." />
      ) : (
        <Section title={`Grammaire · ${list.length} points`}>
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
        </Section>
      )}
    </Screen>
  );
}
