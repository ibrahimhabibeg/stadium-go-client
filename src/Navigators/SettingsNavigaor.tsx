import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native-paper";

type StackParamList = {
  settingsHome: undefined;
}

const Stack = createNativeStackNavigator<StackParamList>();

const SettingsNavigaor = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="settingsHome" options={{ title: "Settings" }} component={() => <Text>Settings Home</Text>} />
    </Stack.Navigator>
  )
}

export default SettingsNavigaor;