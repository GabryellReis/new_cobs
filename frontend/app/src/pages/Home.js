import { useState, useContext, useEffect } from "react";
import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AuthContext } from "../context/Auth";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const { user } = useContext(AuthContext);
  const history = useNavigation()

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


  async function redirectForOccurrenceRegister() {
    try {
      return history.navigate('occurrence/register')
    } catch (error) {
      return error
    }
  }

  async function redirectForBagsRegister() {
    try {
      return history.navigate('bag/register')
    } catch (error) {
      return error
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Olá, {user.name}!!</Text>
      <View style={styles.options}>
        <Text>O que deseja fazer?</Text>
        <Button title="Registrar Ocorrência" color={"#458997"} onPress={redirectForOccurrenceRegister} />
        <Button title="Registrar Bags" color={"#458997"} onPress={redirectForBagsRegister} />
        <Button title="Registrar Clientes" color={"#458997"} onPress={redirectForBagsRegister} />

        <Button title="Consultar Ocorrência" color={"#994107"} />
        <Button title="Consultar Bag" color={"#994107"} />
        <Button title="Consultar Clientes" color={"#994107"} />
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
    letterSpacing: 4,
    textAlign: "center",
  },
  options: {
    backgroundColor: '#ccc',
    gap: 30,
    padding: 30,
  },
});
