// The sheet of a grammar point: the rule, the lesson when the pack has one, and a few examples.
import { router, useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import { Button, Card, Dots, Empty, Item, Section, Text, Sheet } from "../../components/ui";
import { dotsOf, useAccount } from "../../lib/data";
import { space } from "../../theme";

export default function GrammarSheet() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const state = useAccount();
  if (state.status !== "ready") return null;
  const a = state.account;
  const sk = a.pack.skills.find((x) => x.id === id);
  if (!sk) return <Sheet onClose={() => router.back()}><Empty face="sad" title="Fiche introuvable" /></Sheet>;
  const lesson = a.pack.lessons?.[sk.id];
  const rule = a.pack.rules[sk.id];

  return (
    <Sheet onClose={() => router.back()}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Text variant="label">{sk.lvl} · Grammaire</Text>
        <Dots n={dotsOf(a.skills, sk.id)} />
      </View>
      <Text variant="display">{sk.name}</Text>
      {lesson?.intro ? <Text variant="body">{lesson.intro}</Text> : null}
      {rule ? (
        <Card tint="banner">
          <Text variant="label">La règle</Text>
          <Text variant="body">{rule}</Text>
        </Card>
      ) : null}
      {(lesson?.parts ?? []).map((p) => (
        <View key={p.h} style={{ gap: space[2] }}>
          <Text variant="title">{p.h}</Text>
          {p.p ? <Text variant="body">{p.p}</Text> : null}
          {p.rows?.length ? (
            <Card>
              {p.rows.map((r, i) => (
                <Item key={i} divider={i > 0}>
                  {r.map((cell, j) => <Text key={j} variant={j === 0 ? "muted" : "body"}>{cell}</Text>)}
                </Item>
              ))}
            </Card>
          ) : null}
        </View>
      ))}
      <Section title="Exemples">
        <Card>
          {sk.q.slice(0, 4).map(([fr, answers], i) => (
            <Item key={fr} divider={i > 0}>
              <Text variant="body">{answers[0]}</Text>
              <Text variant="muted">{fr}</Text>
            </Item>
          ))}
        </Card>
      </Section>
      <View style={{ gap: space[2] }}>
        <Button label="S'entraîner (5 exercices)" onPress={() => router.push({ pathname: "/session", params: { mode: "practice", arg: sk.id } })} />
        <Button label="Passer le test (10 questions)" variant="secondary" onPress={() => router.push({ pathname: "/session", params: { mode: "test", arg: sk.id } })} />
      </View>
    </Sheet>
  );
}
