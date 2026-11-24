// Sign in, create an account, or get a new password: one question per page (layout B, chosen by Pi on 2026-11-24).
// What each answer of Supabase leads to lives in src/lib/auth-flow.js, tested case by case (docs/audit.md R26).
// No third-party sign-in, so no data is shared with Apple or Google for it.
import { useEffect, useState } from "react";
import { BackHandler, Linking, View } from "react-native";
import { CodeField, EmailField, Notice, PasswordField, StepScreen } from "../components/auth";
import { Emo } from "../components/icons";
import { Button, Text } from "../components/ui";
import { signIn, signUp, sendResetCode, verifyCode, resendCode } from "../lib/auth";
import {
  RESEND_SECONDS, afterResend, afterResetRequest, afterSignIn, afterSignUp, afterVerify,
  authMessage, cleanEmail, codeDigits, passwordOk, validEmail,
} from "../lib/auth-flow";
import { setRecovering } from "../lib/recovery";
import { SITE } from "../lib/site";
import { space } from "../theme";

type Step = "welcome" | "up-email" | "up-password" | "up-code" | "in-email" | "in-password" | "reset-code";
type Msg = { ok: boolean; text: string } | null;
const OFFLINE: Msg = { ok: false, text: authMessage("offline", "in") };

export default function SignIn() {
  const [path, setPath] = useState<Step[]>(["welcome"]);
  const step = path[path.length - 1];
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<Msg>(null);
  const [wait, setWait] = useState(0); // seconds before a new code can be asked for

  const go = (s: Step) => { setPath((p) => [...p, s]); setMsg(null); setCode(""); };
  const back = () => { setPath((p) => (p.length > 1 ? p.slice(0, -1) : p)); setMsg(null); setCode(""); };
  const mail = cleanEmail(email);

  // Android's back button goes to the previous question instead of closing the app.
  useEffect(() => {
    const sub = BackHandler.addEventListener("hardwareBackPress", () => {
      if (path.length <= 1) return false;
      back();
      return true;
    });
    return () => sub.remove();
  }, [path.length]);

  useEffect(() => {
    if (wait <= 0) return;
    const t = setTimeout(() => setWait((w) => w - 1), 1000);
    return () => clearTimeout(t);
  }, [wait]);

  // Every call goes through here: one at a time (double taps do nothing), and a lost network says so.
  async function run(job: () => Promise<void>) {
    if (busy) return;
    setBusy(true);
    setMsg(null);
    try { await job(); } catch { setMsg(OFFLINE); } finally { setBusy(false); }
  }

  function toPassword(next: Step) {
    if (!validEmail(email)) return setMsg({ ok: false, text: "Entre une adresse mail valide, comme toi@exemple.fr." });
    go(next);
  }

  const createAccount = () => run(async () => {
    if (!passwordOk(password)) return;
    const out = afterSignUp(await signUp(mail, password));
    if (out.go === "in-password") { setPath(["welcome", "in-email", "in-password"]); setMsg(out.msg ?? null); return; }
    if (out.go) { go(out.go as Step); setWait(RESEND_SECONDS); }
    else if (out.msg) setMsg(out.msg);
  });

  const logIn = () => run(async () => {
    if (!password) return setMsg({ ok: false, text: "Entre ton mot de passe." });
    const out = afterSignIn(await signIn(mail, password));
    if (out.go === "up-code") {
      // A new code for an account that was never confirmed: the code page says what happened.
      const sent = afterResend(await resendCode(mail, "signup"));
      go("up-code");
      setMsg(sent.restart ? out.msg ?? null : sent.msg ?? null);
      if (sent.restart) setWait(RESEND_SECONDS);
    } else if (out.msg) setMsg(out.msg);
  });

  const forgot = () => run(async () => {
    const out = afterResetRequest(await sendResetCode(mail));
    if (out.go) { go("reset-code"); setWait(RESEND_SECONDS); setMsg({ ok: true, text: `Si ${mail} a un compte, un code vient de partir.` }); }
    else if (out.msg) setMsg(out.msg);
  });

  const verify = (token: string) => run(async () => {
    const reset = step === "reset-code";
    if (reset) setRecovering(true); // the new-password page comes before the app
    const out = afterVerify(await verifyCode(mail, token, reset ? "reset" : "signup"));
    if (out.msg) {
      if (reset) setRecovering(false);
      setMsg(out.msg);
      if (out.clear) setCode("");
    }
    // On success the session starts and the root layout leaves this page.
  });

  const resend = () => run(async () => {
    const out = afterResend(await resendCode(mail, step === "reset-code" ? "reset" : "signup"));
    setMsg(out.msg ?? null);
    if (out.restart) setWait(RESEND_SECONDS);
  });

  function typeCode(v: string) {
    const digits = codeDigits(v);
    setCode(digits);
    if (digits.length === 6) verify(digits);
  }

  if (step === "welcome") {
    return (
      <StepScreen tint="avSun" title="Apprends un peu chaque jour." sub="5 minutes, à ton niveau, avec une vraie voix. Anglais et espagnol."
        footer={<>
          <Button label="Commencer" onPress={() => go("up-email")} />
          <Button label="J'ai déjà un compte" variant="secondary" onPress={() => go("in-email")} />
        </>}>
        <View style={{ marginTop: space[10] }}><Emo type="grin" size={96} /></View>
      </StepScreen>
    );
  }

  if (step === "up-email" || step === "in-email") {
    const next: Step = step === "up-email" ? "up-password" : "in-password";
    return (
      <StepScreen title="Quel est ton e-mail ?" step={step === "up-email" ? [1, 3] : undefined} onBack={back}
        sub={step === "up-email" ? "Il sert à garder ta progression sur tous tes appareils." : undefined}
        footer={<Button label="Continuer" onPress={() => toPassword(next)} disabled={!email.trim()} />}>
        <EmailField value={email} onChange={(v) => { setEmail(v); setMsg(null); }} onSubmit={() => toPassword(next)} />
        <Notice msg={msg} />
      </StepScreen>
    );
  }

  if (step === "up-password") {
    return (
      <StepScreen title="Choisis un mot de passe" step={[2, 3]} onBack={back}
        footer={<>
          <Button label="Recevoir mon code" onPress={createAccount} busy={busy} disabled={!passwordOk(password)} />
          <Button label="Politique de confidentialité" variant="ghost" onPress={() => Linking.openURL(`${SITE}/confidentialite.html`)} />
        </>}>
        <PasswordField fresh value={password} onChange={(v) => { setPassword(v); setMsg(null); }} onSubmit={createAccount} />
        <Notice msg={msg} />
      </StepScreen>
    );
  }

  if (step === "in-password") {
    return (
      <StepScreen title="Ton mot de passe" sub={mail} onBack={back}
        footer={<>
          <Button label="Me connecter" onPress={logIn} busy={busy} />
          <Button label="Mot de passe oublié ?" variant="ghost" onPress={forgot} disabled={busy} />
        </>}>
        <PasswordField value={password} onChange={(v) => { setPassword(v); setMsg(null); }} onSubmit={logIn} />
        <Notice msg={msg} />
      </StepScreen>
    );
  }

  // up-code and reset-code: the 6 digits of the mail, checked as soon as the sixth is typed.
  return (
    <StepScreen title="Entre le code reçu par mail" step={step === "up-code" ? [3, 3] : undefined} onBack={back}
      sub={`Envoyé à ${mail}. Pas de mail ? Regarde dans les indésirables.`}
      footer={<>
        <Button label={wait > 0 ? `Renvoyer le code (${wait} s)` : "Renvoyer le code"} variant="secondary" onPress={resend} disabled={busy || wait > 0} />
        <Button label="Changer d'adresse" variant="ghost"
          onPress={() => { setRecovering(false); setPath(step === "up-code" ? ["welcome", "up-email"] : ["welcome", "in-email"]); setMsg(null); setCode(""); }} />
      </>}>
      <CodeField value={code} onChange={typeCode} />
      {busy ? <Text variant="muted">Vérification…</Text> : null}
      <Notice msg={msg} />
    </StepScreen>
  );
}
