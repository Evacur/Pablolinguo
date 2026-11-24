// Profile: the language, signing out, and deleting the account with all its data (required by the App Store).
import { router } from "expo-router";
import { useState } from "react";
import { Alert, View } from "react-native";
import { Emo } from "../components/icons";
import { Button, Card, Chip, Screen, Text } from "../components/ui";
import { LANGS } from "../lib/content";
import { useAccount } from "../lib/data";
import { supabase } from "../lib/supabase";
import { space } from "../theme";

export default function Profile() {
  const state = useAccount();
  const [busy, setBusy] = useState<"lang" | "out" | "delete" | null>(null);
  const [error, setError] = useState<string | null>(null);
  if (state.status !== "ready") return null;
  const a = state.account;

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
        <Emo type={a.profile.avatar?.e ?? "grin"} size={75} />
        <Text variant="title" center>{a.profile.name?.trim() || "Ton profil"}</Text>
        <Text variant="muted" center>{a.session.user.email ?? ""}</Text>
      </View>
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
