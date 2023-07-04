import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import StadiumsNavigator from "./StadiumsNavigator";
import SettingsNavigaor from "./SettingsNavigaor";
import { ThemeContext } from "../Providers/Theme";
import { useContext } from "react";
import { IconButton } from "react-native-paper";
import AuthNavigaor from "./Auth/AuthNavigator";

type TabParamList = {
  Stadiums: undefined;
  Settings: undefined;
  Auth: undefined;
}

const Tab = createBottomTabNavigator<TabParamList>();

const screenToIconMap = {
  Stadiums: "soccer-field",
  Settings: "cog",
  Auth: "account"
}

const MainNavigator = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <NavigationContainer theme={theme}>
      <Tab.Navigator screenOptions={({route})=>({
        headerShown: false,
        tabBarIcon: ({color, size}) => <IconButton icon={screenToIconMap[route.name]} iconColor={color} size={size}/>
      })}>
        <Tab.Screen name="Stadiums" component={StadiumsNavigator} />
        <Tab.Screen name="Auth" component={AuthNavigaor} />
        <Tab.Screen name="Settings" component={SettingsNavigaor} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;