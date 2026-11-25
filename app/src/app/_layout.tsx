// Root of the app: the account provider and the sign-in gate. A signed-out person sees only the sign-in
// screen; a signed-in one sees the tabs and the grammar sheets (expo-router Stack.Protected).
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LevelPicker } from "../components/level-picker";
import { NewPassword } from "../components/new-password";
import { setRecovering, useRecovering } from "../lib/recovery";
import { Failure, Loading } from "../components/ui";
import { AccountProvider, useAccount } from "../lib/data";
import { color } from "../theme";

function Gate() {
  const state = useAccount();
  const recovering = useRecovering();
  if (state.status === "loading") return <Loading />;
  if (state.status === "error") return <Failure text="Tes données n'ont pas pu se charger. Vérifie ta connexion." retry={state.retry} />;
  const signedIn = state.status === "ready";
  // Signed in by a reset code: the new password first.
  if (recovering && state.status === "ready") return <NewPassword onDone={() => setRecovering(false)} />;
  // A new account, or a language without a level yet: the level comes first.
  if (state.status === "ready" && !state.account.hasLevel) return <LevelPicker first />;
  return (
    <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: color.bg } }}>
      <Stack.Protected guard={signedIn}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="sheet/[id]" options={{ presentation: "modal" }} />
        <Stack.Screen name="profile" options={{ presentation: "modal" }} />
        <Stack.Screen name="account" options={{ presentation: "modal" }} />
        <Stack.Screen name="level" options={{ presentation: "modal" }} />
        <Stack.Screen name="password" options={{ presentation: "modal" }} />
        <Stack.Screen name="situation/[id]" options={{ presentation: "modal" }} />
        <Stack.Screen name="session" options={{ gestureEnabled: false }} />
        <Stack.Screen name="review" options={{ gestureEnabled: false }} />
        <Stack.Screen name="my-words" options={{ presentation: "modal" }} />
        <Stack.Screen name="theme/[name]" options={{ presentation: "modal" }} />
        <Stack.Screen name="identity" options={{ presentation: "modal" }} />
        <Stack.Screen name="catalogue" options={{ presentation: "modal" }} />
        <Stack.Screen name="teacher" options={{ presentation: "modal" }} />
      </Stack.Protected>
      <Stack.Protected guard={!signedIn}>
        <Stack.Screen name="sign-in" />
      </Stack.Protected>
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <AccountProvider>
        <Gate />
      </AccountProvider>
    </SafeAreaProvider>
  );
}
