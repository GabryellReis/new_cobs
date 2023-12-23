import { useState, useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AuthContext } from "../context/Auth";
import { FontAwesome } from "@expo/vector-icons";

export default function Home() {
  const { user } = useContext(AuthContext);

  if (user && user.permissions === "admin") {
    return (
      <View style={styles.container}>
        <Text style={styles.greeting}>Olá, administrador {user.name}</Text>
        <Text>O que deseja fazer?</Text>
        <View style={styles.options}>
          <TouchableOpacity>
            <Text>Acessar usuários</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Acessar registros de bags</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {/* <Text style={styles.greeting}>Olá, {user.name}</Text> */}
      <Text>O que deseja fazer?</Text>
      <View style={styles.btns}>
        <TouchableOpacity style={styles.options}>
          <Text>Consultar Bag(s)</Text>
          <FontAwesome name="shopping-bag" size={40} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Registrar novo Bag</Text>
          <FontAwesome name="plus-circle" size={40} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Atualizar Bag</Text>
          <FontAwesome name="toggle-up" size={40} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Falar com o Suporte</Text>
          <FontAwesome name="support" size={40} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
  greeting: {
    fontSize: 22,
    fontWeight: "600",
    letterSpacing: 10,
    textAlign: "center",
  },
});
