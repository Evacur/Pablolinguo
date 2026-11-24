// The Supabase client of the mobile app. Same project and same public key as the web app (src/config.js):
// the key only opens what Row Level Security allows, that is each account's own rows.
// The session is kept in the app's private storage (AsyncStorage), never in a shared place.
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import { AppState } from "react-native";
import { SUPABASE_PUBLISHABLE_KEY, SUPABASE_URL } from "../../../shared/config.js";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: { storage: AsyncStorage, autoRefreshToken: true, persistSession: true, detectSessionInUrl: false },
});

// The token refresh runs only while the app is in the foreground (supabase-js: startAutoRefresh in React Native).
AppState.addEventListener("change", (s) => {
  if (s === "active") supabase.auth.startAutoRefresh();
  else supabase.auth.stopAutoRefresh();
});
