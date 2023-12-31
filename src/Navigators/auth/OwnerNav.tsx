import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import StadiumsNav from "../StadiumsNav";
import SettingsNav from "../SettingsNav";
import { ThemeContext } from "../../Providers/Theme";
import { useContext } from "react";
import { IconButton } from "react-native-paper";
import OwnerProfileNav from "../profile/OwnerProfileNav";

type TabParamList = {
  Stadiums: undefined;
  Settings: undefined;
  Auth: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const screenToIconMap = {
  Stadiums: "soccer-field",
  Settings: "cog",
  Auth: "account",
};

const OwnerNav = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <NavigationContainer theme={theme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <IconButton
              icon={screenToIconMap[route.name]}
              iconColor={color}
              size={size}
            />
          ),
        })}
      >
        <Tab.Screen name="Stadiums" component={StadiumsNav} />
        <Tab.Screen
          name="Auth"
          component={OwnerProfileNav}
          options={{ title: "Profile" }}
        />
        <Tab.Screen name="Settings" component={SettingsNav} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default OwnerNav;
