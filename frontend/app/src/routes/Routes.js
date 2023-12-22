import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/Login";
import Home from "../pages/Home";

const Stack = createNativeStackNavigator()
export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="login" component={Login} options={{title: 'COBS'}}/>
      <Stack.Screen name="home" component={Home} options={{title: 'COBS'}}/>
    </Stack.Navigator>
  );
}
