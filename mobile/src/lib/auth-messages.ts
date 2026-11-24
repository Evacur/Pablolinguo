// What the sign-in screen says for each answer of Supabase Auth (error codes from @supabase/auth-js).
// Seen in the auth logs on 2026-11-24: a mistyped password, a reset link opened twice, a sign-up with an
// address that already has an account (Supabase answers « OK » without sending anything), and the e-mail quota.
export type Mode = "in" | "up" | "reset";

export function authMessage(code: string | undefined, mode: Mode): string {
  switch (code) {
    case "invalid_credentials":
      return "Adresse ou mot de passe incorrect. Vérifie les majuscules, ou choisis « Mot de passe oublié ».";
    case "email_not_confirmed":
      return "Ton adresse n'est pas encore confirmée : ouvre le lien reçu par mail, puis reviens te connecter.";
    case "over_email_send_rate_limit":
      return "Trop de mails envoyés en peu de temps. Attends une heure avant d'en redemander un.";
    case "over_request_rate_limit":
      return "Trop d'essais d'affilée. Attends quelques minutes puis réessaie.";
    case "weak_password":
      return "Ce mot de passe est trop simple. Prends-en un plus long, avec des chiffres ou des symboles.";
    case "user_already_exists":
      return "Cette adresse a déjà un compte. Connecte-toi, ou choisis « Mot de passe oublié ».";
    default:
      return mode === "in"
        ? "La connexion n'a pas marché. Vérifie ton réseau puis réessaie."
        : "Ça n'a pas marché. Vérifie ton réseau puis réessaie.";
  }
}
