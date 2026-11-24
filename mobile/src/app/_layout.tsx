// Root of the app: the account provider and the sign-in gate. A signed-out person sees only the sign-in
// screen; a signed-in one sees the tabs and the grammar sheets (expo-router Stack.Protected).
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Failure, Loading } from "../components/ui";
import { AccountProvider, useAccount } from "../lib/data";
import { color } from "../theme";

function Gate() {
  const state = useAccount();
  if (state.status === "loading") return <Loading />;
  if (state.status === "error") return <Failure text="Tes données n'ont pas pu se charger. Vérifie ta connexion." retry={state.retry} />;
  const signedIn = state.status === "ready";
  return (
    <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: color.bg } }}>
      <Stack.Protected guard={signedIn}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="sheet/[id]" options={{ presentation: "modal" }} />
        <Stack.Screen name="profile" options={{ presentation: "modal" }} />
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
