// Mes mots: the learner adds a word (the AI teacher fills the translation, a tip and an example, or they write
// « deadline = échéance »), sees the list, deletes one, and reviews only these. They also join the normal review.
import { router } from "expo-router";
import { useState } from "react";
import { TextInput, View } from "react-native";
import { Button, Card, Empty, IconButton, Row, Screen, Text, s as ui } from "../components/ui";
import { aiWord } from "../lib/ai";
import { useAccount } from "../lib/data";
import { color, space } from "../theme";

export default function MyWords() {
  const state = useAccount();
  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState("");
  if (state.status !== "ready") return null;
  const a = state.account;
  const langName = a.pack.name.toLowerCase();
  const sample = a.lang === "es" ? "la fecha límite = échéance" : "deadline = échéance";

  async function add() {
    const v = text.trim();
    if (!v || busy) return;
    const [en, fr, extra] = v.split("=").map((x) => x.trim());
    const manual = en && fr && extra === undefined ? { en, fr } : null;
    let entry: { en: string; fr: string; tip?: string; example?: string } | null = manual;
    if (!manual) {
      setBusy(true);
      setMsg("Le prof prépare ta carte…");
      try {
        const r = await aiWord(v, a.lang, a.level);
        if (r.en && r.fr) entry = r;
      } catch (e) {
        setMsg(e === "limit" ? "Le prof a assez travaillé pour aujourd'hui. Écris-le comme ça : " + sample
          : "Le prof n'a pas pu répondre. Écris-le comme ça : " + sample);
      } finally {
        setBusy(false);
      }
    }
    if (!entry) return;
    a.addMyWord(entry);
    setText("");
    setMsg(`Ajouté : ${entry.en} = ${entry.fr}. Il arrive dans ta révision.`);
  }

  return (
    <Screen tabs={false}>
      <Text variant="display">Mes mots</Text>
      <Card tint="tintMint">
        <Text variant="muted">Tape un mot en français ou en {langName} : le prof trouve la traduction, une astuce et un exemple. Tu peux aussi l'écrire toi-même : {sample}</Text>
        <TextInput style={ui.field} value={text} onChangeText={setText} editable={!busy} autoCapitalize="none" autoCorrect={false}
          placeholder="Un mot ou une expression" placeholderTextColor={color.muted} accessibilityLabel="Le mot à ajouter"
          onSubmitEditing={add} returnKeyType="done" maxLength={120} />
        <Button label="Ajouter" busy={busy} disabled={!text.trim()} onPress={add} />
        {msg ? <Text variant="muted">{msg}</Text> : null}
      </Card>
      {a.myWords.length ? (
        <>
          <Button label="Réviser mes mots" variant="secondary" onPress={() => router.push({ pathname: "/review", params: { only: "mine" } })} />
          <Card>
            {a.myWords.map((m) => (
              <Row key={m.id} title={m.en} sub={[m.fr, m.tip].filter(Boolean).join(" · ")}
                end={<IconButton name="trash" label={`Supprimer ${m.en}`} onPress={() => a.deleteMyWord(m.id)} />} />
            ))}
          </Card>
        </>
      ) : (
        <Empty face="wink" title="Pas encore de mot à toi" text="Un mot entendu dans une série, une chanson, au travail : ajoute-le ici." />
      )}
      <View style={{ height: space[2] }} />
      <Button label="Fermer" variant="ghost" onPress={() => router.back()} />
    </Screen>
  );
}
