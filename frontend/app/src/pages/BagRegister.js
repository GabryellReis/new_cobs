import { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
  Image,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { registerBag } from "../services/requests";
import { Camera, CameraType } from "expo-camera";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";

export default function BagRegister() {
  const [bagForm, setBagForm] = useState({ nid: "", state: "" });
  const [operation, setOperation] = useState("");
  const [location, setLocation] = useState("");
  const operacoes = ["ENTRADA", "SAÍDA"];
  const locacoes = ["GALPÃO 1", "GALPÃO 2", "GALPÃO 3"];
  const [camType, setCamType] = useState(Camera.Constants.Type.back);
  const [permissions, setPermission] = useState(null);
  const camRef = useRef(null);
  const [capturadPhoto, setCapturedPhoto] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setPermission(status === "granted");
    })();
  }, []);

  if (permissions === null) return <View />;
  if (permissions === false)
    return (
      <View>
        <Text>Acesso Negado</Text>
      </View>
    );

  async function toggleCam() {
    camType === Camera.Constants.Type.back
      ? setCamType(Camera.Constants.Type.front)
      : setCamType(Camera.Constants.Type.back);
  }

  async function takePicture() {
    if (camRef) {
      const data = await camRef.current.takePictureAsync();
      setCapturedPhoto(data.uri);
      setOpenModal(true);
    }
  }

  return (
    <View style={styles.container}>
      <Text>NID:</Text>
      <TextInput
        placeholder="insira o número de identificação"
        onChangeText={(text) => setBagForm({ nid: text })}
        style={styles.input}
      />
      <Text>LOCATION:</Text>
      <SelectList
        data={locacoes}
        save="value"
        setSelected={(val) => setLocation(val)}
      />
      <Text>STATE:</Text>
      <TextInput
        placeholder="insira as condições do bag"
        onChangeText={(text) => setBagForm({ state: text })}
        style={styles.input}
      />
      <Text>OPERATION:</Text>
      <SelectList
        data={operacoes}
        save="value"
        setSelected={(val) => setOperation(val)}
      />
      <View>
        <Camera style={styles.camera} type={camType} ref={camRef}>
          <TouchableOpacity onPress={() => toggleCam()}>
            <MaterialIcons
              name="switch-camera"
              size={40}
              style={{ color: "#990000" }}
            />
          </TouchableOpacity>
        </Camera>
      </View>
      <TouchableOpacity onPress={() => takePicture()}>
        <FontAwesome name="camera" size={40} color="#1c2faa" />
      </TouchableOpacity>
      {capturadPhoto && (
        <Modal animationType="slide" transparent={false} visible={openModal}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Image src={capturadPhoto} style={{width: '100%', height: 300, borderRadius: 25}}/>
            <TouchableOpacity>
              <FontAwesome name="check" size={35} color="#009900"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setOpenModal(false)}>
              <FontAwesome name="window-close" size={35} color="#990000"/>
            </TouchableOpacity>
          </View>
        </Modal>
      )}
      <TouchableOpacity>
        <Text>Cadastrar Bag</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
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
    width: 380,
    height: 300,
  },
});
