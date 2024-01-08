import { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import {getBagByNid, registerBag} from '../services/requests'
import {MaterialIcons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

export default function BagUpdate() {
  const [searchBag, setSearchBag] = useState(null)
  const [currentBag, setCurrentBag] = useState(null)
  const [location, setLocation] = useState(null)
  const [desc, setDesc] = useState(null)
  const [operation, setOperation] = useState(null)
  const history = useNavigation()

  async function getBag() {
    const {data} = await getBagByNid(searchBag)
    setCurrentBag(data)
  }

  async function updateTheBag() {
    const {data} = await registerBag(searchBag, location, desc, operation);
    history.navigate('bags')
  }
  

 return (
   <ScrollView style={styles.container}>
    <TextInput placeholder='busque por um bag' onChangeText={(nid) => setSearchBag(nid)}/>
    <TouchableOpacity onPress={getBag}>
      <MaterialIcons name='search' size={35} />
    </TouchableOpacity>
    {currentBag !== null && (
      <View>
        <TextInput placeholder='LOCALIZAÇÃO'  onChangeText={text => setLocation(text)}/>
        <TextInput placeholder='DESCRIÇÃO' onChangeText={text => setDesc(text)}/>
        <TextInput placeholder='OPERAÇÃO' onChangeText={text => setOperation(text)}/>
      </View>
    )}
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})