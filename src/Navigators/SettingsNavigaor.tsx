import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Settings from "../settings/Settings";

type StackParamList = {
  settingsHome: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

const SettingsNavigaor = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="settingsHome"
        options={{ title: "Settings" }}
        component={Settings}
      />
    </Stack.Navigator>
  );
};

export default SettingsNavigaor;
