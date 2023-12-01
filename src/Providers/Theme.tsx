import {
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
  adaptNavigationTheme,
} from "react-native-paper";
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import { createContext, useEffect, useState } from "react";
import { setItemAsync, getItemAsync } from "expo-secure-store";
import { IS_DARK_KEY } from "../config/secureStore";

const { LightTheme: AdaptedLightTheme, DarkTheme: AdaptedDarkTheme } =
  adaptNavigationTheme({
    reactNavigationLight: NavigationDefaultTheme,
    reactNavigationDark: NavigationDarkTheme,
  });

const LightTheme = {
  ...MD3LightTheme,
  ...AdaptedLightTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...AdaptedLightTheme.colors,
  },
};
const DarkTheme = {
  ...MD3DarkTheme,
  ...AdaptedDarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    ...AdaptedDarkTheme.colors,
  },
};

export const ThemeContext = createContext({
  theme: DarkTheme,
  toggleTheme: () => {},
  isDark: true,
});

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const setDefaultState = async () => {
    const cachedValue = await getItemAsync(IS_DARK_KEY);
    setIsDark(cachedValue === "true");
  };

  useEffect(() => {
    setDefaultState();
  }, []);

  const toggleTheme = async () => {
    await setItemAsync(IS_DARK_KEY, String(!isDark));
    setIsDark((val) => !val);
  };

  return (
    <ThemeContext.Provider
      value={{
        isDark: isDark,
        theme: isDark ? DarkTheme : LightTheme,
        toggleTheme,
      }}
    >
      <PaperProvider theme={isDark ? DarkTheme : LightTheme}>
        {children}
      </PaperProvider>
    </ThemeContext.Provider>
  );
};
