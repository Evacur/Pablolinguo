// A session of exercises: practice (5 on one point), test (10 on one point: 8 right adds a dot) or express
// (5 of the level, weak points first). Same exercises, same checking and same records as the web app.
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { TextInput, View } from "react-native";
import { needed } from "../../../shared/logic/mastery.js";
import { ChoiceList, MatchBoard, OrderBoard, type MatchState } from "../components/exercise";
import { Emo } from "../components/icons";
import { Button, Card, Dots, Empty, Hero, Screen, Text, TopBar, s as ui } from "../components/ui";
import { aiCorrect, type AiFailure, type Correction } from "../lib/ai";
import { dotsOf, today, useAccount } from "../lib/data";
import { KIND_LBL, buildSession, checkOption, checkOrder, checkTyped, knownWords, shuffle, type Mode, type Verdict } from "../lib/session";
import { color, space } from "../theme";

const TITLE: Record<Mode, string> = { practice: "Entraînement", test: "Test", express: "Séance express", theme: "Test de situation", boss: "Défi du niveau" };

export default function Session() {
  const p = useLocalSearchParams<{ mode?: string; arg?: string }>();
  const mode: Mode = p.mode === "test" || p.mode === "practice" || p.mode === "theme" || p.mode === "boss" ? p.mode : "express";
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
  const [result, setResult] = useState<{ passed: boolean; newLevel?: string } | null>(null);
  // A translation that matched no model answer goes to the AI teacher, who may accept it as another way to say it.
  const [judging, setJudging] = useState(false);
  const [ai, setAi] = useState<{ variant?: boolean; said?: Correction; down?: AiFailure } | null>(null);
  const alive = useRef(true);
  useEffect(() => () => { alive.current = false; }, []);
  const [match, setMatch] = useState<MatchState | null>(null);
  const tiles = useMemo(() => (items[i]?.words ? shuffle(items[i].words!.map((w, k) => ({ w, k }))) : []), [items, i]);

  if (!a) return null;
  const quit = () => router.back();
  if (!items.length) return <Screen tabs={false}><Empty title="Pas d'exercice ici" text="Ce point n'a pas encore d'exercices." /><Button label="Retour" onPress={quit} /></Screen>;

  // The end of the series: the score, and for a test whether it adds a dot.
  if (i >= items.length) {
    const skill = a.pack.skills.find((x) => x.id === arg);
    return (
      <Screen tabs={false}>
        <Hero face={right === items.length ? "party" : right >= items.length / 2 ? "cool" : "wink"} title={`${right} sur ${items.length}`}>
          {mode === "boss" && result ? (
            <>
              <Text variant="title" center>{result.passed ? `Défi ${arg} réussi` : "Pas encore"}</Text>
              <Text variant="muted" center>
                {result.passed
                  ? (result.newLevel ? `Niveau ${arg} validé. Tu passes au ${result.newLevel}.` : `Niveau ${arg} validé, bravo.`)
                  : "Il faut 8 sur 10 pour valider. Tu peux retenter quand tu veux : les phrases changent à chaque fois."}
              </Text>
            </>
          ) : mode === "theme" && result ? (
            <>
              <Text variant="title" center>{result.passed ? "Situation validée" : "Pas encore"}</Text>
              <Text variant="muted" center>
                {result.passed ? "Bravo, tu sais te débrouiller dans cette situation." : `Il faut ${needed(items.length)} bonnes réponses sur ${items.length}. Relis la situation puis retente : les phrases changent à chaque fois.`}
              </Text>
            </>
          ) : mode === "test" && result ? (
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
        </Hero>
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
    if (it.t !== "match") a.recordAnswer(it, v.ok, mode === "test");
    a.markDay();
  }
  // « Associe »: tap a word, then its translation. Done when every pair is found; more than one miss = wrong.
  const m: MatchState | null = it.t === "match" && it.pairs
    ? match ?? { left: shuffle(it.pairs.map((_, k) => k)), right: shuffle(it.pairs.map((_, k) => k)), sel: null, got: [], miss: 0, flash: null }
    : null;
  function pickRight(k: number) {
    if (!m || m.sel === null || answered) return;
    const nm = k === m.sel ? { ...m, got: [...m.got, k], sel: null, flash: null } : { ...m, miss: m.miss + 1, flash: k };
    setMatch(nm);
    if (nm.got.length === it.pairs!.length) decide({ ok: nm.miss <= 1, best: "" });
  }
  function submitTyped() {
    if (!a || !given.trim() || answered || judging) return;
    const v = checkTyped(it, given, a.lang, knownWords(a.pack));
    if (v.ok || it.t !== "tr" || !Array.isArray(it.a)) return decide(v);
    setJudging(true);
    const sk = a.pack.skills.find((x) => x.id === it.skill);
    aiCorrect({ lang: a.lang, level: a.level, fr: it.fr, ans: it.a, given: given.trim(), skill: sk?.name ?? "", rule: a.pack.rules[it.skill] ?? "" })
      .then((r) => {
        if (!alive.current) return;
        setAi({ variant: r.correct === true, said: r });
        decide(r.correct === true ? { ok: true, best: given.trim() } : v);
      })
      .catch((e: unknown) => {
        if (!alive.current) return;
        setAi({ down: e === "off" || e === "limit" ? e : "error" });
        decide(v);
      })
      .finally(() => { if (alive.current) setJudging(false); });
  }
  function next() {
    if (!a) return;
    const last = i + 1 >= items.length;
    if (last) {
      const score = right; // already counts this answer
      if (mode === "test") setResult({ passed: a.recordTest(arg, score, items.length) });
      if (mode === "boss") setResult(a.recordChallenge(arg, score));
      if (mode === "theme") {
        const c = a.pack.cours.find((x) => x.theme === arg);
        setResult({ passed: c ? a.recordSituation(c.id, score, items.length) : score >= needed(items.length) });
      }
      if (items.length >= 5 && !a.todayQuests.includes("drill")) a.markDay("drill");
    }
    setI(i + 1);
    setGiven("");
    setBuilt([]);
    setVerdict(null);
    setAi(null);
    setMatch(null);
  }

  return (
    <Screen tabs={false}>
      <TopBar onClose={quit} closeLabel="Quitter la séance" value={i} max={items.length} count={`${i + 1}/${items.length}`} />
      <Text variant="label">{TITLE[mode]} · {KIND_LBL[it.t]}</Text>
      <Text variant="title">{m ? "Relie chaque mot à sa traduction" : it.fr}</Text>
      {it.s ? <Text variant="body">{it.s}</Text> : null}
      {it.h ? <Text variant="muted">Indice : {it.h}</Text> : null}

      {m ? (
        <MatchBoard pairs={it.pairs!} m={m} answered={answered} onLeft={(k) => setMatch({ ...m, sel: k, flash: null })} onRight={pickRight} />
      ) : it.t === "qcm" ? (
        <ChoiceList options={it.o ?? []} right={typeof it.a === "number" ? it.a : undefined} answered={answered} onPick={(k) => decide(checkOption(it, k))} />
      ) : it.t === "order" ? (
        <OrderBoard words={it.words!} tiles={tiles} built={built} answered={answered} ok={verdict?.ok}
          onAdd={(k) => setBuilt([...built, k])} onRemove={(n) => setBuilt(built.filter((_, x) => x !== n))}
          onCheck={() => decide(checkOrder(it, built.map((k) => it.words![k]), a.lang))} />
      ) : (
        <View style={{ gap: space[3] }}>
          <TextInput style={ui.field} value={given} onChangeText={setGiven} editable={!answered} autoFocus autoCapitalize="none" autoCorrect={false}
            placeholder={it.t === "gap" ? "Le mot qui manque" : "Ta traduction"} placeholderTextColor={color.muted}
            accessibilityLabel="Ta réponse" returnKeyType="done"
            onSubmitEditing={submitTyped} />
          {!answered ? <Button label="Vérifier" busy={judging} disabled={!given.trim() || judging} onPress={submitTyped} /> : null}
        </View>
      )}

      {judging ? (
        <Card>
          <View style={{ flexDirection: "row", gap: space[3], alignItems: "center" }}>
            <Emo type="think" size={40} />
            <Text variant="body">Le prof corrige ta réponse…</Text>
          </View>
        </Card>
      ) : null}
      {verdict ? (
        <Card tint={verdict.ok ? "goodSoft" : "badSoft"}>
          <View style={{ flexDirection: "row", gap: space[3], alignItems: "center" }}>
            <Emo type={verdict.ok ? "grin" : "sad"} size={40} />
            <Text variant="title">{m ? (m.miss ? `Fini, avec ${m.miss} erreur${m.miss > 1 ? "s" : ""}` : "Parfait !") : ai?.variant ? "Juste ! Ta version marche aussi." : verdict.ok ? "Bien joué" : "Pas tout à fait"}</Text>
          </View>
          {verdict.best && (!verdict.ok || verdict.fix || ai?.variant) ? <Text variant="body">{verdict.best}</Text> : null}
          {ai?.variant && Array.isArray(it.a) ? <Text variant="muted">Version modèle : {it.a[0]}</Text> : null}
          {!verdict.ok ? (ai?.said?.errors ?? []).filter((x) => x.why).slice(0, 4).map((x) => (
            <Text key={x.wrong + x.right} variant="muted">{x.wrong} → {x.right} : {x.why}</Text>
          )) : null}
          {ai?.said?.tip ? <Text variant="muted">{ai.said.tip}</Text> : null}
          {ai?.down === "error" ? <Text variant="muted">Le prof n'a pas pu relire ta version. Compare-la avec la réponse modèle.</Text> : null}
          {ai?.down === "limit" ? <Text variant="muted">Le prof a assez corrigé pour aujourd'hui. Compare ta version avec la réponse modèle.</Text> : null}
          {verdict.fix ? <Text variant="muted">Petite faute : {verdict.fix.map(([g, r]) => `${g} → ${r}`).join(", ")}</Text> : null}
          {it.why ? <Text variant="muted">{it.why}</Text> : null}
          <Button label={i + 1 >= items.length ? "Voir le résultat" : "Continuer"} onPress={next} />
        </Card>
      ) : null}
      {a.saveFailed ? <Text variant="muted">Pas de réseau : tes réponses comptent ici et seront enregistrées dès que la connexion revient.</Text> : null}
    </Screen>
  );
}
