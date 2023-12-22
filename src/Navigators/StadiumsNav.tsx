import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native-paper";
import Home from "../stadiums/Home/Home";

export type StackParamList = {
  stadiumsHome: undefined;
  stadiumsStadium: {
    id: string;
  };
};

const Stack = createNativeStackNavigator<StackParamList>();

const StadiumsNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="stadiumsHome"
        options={{ title: "Stadiums" }}
        component={Home}
      />
      <Stack.Screen
        name="stadiumsStadium"
        options={{ title: "Name of a stadium" }}
        component={() => <Text>Stadiums Stadium</Text>}
      />
    </Stack.Navigator>
  );
};

export default StadiumsNav;
