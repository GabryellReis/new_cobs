import { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import { registerBag } from '../services/requests'
import { Camera, CameraType } from 'expo-camera'
import { MaterialIcons } from '@expo/vector-icons'

export default function BagRegister() {
  const [bagForm, setBagForm] = useState({ nid: '', state: '' })
  const [operation, setOperation] = useState('')
  const [location, setLocation] = useState('')
  const operacoes = ['ENTRADA', 'SAÍDA']
  const locacoes = ['GALPÃO 1', 'GALPÃO 2', 'GALPÃO 3']
  const [camType, setCamType] = useState(CameraType)
  const [camRef, setCamRef] = useRef('')
  const [camPermission, setCamPermissions] = useState()
  useEffect(() => {
    setCamPermissions(Camera.getCameraPermissionsAsync)
  }, [])

  // async function register() {
  //   try {
  //     const { nid, state } = bagForm
  //     const newBag = await registerBag(nid, location, state, operation, camRef)
  //     return newBag
  //   } catch (error) {
  //     return console.log(error)
  //   }
  // }

  async function camTypeToggle() {
    if (camType == CameraType.back) {
      return setCamType(CameraType.front)
    }
    if (camType == CameraType.front) {
      return setCamType(CameraType.back)
    }
    return;
  }

  // async function takeAPicture() {
  //   setCamRef(camRef)
  // }

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
      <View>
        <Camera type={camType} ref={camRef}>
          <View>
            <TouchableOpacity onPress={camTypeToggle}>
              <MaterialIcons name='switch-camera' sixe={40} />
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
      <TouchableOpacity>
        <Text>Tirar foto</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Cadastrar Bag</Text>
      </TouchableOpacity>
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
  },
  camera: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})