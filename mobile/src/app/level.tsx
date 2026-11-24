// Change the level, from the profile.
import { router } from "expo-router";
import { LevelPicker } from "../components/level-picker";

export default function Level() {
  return <LevelPicker onDone={() => router.back()} />;
}
