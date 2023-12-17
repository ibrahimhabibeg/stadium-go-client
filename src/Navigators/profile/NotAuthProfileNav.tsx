import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "../../auth/Signup";
import Login from "../../auth/Login";
import OwnerSignup from "../../auth/OwnerSignup";
import OwnerLogin from "../../auth/OwnerLogin";

export type ParamList = {
  authSignup: undefined;
  authLogin: undefined;
  authOwnerSignup: undefined;
  authOwnerLogin: undefined;
};

const Stack = createNativeStackNavigator<ParamList>();

const NotAuthProfileNav = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="authSignup"
      options={{ title: "Signup" }}
      component={Signup}
    />
    <Stack.Screen
      name="authLogin"
      options={{ title: "Login" }}
      component={Login}
    />
    <Stack.Screen
      name="authOwnerSignup"
      options={{ title: "Signup as Owner" }}
      component={OwnerSignup}
    />
    <Stack.Screen
      name="authOwnerLogin"
      options={{ title: "Login" }}
      component={OwnerLogin}
    />
  </Stack.Navigator>
);

export default NotAuthProfileNav;
