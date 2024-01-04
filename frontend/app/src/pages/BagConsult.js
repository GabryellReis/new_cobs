import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import { useState } from 'react';
import { getAllBags, getBagByNid } from '../services/requests'
import { useNavigation } from '@react-navigation/native';

export default function BagConsult() {
  const [nid, setNid] = useState(null);
  const [bags, setBags] = useState([]);
  const history = useNavigation();

  async function requestBags() {
    if (nid === null) {
      const data = await getAllBags()
      setBags(data)
      return;
    }
    const data = await getBagByNid(nid)
    setBags(data)
    return;
  }

  async function redirectByNid(id) {
    history.navigate(`bag/${id}`)
  }


  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>Insira um NID:</Text>
        <TextInput placeholder='NID:' keyboardType='numeric' onChangeText={(newText) => setNid(newText)} style={styles.textInput} />
        <TouchableOpacity onPress={requestBags}>
          <FontAwesome name='search' size={40} />
        </TouchableOpacity>

        {bags && bags.map((bag) => {
          return (
            <View>
              <TouchableOpacity onPress={redirectByNid(bag.nid)}>
                <Text>{bag.nid}</Text>
                <Text>{bag.location}</Text>
                <Text>{bag.state}</Text>
                <Text>{bag.operation}</Text>
              </TouchableOpacity>
            </View>
          )
        })}
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