import { useContext } from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import { ThemeContext } from "../../Providers/Theme";

export const FlatListHeader = ({ value, onValueChange }: propsType) => {
  const { theme } = useContext(ThemeContext);
  return (
    <View
      style={{ backgroundColor: theme.colors.background, paddingVertical: 10 }}
    >
      <Searchbar
        value={value}
        style={{ width: "90%", alignSelf: "center" }}
        onChangeText={onValueChange}
      />
    </View>
  );
};

type propsType = {
  value: string;
  onValueChange: (text: string) => void;
};
