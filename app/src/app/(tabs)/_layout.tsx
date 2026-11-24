// The three tabs, as on the web app since 2026-11-24: Accueil, Apprendre, Mots.
import { Tabs } from "expo-router/js-tabs";
import { TabBar } from "../../components/tab-bar";

export default function TabsLayout() {
  return (
    <Tabs tabBar={(p) => <TabBar {...p} />} screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: "Accueil" }} />
      <Tabs.Screen name="learn" options={{ title: "Apprendre" }} />
      <Tabs.Screen name="words" options={{ title: "Mots" }} />
    </Tabs>
  );
}
