// The answer boards of an exercise: pick one (« QCM »), match the pairs (« Associe »), put the words in order.
// The session screen holds the state and the checking (src/lib/session.ts); these only draw and report taps.
import { Pressable, StyleSheet, Text as RNText, View } from "react-native";
import { color, font, radius, space, touch, weight } from "../theme";
import { Button } from "./ui";

type Look = "idle" | "selected" | "good" | "bad";

// One answer to tap.
export function Choice({ label, look = "idle", onPress, disabled }: { label: string; look?: Look; onPress: () => void; disabled?: boolean }) {
  return (
    <Pressable accessibilityRole="button" accessibilityState={{ selected: look === "selected", disabled: !!disabled }} disabled={disabled} onPress={onPress}
      style={[st.choice, look !== "idle" && st[look]]}>
      <RNText style={st.choiceText}>{label}</RNText>
    </Pressable>
  );
}

export function ChoiceList({ options, right, answered, onPick }: { options: string[]; right?: number; answered: boolean; onPick: (k: number) => void }) {
  return (
    <View style={{ gap: space[2] }}>
      {options.map((o, k) => <Choice key={o} label={o} look={answered && k === right ? "good" : "idle"} disabled={answered} onPress={() => onPick(k)} />)}
    </View>
  );
}

export type MatchState = { left: number[]; right: number[]; sel: number | null; got: number[]; miss: number; flash: number | null };

// « Associe »: a word on the left, then its translation on the right.
export function MatchBoard({ pairs, m, answered, onLeft, onRight }: {
  pairs: { en: string; fr: string }[]; m: MatchState; answered: boolean; onLeft: (k: number) => void; onRight: (k: number) => void;
}) {
  return (
    <View style={{ flexDirection: "row", gap: space[3] }}>
      <View style={{ flex: 1, gap: space[2] }}>
        {m.left.map((k) => {
          const got = m.got.includes(k);
          return <Choice key={k} label={pairs[k].en} look={got ? "good" : m.sel === k ? "selected" : "idle"} disabled={got || answered} onPress={() => onLeft(k)} />;
        })}
      </View>
      <View style={{ flex: 1, gap: space[2] }}>
        {m.right.map((k) => {
          const got = m.got.includes(k);
          return <Choice key={k} label={pairs[k].fr} look={got ? "good" : m.flash === k ? "bad" : "idle"} disabled={got || answered} onPress={() => onRight(k)} />;
        })}
      </View>
    </View>
  );
}

// Put the words back in order: tap a word to add it, tap it in the sentence to take it back.
export function OrderBoard({ words, tiles, built, answered, ok, onAdd, onRemove, onCheck }: {
  words: string[]; tiles: { w: string; k: number }[]; built: number[]; answered: boolean; ok?: boolean;
  onAdd: (k: number) => void; onRemove: (n: number) => void; onCheck: () => void;
}) {
  return (
    <View style={{ gap: space[3] }}>
      <View style={[st.built, answered && { borderColor: ok ? color.good : color.bad }]}>
        {built.map((k, n) => (
          <Pressable key={n} accessibilityRole="button" accessibilityLabel={`Retirer ${words[k]}`} disabled={answered} onPress={() => onRemove(n)} style={st.tile}>
            <RNText style={st.tileText}>{words[k]}</RNText>
          </Pressable>
        ))}
      </View>
      <View style={st.tiles}>
        {tiles.filter((t) => !built.includes(t.k)).map((t) => (
          <Pressable key={t.k} accessibilityRole="button" disabled={answered} onPress={() => onAdd(t.k)} style={st.tile}>
            <RNText style={st.tileText}>{t.w}</RNText>
          </Pressable>
        ))}
      </View>
      {!answered ? <Button label="Vérifier" disabled={built.length !== words.length} onPress={onCheck} /> : null}
    </View>
  );
}

const st = StyleSheet.create({
  choice: { minHeight: touch, borderRadius: radius.md, borderWidth: 1, borderColor: color.line2, paddingHorizontal: space[4], justifyContent: "center" },
  choiceText: { fontSize: font.lg, color: color.fg },
  selected: { borderColor: color.fg, borderWidth: 2 },
  good: { borderColor: color.good, backgroundColor: color.goodSoft },
  bad: { borderColor: color.bad, backgroundColor: color.badSoft },
  idle: {},
  built: { minHeight: touch * 2, borderRadius: radius.md, borderWidth: 1, borderColor: color.line2, borderStyle: "dashed", padding: space[2], flexDirection: "row", flexWrap: "wrap", gap: space[2] },
  tiles: { flexDirection: "row", flexWrap: "wrap", gap: space[2] },
  tile: { minHeight: space[10], paddingHorizontal: space[3], borderRadius: radius.sm, borderWidth: 1, borderColor: color.line2, backgroundColor: color.surface, justifyContent: "center" },
  tileText: { fontSize: font.lg, fontWeight: weight.medium, color: color.fg },
});
