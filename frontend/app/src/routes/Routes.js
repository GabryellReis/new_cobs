import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/Login";

const Stack = createNativeStackNavigator()
export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="login" component={Login} options={{title: 'COBS'}}/>
    </Stack.Navigator>
  );
}
