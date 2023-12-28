import { useState, useContext, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AuthContext } from "../context/Auth";
import { FontAwesome } from "@expo/vector-icons";

export default function Home() {
  const { user, loading, setLoading } = useContext(AuthContext);

  useEffect(() => {
    setLoading(false)
  }, [])

  if (user && user.permissions == "admin") {
    return (
      <View style={styles.container}>
        <Text style={styles.greeting}>Olá, administrador {user.name}</Text>
        <View style={styles.options}>
        <Text>O que deseja fazer?</Text>
          <TouchableOpacity style={styles.btn1}>
            <Text>Acessar usuários</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn2}>
            <Text>Acessar registros de bags</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {/* <Text style={styles.greeting}>Olá, {user.name}!!</Text> */}
      <View style={styles.options}>
      <Text>O que deseja fazer?</Text>
        <TouchableOpacity style={styles.btn1}>
          <Text>Consultar Bag(s)</Text>
          <FontAwesome name="shopping-bag" size={40} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn2}>
          <Text>Registrar novo Bag</Text>
          <FontAwesome name="plus-circle" size={40} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn3}>
          <Text>Atualizar Bag</Text>
          <FontAwesome name="toggle-up" size={40} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn4}>
          <Text>Fale com o Suporte</Text>
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
  },
  greeting: {
    fontSize: 22,
    fontWeight: "600",
    letterSpacing: 8,
    textAlign: "center",
  },
  options: {
    backgroundColor: '#ccc',
    gap: 30,
    padding: 30
  },
  btn1: {
    backgroundColor: '#009900'
  },
  btn2: {
    backgroundColor: '#100099'
  },
  btn3: {
    backgroundColor: '#655050'
  },
  btn4: {
    backgroundColor: '#990010'
  },
});
