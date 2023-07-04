import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native-paper";
import { ThemeContext } from "../Providers/Theme";
import { AuthContext } from "../Providers/Auth";
import { useContext } from "react";
import { View } from "react-native";

type StackParamList = {
  settingsHome: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

const SettingsNavigaor = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const { logout } = useContext(AuthContext);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="settingsHome"
        options={{ title: "Settings" }}
        component={() => (
          <View>
            <Button onPress={toggleTheme}>Change Theme</Button>
            <Button onPress={logout}>Logout</Button>
          </View>
        )}
      />
    </Stack.Navigator>
  );
};

export default SettingsNavigaor;
