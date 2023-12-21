import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { getAllUsers, getUserByRid } from "../services/requests";

export default function Login() {
  const [rid, setRid] = useState("");
  async function login() {
   const data = await getUserByRid(rid)
   console.log(data);
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="rid"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={(text) => setRid(text)}
      />
      <TouchableOpacity onPress={login}>
        <Text>Entrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
  input: {
    width: 260,
    borderBottomWidth: 3,
    textAlign: "center",
  },
});
