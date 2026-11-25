// Situations: the real-life scenes (a hotel, a job interview…), each with its theme icon; a smiley once it is done.
// Its own tab since 25/11 (it was a chip of Apprendre).
import { router } from "expo-router";
import { Emo, Pic } from "../../components/icons";
import { Card, Row, Screen, Text } from "../../components/ui";
import { useAccount } from "../../lib/data";
import { THEME_PIC } from "../../lib/words";

export default function Situations() {
  const state = useAccount();
  if (state.status !== "ready") return null; // the root layout shows loading and errors
  const a = state.account;
  return (
    <Screen>
      <Text variant="display">Situations</Text>
      <Text variant="muted">Des scènes de la vraie vie : les phrases clés, un dialogue, puis à toi de traduire.</Text>
      <Card>
        {a.pack.cours.map((c) => (
          <Row key={c.id} lead={THEME_PIC[c.theme] ? <Pic name={THEME_PIC[c.theme]} size={24} /> : undefined} title={c.t} sub={c.situ}
            end={a.situations[c.id] ? <Emo type="cool" size={24} /> : undefined}
            onPress={() => router.push({ pathname: "/situation/[id]", params: { id: c.id } })} />
        ))}
      </Card>
    </Screen>
  );
}
