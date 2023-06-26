import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native-paper";
import Home from "../stadiums/Home";

type StackParamList = {
  stadiumsHome: undefined;
  stadiumsStadium: undefined;
}

const Stack = createNativeStackNavigator<StackParamList>();

const StadiumsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="stadiumsHome" options={{ title: "Stadiums" }} component={Home} />
      <Stack.Screen name="stadiumsStadium" options={{ title: "Name of a stadium" }} component={() => <Text>Stadiums Stadium</Text>} />
    </Stack.Navigator>
  )
}

export default StadiumsNavigator;