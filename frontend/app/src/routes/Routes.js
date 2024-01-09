import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/Login";
import Home from "../pages/Home";
import BagRegister from "../pages/BagRegister";
import OccurrenceRegister from "../pages/OccurrenceRegister";

const Stack = createNativeStackNavigator();
export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={Login}
        options={{ title: "COBS" }}
      />
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          title: "HOME",
          headerBackVisible: false
        }}
      />
      <Stack.Screen name="bag/register" component={BagRegister} options={{title: "CADASTRAR BAGS"}}/>
      <Stack.Screen name="occurrence/register" component={OccurrenceRegister} options={{title: "CADASTRAR OCORRÊNCIA"}}/>
    </Stack.Navigator>
  );
}
