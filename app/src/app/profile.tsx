// Profile, as on the web app: avatar, name, the three numbers, the level being learnt and its progress, the language,
// the account (its own page: email, password, deleting it), the privacy page, and signing out at the very bottom.
import { router } from "expo-router";
import { useState } from "react";
import { Linking, View } from "react-native";
import { Avatar } from "../components/avatar";
import { Emo, Pic } from "../components/icons";
import { bossReady } from "../../../shared/logic/mastery.js";
import { Button, Card, Chip, Progress, Row, Sheet, Text } from "../components/ui";
import { LANGS } from "../lib/content";
import { useAccount } from "../lib/data";
import { SITE } from "../lib/site";
import { signOut } from "../lib/auth";
import { space } from "../theme";

export default function Profile() {
  const state = useAccount();
  const [busy, setBusy] = useState<"lang" | "out" | null>(null);
  const [error, setError] = useState<string | null>(null);
  if (state.status !== "ready") return null;
  const a = state.account;
  // The same three numbers as the web profile: a point is validated at 3 dots, a word is learnt from box 3.
  const mastered = a.pack.skills.filter((x) => (a.skills[x.id]?.m ?? 0) >= 3).length;
  const learnt = Object.values(a.srs).filter((x) => x.b >= 3).length;
  const atLevel = a.pack.skills.filter((x) => x.lvl === a.level);
  const badge = a.badges[a.level];
  const okAtLevel = atLevel.filter((x) => (a.skills[x.id]?.m ?? 0) >= 3).length;

  async function run(kind: "lang" | "out", job: () => Promise<void>, fail: string) {
    setBusy(kind);
    setError(null);
    try {
      await job();
    } catch {
      setError(fail);
    } finally {
      setBusy(null);
    }
  }

  return (
    <Sheet onClose={() => router.back()}>
      <View style={{ alignItems: "center", gap: space[2] }}>
        <Avatar e={a.profile.avatar?.e} c={a.profile.avatar?.c} size={96} />
        <Text variant="title" center>{a.profile.name?.trim() || "Toi"}</Text>
        <Text variant="muted" center>{a.session.user.email ?? ""}</Text>
      </View>
      <View style={{ flexDirection: "row", gap: space[2] }}>
        {[[a.streak, "jours de série"], [mastered, "points validés"], [learnt, "mots appris"]].map(([n, l]) => (
          <View key={l} style={{ flex: 1 }}>
            <Card>
              <Text variant="display" center>{n}</Text>
              <Text variant="muted" center>{l}</Text>
            </Card>
          </View>
        ))}
      </View>
      {atLevel.length ? (
        <Card tint="tintMint">
          <Text variant="label">{a.pack.name} · niveau {a.level}</Text>
          <Text variant="title">{okAtLevel} point{okAtLevel > 1 ? "s" : ""} validé{okAtLevel > 1 ? "s" : ""} sur {atLevel.length}</Text>
          <Progress value={okAtLevel} max={atLevel.length} />
          <Text variant="muted">Un point est validé après trois tests réussis.</Text>
          <Row lead={<Emo type="devil" size={28} />} title={`Défi du niveau ${a.level}`}
            sub={badge ? `Réussi avec ${badge.best}/10` : bossReady(atLevel.map((x) => a.skills[x.id]?.m ?? 0))
              ? "Débloqué : 8 phrases justes sur 10 valident le niveau"
              : `Il s'ouvre à ${Math.ceil(atLevel.length * 0.8)} points validés. Tu peux déjà le tenter.`}
            onPress={() => router.push({ pathname: "/session", params: { mode: "boss", arg: a.level } })} label={`Lancer le défi du niveau ${a.level}`} />
        </Card>
      ) : null}
      <Card>
        <Row lead={<Avatar e={a.profile.avatar?.e} c={a.profile.avatar?.c} size={28} />} title="Prénom et avatar" sub={a.profile.name?.trim() || "À ajouter"}
          onPress={() => router.push("/identity")} />
      </Card>
      <Card>
        <Text variant="label">Langue apprise</Text>
        <View style={{ flexDirection: "row", gap: space[2] }}>
          {LANGS.map((l) => (
            <Chip key={l.code} label={l.name} on={l.code === a.lang}
              onPress={() => l.code !== a.lang && run("lang", () => a.setLang(l.code), "La langue n'a pas pu changer. Réessaie.")} />
          ))}
        </View>
      </Card>
      <Card onPress={() => router.push("/level")} label="Changer de niveau">
        <Text variant="label">Niveau</Text>
        <Text variant="title">{a.level}</Text>
      </Card>
      <Card>
        <Row lead={<Pic name="key" size={22} />} title="Compte" sub="E-mail, mot de passe, suppression" onPress={() => router.push("/account")} label="Ouvrir le compte" />
        <Row lead={<Pic name="lock" size={22} />} title="Confidentialité" sub="Ce qui est enregistré et pourquoi"
          onPress={() => Linking.openURL(`${SITE}/confidentialite.html`)} label="Ouvrir la page de confidentialité" />
        <Row lead={<Pic name="info" size={22} />} title="À propos" sub="Laku · anglais et espagnol, de A1 à C2 · corrections par l'IA Claude" />
      </Card>
      {__DEV__ ? (
        <Card>
          <Row lead={<Pic name="star" size={22} />} title="Catalogue" sub="Toutes les briques de l'app (développement)" onPress={() => router.push("/catalogue")} label="Ouvrir le catalogue" />
        </Card>
      ) : null}
      {error ? <Text variant="muted">{error}</Text> : null}
      <Button label="Se déconnecter" variant="ghost" busy={busy === "out"}
        onPress={() => run("out", async () => { await signOut(); }, "La déconnexion a échoué. Réessaie.")} />
    </Sheet>
  );
}
