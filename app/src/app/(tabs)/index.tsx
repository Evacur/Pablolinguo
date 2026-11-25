// Accueil (Pi's choice B of 25/11): hello, the streak as the one pastel block, then one block per thing to do,
// each with its big pixel icon: the express session, the words to review, the level, the missions of the day.
import { router } from "expo-router";
import { Pressable, View } from "react-native";
import { LV_INFO, QUESTS } from "../../../../shared/logic/levels.js";
import { Avatar } from "../../components/avatar";
import { Block, Button, Progress, Screen, Stat, Text } from "../../components/ui";
import { dotsOf, today, useAccount } from "../../lib/data";
import { reviewCounts } from "../../lib/words";
import { space, touch } from "../../theme";

const plural = (n: number, word: string) => `${n} ${word}${n > 1 ? "s" : ""}`;

export default function Home() {
  const state = useAccount();
  if (state.status !== "ready") return null; // the root layout shows loading and errors
  const a = state.account;
  const name = a.profile.name?.trim();
  const levelSkills = a.pack.skills.filter((sk) => sk.lvl === a.level);
  const done = levelSkills.filter((sk) => dotsOf(a.skills, sk.id) >= 3).length;
  const { due } = reviewCounts(a.pack, a.srs, a.level, today());
  const quests = (QUESTS as { id: string; t: string; auto?: string }[]).filter((q) => q.auto); // the « aloud » mission left the plan
  const questsDone = quests.filter((q) => a.todayQuests.includes(q.id)).length;
  const next = quests.find((q) => !a.todayQuests.includes(q.id));
  const goTo = (auto?: string) => (auto === "words" ? "/review" : auto === "train" ? "/session" : "/learn");
  const info = (LV_INFO as Record<string, string[]>)[a.level];
  const express = () => router.push({ pathname: "/session", params: { mode: "express" } });

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

      <Stat
        icon="flame"
        tint="tintMint"
        value={String(a.streak)}
        caption={a.streak > 0 ? `jour${a.streak > 1 ? "s" : ""} d'affilée` : "Un exercice aujourd'hui lance ta série"}
        action={<Button label="Séance" onPress={express} />}
      />

      <View>
        <Block icon="bulb" title="Séance express" sub="5 exercices, les plus fragiles d'abord" onPress={express} />
        <Block icon="book" title="Mots à revoir" sub={due > 0 ? `${plural(due, "mot")} t'attend${due > 1 ? "ent" : ""}` : "Rien à revoir pour l'instant"} onPress={() => router.push("/review")} divider />
        <Block icon="star" title={`Niveau ${a.level}${info ? ` · ${info[0]}` : ""}`} sub={`${plural(done, "point")} validé${done > 1 ? "s" : ""} sur ${levelSkills.length}`} onPress={() => router.push("/learn")} divider>
          <Progress value={done} max={levelSkills.length} />
        </Block>
        <Block
          icon="calendar"
          title="Missions du jour"
          sub={next ? `${questsDone} sur ${quests.length} faites · ${next.t}` : `Les ${quests.length} sont faites`}
          onPress={next ? () => router.push(goTo(next.auto)) : undefined}
          divider
        />
      </View>
    </Screen>
  );
}
