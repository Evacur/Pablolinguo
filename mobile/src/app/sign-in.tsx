// Sign in, create an account, or ask for a new password: email and password, as on the web app.
// No third-party sign-in, so no data is shared with Apple or Google for it.
import { useState } from "react";
import { KeyboardAvoidingView, Platform, TextInput, View } from "react-native";
import { Emo } from "../components/icons";
import { Button, Screen, Text, s } from "../components/ui";
import { supabase } from "../lib/supabase";
import { color, space } from "../theme";

type Mode = "in" | "up" | "reset";
const TITLE: Record<Mode, string> = { in: "Content de te revoir", up: "Créer ton compte", reset: "Mot de passe oublié" };

export default function SignIn() {
  const [mode, setMode] = useState<Mode>("in");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  async function submit() {
    setMsg(null);
    const mail = email.trim();
    if (!/^\S+@\S+\.\S+$/.test(mail)) return setMsg({ ok: false, text: "Entre une adresse mail valide." });
    if (mode !== "reset" && password.length < 8) return setMsg({ ok: false, text: "Le mot de passe fait au moins 8 caractères." });
    setBusy(true);
    try {
      if (mode === "in") {
        const { error } = await supabase.auth.signInWithPassword({ email: mail, password });
        if (error) setMsg({ ok: false, text: "Adresse ou mot de passe incorrect." });
      } else if (mode === "up") {
        const { data, error } = await supabase.auth.signUp({ email: mail, password });
        if (error) setMsg({ ok: false, text: "Le compte n'a pas pu être créé. Cette adresse a peut-être déjà un compte." });
        else if (!data.session) setMsg({ ok: true, text: "Regarde tes mails : un lien confirme ton adresse." });
      } else {
        // The link opens the web app, where the new password is chosen; the app then signs in with it.
        const { error } = await supabase.auth.resetPasswordForEmail(mail);
        setMsg(error ? { ok: false, text: "Le mail n'a pas pu partir. Réessaie dans un moment." } : { ok: true, text: "Si un compte existe, un lien vient de partir. Il ouvre le site pour choisir un nouveau mot de passe." });
      }
    } catch {
      setMsg({ ok: false, text: "Pas de connexion. Vérifie ton réseau puis réessaie." });
    } finally {
      setBusy(false);
    }
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <Screen tabs={false}>
        <View style={{ alignItems: "center", gap: space[3], marginTop: space[10] }}>
          <Emo type="grin" size={75} />
          <Text variant="display" center>{TITLE[mode]}</Text>
          <Text variant="muted" center>Un peu chaque jour, à ton niveau.</Text>
        </View>
        <View style={{ gap: space[3] }}>
          <TextInput
            style={s.field}
            placeholder="Adresse mail"
            placeholderTextColor={color.muted}
            autoCapitalize="none"
            autoComplete="email"
            keyboardType="email-address"
            textContentType="emailAddress"
            value={email}
            onChangeText={setEmail}
            accessibilityLabel="Adresse mail"
          />
          {mode !== "reset" ? (
            <TextInput
              style={s.field}
              placeholder="Mot de passe"
              placeholderTextColor={color.muted}
              secureTextEntry
              autoComplete={mode === "up" ? "new-password" : "current-password"}
              textContentType={mode === "up" ? "newPassword" : "password"}
              value={password}
              onChangeText={setPassword}
              accessibilityLabel="Mot de passe"
            />
          ) : null}
          {msg ? <Text variant="muted">{msg.text}</Text> : null}
          <Button label={mode === "in" ? "Se connecter" : mode === "up" ? "Créer le compte" : "Envoyer le lien"} onPress={submit} busy={busy} />
        </View>
        <View style={{ gap: space[1] }}>
          {mode !== "in" ? <Button variant="ghost" label="J'ai déjà un compte" onPress={() => { setMode("in"); setMsg(null); }} /> : null}
          {mode !== "up" ? <Button variant="ghost" label="Créer un compte" onPress={() => { setMode("up"); setMsg(null); }} /> : null}
          {mode === "in" ? <Button variant="ghost" label="Mot de passe oublié" onPress={() => { setMode("reset"); setMsg(null); }} /> : null}
        </View>
      </Screen>
    </KeyboardAvoidingView>
  );
}
