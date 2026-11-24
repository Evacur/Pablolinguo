// The learner's first name and avatar (smiley and colour), the same fields as on the web app.
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, TextInput, View } from "react-native";
import { Avatar } from "../components/avatar";
import { Emo } from "../components/icons";
import { Button, Card, Screen, Text, s as ui } from "../components/ui";
import { AV_COLS, AV_FACES, avBg } from "../lib/avatar";
import { useAccount } from "../lib/data";
import { color, radius, space, touch } from "../theme";

export default function Identity() {
  const state = useAccount();
  const p = state.status === "ready" ? state.account.profile : null;
  const [name, setName] = useState(p?.name ?? "");
  const [e, setE] = useState(p?.avatar?.e ?? "grin");
  const [c, setC] = useState(p?.avatar?.c ?? "sun");
  if (state.status !== "ready") return null;
  const a = state.account;

  return (
    <Screen tabs={false}>
      <View style={{ alignItems: "center", marginTop: space[4] }}><Avatar e={e} c={c} size={96} /></View>
      <Card>
        <Text variant="label">Ton prénom</Text>
        <TextInput style={ui.field} value={name} onChangeText={setName} maxLength={40} autoComplete="given-name"
          placeholder="Ton prénom" placeholderTextColor={color.muted} accessibilityLabel="Ton prénom" />
        <Text variant="muted">Il sert à te dire bonjour sur l'accueil.</Text>
      </Card>
      <Card>
        <Text variant="label">Le smiley</Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: space[2] }}>
          {AV_FACES.map((f) => (
            <Pressable key={f} accessibilityRole="button" accessibilityLabel={f} accessibilityState={{ selected: f === e }} onPress={() => setE(f)}
              style={{ width: touch, height: touch, borderRadius: radius.md, alignItems: "center", justifyContent: "center",
                backgroundColor: f === e ? avBg(c) : color.sunk }}>
              <Emo type={f} size={30} />
            </Pressable>
          ))}
        </View>
        <Text variant="label">La couleur</Text>
        <View style={{ flexDirection: "row", gap: space[3] }}>
          {AV_COLS.map((k) => (
            <Pressable key={k} accessibilityRole="button" accessibilityLabel={k} accessibilityState={{ selected: k === c }} onPress={() => setC(k)}
              style={{ width: touch, height: touch, borderRadius: radius.pill, backgroundColor: avBg(k), borderWidth: k === c ? 3 : 1, borderColor: k === c ? color.fg : color.line2 }} />
          ))}
        </View>
      </Card>
      <Button label="Enregistrer" onPress={() => { a.setIdentity(name, { e, c }); router.back(); }} />
      <Button label="Annuler" variant="ghost" onPress={() => router.back()} />
    </Screen>
  );
}
