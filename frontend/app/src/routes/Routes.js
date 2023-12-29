import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/Login";
import Home from "../pages/Home";
import BagConsult from "../pages/BagConsult";
import BagRegister from "../pages/BagRegister";


const Stack = createNativeStackNavigator()
export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="login" component={Login} options={{ title: 'COBS' }} />
      <Stack.Screen name="home" component={Home} options={{ title: 'HOME' }} />
      <Stack.Screen name="rotateste" component={BagConsult} options={{ title: 'BAGS' }} />
      {/* <Stack.Screen name="bag/register" component={BagRegister} options={{ title: 'BAGS REGISTER' }} /> */}
    </Stack.Navigator>
  );
}
