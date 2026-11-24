// The sheet of a grammar point: the rule, the lesson when the pack has one, and a few examples.
import { router, useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import { Button, Card, Dots, Empty, Screen, Text } from "../../components/ui";
import { dotsOf, useAccount } from "../../lib/data";
import { color, space } from "../../theme";

export default function Sheet() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const state = useAccount();
  if (state.status !== "ready") return null;
  const a = state.account;
  const sk = a.pack.skills.find((x) => x.id === id);
  if (!sk) return <Screen tabs={false}><Empty face="sad" title="Fiche introuvable" /><Button label="Fermer" variant="secondary" onPress={() => router.back()} /></Screen>;
  const lesson = a.pack.lessons?.[sk.id];
  const rule = a.pack.rules[sk.id];

  return (
    <Screen tabs={false}>
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
                <View key={i} style={{ gap: 2, paddingVertical: space[1], borderTopWidth: i ? 1 : 0, borderColor: color.line }}>
                  {r.map((cell, j) => <Text key={j} variant={j === 0 ? "muted" : "body"}>{cell}</Text>)}
                </View>
              ))}
            </Card>
          ) : null}
        </View>
      ))}
      <View style={{ gap: space[2] }}>
        <Text variant="label">Exemples</Text>
        <Card>
          {sk.q.slice(0, 4).map(([fr, answers]) => (
            <View key={fr} style={{ gap: 2 }}>
              <Text variant="body">{answers[0]}</Text>
              <Text variant="muted">{fr}</Text>
            </View>
          ))}
        </Card>
      </View>
      <Button label="Fermer" variant="secondary" onPress={() => router.back()} />
    </Screen>
  );
}
