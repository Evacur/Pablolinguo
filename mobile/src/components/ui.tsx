// The base components of the mobile app, the counterparts of the web app's ui/ atoms and molecules.
// Screens assemble these: they never write a colour or a size of their own (src/theme.ts).
import type { ReactNode } from "react";
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text as RNText, View, type TextStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { color, font, radius, space, touch, weight } from "../theme";
import { Emo, Pic } from "./icons";

type Variant = "display" | "title" | "body" | "muted" | "label";
const TEXT: Record<Variant, TextStyle> = {
  display: { fontSize: font.d2, fontWeight: weight.bold, color: color.fg },
  title: { fontSize: font.xl, fontWeight: weight.semibold, color: color.fg },
  body: { fontSize: font.lg, color: color.fg, lineHeight: 24 },
  muted: { fontSize: font.base, color: color.muted, lineHeight: 20 },
  label: { fontSize: font.sm, fontWeight: weight.semibold, color: color.muted, textTransform: "uppercase", letterSpacing: 0.6 },
};
export function Text({ variant = "body", children, center }: { variant?: Variant; children: ReactNode; center?: boolean }) {
  return <RNText style={[TEXT[variant], center && { textAlign: "center" }]}>{children}</RNText>;
}

// A page: safe area, white background, scrolls; room at the bottom for the floating tab bar.
export function Screen({ children, tabs = true }: { children: ReactNode; tabs?: boolean }) {
  return (
    <SafeAreaView style={s.screen} edges={["top", "left", "right"]}>
      <ScrollView contentContainerStyle={[s.page, tabs && { paddingBottom: space[14] * 2 }]} keyboardShouldPersistTaps="handled">
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

export function Button({ label, onPress, variant = "primary", busy, disabled }: {
  label: string; onPress: () => void; variant?: "primary" | "secondary" | "ghost" | "danger"; busy?: boolean; disabled?: boolean;
}) {
  const off = disabled || busy;
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: !!off, busy: !!busy }}
      onPress={onPress}
      disabled={off}
      style={({ pressed }) => [s.btn, s[variant], (pressed || off) && { opacity: 0.6 }]}
    >
      {busy ? <ActivityIndicator color={variant === "primary" ? color.inv : color.fg} /> : (
        <RNText style={[s.btnText, variant === "primary" && { color: color.inv }, variant === "danger" && { color: color.bad }]}>{label}</RNText>
      )}
    </Pressable>
  );
}

export function Card({ children, tint, onPress, label }: { children: ReactNode; tint?: keyof typeof color; onPress?: () => void; label?: string }) {
  const style = [s.card, tint && { backgroundColor: color[tint], borderColor: color[tint] }];
  if (!onPress) return <View style={style}>{children}</View>;
  return (
    <Pressable accessibilityRole="button" accessibilityLabel={label} onPress={onPress} style={({ pressed }) => [style, pressed && { opacity: 0.7 }]}>
      {children}
    </Pressable>
  );
}

// A row of a list: a leading icon, a title and a line under it, something at the end.
export function Row({ lead, title, sub, end, onPress, label }: { lead?: ReactNode; title: string; sub?: string; end?: ReactNode; onPress?: () => void; label?: string }) {
  const body = (
    <View style={s.row}>
      {lead}
      <View style={{ flex: 1, gap: 2 }}>
        <RNText style={s.rowTitle}>{title}</RNText>
        {sub ? <RNText style={s.rowSub} numberOfLines={2}>{sub}</RNText> : null}
      </View>
      {end}
    </View>
  );
  if (!onPress) return body;
  return <Pressable accessibilityRole="button" accessibilityLabel={label ?? title} onPress={onPress} style={({ pressed }) => pressed && { opacity: 0.6 }}>{body}</Pressable>;
}

// Mastery of a grammar point: three dots, as on the web.
export function Dots({ n, max = 3 }: { n: number; max?: number }) {
  return (
    <View style={s.dots} accessibilityLabel={`${n} sur ${max}`}>
      {Array.from({ length: max }, (_, i) => <View key={i} style={[s.dot, i < n && { backgroundColor: color.good }]} />)}
    </View>
  );
}

export function Progress({ value, max }: { value: number; max: number }) {
  const pct = max > 0 ? Math.min(1, value / max) : 0;
  return (
    <View style={s.track} accessibilityRole="progressbar" accessibilityValue={{ min: 0, max, now: value }}>
      <View style={[s.fill, { width: `${pct * 100}%` }]} />
    </View>
  );
}

export function Chip({ label, on, onPress }: { label: string; on: boolean; onPress: () => void }) {
  return (
    <Pressable accessibilityRole="button" accessibilityState={{ selected: on }} onPress={onPress} hitSlop={8} style={[s.chip, on && s.chipOn]}>
      <RNText style={[s.chipText, on && { color: color.inv }]}>{label}</RNText>
    </Pressable>
  );
}

// A button that is only an icon: 44 points to touch, a label for VoiceOver.
export function IconButton({ name, label, onPress }: { name: string; label: string; onPress: () => void }) {
  return (
    <Pressable accessibilityRole="button" accessibilityLabel={label} onPress={onPress} hitSlop={8}
      style={{ width: touch, height: touch, alignItems: "center", justifyContent: "center" }}>
      <Pic name={name} size={22} />
    </Pressable>
  );
}

// The three states every screen handles besides its content.
export function Loading() {
  return <View style={s.center}><ActivityIndicator color={color.fg} accessibilityLabel="Chargement" /></View>;
}
export function Empty({ face = "wink", title, text }: { face?: string; title: string; text?: string }) {
  return (
    <View style={[s.center, { gap: space[3] }]}>
      <Emo type={face} size={60} />
      <Text variant="title" center>{title}</Text>
      {text ? <Text variant="muted" center>{text}</Text> : null}
    </View>
  );
}
export function Failure({ text, retry }: { text: string; retry?: () => void }) {
  return (
    <View style={[s.center, { gap: space[4], padding: space[6] }]}>
      <Emo type="sad" size={60} />
      <Text variant="title" center>Ça n'a pas marché</Text>
      <Text variant="muted" center>{text}</Text>
      {retry ? <Button label="Réessayer" onPress={retry} /> : null}
    </View>
  );
}

export const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: color.bg },
  page: { padding: space[5], gap: space[5] },
  center: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: color.bg, padding: space[6] },
  btn: { minHeight: touch, borderRadius: radius.pill, paddingHorizontal: space[5], alignItems: "center", justifyContent: "center" },
  primary: { backgroundColor: color.fg },
  secondary: { backgroundColor: color.surface, borderWidth: 1, borderColor: color.line2 },
  ghost: { backgroundColor: "transparent" },
  danger: { backgroundColor: color.badSoft },
  btnText: { fontSize: font.lg, fontWeight: weight.semibold, color: color.fg },
  card: {
    backgroundColor: color.surface, borderRadius: radius.lg, borderWidth: 1, borderColor: color.line, padding: space[5], gap: space[3],
    shadowColor: color.shadow, shadowOpacity: 0.04, shadowRadius: 8, shadowOffset: { width: 0, height: 2 }, elevation: 1,
  },
  row: { flexDirection: "row", alignItems: "center", gap: space[3], minHeight: touch, paddingVertical: space[2] },
  rowTitle: { fontSize: font.lg, fontWeight: weight.medium, color: color.fg },
  rowSub: { fontSize: font.md, color: color.muted },
  dots: { flexDirection: "row", gap: space[1] },
  dot: { width: 8, height: 8, borderRadius: radius.pill, backgroundColor: color.line2 },
  track: { height: 8, borderRadius: radius.pill, backgroundColor: color.sunk, overflow: "hidden" },
  fill: { height: 8, borderRadius: radius.pill, backgroundColor: color.good },
  chip: { minHeight: 36, paddingHorizontal: space[4], borderRadius: radius.pill, borderWidth: 1, borderColor: color.line2, justifyContent: "center" },
  chipOn: { backgroundColor: color.fg, borderColor: color.fg },
  chipText: { fontSize: font.base, fontWeight: weight.medium, color: color.fg },
  field: { minHeight: touch, borderRadius: radius.md, borderWidth: 1, borderColor: color.line2, paddingHorizontal: space[4], fontSize: font.lg, color: color.fg, backgroundColor: color.surface },
});
