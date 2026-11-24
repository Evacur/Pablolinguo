// Word review: the French is shown, the learner types the word. Due words first (25 at most), then 5 new ones
// of their level. A miss comes back a few cards later. Same boxes and intervals as the web app.
// The learner's own words (Mes mots) join the review; with ?only=mine it reviews only them.
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import { Pressable, Text as RNText, TextInput, View } from "react-native";
import { norm, typoFix } from "../../../src/app/lib/answers.js";
import { fitsLevel } from "../../../src/app/lib/levels.js";
import { Emo } from "../components/icons";
import { Button, Card, IconButton, Progress, Screen, Text, s as ui } from "../components/ui";
import { speak, stopSpeech } from "../lib/audio";
import { today, useAccount } from "../lib/data";
import { knownWords, shuffle } from "../lib/session";
import { wkey } from "../lib/words";
import { color, font, space, touch } from "../theme";

type W = { k: string; en: string; fr: string; tip: string };

export default function Review() {
  const state = useAccount();
  const a = state.status === "ready" ? state.account : null;
  const onlyMine = useLocalSearchParams<{ only?: string }>().only === "mine";
  const initial = useMemo(() => {
    if (!a) return [] as W[];
    const all = new Map<string, W>();
    a.myWords.forEach((m) => all.set(wkey(a.lang, m.en), { k: wkey(a.lang, m.en), en: m.en, fr: m.fr, tip: m.tip ?? "" }));
    const t = today();
    if (onlyMine) {
      const mine = [...all.values()];
      return [...shuffle(mine.filter((w) => !a.srs[w.k] || a.srs[w.k].due <= t)), ...shuffle(mine.filter((w) => a.srs[w.k] && a.srs[w.k].due > t))].slice(0, 25);
    }
    Object.values(a.pack.words).forEach((l) => l.forEach((w) => {
      const k = wkey(a.lang, w[0]);
      if (!all.has(k) && (a.srs[k] || fitsLevel(w[3], a.level))) all.set(k, { k, en: w[0], fr: w[1], tip: w[2] ?? "" });
    }));
    const due = [...all.values()].filter((w) => a.srs[w.k] && a.srs[w.k].due <= t).slice(0, 25);
    const fresh = shuffle([...all.values()].filter((w) => !a.srs[w.k])).slice(0, 5);
    return [...shuffle(due), ...fresh];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [a?.lang]);
  const [queue, setQueue] = useState<W[]>(initial);
  const [given, setGiven] = useState("");
  const [shown, setShown] = useState<{ ok: boolean; fix?: string } | null>(null);
  const [done, setDone] = useState(0);
  const [right, setRight] = useState(0);
  useEffect(() => stopSpeech, []);
  if (!a) return null;

  // Articles and « to » do not count (src/app/screens/words.js: wnorm).
  const wnorm = (x: string) => a.lang === "en"
    ? norm(x, "en").replace(/^to /, "").replace(/^(a|an|the) /, "")
    : norm(x, a.lang).replace(/^(el|la|los|las|un|una|unos|unas) /, "");

  if (!queue.length) {
    return (
      <Screen tabs={false}>
        <View style={{ alignItems: "center", gap: space[3], marginTop: space[10] }}>
          <Emo type={done && right === done ? "party" : "wink"} size={90} />
          <Text variant="display" center>{done ? `${right}/${done} justes` : "Rien à revoir"}</Text>
          <Text variant="muted" center>{done ? "Les mots ratés reviendront demain. Les mots réussis reviendront plus tard : 1 jour, puis 3, 7, 14 et 30 jours." : "Tout est à jour."}</Text>
        </View>
        <Button label="Terminer" onPress={() => router.back()} />
      </Screen>
    );
  }

  const w = queue[0];
  function check() {
    if (!a || !given.trim()) return;
    const exact = wnorm(given) === wnorm(w.en);
    const fix = exact ? null : (typoFix(wnorm(w.en), wnorm(given), a.lang, knownWords(a.pack)) as [string, string][] | null);
    const ok = exact || !!fix;
    setShown({ ok, fix: fix ? fix.map(([g, r]) => `${g} → ${r}`).join(", ") : undefined });
    setDone((n) => n + 1);
    if (ok) setRight((n) => n + 1);
    a.reviewWord(w.k, ok);
    speak(a.lang, [w.en]); // the answer is heard, right or wrong, as on the web app
  }
  function next() {
    const rest = queue.slice(1);
    if (shown && !shown.ok) rest.splice(Math.min(3, rest.length), 0, w); // a miss comes back a little later
    setQueue(rest);
    setShown(null);
    setGiven("");
  }

  return (
    <Screen tabs={false}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: space[3] }}>
        <Pressable accessibilityRole="button" accessibilityLabel="Quitter la révision" onPress={() => router.back()} hitSlop={8}
          style={{ width: touch, height: touch, alignItems: "center", justifyContent: "center" }}>
          <RNText style={{ fontSize: font.xl, color: color.muted }}>✕</RNText>
        </Pressable>
        <View style={{ flex: 1 }}><Progress value={done} max={done + queue.length} /></View>
      </View>
      <Card>
        <Text variant="label">En {a.pack.name.toLowerCase()}</Text>
        <Text variant="display">{w.fr}</Text>
      </Card>
      <TextInput style={ui.field} value={given} onChangeText={setGiven} editable={!shown} autoFocus autoCapitalize="none" autoCorrect={false}
        placeholder="Le mot" placeholderTextColor={color.muted} accessibilityLabel="Le mot" onSubmitEditing={check} returnKeyType="done" />
      {!shown ? <Button label="Vérifier" disabled={!given.trim()} onPress={check} /> : (
        <Card tint={shown.ok ? "goodSoft" : "badSoft"}>
          <Text variant="title">{shown.ok ? "Bien joué" : "C'était…"}</Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: space[2] }}>
            <View style={{ flex: 1 }}><Text variant="body">{w.en}</Text></View>
            <IconButton name="speaker" label={`Écouter ${w.en}`} onPress={() => speak(a.lang, [w.en])} />
          </View>
          {shown.fix ? <Text variant="muted">Petite faute : {shown.fix}</Text> : null}
          {w.tip ? <Text variant="muted">{w.tip}</Text> : null}
          <Button label="Continuer" onPress={next} />
        </Card>
      )}
      {a.saveFailed ? <Text variant="muted">Pas de réseau : tes réponses seront enregistrées dès que la connexion revient.</Text> : null}
    </Screen>
  );
}
