// Accueil: hello, the streak, the plan of the day and the level in progress.
import { router } from "expo-router";
import { Pressable, View } from "react-native";
import { LV_INFO, QUESTS } from "../../../../src/app/lib/levels.js";
import { Avatar } from "../../components/avatar";
import { Emo, Pic } from "../../components/icons";
import { Button, Card, Progress, Row, Screen, Text } from "../../components/ui";
import { dotsOf, today, useAccount } from "../../lib/data";
import { reviewCounts } from "../../lib/words";
import { space, touch } from "../../theme";

export default function Home() {
  const state = useAccount();
  if (state.status !== "ready") return null; // the root layout shows loading and errors
  const a = state.account;
  const name = a.profile.name?.trim();
  const levelSkills = a.pack.skills.filter((sk) => sk.lvl === a.level);
  const done = levelSkills.filter((sk) => dotsOf(a.skills, sk.id) >= 3).length;
  const { due } = reviewCounts(a.pack, a.srs, a.level, today());
  const quests = (QUESTS as { id: string; t: string; auto?: string }[]).filter((q) => q.auto); // the « aloud » mission left the plan
  const info = (LV_INFO as Record<string, string[]>)[a.level];

  return (
    <Screen>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <View style={{ flex: 1, gap: space[1] }}>
          <Text variant="label">{a.pack.name} · {a.level}</Text>
          <Text variant="display">{name ? `Salut ${name}` : "Salut"}</Text>
        </View>
        <Pressable accessibilityRole="button" accessibilityLabel="Ton profil" hitSlop={8} onPress={() => router.push("/profile")}
          style={{ minWidth: touch, minHeight: touch, alignItems: "center", justifyContent: "center" }}>
          <Avatar e={a.profile.avatar?.e} c={a.profile.avatar?.c} size={48} />
        </Pressable>
      </View>

      <Card tint="tintSun">
        <View style={{ flexDirection: "row", alignItems: "center", gap: space[3] }}>
          <Pic name="flame" size={28} />
          <View style={{ flex: 1 }}>
            <Text variant="title">{a.streak > 0 ? `${a.streak} jour${a.streak > 1 ? "s" : ""} d'affilée` : "Commence ta série"}</Text>
            <Text variant="muted">{a.streak > 0 ? "Un petit pas aujourd'hui garde la série." : "Un exercice aujourd'hui, et c'est parti."}</Text>
          </View>
        </View>
      </Card>

      <Button label="Séance express · 5 exercices" onPress={() => router.push({ pathname: "/session", params: { mode: "express" } })} />

      <View style={{ gap: space[2] }}>
        <Text variant="label">Aujourd'hui</Text>
        <Card>
          {quests.map((q) => {
            const ok = a.todayQuests.includes(q.id);
            const go = q.auto === "words" ? "/review" : q.auto === "train" ? "/session" : "/learn";
            return (
              <Row
                key={q.id}
                lead={<Emo type={ok ? "cool" : "wink"} size={30} />}
                title={q.t}
                sub={ok ? "Fait" : q.id === "words" && due > 0 ? `${due} mot${due > 1 ? "s" : ""} à revoir` : undefined}
                onPress={() => router.push(go)}
              />
            );
          })}
        </Card>
      </View>

      <View style={{ gap: space[2] }}>
        <Text variant="label">Ton niveau</Text>
        <Card onPress={() => router.push("/learn")} label={`Niveau ${a.level}, voir les points de grammaire`}>
          <Text variant="title">{a.level}{info ? ` · ${info[0]}` : ""}</Text>
          {info ? <Text variant="muted">{info[1]}</Text> : null}
          <Progress value={done} max={levelSkills.length} />
          <Text variant="muted">{done} point{done > 1 ? "s" : ""} validé{done > 1 ? "s" : ""} sur {levelSkills.length}</Text>
        </Card>
      </View>
    </Screen>
  );
}
