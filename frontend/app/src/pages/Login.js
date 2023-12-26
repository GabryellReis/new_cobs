import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { getUserByRid } from "../services/requests";
import { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../context/Auth";

export default function Login() {
  const [rid, setRid] = useState("");
  const {user, setUser} = useContext(AuthContext)

  const history = useNavigation();
  async function logOn() {
    try {
      const data = await getUserByRid(rid);
      setUser({
        id: data.rid,
        name: data.name,
        sector: data.sector,
        office: data.office,
        permissions: data.permissions,
      });
      return history.navigate("home");
    } catch (error) {
      return error
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Control Operational {"\n"}Bag Storage</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        onChangeText={(text) => setRid(text)}
      />
      <TouchableOpacity style={styles.btnLogin} onPress={logOn}>
        <Text style={styles.btnLoginText}>Entrar</Text>
      </TouchableOpacity>
      <Text>{user ? user.name : "Nada por aqui"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
  title: {
    top: -100,
    fontSize: 20,
    fontWeight: "600",
    letterSpacing: 4,
  },
  input: {
    borderBottomColor: "#009000",
    borderWidth: 2,
    borderStyle: "solid",
    width: 260,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    textAlign: "center",
  },
  btnLogin: {
    backgroundColor: "#000090",
    padding: 10,
    borderRadius: 50,
    margin: 10,
    textAlign: "center",
  },
  btnLoginText: {
    color: "#fff",
    fontSize: 20,
    letterSpacing: 5,
  },
});
