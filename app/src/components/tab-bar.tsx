// The tab bar (Pi's choice of 25/11): fixed at the bottom, full width, a hairline above. Each tab is a pixel icon and
// its name, faded until chosen. In the middle, the « Parler » pill opens the AI teacher; it is an action, not a tab.
import { router } from "expo-router";
import type { BottomTabBarProps } from "expo-router/js-tabs";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { color, font, radius, space, touch, weight } from "../theme";
import { Pic } from "./icons";

const ICON: Record<string, string> = { index: "house", learn: "bulb", words: "book", situations: "plane" };

export function TabBar({ state, descriptors, navigateToTab, insets }: BottomTabBarProps) {
  const tabs = state.routes.map((route, i) => {
    const on = i === state.index;
    const title = descriptors[route.key]?.options.title ?? route.name;
    return (
      <Pressable key={route.key} accessibilityRole="tab" accessibilityState={{ selected: on }} accessibilityLabel={title}
        onPress={() => navigateToTab(route.key)} style={st.tab}>
        <View style={{ opacity: on ? 1 : 0.4 }}><Pic name={ICON[route.name] ?? "house"} size={22} /></View>
        <Text style={[st.label, on && st.labelOn]} numberOfLines={1}>{title}</Text>
      </Pressable>
    );
  });
  const half = Math.ceil(tabs.length / 2);
  return (
    <View style={[st.bar, { paddingBottom: Math.max(insets.bottom, space[2]) }]} accessibilityRole="tablist">
      {tabs.slice(0, half)}
      <Pressable accessibilityRole="button" accessibilityLabel="Parler avec ton prof" onPress={() => router.push("/teacher")}
        style={({ pressed }) => [st.talk, pressed && { opacity: 0.7 }]}>
        <Pic name="mic" size={18} />
        <Text style={st.talkText}>Parler</Text>
      </Pressable>
      {tabs.slice(half)}
    </View>
  );
}

const st = StyleSheet.create({
  bar: {
    flexDirection: "row", alignItems: "center", justifyContent: "space-around", paddingTop: space[2], paddingHorizontal: space[2],
    backgroundColor: color.surface, borderTopWidth: 1, borderColor: color.line,
  },
  tab: { flex: 1, minHeight: touch, alignItems: "center", justifyContent: "center", gap: space[0.5] },
  label: { fontSize: font.xs, fontWeight: weight.medium, color: color.muted },
  labelOn: { color: color.fg, fontWeight: weight.semibold },
  talk: { minHeight: touch, flexDirection: "row", alignItems: "center", gap: space[2], paddingHorizontal: space[4], borderRadius: radius.pill, backgroundColor: color.banner },
  talkText: { fontSize: font.base, fontWeight: weight.semibold, color: color.bannerFg },
});
