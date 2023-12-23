import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../stadiums/Home/Home";
import StadiumPage from "../stadiums/StadiumPage/StadiumPage";
import AddTimeslotPage from "../stadiums/AddTimeslot/AddTimeslotPage";

export type StackParamList = {
  stadiumsHome: undefined;
  stadiumsStadium: {
    id: string;
  };
  stadiumsAddTimeslot: {
    stadiumId: string;
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
      <Stack.Screen
        name="stadiumsAddTimeslot"
        options={{ title: "Add Timeslot" }}
        component={AddTimeslotPage}
      />
    </Stack.Navigator>
  );
};

export default StadiumsNav;
