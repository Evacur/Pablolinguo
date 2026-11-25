// The account, a page of its own under the profile (as in most apps): the e-mail, the password, and at the bottom,
// apart, deleting the account (required by the App Store), behind a confirmation.
import { router } from "expo-router";
import { useState } from "react";
import { Alert } from "react-native";
import { Pic } from "../components/icons";
import { Card, Row, Section, Sheet, Text } from "../components/ui";
import { deleteAccount } from "../lib/auth";
import { useAccount } from "../lib/data";

export default function Account() {
  const state = useAccount();
  const [error, setError] = useState<string | null>(null);
  if (state.status !== "ready") return null;
  const a = state.account;

  async function remove() {
    setError(null);
    try {
      await deleteAccount();
    } catch {
      setError("Le compte n'a pas pu être supprimé. Vérifie ta connexion puis réessaie.");
    }
  }
  const confirmDelete = () =>
    Alert.alert("Supprimer ton compte ?", "Ton compte et toute ta progression sont effacés pour de bon. Ça ne peut pas être annulé.", [
      { text: "Annuler", style: "cancel" },
      { text: "Supprimer", style: "destructive", onPress: remove },
    ]);

  return (
    <Sheet onClose={() => router.back()}>
      <Text variant="display">Compte</Text>
      <Card>
        <Row lead={<Pic name="mail" size={22} />} title="E-mail" sub={a.session.user.email ?? "–"} />
        <Row lead={<Pic name="key" size={22} />} title="Mot de passe" sub="Modifier" onPress={() => router.push("/password")} label="Changer de mot de passe" />
      </Card>
      <Section title="Zone sensible">
        <Card>
          <Row lead={<Pic name="trash" size={22} />} title="Supprimer mon compte" sub="Efface ton compte et toute ta progression" onPress={confirmDelete} danger />
        </Card>
      </Section>
      {error ? <Text variant="muted">{error}</Text> : null}
    </Sheet>
  );
}
