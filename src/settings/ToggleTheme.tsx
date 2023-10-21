import { Switch, Text } from "react-native-paper";
import { View } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../Providers/Theme";
import {IconButton} from "react-native-paper";

const ToggleTheme = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
      }}
    >
      <View style={{ flexDirection: "row", alignItems:"center" }}>
        <IconButton icon={"moon-waning-crescent"}/>
        <Text>Dark Mode</Text>
      </View>

      <Switch value={theme.dark} onValueChange={toggleTheme} />
    </View>
  );
};

export default ToggleTheme;
