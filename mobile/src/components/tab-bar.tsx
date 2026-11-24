// The tab bar: a floating pill at the bottom, as on the web app (ui/components/organisms/tabbar.css).
// Each tab is a face and its name; the current one sits on a darker ground and its face is in colour.
import type { BottomTabBarProps } from "expo-router/js-tabs";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { color, font, radius, space, touch, weight } from "../theme";
import { Emo } from "./icons";

const FACE: Record<string, string> = { index: "grin", learn: "nerd", words: "think" };

export function TabBar({ state, descriptors, navigateToTab, insets }: BottomTabBarProps) {
  return (
    <View pointerEvents="box-none" style={[st.wrap, { bottom: space[3] + insets.bottom }]}>
      <View style={st.pill} accessibilityRole="tablist">
        {state.routes.map((route, i) => {
          const on = i === state.index;
          const title = descriptors[route.key]?.options.title ?? route.name;
          return (
            <Pressable
              key={route.key}
              accessibilityRole="tab"
              accessibilityState={{ selected: on }}
              accessibilityLabel={title}
              onPress={() => navigateToTab(route.key)}
              style={[st.tab, on && st.tabOn]}
            >
              <View style={{ opacity: on ? 1 : 0.5 }}><Emo type={FACE[route.name] ?? "grin"} size={30} /></View>
              <Text style={[st.label, on && st.labelOn]}>{title}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const st = StyleSheet.create({
  wrap: { position: "absolute", left: 0, right: 0, alignItems: "center" },
  pill: {
    flexDirection: "row", gap: space[1], padding: space[1], borderRadius: radius.pill, borderWidth: 1, borderColor: color.line,
    backgroundColor: color.surface, shadowColor: color.shadow, shadowOpacity: 0.12, shadowRadius: 16, shadowOffset: { width: 0, height: 6 }, elevation: 6,
  },
  tab: { minHeight: touch, minWidth: touch, paddingHorizontal: space[4], borderRadius: radius.pill, flexDirection: "row", alignItems: "center", gap: space[2] },
  tabOn: { backgroundColor: color.sunk },
  label: { fontSize: font.sm, fontWeight: weight.medium, color: color.muted },
  labelOn: { color: color.fg, fontWeight: weight.semibold },
});
