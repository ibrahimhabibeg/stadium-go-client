import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native-paper";
import { ThemeContext } from "../Providers/Theme";
import { useContext } from "react";

type StackParamList = {
  settingsHome: undefined;
}

const Stack = createNativeStackNavigator<StackParamList>();

const SettingsNavigaor = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <Stack.Navigator>
      <Stack.Screen name="settingsHome" options={{ title: "Settings" }} component={() => <Button onPress={toggleTheme}>Change Theme</Button>} />
    </Stack.Navigator>
  )
}

export default SettingsNavigaor;