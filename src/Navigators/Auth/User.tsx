import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native-paper";

export type ParamList = {
  authHome: undefined;
};

const Stack = createNativeStackNavigator<ParamList>();

const User = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="authHome"
      options={{ title: "User" }}
      component={() => <Text>User</Text>}
    />
  </Stack.Navigator>
);

export default User;
