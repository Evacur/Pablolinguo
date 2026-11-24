// Sign in, create an account, or ask for a new password: email and password, as on the web app.
// No third-party sign-in, so no data is shared with Apple or Google for it.
import { useState } from "react";
import { KeyboardAvoidingView, Platform, Pressable, Text as RNText, TextInput, View } from "react-native";
import { Emo } from "../components/icons";
import { Button, Card, Chip, Screen, Text, s } from "../components/ui";
import { authMessage, type Mode } from "../lib/auth-messages";
import { setRecovering } from "../lib/recovery";
import { signIn, signUp, sendResetCode, verifyCode, resendCode } from "../lib/auth";
import { color, font, space, weight } from "../theme";

const TITLE: Record<Mode, string> = { in: "Content de te revoir", up: "Créer ton compte", reset: "Mot de passe oublié" };
const SUB: Record<Mode, string> = {
  in: "Le même compte que sur le site.",
  up: "Un peu chaque jour, à ton niveau.",
  reset: "Tu reçois un code par mail, puis tu choisis ton nouveau mot de passe ici.",
};

export default function SignIn() {
  const [mode, setMode] = useState<Mode>("in");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [sent, setSent] = useState(false); // the code is on its way: the screen asks for it
  const [code, setCode] = useState("");

  const go = (m: Mode) => { setMode(m); setMsg(null); setSent(false); setCode(""); };

  // The 6-digit code of the mail (Supabase email templates carry {{ .Token }}): no link, no browser.
  async function verify() {
    const mail = email.trim().toLowerCase();
    const token = code.replace(/\D/g, "");
    if (token.length < 6) return setMsg({ ok: false, text: "Entre le code à 6 chiffres reçu par mail." });
    setBusy(true);
    setMsg(null);
    try {
      if (mode === "reset") setRecovering(true); // the new-password screen comes before the app
      const { error } = await verifyCode(mail, token, mode === "reset" ? "reset" : "signup");
      if (error) {
        setRecovering(false);
        setMsg({ ok: false, text: error.code === "otp_expired" ? "Ce code a expiré ou a déjà servi. Demande-en un nouveau." : "Ce code ne marche pas. Vérifie-le, ou demande-en un nouveau." });
      }
    } catch {
      setRecovering(false);
      setMsg({ ok: false, text: "Pas de connexion. Vérifie ton réseau puis réessaie." });
    } finally {
      setBusy(false);
    }
  }
  async function resend() {
    const mail = email.trim().toLowerCase();
    setBusy(true);
    setMsg(null);
    try {
      const { error } = await resendCode(mail, mode === "reset" ? "reset" : "signup");
      setMsg(error ? { ok: false, text: authMessage(error.code, mode) } : { ok: true, text: "Un nouveau code est parti." });
    } catch {
      setMsg({ ok: false, text: "Pas de connexion. Vérifie ton réseau puis réessaie." });
    } finally {
      setBusy(false);
    }
  }

  async function submit() {
    setMsg(null);
    const mail = email.trim().toLowerCase();
    if (!/^\S+@\S+\.\S+$/.test(mail)) return setMsg({ ok: false, text: "Entre une adresse mail valide." });
    if (mode !== "reset" && password.length < 8) return setMsg({ ok: false, text: "Le mot de passe fait au moins 8 caractères." });
    setBusy(true);
    try {
      if (mode === "in") {
        const { error } = await signIn(mail, password);
        if (error) setMsg({ ok: false, text: authMessage(error.code, mode) });
      } else if (mode === "up") {
        const { data, error } = await signUp(mail, password);
        if (error) setMsg({ ok: false, text: authMessage(error.code, mode) });
        // An address that already has an account: Supabase answers without error and sends nothing (no identity).
        else if (data.user && (data.user.identities ?? []).length === 0) setMsg({ ok: false, text: authMessage("user_already_exists", mode) });
        else if (!data.session) {
          setSent(true);
          setMsg({ ok: true, text: `Un code de confirmation part à ${mail}.` });
        }
      } else {
        const { error } = await sendResetCode(mail);
        if (error) setMsg({ ok: false, text: authMessage(error.code, mode) });
        else {
          setSent(true);
          setMsg({ ok: true, text: `Si ${mail} a un compte, un code vient de partir.` });
        }
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
        <View style={{ alignItems: "center", gap: space[3], marginTop: space[8] }}>
          <Emo type={mode === "reset" ? "think" : "grin"} size={75} />
          <Text variant="display" center>{TITLE[mode]}</Text>
          <Text variant="muted" center>{SUB[mode]}</Text>
        </View>

        {sent ? (
          <View style={{ gap: space[3] }}>
            {msg ? <Card tint={msg.ok ? "goodSoft" : "badSoft"}><Text variant="body">{msg.text}</Text></Card> : null}
            <Text variant="muted">Regarde tes mails (et les indésirables), puis tape le code ici. Il marche une fois et expire au bout d'une heure.</Text>
            <TextInput
              style={[s.field, { fontSize: font.xxl, letterSpacing: 8, textAlign: "center" }]}
              placeholder="000000"
              placeholderTextColor={color.muted}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              autoComplete="one-time-code"
              maxLength={10}
              autoFocus
              value={code}
              onChangeText={setCode}
              accessibilityLabel="Code reçu par mail"
              returnKeyType="done"
              onSubmitEditing={verify}
            />
            <Button label="Valider" onPress={verify} busy={busy} />
            <Button label="Renvoyer un code" variant="ghost" onPress={resend} disabled={busy} />
            <Button label="Changer d'adresse" variant="ghost" onPress={() => { setSent(false); setMsg(null); setCode(""); }} />
          </View>
        ) : (
          <>
        {mode !== "reset" ? (
          <View style={{ flexDirection: "row", gap: space[2], justifyContent: "center" }}>
            <Chip label="Se connecter" on={mode === "in"} onPress={() => go("in")} />
            <Chip label="Créer un compte" on={mode === "up"} onPress={() => go("up")} />
          </View>
        ) : null}

        <View style={{ gap: space[3] }}>
          <TextInput
            style={s.field}
            placeholder="Adresse mail"
            placeholderTextColor={color.muted}
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="email"
            keyboardType="email-address"
            textContentType={mode === "up" ? "username" : "emailAddress"}
            value={email}
            onChangeText={(v) => { setEmail(v); setSent(false); }}
            accessibilityLabel="Adresse mail"
            returnKeyType={mode === "reset" ? "send" : "next"}
            onSubmitEditing={mode === "reset" ? submit : undefined}
          />
          {mode !== "reset" ? (
            <View>
              <TextInput
                style={[s.field, { paddingRight: 96 }]}
                placeholder={mode === "up" ? "Mot de passe (8 caractères ou plus)" : "Mot de passe"}
                placeholderTextColor={color.muted}
                secureTextEntry={!show}
                autoCapitalize="none"
                autoCorrect={false}
                autoComplete={mode === "up" ? "new-password" : "current-password"}
                textContentType={mode === "up" ? "newPassword" : "password"}
                value={password}
                onChangeText={setPassword}
                accessibilityLabel="Mot de passe"
                returnKeyType="go"
                onSubmitEditing={submit}
              />
              <Pressable accessibilityRole="button" accessibilityLabel={show ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                onPress={() => setShow(!show)} hitSlop={8}
                style={{ position: "absolute", right: space[2], top: 0, bottom: 0, justifyContent: "center", paddingHorizontal: space[2] }}>
                <RNText style={{ fontSize: font.base, fontWeight: weight.semibold, color: color.muted }}>{show ? "Masquer" : "Afficher"}</RNText>
              </Pressable>
            </View>
          ) : null}

          {msg ? (
            <Card tint={msg.ok ? "goodSoft" : "badSoft"}>
              <Text variant="body">{msg.text}</Text>
            </Card>
          ) : null}

          <Button
            label={mode === "in" ? "Se connecter" : mode === "up" ? "Créer le compte" : "Recevoir un code"}
            onPress={submit}
            busy={busy}
          />
        </View>

          </>
        )}

        <View style={{ gap: space[1] }}>
          {mode === "in" ? <Button variant="ghost" label="Mot de passe oublié" onPress={() => go("reset")} /> : null}
          {mode === "reset" ? <Button variant="ghost" label="Retour à la connexion" onPress={() => go("in")} /> : null}
        </View>
      </Screen>
    </KeyboardAvoidingView>
  );
}
