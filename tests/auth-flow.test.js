// Every case of the sign-in, sign-up and reset flow (docs/audit.md R26): what the app does with each answer of
// Supabase Auth. The screens (app/src/app/sign-in.tsx) only follow what app/src/lib/auth-flow.js returns.
import { test } from "node:test";
import assert from "node:assert/strict";
import {
  RESEND_SECONDS, afterResend, afterResetRequest, afterSignIn, afterSignUp, afterVerify,
  authMessage, cleanEmail, codeDigits, errorMessage, passwordOk, validEmail,
} from "../app/src/lib/auth-flow.js";

const err = (code) => ({ error: { code, name: "AuthApiError" }, data: { user: null, session: null } });
const offline = { error: { name: "AuthRetryableFetchError", status: 0 }, data: { user: null, session: null } };

test("typing: e-mail cleaned and checked, password of 8 characters, code digits only", () => {
  assert.equal(cleanEmail("  Pi@Exemple.FR "), "pi@exemple.fr");
  for (const ok of ["toi@exemple.fr", " A@b.co "]) assert.ok(validEmail(ok), ok);
  for (const bad of ["", "toi", "toi@", "toi@exemple", "toi @exemple.fr", "toi@exemple.f"]) assert.ok(!validEmail(bad), bad);
  assert.ok(!passwordOk("1234567"));
  assert.ok(passwordOk("12345678"));
  assert.equal(codeDigits("Ton code : 123 456"), "123456", "a pasted sentence keeps its digits");
  assert.equal(codeDigits("12345678"), "123456", "never more than six");
  assert.equal(codeDigits("abc"), "");
});

test("sign-up: code sent, address already taken, confirmation off, refusals", () => {
  assert.deepEqual(afterSignUp({ error: null, data: { user: { identities: [{}] }, session: null } }), { go: "up-code" });
  // Supabase answers « OK » with no identity for an address that already has an account: the app sends to sign-in.
  const taken = afterSignUp({ error: null, data: { user: { identities: [] }, session: null } });
  assert.equal(taken.go, "in-password");
  assert.match(taken.msg.text, /déjà un compte/);
  assert.equal(afterSignUp(err("user_already_exists")).go, "in-password");
  assert.equal(afterSignUp(err("email_exists")).go, "in-password");
  assert.deepEqual(afterSignUp({ error: null, data: { user: { identities: [{}] }, session: {} } }), {}, "no confirmation: straight in");
  assert.match(afterSignUp(err("weak_password")).msg.text, /trop facile/);
  assert.match(afterSignUp(err("over_email_send_rate_limit")).msg.text, /Trop de mails/);
  assert.match(afterSignUp(err("email_address_invalid")).msg.text, /pas acceptée/);
  assert.match(afterSignUp(err("signup_disabled")).msg.text, /fermées/);
  assert.match(afterSignUp(offline).msg.text, /Pas de connexion/);
});

test("sign-in: wrong password and unknown address say the same thing; an unconfirmed account gets a new code", () => {
  assert.deepEqual(afterSignIn({ error: null }), {});
  const wrong = afterSignIn(err("invalid_credentials"));
  assert.match(wrong.msg.text, /incorrect/);
  assert.match(wrong.msg.text, /Mot de passe oublié/);
  const unconfirmed = afterSignIn(err("email_not_confirmed"));
  assert.equal(unconfirmed.go, "up-code");
  assert.equal(unconfirmed.resend, true);
  assert.match(afterSignIn(err("over_request_rate_limit")).msg.text, /Trop d'essais/);
  assert.match(afterSignIn(offline).msg.text, /Pas de connexion/);
});

test("forgotten password: the answer never tells whether the address has an account", () => {
  assert.deepEqual(afterResetRequest({ error: null }), { go: "reset-code" });
  assert.deepEqual(afterResetRequest(err("user_not_found")), { go: "reset-code" });
  assert.match(afterResetRequest(err("over_email_send_rate_limit")).msg.text, /Trop de mails/);
  assert.match(afterResetRequest(offline).msg.text, /Pas de connexion/);
});

test("code: expired, wrong, resent, and the wait before a new one", () => {
  assert.deepEqual(afterVerify({ error: null }), {});
  const expired = afterVerify(err("otp_expired"));
  assert.match(expired.msg.text, /expiré ou a déjà servi/);
  assert.equal(expired.clear, true, "a refused code is cleared so the next one can be typed");
  assert.match(afterVerify(err("invalid_otp")).msg.text, /ne marche pas/);
  assert.match(afterVerify(offline).msg.text, /Pas de connexion/);
  assert.equal(afterResend({ error: null }).restart, true);
  assert.match(afterResend(err("over_email_send_rate_limit")).msg.text, /Trop de mails/);
  assert.equal(RESEND_SECONDS, 60, "Supabase refuses a second mail within 60 s");
});

test("new password: the same as before, too weak, or no network", () => {
  assert.match(errorMessage({ code: "same_password" }, "up"), /déjà ton mot de passe/);
  assert.match(errorMessage({ code: "weak_password" }, "up"), /trop facile/);
  assert.match(errorMessage({ name: "AuthRetryableFetchError" }, "up"), /Pas de connexion/);
  assert.match(authMessage(undefined, "in"), /Réessaie/);
});
