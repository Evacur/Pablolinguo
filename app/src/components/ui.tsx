// The base components of the mobile app, the counterparts of the web app's ui/ atoms and molecules.
// Screens assemble these: they never write a colour or a size of their own (src/theme.ts).
import type { ReactNode } from "react";
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text as RNText, View, type TextStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { color, font, radius, space, touch, weight } from "../theme";
import { Glyph } from "./glyphs";
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
      <View style={{ flex: 1, gap: space[0.5] }}>
        <RNText style={s.rowTitle}>{title}</RNText>
        {sub ? <RNText style={s.rowSub} numberOfLines={2}>{sub}</RNText> : null}
      </View>
      {end}
    </View>
  );
  if (!onPress) return body;
  return <Pressable accessibilityRole="button" accessibilityLabel={label ?? title} onPress={onPress} style={({ pressed }) => pressed && { opacity: 0.6 }}>{body}</Pressable>;
}

// A titled block of a page: a small label, then its content.
export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <View style={{ gap: space[2] }}>
      <Text variant="label">{title}</Text>
      {children}
    </View>
  );
}

// One entry inside a card: a few lines stacked tight, an optional action at the end, a hairline above all but the first.
export function Item({ children, end, divider, onPress, label }: { children: ReactNode; end?: ReactNode; divider?: boolean; onPress?: () => void; label?: string }) {
  const style = [s.item, divider && s.itemLine];
  const body = (<><View style={{ flex: 1, gap: space[0.5] }}>{children}</View>{end}</>);
  if (!onPress) return <View style={style}>{body}</View>;
  return <Pressable accessibilityRole="button" accessibilityLabel={label} onPress={onPress} style={({ pressed }) => [style, pressed && { opacity: 0.6 }]}>{body}</Pressable>;
}

// The top of a series (session, review): a close button, the progress, and « 3/10 » when asked.
export function TopBar({ onClose, closeLabel, value, max, count }: { onClose: () => void; closeLabel: string; value: number; max: number; count?: string }) {
  return (
    <View style={s.topBar}>
      <Pressable accessibilityRole="button" accessibilityLabel={closeLabel} onPress={onClose} hitSlop={8} style={s.square}>
        <Glyph name="close" tone="muted" />
      </Pressable>
      <View style={{ flex: 1 }}><Progress value={value} max={max} /></View>
      {count ? <Text variant="muted">{count}</Text> : null}
    </View>
  );
}

// A big centred moment: the end of a series, a result. A smiley, a big line, then what it means.
export function Hero({ face, title, children }: { face: string; title: string; children?: ReactNode }) {
  return (
    <View style={s.hero}>
      <Emo type={face} size={90} />
      <Text variant="display" center>{title}</Text>
      {children}
    </View>
  );
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
    <Pressable accessibilityRole="button" accessibilityLabel={label} onPress={onPress} hitSlop={8} style={s.square}>
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
  dot: { width: space[2], height: space[2], borderRadius: radius.pill, backgroundColor: color.line2 },
  track: { height: space[2], borderRadius: radius.pill, backgroundColor: color.sunk, overflow: "hidden" },
  fill: { height: space[2], borderRadius: radius.pill, backgroundColor: color.good },
  chip: { minHeight: space[9], paddingHorizontal: space[4], borderRadius: radius.pill, borderWidth: 1, borderColor: color.line2, justifyContent: "center" },
  chipOn: { backgroundColor: color.fg, borderColor: color.fg },
  chipText: { fontSize: font.base, fontWeight: weight.medium, color: color.fg },
  item: { flexDirection: "row", alignItems: "center", gap: space[2], paddingVertical: space[1] },
  itemLine: { borderTopWidth: 1, borderColor: color.line, paddingTop: space[2] },
  topBar: { flexDirection: "row", alignItems: "center", gap: space[3] },
  square: { width: touch, height: touch, alignItems: "center", justifyContent: "center" },
  hero: { alignItems: "center", gap: space[3], marginTop: space[10] },
  field: { minHeight: touch, borderRadius: radius.md, borderWidth: 1, borderColor: color.line2, paddingHorizontal: space[4], fontSize: font.lg, color: color.fg, backgroundColor: color.surface },
});
