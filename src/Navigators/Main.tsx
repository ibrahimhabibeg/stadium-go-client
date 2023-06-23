import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import StadiumsNavigator from "./StadiumsNavigator";
import SettingsNavigaor from "./SettingsNavigaor";
import { ThemeContext } from "../Theme";
import { useContext } from "react";

type TabParamList = {
  Stadiums: undefined;
  Settings: undefined;
}

const Tab = createBottomTabNavigator<TabParamList>();

const MainNavigator = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <NavigationContainer theme={theme}>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Stadiums" component={StadiumsNavigator} />
        <Tab.Screen name="Settings" component={SettingsNavigaor} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;