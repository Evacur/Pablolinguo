// The pieces of the sign-in flow (« une question par écran », chosen by Pi on 2026-11-24): a step page with its
// back button and progress bar, and the e-mail, password and code fields. Screens assemble these.
import { useState, type ReactNode } from "react";
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text as RNText, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PASSWORD_MIN } from "../lib/auth-flow";
import { color, font, radius, space, touch, weight } from "../theme";
import { Glyph } from "./glyphs";
import { Card, Progress, Text } from "./ui";

// One question per page: back, progress (sign-up only), a big title, the field, then the button kept above the keyboard.
export function StepScreen({ title, sub, step, onBack, children, footer, tint }: {
  title: string; sub?: string; step?: [number, number]; onBack?: () => void; children?: ReactNode; footer: ReactNode; tint?: keyof typeof color;
}) {
  return (
    <SafeAreaView style={[st.screen, tint && { backgroundColor: color[tint] }]} edges={["top", "left", "right", "bottom"]}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
        <ScrollView contentContainerStyle={st.page} keyboardShouldPersistTaps="handled">
          {onBack || step ? (
            <View style={st.top}>
              {onBack ? (
                <Pressable accessibilityRole="button" accessibilityLabel="Retour" onPress={onBack} hitSlop={8} style={st.back}>
                  <Glyph name="back" size={24} />
                </Pressable>
              ) : null}
              {step ? <View style={{ flex: 1 }} accessibilityLabel={`Étape ${step[0]} sur ${step[1]}`}><Progress value={step[0]} max={step[1]} /></View> : null}
            </View>
          ) : null}
          <RNText style={st.title} accessibilityRole="header">{title}</RNText>
          {sub ? <Text variant="muted">{sub}</Text> : null}
          {children}
          <View style={{ flex: 1, minHeight: space[6] }} />
          <View style={{ gap: space[2] }}>{footer}</View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// What Supabase answered: green when something was sent, red when it failed.
export function Notice({ msg }: { msg: { ok: boolean; text: string } | null }) {
  if (!msg) return null;
  return <Card tint={msg.ok ? "goodSoft" : "badSoft"}><Text variant="body">{msg.text}</Text></Card>;
}

export function EmailField({ value, onChange, onSubmit, autoFocus = true }: { value: string; onChange: (v: string) => void; onSubmit: () => void; autoFocus?: boolean }) {
  return (
    <TextInput style={st.field} value={value} onChangeText={onChange} onSubmitEditing={onSubmit} autoFocus={autoFocus}
      placeholder="toi@exemple.fr" placeholderTextColor={color.muted} accessibilityLabel="Adresse mail"
      autoCapitalize="none" autoCorrect={false} autoComplete="email" keyboardType="email-address"
      textContentType="emailAddress" returnKeyType="next" />
  );
}

// `fresh`: a password being created (iOS offers a strong one, the rule is shown); else the saved one is offered.
export function PasswordField({ value, onChange, onSubmit, fresh }: { value: string; onChange: (v: string) => void; onSubmit: () => void; fresh?: boolean }) {
  const [show, setShow] = useState(false);
  return (
    <View style={{ gap: space[2] }}>
      <View>
        <TextInput style={[st.field, { paddingRight: space[14] * 2 }]} value={value} onChangeText={onChange} onSubmitEditing={onSubmit} autoFocus
          secureTextEntry={!show} accessibilityLabel={fresh ? "Nouveau mot de passe" : "Mot de passe"}
          autoCapitalize="none" autoCorrect={false} autoComplete={fresh ? "new-password" : "current-password"}
          textContentType={fresh ? "newPassword" : "password"} returnKeyType="go" />
        <Pressable accessibilityRole="button" accessibilityLabel={show ? "Masquer le mot de passe" : "Afficher le mot de passe"}
          onPress={() => setShow(!show)} hitSlop={8} style={st.eye}>
          <RNText style={st.eyeText}>{show ? "Masquer" : "Afficher"}</RNText>
        </Pressable>
      </View>
      {fresh ? <Rule ok={value.length >= PASSWORD_MIN} text={`${PASSWORD_MIN} caractères minimum`} /> : null}
    </View>
  );
}

// A rule that ticks itself while the person types.
export function Rule({ ok, text }: { ok: boolean; text: string }) {
  return (
    <View style={st.rule} accessibilityLabel={`${text} : ${ok ? "c'est bon" : "pas encore"}`}>
      <View style={[st.dot, ok && { backgroundColor: color.good }]}>{ok ? <Glyph name="check" size={10} tone="inv" weight={4} /> : null}</View>
      <Text variant="muted">{text}</Text>
    </View>
  );
}

// The 6-digit code of the mail: number pad, iOS offers the code from Mail above the keyboard, a pasted sentence keeps its digits.
export function CodeField({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <TextInput style={[st.field, st.code]} value={value} onChangeText={onChange} autoFocus maxLength={40}
      placeholder="000000" placeholderTextColor={color.line2} accessibilityLabel="Code à 6 chiffres reçu par mail"
      keyboardType="number-pad" textContentType="oneTimeCode" autoComplete="one-time-code" />
  );
}

const st = StyleSheet.create({
  screen: { flex: 1, backgroundColor: color.bg },
  page: { flexGrow: 1, padding: space[5], gap: space[4] },
  top: { flexDirection: "row", alignItems: "center", gap: space[2], marginLeft: -space[3], minHeight: touch },
  back: { width: touch, height: touch, alignItems: "center", justifyContent: "center" },
  title: { fontSize: font.d3, fontWeight: weight.bold, color: color.fg, lineHeight: font.d3 * 1.15 },
  field: { minHeight: touch + space[2], borderRadius: radius.md, borderWidth: 2, borderColor: color.fg, paddingHorizontal: space[4], fontSize: font.xl, letterSpacing: 0, color: color.fg, backgroundColor: color.surface },
  code: { fontSize: font.d2, letterSpacing: space[3], fontWeight: weight.semibold },
  eye: { position: "absolute", right: space[2], top: 0, bottom: 0, justifyContent: "center", paddingHorizontal: space[2] },
  eyeText: { fontSize: font.base, fontWeight: weight.semibold, color: color.muted },
  rule: { flexDirection: "row", alignItems: "center", gap: space[2] },
  dot: { width: space[4], height: space[4], borderRadius: radius.pill, backgroundColor: color.line2, alignItems: "center", justifyContent: "center" },
});
