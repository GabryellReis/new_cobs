import { useContext, useEffect, useState } from 'react';
import { ScrollView, TextInput, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { AuthContext } from '../context/Auth'
import { Ionicons } from '@expo/vector-icons'
import { getAllChatsByRid, getChatById, getAllSups } from '../services/requests'
import { useNavigation } from '@react-navigation/native';

export default function Chats() {
  const [chats, setChats] = useState([])
  const [sups, setSups] = useState(null)
  const { user, setCurrentChat } = useContext(AuthContext);
  const history = useNavigation()

  const redirectForCurrentChat = async (id) => {
    const res = await getChatById(id);
    setCurrentChat(res)
    history.navigate(`chat/${id}`)
  }


  useEffect(() => {
    (async () => {
      const getSups = await getAllSups()
      const getChats = await getAllChatsByRid(user.rid)
      setSups(getSups)
      setChats(getChats)
    })();
  }, [])

  return (
    <View style={styles.container}>
      <Text>Recurso ainda não disponível. Aguarde atualizações <Ionicons name='construct' size={25} color={"#2a9d8f"} /></Text>
    </View>
  )

  // if (chats.length === 0) {
  //   return (
  //     <View>
  //       <Text>
  //         Nenhum chat encontrado {"\n"}
  //         Começe uma nova conversa.
  //       </Text>
  //     </View>
  //   )
  // }


  // return (
  //   <ScrollView>
  //     <View>
  //       {chats.length !== 0 && chats.map((chat) => (
  //         <View>
  //           <Text>{chat.id_chat}</Text>
  //           <TouchableOpacity onPress={redirectForCurrentChat(chat.id_chat)}>
  //             <FontAwesome name='clipboard' size={30} color={"#0471A6"}/>
  //           </TouchableOpacity>
  //         </View>
  //       ))}
  //     </View>
  //   </ScrollView>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})