import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import { useState } from 'react';
// import instance from '../api/connection'

export default function BagConsult() {
  const [nid, setNid] = useState('')


  return (
    <ScrollView>
      <View>
        <Text style={styles.text}>Insira um NID:</Text>
        <TextInput placeholder='NID:' keyboardType='numeric' onChangeText={(newText) => setNid(newText)} style={styles.textInput} />
      </View>
    </ScrollView>
  )


  // return (
  //   <View style={styles.container}>
  //     <Text style={styles.text}>Insira um NID</Text>
  //     <TextInput placeholder='NID' keyboardType='numeric' onChangeText={newTxt => setNid(newTxt)} style={styles.textInput}/>
  //     <TouchableOpacity style={styles.searchBtn}>
  //       <FontAwesome name='search' size={40} />
  //     </TouchableOpacity>
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 6,
    color: '#990055'
  },
  textInput: {
      borderBottomWidth: 2,
      width: 240,
      textAlign: 'center',
      color: '#990054'
  },
  searchBtn: {
    borderRadius: 20,
    backgroundColor: "#108099",
    borderStyle: 'solid',
    borderWidth: "2",
    borderColor: "#108895"
  }
})