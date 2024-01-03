import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/Login";
import Home from "../pages/Home";
import BagConsult from "../pages/BagConsult";
import BagRegister from "../pages/BagRegister";
import BagDetail from "../pages/BagDetails";
import Chat from "../pages/Chat";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


const redirectProfile = () =>  history.navigate('/profile')
const redirectChat = () =>  history.navigate('/chats')
const Stack = createNativeStackNavigator()
export default function Routes() {
  const history = useNavigation()
  return (
    <Stack.Navigator>
      <Stack.Screen name="login" component={Login} options={{ title: 'COBS' }} />
      <Stack.Screen name="home" component={Home} options={{
        title: 'HOME', headerRight: () => (
          <TouchableOpacity onPress={redirectProfile}>
            <FontAwesome name='user-circle-o' />
          </TouchableOpacity>
        ), headerRight: () => (
          <TouchableOpacity onPress={redirectChat}>
            <FontAwesome name='paper-plane' />
          </TouchableOpacity>
        ),
      }} />
      <Stack.Screen name="bags" component={BagConsult} options={{ title: 'BAGS' }} />
      <Stack.Screen name="bag/register" component={BagRegister} options={{ title: 'BAGS REGISTER' }} />
      <Stack.Screen name="bag/:id" component={BagDetail} options={{ title: 'BAGS DETAIL' }} />
      <Stack.Screen name="chats" component={Chat} options={{ title: 'CHATS' }} />
      <Stack.Screen name="chat/:id" component={Chat} />
    </Stack.Navigator>
  );
}
