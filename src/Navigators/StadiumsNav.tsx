import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../stadiums/Home/Home";
import StadiumPage from "../stadiums/StadiumPage/StadiumPage";

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
        options={{ title: "Stadium" }}
        component={StadiumPage}
      />
    </Stack.Navigator>
  );
};

export default StadiumsNav;
