// Choosing a new password: after a reset code, or from the profile (same page as the sign-in flow).
import { useState } from "react";
import { errorMessage, passwordOk } from "../lib/auth-flow";
import { setPassword as savePassword } from "../lib/auth";
import { Notice, PasswordField, StepScreen } from "./auth";
import { Button } from "./ui";

export function NewPassword({ onDone, onCancel }: { onDone: () => void; onCancel?: () => void }) {
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  async function save() {
    if (busy || !passwordOk(password)) return;
    setBusy(true);
    setMsg(null);
    try {
      const { error } = await savePassword(password);
      if (error) setMsg({ ok: false, text: errorMessage(error, "up") });
      else onDone();
    } catch {
      setMsg({ ok: false, text: errorMessage({ name: "AuthRetryableFetchError" }, "up") });
    } finally {
      setBusy(false);
    }
  }

  return (
    <StepScreen title="Choisis un nouveau mot de passe" sub="Il servira aussi sur tes autres appareils." onBack={onCancel}
      footer={<Button label={onCancel ? "Enregistrer" : "Enregistrer et continuer"} onPress={save} busy={busy} disabled={!passwordOk(password)} />}>
      <PasswordField fresh value={password} onChange={(v) => { setPassword(v); setMsg(null); }} onSubmit={save} />
      <Notice msg={msg} />
    </StepScreen>
  );
}
