import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import { Button, Text } from "react-native-paper";
import { AuthContext } from "../../Providers/Auth";

export type ParamList = {
  authHome: undefined;
};

const Stack = createNativeStackNavigator<ParamList>();

const UserProfileNav = () => {
  const { logout } = useContext(AuthContext);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="authHome"
        options={{ title: "User" }}
        component={() => <Button onPress={logout}>Log out</Button>}
      />
    </Stack.Navigator>
  );
};

export default UserProfileNav;
