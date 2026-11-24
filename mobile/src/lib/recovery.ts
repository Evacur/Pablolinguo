// A password reset in progress. Typing the mailed code signs the person in; until they have chosen their new
// password, the root layout shows the new-password screen instead of the app.
import { useSyncExternalStore } from "react";

let recovering = false;
const listeners = new Set<() => void>();
export function setRecovering(v: boolean) {
  recovering = v;
  listeners.forEach((f) => f());
}
export const useRecovering = () =>
  useSyncExternalStore(
    (f) => (listeners.add(f), () => listeners.delete(f)),
    () => recovering,
  );
