import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native-paper";

export type ParamList = {
  authHome: undefined;
};

const Stack = createNativeStackNavigator<ParamList>();

const Owner = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="authHome"
      options={{ title: "Owner" }}
      component={() => <Text>Owner</Text>}
    />
  </Stack.Navigator>
);

export default Owner;
