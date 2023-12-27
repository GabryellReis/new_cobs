import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'

export default function BagRegister() {
  const [bagForm, setBagForm] = useState({ nid: '', state: '' })
  const [operation, setOperation] = useState('')
  const [location, setLocation] = useState('')
  const operacoes = ['ENTRADA', 'SAÍDA']
  const locacoes = ['GALPÃO 1', 'GALPÃO 2', 'GALPÃO 3']

  return (
    <View style={styles.container}>
      <Text>NID:</Text>
      <TextInput placeholder='insira o número de identificação' onChangeText={text => setBagForm({ nid: text })} style={styles.input} />
      <Text>LOCATION:</Text>
      <SelectList data={locacoes} save='value' setSelected={val => setLocation(val)} />
      <Text>STATE:</Text>
      <TextInput placeholder='insira as condições do bag' onChangeText={text => setBagForm({ state: text })} style={styles.input} />
      <Text>OPERATION:</Text>
      <SelectList data={operacoes} save='value' setSelected={val => setOperation(val)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
  }
})