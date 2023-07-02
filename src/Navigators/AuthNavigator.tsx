import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import { AuthContext } from "../Providers/Auth";
import { Text } from "react-native-paper";
import Signup from "../auth/Signup";
import Login from "../auth/Login";
import OwnerSignup from "../auth/OwnerSignup";
import OwnerLogin from "../auth/OwnerLogin";

export type NotLoggedInParamList = {
  authSignup: undefined;
  authLogin: undefined;
  authOwnerSignup: undefined;
  authOwnerLogin: undefined;
};

export type OwnerParamList = {
  authHome: undefined;
};

export type UserParamList = {
  authHome: undefined;
};

const OwnerStack = createNativeStackNavigator<OwnerParamList>();
const UserStack = createNativeStackNavigator<UserParamList>();
const NotLoggedInStack = createNativeStackNavigator<NotLoggedInParamList>();

const AuthNavigaor = () => {
  const { isOwner, isLoggedIn } = useContext(AuthContext);

  if (!isLoggedIn)
    return (
      <NotLoggedInStack.Navigator>
        <NotLoggedInStack.Screen
          name="authSignup"
          options={{ title: "Signup" }}
          component={Signup}
        />
        <NotLoggedInStack.Screen
          name="authLogin"
          options={{ title: "Login" }}
          component={Login}
        />
        <NotLoggedInStack.Screen
          name="authOwnerSignup"
          options={{ title: "Signup as Owner" }}
          component={OwnerSignup}
        />
        <NotLoggedInStack.Screen
          name="authOwnerLogin"
          options={{ title: "Login" }}
          component={OwnerLogin}
        />
      </NotLoggedInStack.Navigator>
    );
  else if (isOwner)
    return (
      <OwnerStack.Navigator>
        <OwnerStack.Screen
          name="authHome"
          options={{ title: "Owner" }}
          component={() => <Text>Owner</Text>}
        />
      </OwnerStack.Navigator>
    );
  else
    return (
      <UserStack.Navigator>
        <UserStack.Screen
          name="authHome"
          options={{ title: "User" }}
          component={() => <Text>User</Text>}
        />
      </UserStack.Navigator>
    );
};

export default AuthNavigaor;
