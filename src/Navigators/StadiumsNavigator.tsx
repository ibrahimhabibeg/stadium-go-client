import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, Button } from "react-native-paper";
import { ThemeContext } from "../Theme";
import { useContext } from "react";

type StackParamList = {
  stadiumsHome: undefined;
  stadiumsStadium: undefined;
}

const Stack = createNativeStackNavigator<StackParamList>();

const StadiumsNavigator = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <Stack.Navigator>
      <Stack.Screen name="stadiumsHome" options={{ title: "Stadiums" }} component={() => <Button onPress={toggleTheme}>Change Theme</Button>} />
      <Stack.Screen name="stadiumsStadium" options={{ title: "Name of a stadium" }} component={() => <Text>Stadiums Stadium</Text>} />
    </Stack.Navigator>
  )
}

export default StadiumsNavigator;