// The sign-in, sign-up and reset flow, without the screens: what each answer of Supabase Auth leads to.
// Plain JS so tests/auth-flow.test.js runs it in Node; every case of docs/audit.md R26 has its test there.
// Error codes are those of @supabase/auth-js (ErrorCode in node_modules/@supabase/auth-js/dist/module/lib/error-codes.d.ts).

export const PASSWORD_MIN = 8;
// Supabase refuses a second mail to the same address within 60 s (Auth › Rate limits): the resend button waits as long.
export const RESEND_SECONDS = 60;

export const cleanEmail = (s) => String(s ?? "").trim().toLowerCase();
export const validEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(cleanEmail(s));
export const passwordOk = (s) => String(s ?? "").length >= PASSWORD_MIN;
// The digits of whatever was typed or pasted (« Ton code : 123 456 » gives 123456), six at most.
export const codeDigits = (s) => String(s ?? "").replace(/\D/g, "").slice(0, 6);

const OFFLINE = "Pas de connexion. Vérifie ton réseau puis réessaie.";

// The sentence shown for an error code. `mode`: "in" sign-in, "up" sign-up, "reset" forgotten password, "code" a mailed code.
export function authMessage(code, mode) {
  switch (code) {
    case "invalid_credentials":
      // Supabase gives the same answer for an unknown address and a wrong password, on purpose: nobody can learn who has an account.
      return "E-mail ou mot de passe incorrect. Vérifie les majuscules, ou choisis « Mot de passe oublié ».";
    case "email_not_confirmed":
      return "Ton adresse n'est pas encore confirmée. On t'envoie un nouveau code.";
    case "over_email_send_rate_limit":
      return "Trop de mails envoyés en peu de temps. Attends un peu avant d'en redemander un.";
    case "over_request_rate_limit":
      return "Trop d'essais d'affilée. Attends quelques minutes puis réessaie.";
    case "weak_password":
      return "Ce mot de passe est trop facile à deviner. Prends-en un plus long, avec des chiffres ou des symboles.";
    case "user_already_exists":
    case "email_exists":
      return "Cette adresse a déjà un compte. Entre ton mot de passe pour te connecter.";
    case "email_address_invalid":
      return "Cette adresse mail n'est pas acceptée. Vérifie-la ou prends-en une autre.";
    case "otp_expired":
      return "Ce code a expiré ou a déjà servi. Demande-en un nouveau.";
    case "same_password":
      return "C'est déjà ton mot de passe actuel. Choisis-en un autre.";
    case "signup_disabled":
      return "Les inscriptions sont fermées pour le moment.";
    case "offline":
      return OFFLINE;
    default:
      return mode === "code" ? "Ce code ne marche pas. Vérifie-le, ou demande-en un nouveau." : "Ça n'a pas marché. Réessaie dans un instant.";
  }
}

// Where each answer leads. `go` is the next step of the screen, `msg` what to show ({ ok, text }), `resend` asks for a new code.
// No network: auth-js returns an AuthRetryableFetchError (no code) instead of throwing.
const codeOf = (error) => (error && error.name === "AuthRetryableFetchError" ? "offline" : error && error.code);

export function afterSignUp(res) {
  if (res.error) {
    const code = codeOf(res.error);
    if (code === "user_already_exists" || code === "email_exists") return { go: "in-password", msg: bad(code, "up") };
    return { msg: bad(code, "up") };
  }
  const user = res.data && res.data.user;
  // An address that already has a confirmed account: Supabase answers « OK » with no identity and sends nothing.
  if (user && (user.identities ?? []).length === 0) return { go: "in-password", msg: bad("user_already_exists", "up") };
  // Confirmation turned off in Supabase: the session comes at once and the root layout opens the app.
  if (res.data && res.data.session) return {};
  return { go: "up-code" };
}

export function afterSignIn(res) {
  if (!res.error) return {};
  // Signed up but never typed the code (the app was closed, the mail came late): a new code, then the code screen.
  if (codeOf(res.error) === "email_not_confirmed") return { go: "up-code", resend: true, msg: { ok: true, text: authMessage("email_not_confirmed", "in") } };
  return { msg: bad(codeOf(res.error), "in") };
}

// A reset code is asked for whether or not the address has an account, and the answer is the same: no one learns who has one.
export function afterResetRequest(res) {
  if (res.error && codeOf(res.error) !== "user_not_found") return { msg: bad(codeOf(res.error), "reset") };
  return { go: "reset-code" };
}

export function afterVerify(res) {
  if (!res.error) return {};
  return { msg: bad(codeOf(res.error), "code"), clear: true };
}

export function afterResend(res) {
  return res.error ? { msg: bad(codeOf(res.error), "code") } : { msg: { ok: true, text: "Un nouveau code est parti." }, restart: true };
}

export const errorMessage = (error, mode) => authMessage(codeOf(error), mode);

function bad(code, mode) {
  return { ok: false, text: authMessage(code, mode) };
}
