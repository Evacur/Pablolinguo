// Profile, as on the web app: avatar, name, the three numbers, the level being learnt and its progress, the language,
// the account (email, password, sign out), the privacy page, and deleting the account (required by the App Store).
import { router } from "expo-router";
import { useState } from "react";
import { Alert, Linking, View } from "react-native";
import { Avatar } from "../components/avatar";
import { Emo, Pic } from "../components/icons";
import { bossReady } from "../../../src/app/lib/mastery.js";
import { Button, Card, Chip, Progress, Row, Screen, Text } from "../components/ui";
import { LANGS } from "../lib/content";
import { useAccount } from "../lib/data";
import { SITE } from "../lib/site";
import { supabase } from "../lib/supabase";
import { space } from "../theme";

export default function Profile() {
  const state = useAccount();
  const [busy, setBusy] = useState<"lang" | "out" | "delete" | null>(null);
  const [error, setError] = useState<string | null>(null);
  if (state.status !== "ready") return null;
  const a = state.account;
  // The same three numbers as the web profile: a point is validated at 3 dots, a word is learnt from box 3.
  const mastered = a.pack.skills.filter((x) => (a.skills[x.id]?.m ?? 0) >= 3).length;
  const learnt = Object.values(a.srs).filter((x) => x.b >= 3).length;
  const atLevel = a.pack.skills.filter((x) => x.lvl === a.level);
  const badge = a.badges[a.level];
  const okAtLevel = atLevel.filter((x) => (a.skills[x.id]?.m ?? 0) >= 3).length;

  async function run(kind: "lang" | "out" | "delete", job: () => Promise<void>, fail: string) {
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

  // Same function as the web app: the database deletes the account and, by cascade, all its documents.
  const deleteAccount = () =>
    run("delete", async () => {
      const { error: e } = await supabase.rpc("delete_my_account");
      if (e) throw e;
      await supabase.auth.signOut();
    }, "Le compte n'a pas pu être supprimé. Vérifie ta connexion puis réessaie.");

  const confirmDelete = () =>
    Alert.alert("Supprimer ton compte ?", "Ton compte et toute ta progression sont effacés pour de bon. Ça ne peut pas être annulé.", [
      { text: "Annuler", style: "cancel" },
      { text: "Supprimer", style: "destructive", onPress: deleteAccount },
    ]);

  return (
    <Screen tabs={false}>
      <View style={{ alignItems: "center", gap: space[2], marginTop: space[4] }}>
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
        <Text variant="label">Compte</Text>
        <Row lead={<Pic name="mail" size={22} />} title="Email" sub={a.session.user.email ?? "–"} />
        <Row lead={<Pic name="key" size={22} />} title="Mot de passe" sub="Modifier" onPress={() => router.push("/password")} label="Changer de mot de passe" />
        <Row lead={<Pic name="lock" size={22} />} title="Confidentialité" sub="Ce qui est enregistré et pourquoi"
          onPress={() => Linking.openURL(`${SITE}/confidentialite.html`)} label="Ouvrir la page de confidentialité" />
        <Row lead={<Pic name="info" size={22} />} title="À propos" sub="Laku · anglais et espagnol, de A1 à C2 · corrections par l'IA Claude" />
      </Card>
      {error ? <Text variant="muted">{error}</Text> : null}
      <View style={{ gap: space[2] }}>
        <Button label="Fermer" variant="secondary" onPress={() => router.back()} />
        <Button label="Se déconnecter" variant="ghost" busy={busy === "out"}
          onPress={() => run("out", async () => { await supabase.auth.signOut(); }, "La déconnexion a échoué. Réessaie.")} />
        <Button label="Supprimer mon compte" variant="danger" busy={busy === "delete"} onPress={confirmDelete} />
      </View>
    </Screen>
  );
}
