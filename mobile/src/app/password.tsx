// Change the password, from the profile.
import { router } from "expo-router";
import { Alert } from "react-native";
import { NewPassword } from "../components/new-password";

export default function Password() {
  return <NewPassword onDone={() => { Alert.alert("C'est fait", "Ton nouveau mot de passe est enregistré."); router.back(); }} onCancel={() => router.back()} />;
}
