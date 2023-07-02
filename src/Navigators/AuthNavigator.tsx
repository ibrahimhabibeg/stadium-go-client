import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import { AuthContext } from "../Providers/Auth";
import { Button, Text } from "react-native-paper";
import { View } from "react-native";

type StackParamList = {
  authHome: undefined;
}

const Stack = createNativeStackNavigator<StackParamList>();

const AuthNavigaor = () => {
  const {id, token, isOwner, isLoggedIn, login, logout} = useContext(AuthContext);
  
  const homeText = () => {
    if(!isLoggedIn) return <Text>You arer not logged in</Text>
    else if(isOwner) return <Text>You are logged in as an owner {id} with token {token}</Text>
    else return <Text>You are logged in as a user {id} with token {token}</Text>
  }

  const home = () => {
    return(
      <View>
        {homeText()}
        <Button onPress={logout}>
          logout
        </Button>
        <Button onPress={()=>login({id:1, token:"fer2332", isOwner:false})}>
          Login as user
        </Button>
        <Button onPress={()=>login({id:1, token:"sg4we", isOwner:true})}>
          Login as owner
        </Button>
      </View>
    )
  }

  return (
    <Stack.Navigator>
      <Stack.Screen name="authHome" options={{ title: "Authorization" }} component={home} />
    </Stack.Navigator>
  )
}

export default AuthNavigaor;