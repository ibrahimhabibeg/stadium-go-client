import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OwnerProfile from "../../profileTab/OwnerProfile";
import CreateStadium from "../../profileTab/CreateStadium";

export type ParamList = {
  authHome: undefined;
  authCreateStadium: undefined;
};

const Stack = createNativeStackNavigator<ParamList>();

const Owner = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="authHome"
        options={{ title: "My Profile" }}
        component={OwnerProfile}
      />
      <Stack.Screen
        name="authCreateStadium"
        options={{ title: "Create Stadium" }}
        component={CreateStadium}
      />
    </Stack.Navigator>
  );
};

export default Owner;
