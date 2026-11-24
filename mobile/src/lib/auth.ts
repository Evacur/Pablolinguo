// Every call to Supabase Auth the screens make, in one place: screens and components never import the client
// (tests/mobile.test.js). Each returns Supabase's own result, so the screens read its error code.
import { supabase } from "./supabase";

export const signIn = (email: string, password: string) => supabase.auth.signInWithPassword({ email, password });
export const signUp = (email: string, password: string) => supabase.auth.signUp({ email, password });
export const sendResetCode = (email: string) => supabase.auth.resetPasswordForEmail(email);
// The 6-digit code of the sign-up or reset mail, typed in the app.
export const verifyCode = (email: string, token: string, kind: "reset" | "signup") =>
  supabase.auth.verifyOtp({ email, token, type: kind === "reset" ? "recovery" : "signup" });
export const resendCode = (email: string, kind: "reset" | "signup") =>
  kind === "reset" ? supabase.auth.resetPasswordForEmail(email) : supabase.auth.resend({ type: "signup", email });
export const setPassword = (password: string) => supabase.auth.updateUser({ password });
export const signOut = () => supabase.auth.signOut();

// Same function as the web app: the database deletes the account and, by cascade, all its documents.
export async function deleteAccount() {
  const { error } = await supabase.rpc("delete_my_account");
  if (error) throw error;
  await supabase.auth.signOut();
}
