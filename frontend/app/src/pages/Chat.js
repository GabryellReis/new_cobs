import { useContext, useEffect, useState } from 'react';
import { ScrollView, TextInput, TouchableOpacity, View, Text, VirtualizedList } from 'react-native';
import { AuthContext } from '../context/Auth'
import { FontAwesome } from '@expo/vector-icons'
import { getAllChatsByRid, getChatById, getChats, getMessagesByChatId } from '../services/requests'
import { useNavigation } from '@react-navigation/native';

export default function Chats() {
  const [chats, setChats] = useState([])
  const { user, setCurrentChat } = useContext(AuthContext);
  const history = useNavigation()

  const redirectForCurrentChat = async (id) => {
      const res = await getChatById(id);
      setCurrentChat(res)
      history.navigate(`chat/${id}`)
  }


  useEffect(() => {
    (async () => {
      const getChats = await getAllChatsByRid(user.rid)
      setChats(getChats)
    })();
  }, [])

  return (
    <ScrollView>
      <View>
        {chats.length !== 0 && chats.map((chat) => (
          <View>
            <Text>{chat.id_chat}</Text>
            <TouchableOpacity onPress={redirectForCurrentChat(chat.id_chat)}>
              <FontAwesome name='clipboard' size={30} color={"#0471A6"}/>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}