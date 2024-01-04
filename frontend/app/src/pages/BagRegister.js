import { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
  Image,
  ScrollView,
  Button,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { Camera } from "expo-camera";
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
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [openCam, setOpenCam] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [photoMemo, setPhotoMemo] = useState(null);

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
  function savePhoto() {
    setPhotoMemo(camRef)
    setOpenModal(false)
    setOpenCam(false)
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Nº IDENTIFICADOR:</Text>
        <TextInput
          keyboardType="numeric"
          placeholder="NID"
          onChangeText={(text) => setBagForm({ nid: text })}
          style={styles.input}
        />
        <Text>LOCAÇÃO:</Text>
        <SelectList
          data={locacoes}
          save="value"
          setSelected={(val) => setLocation(val)}
        />
        <Text>ESTADO:</Text>
        <TextInput
          placeholder="DESCRIÇÃO DO BAG"
          onChangeText={(text) => setBagForm({ state: text })}
          style={styles.input}
        />
        <Text>OPERAÇÃO:</Text>
        <SelectList
          data={operacoes}
          save="value"
          setSelected={(val) => setOperation(val)}
        />
        <Button title="Abrir Camera" onPress={() => setOpenCam(true)} />
        {photoMemo !== null && <Text>Foto registrada com sucesso!</Text>}
        {openCam && (
          <View style={styles.cameraContainer}>
            <Camera style={styles.camera} type={camType} ref={camRef}>
              <TouchableOpacity onPress={toggleCam}>
                <MaterialIcons
                  name="switch-camera"
                  size={40}
                  style={{ color: "#990000" }}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setOpenCam(false)}>
                <FontAwesome
                  name="window-close"
                  size={40}
                  style={{ color: "#990000" }}
                />
              </TouchableOpacity>
            </Camera>
            <TouchableOpacity onPress={() => takePicture()}>
              <FontAwesome name="camera" size={40} color="#1c2faa" />
            </TouchableOpacity>
          </View>
        )}

        {capturedPhoto && (
          <Modal animationType="slide" transparent={false} visible={openModal}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 50
              }}
            >
              <Image
                src={capturedPhoto}
                style={{ width: "99%", height: 600 }}
              />
             <View style={{flex: 1, flexDirection: 'row'}}>
             <TouchableOpacity onPress={savePhoto}>
                <FontAwesome name="check" size={40} color="#009900" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setOpenModal(false)}>
                <FontAwesome name="window-close" size={40} color="#990000" />
              </TouchableOpacity>
            </View>
             </View>
          </Modal>
        )}
        <Button title="Cadastrar Bag" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginTop: 20
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
    height: 600,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  cameraContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
