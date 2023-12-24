import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserProfile from "../../profileTab/userProfile/UserProfile";

export type ParamList = {
  authHome: undefined;
};

const Stack = createNativeStackNavigator<ParamList>();

const UserProfileNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="authHome"
        options={{ title: "User" }}
        component={UserProfile}
      />
    </Stack.Navigator>
  );
};

export default UserProfileNav;
