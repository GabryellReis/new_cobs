import { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function TransportRegister() {
  const [placa, setPlaca] = useState(null)
  const [motorista, setMotorista] = useState(null)

  return (
    <View style={styles.container}>
      <TextInput placeholder='Placa do Veículo' onChangeText={text => setPlaca = { text }} style={styles.inputs} />
      <TextInput placeholder='Nome do Motorista' onChangeText={text => setMotorista = { text }} style={styles.inputs} />
      <TextInput placeholder='CPF' onChangeText={text => setMotorista = { text }} style={styles.inputs} />
      <TextInput placeholder='CNH' onChangeText={text => setMotorista = { text }} style={styles.inputs} />
      <TextInput placeholder='Nome do Motorista' onChangeText={text => setMotorista = { text }} style={styles.inputs} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    gap: 30
  },
  inputs: {
    width: 280,
    borderBottomWidth: 1,
    margin: 10
  }
})