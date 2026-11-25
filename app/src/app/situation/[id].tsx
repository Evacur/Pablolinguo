// A situation of everyday life: the key phrases, a short dialogue, the grammar point it uses, common mistakes
// and a few sentences to translate yourself (the answer shows on tap).
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { Pic } from "../../components/icons";
import { Button, Card, Empty, IconButton, Item, Section, Text, Sheet } from "../../components/ui";
import { speak, stopSpeech } from "../../lib/audio";
import { themeCount } from "../../lib/session";
import { useAccount } from "../../lib/data";
import { THEME_PIC } from "../../lib/words";
import { space } from "../../theme";

export default function SituationScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const state = useAccount();
  const [shown, setShown] = useState<number[]>([]);
  useEffect(() => stopSpeech, []);
  if (state.status !== "ready") return null;
  const a = state.account;
  const c = a.pack.cours.find((x) => x.id === id);
  if (!c) return <Sheet onClose={() => router.back()}><Empty face="sad" title="Situation introuvable" /></Sheet>;
  const best = a.situations[c.id];

  return (
    <Sheet onClose={() => router.back()}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: space[3] }}>
        {THEME_PIC[c.theme] ? <Pic name={THEME_PIC[c.theme]} size={32} /> : null}
        <Text variant="label">Situation{best ? ` · réussie à ${best} %` : ""}</Text>
      </View>
      <Text variant="display">{c.t}</Text>
      <Text variant="muted">{c.situ}</Text>

      <Section title="Les phrases clés">
        <Card>
          {c.ph.map(([en, fr], i) => (
            <Item key={en} divider={i > 0} end={<IconButton name="speaker" label={`Écouter : ${en}`} onPress={() => speak(a.lang, [en])} />}>
              <Text variant="body">{en}</Text>
              <Text variant="muted">{fr}</Text>
            </Item>
          ))}
        </Card>
      </Section>

      <Section title="Le dialogue">
        <Card tint="tintSky">
          {c.dia.map(([who, line], i) => (
            <View key={i} style={{ flexDirection: "row", gap: space[3] }}>
              <Text variant="label">{who}</Text>
              <View style={{ flex: 1 }}><Text variant="body">{line}</Text></View>
            </View>
          ))}
        </Card>
      </Section>

      {c.g ? (
        <Section title="La grammaire en situation">
          <Card tint="banner">
            <Text variant="title">{c.g.t}</Text>
            <Text variant="body">{c.g.r}</Text>
            {c.g.ex.map((e) => <Text key={e} variant="muted">{e}</Text>)}
          </Card>
        </Section>
      ) : null}

      {c.tr?.length ? (
        <Section title="Les erreurs à éviter">
          <Card>
            {c.tr.map(([wrong, right, why], i) => (
              <Item key={wrong} divider={i > 0}>
                <Text variant="muted">{wrong}</Text>
                <Text variant="body">{right}</Text>
                <Text variant="muted">{why}</Text>
              </Item>
            ))}
          </Card>
        </Section>
      ) : null}

      {c.task?.length ? (
        <Section title="À toi · touche pour voir la réponse">
          <Card>
            {c.task.map(([fr, en], i) => (
              <Item key={fr} divider={i > 0} label={`Voir la réponse : ${fr}`}
                onPress={() => setShown(shown.includes(i) ? shown.filter((x) => x !== i) : [...shown, i])}>
                <Text variant="body">{fr}</Text>
                <Text variant="muted">{shown.includes(i) ? en : "…"}</Text>
              </Item>
            ))}
          </Card>
        </Section>
      ) : null}

      {themeCount(a.pack, c.theme, a.level) >= 4 ? (
        <Card tint="tintSun">
          <Text variant="title">Le test</Text>
          <Text variant="muted">Une dizaine d'exercices sur cette situation, dont « Associe ». 8 bonnes réponses sur 10 pour la valider.</Text>
          <Button label={best ? "Repasser le test" : "Passer le test"} onPress={() => router.push({ pathname: "/session", params: { mode: "theme", arg: c.theme } })} />
        </Card>
      ) : null}
    </Sheet>
  );
}
