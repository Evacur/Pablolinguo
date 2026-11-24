// A session of exercises: practice (5 on one point), test (10 on one point: 8 right adds a dot) or express
// (5 of the level, weak points first). Same exercises, same checking and same records as the web app.
import { router, useLocalSearchParams } from "expo-router";
import { useMemo, useState } from "react";
import { Pressable, StyleSheet, TextInput, View, Text as RNText } from "react-native";
import { needed } from "../../../src/app/lib/mastery.js";
import { Emo } from "../components/icons";
import { Button, Card, Dots, Empty, Progress, Screen, Text, s as ui } from "../components/ui";
import { dotsOf, today, useAccount } from "../lib/data";
import { KIND_LBL, buildSession, checkOption, checkOrder, checkTyped, knownWords, shuffle, type Mode, type Verdict } from "../lib/session";
import { color, font, radius, space, touch, weight } from "../theme";

const TITLE: Record<Mode, string> = { practice: "Entraînement", test: "Test", express: "Séance express" };

export default function Session() {
  const p = useLocalSearchParams<{ mode?: string; arg?: string }>();
  const mode: Mode = p.mode === "test" || p.mode === "practice" ? p.mode : "express";
  const arg = p.arg ?? "";
  const state = useAccount();
  const a = state.status === "ready" ? state.account : null;
  // The exercises are drawn once, when the session opens.
  const items = useMemo(
    () => (a ? buildSession(a.pack, mode, arg, a.level, a.skills, a.seen, today()) : []),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [a?.lang, mode, arg],
  );
  const [i, setI] = useState(0);
  const [given, setGiven] = useState("");
  const [built, setBuilt] = useState<number[]>([]);
  const [verdict, setVerdict] = useState<Verdict | null>(null);
  const [right, setRight] = useState(0);
  const [result, setResult] = useState<{ passed: boolean } | null>(null);
  const tiles = useMemo(() => (items[i]?.words ? shuffle(items[i].words!.map((w, k) => ({ w, k }))) : []), [items, i]);

  if (!a) return null;
  const quit = () => router.back();
  if (!items.length) return <Screen tabs={false}><Empty title="Pas d'exercice ici" text="Ce point n'a pas encore d'exercices." /><Button label="Retour" onPress={quit} /></Screen>;

  // The end of the series: the score, and for a test whether it adds a dot.
  if (i >= items.length) {
    const skill = a.pack.skills.find((x) => x.id === arg);
    return (
      <Screen tabs={false}>
        <View style={{ alignItems: "center", gap: space[3], marginTop: space[10] }}>
          <Emo type={right === items.length ? "party" : right >= items.length / 2 ? "cool" : "wink"} size={90} />
          <Text variant="display" center>{right} sur {items.length}</Text>
          {mode === "test" && result ? (
            <>
              <Text variant="title" center>{result.passed ? "Test réussi" : "Pas encore"}</Text>
              <Text variant="muted" center>
                {result.passed ? `Un point de maîtrise de plus sur « ${skill?.name ?? ""} ».` : `Il faut ${needed(items.length)} bonnes réponses sur ${items.length}. Entraîne-toi encore un peu puis retente.`}
              </Text>
              <Dots n={dotsOf(a.skills, arg)} />
            </>
          ) : (
            <Text variant="muted" center>Les exercices ratés reviendront plus souvent.</Text>
          )}
        </View>
        <Button label="Terminer" onPress={quit} />
      </Screen>
    );
  }

  const it = items[i];
  const answered = verdict !== null;

  function decide(v: Verdict) {
    if (!a) return;
    setVerdict(v);
    if (v.ok) setRight((n) => n + 1);
    a.recordAnswer(it, v.ok, mode === "test");
    a.markDay();
  }
  function next() {
    if (!a) return;
    const last = i + 1 >= items.length;
    if (last) {
      const score = right; // already counts this answer
      if (mode === "test") setResult({ passed: a.recordTest(arg, score, items.length) });
      if (items.length >= 5 && !a.todayQuests.includes("drill")) a.markDay("drill");
    }
    setI(i + 1);
    setGiven("");
    setBuilt([]);
    setVerdict(null);
  }

  return (
    <Screen tabs={false}>
      <View style={st.top}>
        <Pressable accessibilityRole="button" accessibilityLabel="Quitter la séance" onPress={quit} hitSlop={8} style={st.close}>
          <RNText style={st.closeX}>✕</RNText>
        </Pressable>
        <View style={{ flex: 1 }}><Progress value={i} max={items.length} /></View>
        <Text variant="muted">{i + 1}/{items.length}</Text>
      </View>
      <Text variant="label">{TITLE[mode]} · {KIND_LBL[it.t]}</Text>
      <Text variant="title">{it.fr}</Text>
      {it.s ? <Text variant="body">{it.s}</Text> : null}
      {it.h ? <Text variant="muted">Indice : {it.h}</Text> : null}

      {it.t === "qcm" ? (
        <View style={{ gap: space[2] }}>
          {(it.o ?? []).map((o, k) => {
            const isRight = answered && k === it.a;
            return (
              <Pressable key={o} accessibilityRole="button" disabled={answered} onPress={() => decide(checkOption(it, k))}
                style={[st.option, isRight && { borderColor: color.good, backgroundColor: color.goodSoft }]}>
                <RNText style={st.optionText}>{o}</RNText>
              </Pressable>
            );
          })}
        </View>
      ) : it.t === "order" ? (
        <View style={{ gap: space[3] }}>
          <View style={[st.built, answered && { borderColor: verdict?.ok ? color.good : color.bad }]}>
            {built.map((k, n) => (
              <Pressable key={n} accessibilityRole="button" accessibilityLabel={`Retirer ${it.words![k]}`} disabled={answered}
                onPress={() => setBuilt(built.filter((_, m) => m !== n))} style={st.tile}>
                <RNText style={st.tileText}>{it.words![k]}</RNText>
              </Pressable>
            ))}
          </View>
          <View style={st.tiles}>
            {tiles.filter((t) => !built.includes(t.k)).map((t) => (
              <Pressable key={t.k} accessibilityRole="button" disabled={answered} onPress={() => setBuilt([...built, t.k])} style={st.tile}>
                <RNText style={st.tileText}>{t.w}</RNText>
              </Pressable>
            ))}
          </View>
          {!answered ? <Button label="Vérifier" disabled={built.length !== it.words!.length}
            onPress={() => decide(checkOrder(it, built.map((k) => it.words![k]), a.lang))} /> : null}
        </View>
      ) : (
        <View style={{ gap: space[3] }}>
          <TextInput style={ui.field} value={given} onChangeText={setGiven} editable={!answered} autoFocus autoCapitalize="none" autoCorrect={false}
            placeholder={it.t === "gap" ? "Le mot qui manque" : "Ta traduction"} placeholderTextColor={color.muted}
            accessibilityLabel="Ta réponse" returnKeyType="done"
            onSubmitEditing={() => given.trim() && !answered && decide(checkTyped(it, given, a.lang, knownWords(a.pack)))} />
          {!answered ? <Button label="Vérifier" disabled={!given.trim()} onPress={() => decide(checkTyped(it, given, a.lang, knownWords(a.pack)))} /> : null}
        </View>
      )}

      {verdict ? (
        <Card tint={verdict.ok ? "goodSoft" : "badSoft"}>
          <View style={{ flexDirection: "row", gap: space[3], alignItems: "center" }}>
            <Emo type={verdict.ok ? "grin" : "sad"} size={40} />
            <Text variant="title">{verdict.ok ? "Bien joué" : "Pas tout à fait"}</Text>
          </View>
          {!verdict.ok || verdict.fix ? <Text variant="body">{verdict.best}</Text> : null}
          {verdict.fix ? <Text variant="muted">Petite faute : {verdict.fix.map(([g, r]) => `${g} → ${r}`).join(", ")}</Text> : null}
          {it.why ? <Text variant="muted">{it.why}</Text> : null}
          <Button label={i + 1 >= items.length ? "Voir le résultat" : "Continuer"} onPress={next} />
        </Card>
      ) : null}
      {a.saveFailed ? <Text variant="muted">Pas de réseau : tes réponses comptent ici et seront enregistrées dès que la connexion revient.</Text> : null}
    </Screen>
  );
}

const st = StyleSheet.create({
  top: { flexDirection: "row", alignItems: "center", gap: space[3] },
  close: { width: touch, height: touch, alignItems: "center", justifyContent: "center" },
  closeX: { fontSize: font.xl, color: color.muted },
  option: { minHeight: touch, borderRadius: radius.md, borderWidth: 1, borderColor: color.line2, paddingHorizontal: space[4], justifyContent: "center" },
  optionText: { fontSize: font.lg, color: color.fg },
  built: { minHeight: touch * 2, borderRadius: radius.md, borderWidth: 1, borderColor: color.line2, borderStyle: "dashed", padding: space[2], flexDirection: "row", flexWrap: "wrap", gap: space[2] },
  tiles: { flexDirection: "row", flexWrap: "wrap", gap: space[2] },
  tile: { minHeight: 40, paddingHorizontal: space[3], borderRadius: radius.sm, borderWidth: 1, borderColor: color.line2, backgroundColor: color.surface, justifyContent: "center" },
  tileText: { fontSize: font.lg, fontWeight: weight.medium, color: color.fg },
});
