// Choosing a new password: after a reset code, or from the profile.
import { useState } from "react";
import { TextInput, View } from "react-native";
import { authMessage } from "../lib/auth-messages";
import { supabase } from "../lib/supabase";
import { color, space } from "../theme";
import { Emo } from "./icons";
import { Button, Card, Screen, Text, s } from "./ui";

export function NewPassword({ onDone, onCancel }: { onDone: () => void; onCancel?: () => void }) {
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function save() {
    if (password.length < 8) return setError("Le mot de passe fait au moins 8 caractères.");
    setBusy(true);
    setError(null);
    try {
      const { error: e } = await supabase.auth.updateUser({ password });
      if (e) setError(e.code === "same_password" ? "C'est déjà ton mot de passe actuel. Choisis-en un autre." : authMessage(e.code, "up"));
      else onDone();
    } catch {
      setError("Pas de connexion. Vérifie ton réseau puis réessaie.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <Screen tabs={false}>
      <View style={{ alignItems: "center", gap: space[3], marginTop: space[8] }}>
        <Emo type="cool" size={75} />
        <Text variant="display" center>Nouveau mot de passe</Text>
        <Text variant="muted" center>8 caractères ou plus. Il servira aussi sur le site.</Text>
      </View>
      <TextInput style={s.field} placeholder="Nouveau mot de passe" placeholderTextColor={color.muted} secureTextEntry autoFocus
        autoCapitalize="none" autoCorrect={false} autoComplete="new-password" textContentType="newPassword"
        value={password} onChangeText={setPassword} accessibilityLabel="Nouveau mot de passe" returnKeyType="done" onSubmitEditing={save} />
      {error ? <Card tint="badSoft"><Text variant="body">{error}</Text></Card> : null}
      <Button label="Enregistrer" onPress={save} busy={busy} />
      {onCancel ? <Button label="Annuler" variant="ghost" onPress={onCancel} /> : null}
    </Screen>
  );
}
