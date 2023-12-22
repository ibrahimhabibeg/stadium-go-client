import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import StadiumsNav from "../StadiumsNav";
import SettingsNav from "../SettingsNav";
import { ThemeContext } from "../../Providers/Theme";
import { useContext } from "react";
import { IconButton } from "react-native-paper";
import UserProfileNav from "../profile/UserProfileNav";
import BookingsNav from "../BookingsNav";

type TabParamList = {
  Stadiums: undefined;
  Settings: undefined;
  Auth: undefined;
  Bookings: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const screenToIconMap = {
  Stadiums: "soccer-field",
  Settings: "cog",
  Auth: "account",
  Bookings: "ticket",
};

const UserNav = () => {
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
          component={UserProfileNav}
          options={{ title: "Profile" }}
        />
        <Tab.Screen name="Bookings" component={BookingsNav} />
        <Tab.Screen name="Settings" component={SettingsNav} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default UserNav;
