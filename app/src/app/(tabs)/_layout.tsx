// The tabs (Pi's choice of 25/11): Accueil, Apprendre, the « Parler » pill for the AI teacher, Mots, Situations.
import { Tabs } from "expo-router/js-tabs";
import { TabBar } from "../../components/tab-bar";

export default function TabsLayout() {
  return (
    <Tabs tabBar={(p) => <TabBar {...p} />} screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: "Accueil" }} />
      <Tabs.Screen name="learn" options={{ title: "Apprendre" }} />
      <Tabs.Screen name="words" options={{ title: "Mots" }} />
      <Tabs.Screen name="situations" options={{ title: "Situations" }} />
    </Tabs>
  );
}
