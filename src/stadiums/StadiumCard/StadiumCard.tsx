import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Avatar, Card, IconButton, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../Navigators/StadiumsNav";
type propsType = {
  stadium: {
    id: string;
    name: string;
    size?: number;
    owner: { username: string };
    location?: { latitude: number; longitude: number };
    city?: { name: string };
  };
};

const StadiumCard = ({ stadium }: propsType) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  return (
    <Card
      style={{ width: "80%", alignSelf: "center", marginVertical: 10 }}
      onPress={() => navigation.navigate("stadiumsStadium", { id: stadium.id })}
      contentStyle={{ justifyContent: "center", minHeight: 220 }}
    >
      <View style={styles.row}>
        <IconButton icon={"soccer-field"} />
        <Text variant="titleMedium">{stadium.name}</Text>
      </View>
      {stadium.city && (
        <View style={styles.row}>
          <IconButton icon={"map-marker"} />
          <Text>{stadium.city.name}</Text>
        </View>
      )}
      {stadium.size && (
        <View style={styles.row}>
          <IconButton icon={"account-group"} />
          <Text>{stadium.size}</Text>
        </View>
      )}
      <View style={styles.row}>
        <Avatar.Text
          label={stadium.owner.username.substring(0, 1).toUpperCase()}
          size={24}
          style={{ marginRight: 15 }}
        />
        <Text>{stadium.owner.username}</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default StadiumCard;
