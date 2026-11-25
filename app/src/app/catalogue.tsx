// The catalogue (itself a Sheet: grabber and cross at the top): every brick of the app on one page, so the look can be reviewed and changed in one place
// (theme.ts and components/), never screen by screen. Development builds only: the profile links here under __DEV__.
import { router } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { EMO_PIX } from "../../../shared/icons/emoticons.js";
import { PIC } from "../../../shared/icons/pixel-icons.js";
import { CodeField, EmailField, Notice, PasswordField, Rule } from "../components/auth";
import { ChoiceList, MatchBoard, OrderBoard } from "../components/exercise";
import { Glyph } from "../components/glyphs";
import { Emo, Pic } from "../components/icons";
import { Button, Card, Chip, Dots, Empty, Failure, Hero, IconButton, Item, Progress, Row, Section, Text, TopBar, Sheet } from "../components/ui";
import { space } from "../theme";

const noop = () => undefined;
const PAIRS = [{ en: "apple", fr: "pomme" }, { en: "bread", fr: "pain" }];
const WORDS = ["I", "like", "tea"];

export default function Catalogue() {
  const [chip, setChip] = useState("A1");
  const [field, setField] = useState("");
  if (!__DEV__) return null;
  return (
    <Sheet onClose={() => router.back()}>
      <TopBar onClose={() => undefined} closeLabel="Quitter (exemple)" value={2} max={5} count="2/5" />
      <Text variant="display">Catalogue</Text>

      <Section title="Texte">
        <Card>
          <Text variant="display">Display</Text>
          <Text variant="title">Title</Text>
          <Text variant="body">Body, le texte courant.</Text>
          <Text variant="muted">Muted, le texte secondaire.</Text>
          <Text variant="label">Label</Text>
        </Card>
      </Section>

      <Section title="Boutons">
        <Button label="Primaire" onPress={noop} />
        <Button label="Secondaire" variant="secondary" onPress={noop} />
        <Button label="Discret" variant="ghost" onPress={noop} />
        <Button label="Danger" variant="danger" onPress={noop} />
        <Button label="En cours" busy onPress={noop} />
        <Button label="Désactivé" disabled onPress={noop} />
        <View style={{ flexDirection: "row", gap: space[2] }}>
          {["A1", "A2", "B1"].map((l) => <Chip key={l} label={l} on={l === chip} onPress={() => setChip(l)} />)}
          <IconButton name="speaker" label="Écouter" onPress={noop} />
        </View>
      </Section>

      <Section title="Cartes et lignes">
        <Card>
          <Row lead={<Pic name="pencil" size={24} />} title="Row" sub="Avec une icône et une fin" end={<Dots n={2} />} onPress={noop} />
          <Row lead={<Pic name="trash" size={24} />} title="Row danger" sub="Un acte qu'on ne peut pas annuler" onPress={noop} danger />
          <Row title="Row sans icône" end={<View style={{ width: space[16] }}><Progress value={3} max={5} /></View>} />
        </Card>
        <Card tint="tintSky">
          <Item><Text variant="body">Item</Text><Text variant="muted">Deux lignes serrées</Text></Item>
          <Item divider end={<IconButton name="speaker" label="Écouter" onPress={noop} />}><Text variant="body">Item avec séparateur</Text></Item>
        </Card>
        <Card tint="banner"><Text variant="body">Card teinte banner</Text></Card>
        <Card tint="goodSoft"><Text variant="body">Card teinte goodSoft</Text></Card>
        <Card tint="badSoft"><Text variant="body">Card teinte badSoft</Text></Card>
      </Section>

      <Section title="États">
        <Hero face="party" title="Hero"><Text variant="muted" center>La fin d'une série.</Text></Hero>
        <Empty title="Empty" text="Rien à montrer ici." />
        <Failure text="Failure : quelque chose a échoué." retry={noop} />
      </Section>

      <Section title="Exercices">
        <ChoiceList options={["Choix", "Bonne réponse"]} right={1} answered onPick={noop} />
        <MatchBoard pairs={PAIRS} m={{ left: [0, 1], right: [1, 0], sel: 0, got: [1], miss: 0, flash: null }} answered={false} onLeft={noop} onRight={noop} />
        <OrderBoard words={WORDS} tiles={WORDS.map((w, k) => ({ w, k }))} built={[0]} answered={false} onAdd={noop} onRemove={noop} onCheck={noop} />
      </Section>

      <Section title="Connexion">
        <EmailField value={field} onChange={setField} onSubmit={noop} autoFocus={false} />
        <PasswordField fresh value={field} onChange={setField} onSubmit={noop} />
        <Rule ok text="Règle tenue" />
        <CodeField value="123" onChange={noop} />
        <Notice msg={{ ok: true, text: "Notice positive" }} />
        <Notice msg={{ ok: false, text: "Notice d'erreur" }} />
      </Section>

      <Section title="Smileys">
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: space[2] }}>
          {Object.keys(EMO_PIX).map((k) => <Emo key={k} type={k} size={40} />)}
        </View>
      </Section>
      <Section title="Icônes">
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: space[3] }}>
          {Object.keys(PIC).map((k) => <Pic key={k} name={k} size={24} />)}
          <Glyph name="back" /><Glyph name="close" /><Glyph name="check" />
        </View>
      </Section>
    </Sheet>
  );
}
