// Parler: the AI teacher you talk to, opened by the « Parler » pill in the middle of the tab bar.
// The conversation itself is not built yet (docs/audit.md R31): the page says so instead of a button that does nothing.
import { router } from "expo-router";
import { Empty, Sheet, Text } from "../components/ui";

export default function Teacher() {
  return (
    <Sheet onClose={() => router.back()}>
      <Text variant="display">Parler avec ton prof</Text>
      <Empty face="think" title="Bientôt ici" text="Tu pourras parler avec ton prof IA, à voix haute ou par écrit, et il te corrigera au fil de la conversation." />
    </Sheet>
  );
}
