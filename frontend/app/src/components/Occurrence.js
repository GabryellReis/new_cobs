import { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, View } from 'react-native';

export default function Occurrence() {
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState(new Date())

  const [dataNf, setDataNf] = useState(null)
  const [dataEntrada, setDataEntrada] = useState(null)
  const [dataSaida, setDataSaida] = useState(null)
  
  const [terceiro, setTerceiro] = useState(0)
  const [totalBags, setTotalBags] = useState(0)
  const [totalAvariados, setTotalAvariados] = useState(0)
 return (
   <View style={styles.container}>
    <TextInput placeholder='Total de Bags' style={styles.inputs} onChangeText={text => setTotalBags(text)}/>
    <TextInput placeholder='Total de Terceiros' style={styles.inputs} onChangeText={text => setTerceiro(text)}/>
    <TextInput placeholder='Total de Avariados' style={styles.inputs} onChangeText={text => setTotalAvariados(text)}/>
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