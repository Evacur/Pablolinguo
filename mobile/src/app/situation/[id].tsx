// A situation of everyday life: the key phrases, a short dialogue, the grammar point it uses, common mistakes
// and a few sentences to translate yourself (the answer shows on tap).
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, View } from "react-native";
import { Pic } from "../../components/icons";
import { Button, Card, Empty, IconButton, Screen, Text } from "../../components/ui";
import { speak, stopSpeech } from "../../lib/audio";
import { useAccount } from "../../lib/data";
import { THEME_PIC } from "../../lib/words";
import { color, space } from "../../theme";

export default function SituationScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const state = useAccount();
  const [shown, setShown] = useState<number[]>([]);
  useEffect(() => stopSpeech, []);
  if (state.status !== "ready") return null;
  const a = state.account;
  const c = a.pack.cours.find((x) => x.id === id);
  if (!c) return <Screen tabs={false}><Empty face="sad" title="Situation introuvable" /><Button label="Fermer" variant="secondary" onPress={() => router.back()} /></Screen>;
  const best = a.situations[c.id];

  return (
    <Screen tabs={false}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: space[3] }}>
        {THEME_PIC[c.theme] ? <Pic name={THEME_PIC[c.theme]} size={32} /> : null}
        <Text variant="label">Situation{best ? ` · réussie à ${best} %` : ""}</Text>
      </View>
      <Text variant="display">{c.t}</Text>
      <Text variant="muted">{c.situ}</Text>

      <View style={{ gap: space[2] }}>
        <Text variant="label">Les phrases clés</Text>
        <Card>
          {c.ph.map(([en, fr]) => (
            <View key={en} style={{ flexDirection: "row", alignItems: "center", gap: space[2] }}>
              <View style={{ flex: 1, gap: 2 }}>
                <Text variant="body">{en}</Text>
                <Text variant="muted">{fr}</Text>
              </View>
              <IconButton name="speaker" label={`Écouter : ${en}`} onPress={() => speak(a.lang, [en])} />
            </View>
          ))}
        </Card>
      </View>

      <View style={{ gap: space[2] }}>
        <Text variant="label">Le dialogue</Text>
        <Card tint="tintSky">
          {c.dia.map(([who, line], i) => (
            <View key={i} style={{ flexDirection: "row", gap: space[3] }}>
              <Text variant="label">{who}</Text>
              <View style={{ flex: 1 }}><Text variant="body">{line}</Text></View>
            </View>
          ))}
        </Card>
      </View>

      {c.g ? (
        <View style={{ gap: space[2] }}>
          <Text variant="label">La grammaire en situation</Text>
          <Card tint="banner">
            <Text variant="title">{c.g.t}</Text>
            <Text variant="body">{c.g.r}</Text>
            {c.g.ex.map((e) => <Text key={e} variant="muted">{e}</Text>)}
          </Card>
        </View>
      ) : null}

      {c.tr?.length ? (
        <View style={{ gap: space[2] }}>
          <Text variant="label">Les erreurs à éviter</Text>
          <Card>
            {c.tr.map(([wrong, right, why]) => (
              <View key={wrong} style={{ gap: 2, paddingVertical: space[1] }}>
                <Text variant="muted">{wrong}</Text>
                <Text variant="body">{right}</Text>
                <Text variant="muted">{why}</Text>
              </View>
            ))}
          </Card>
        </View>
      ) : null}

      {c.task?.length ? (
        <View style={{ gap: space[2] }}>
          <Text variant="label">À toi · touche pour voir la réponse</Text>
          <Card>
            {c.task.map(([fr, en], i) => (
              <Pressable key={fr} accessibilityRole="button" accessibilityLabel={`Voir la réponse : ${fr}`}
                onPress={() => setShown(shown.includes(i) ? shown.filter((x) => x !== i) : [...shown, i])}
                style={{ gap: 2, paddingVertical: space[2], borderTopWidth: i ? 1 : 0, borderColor: color.line }}>
                <Text variant="body">{fr}</Text>
                <Text variant="muted">{shown.includes(i) ? en : "…"}</Text>
              </Pressable>
            ))}
          </Card>
        </View>
      ) : null}

      <Button label="Fermer" variant="secondary" onPress={() => router.back()} />
    </Screen>
  );
}
