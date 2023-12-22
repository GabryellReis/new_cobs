import { useState, useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AuthContext } from '../context/Auth'
import { FontAwesome } from '@expo/vector-icons'

export default function Home() {
  const { user } = useContext(AuthContext)

  if (user.permissions === 'admin') {
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
    )
  }
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Olá, {user.name}</Text>
      <Text>O que deseja fazer?</Text>
      <View style={styles.options}>
      <TouchableOpacity style={styles.optionsButtons.btn1}>
        <Text style={styles.textButtons}>Consultar Bag(s)</Text>
        <FontAwesome name='shopping-bag' size={40} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionsButtons.btn2}>
        <Text style={styles.textButtons}>Registrar novo Bag</Text>
        <FontAwesome name='plus-circle' size={40}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionsButtons.btn3}>
        <Text style={styles.textButtons}>Atualizar Bag</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionsButtons.btn4}>
        <Text style={styles.textButtons}>Falar com o Suporte</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },
  greeting: {
    fontSize: 22,
    fontWeight: '600',
    letterSpacing: 10,
    textAlign: 'center',
  },
  options: {
    flex: 2,
    justifyContent: 'center',
    alignItems: "center",
    padding: 10,
    backgroundColor: "#1c1c1c"
  },
  textButtons: {
    fontSize: 18,
    fontWeight: '400',
    color: "#fff",
  },
  optionsButtons: {
    btn1: {
      backgroundColor: '#990000',
      width: 180
    },
    btn2: {
      backgroundColor: '#009900',
      width: 180
    },
    btn3: {
      backgroundColor: '#000099',
      width: 180
    },
    btn4: {
      backgroundColor: '#105090',
      width: 180
    }
  }
})