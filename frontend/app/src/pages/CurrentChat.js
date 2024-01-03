import { useContext, useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import instance from '../api/connection';
import { AuthContext } from '../context/Auth';

export default function CurrentChat() {
  const [messages, setMessages] = useState([])
  const {currentChat, user} = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      const { data } = await instance.get(`/messages/`, {id_chat: currentChat.id_chat})
      setMessages(data)
    })();
  }, [])

  return (
    <ScrollView>
      {messages.length !== 0 && (
        <View>
          {messages.map((msg) => (
            <View>
            <Text>{msg.content}</Text>
            <Text>{msg.sender_id}</Text>
            <Text>{msg.receiver_id}</Text>
            </View>            
          ))}
        </View>
      )}
    </ScrollView>
  );
}