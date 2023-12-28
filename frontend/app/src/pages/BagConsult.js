import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import { cloneElement, useState } from 'react';
import instance from '../api/connection'

export default function BagConsult() {
  const [nid, setNid] = useState('')
  const [bags, setBags] = useState([])

  async function getBagByNid() {
    try {
      if (nid == '') {
        const { data } = await instance.get('/bags');
        return setBags(data);
      }
      const { data } = await instance.post('/bag', { nid });
      return setBags(data);
    } catch (error) {
      return console.log(error);
    }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Insira um NID</Text>
      <TextInput placeholder='NID' onChangeText={newTxt => setNid(newTxt)} />
      <TouchableOpacity style={styles.searchBtn} onPress={() => getBagByNid}>
        <FontAwesome name='search' size={40} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 6,
    color: '#fff'
  },
  textInput: {
      borderBottomWidth: 2,
      width: 240,
      textAlign: 'center'
  },

  searchBtn: {
    borderRadius: 20,
    backgroundColor: "#108099",
    borderStyle: 'solid',
    borderWidth: "2",
    borderColor: "#108895"
  }
})