import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Avatar, IconButton, Text } from "react-native-paper";
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
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("stadiumsStadium", { id: stadium.id })}
    >
      <View style={styles.textContainer}>
        <View>
          <Text variant="titleMedium" style={styles.title} numberOfLines={1}>
            {stadium.name}
          </Text>
          {stadium.city && (
            <View
              style={{ flexDirection: "row", alignItems: "center", height: 25 }}
            >
              <IconButton
                icon={"map-marker"}
                size={20}
                style={{ marginLeft: 0 }}
              />
              <Text variant="labelMedium">{stadium.city.name}</Text>
            </View>
          )}

          {stadium.size && (
            <View
              style={{ flexDirection: "row", alignItems: "center", height: 25 }}
            >
              <IconButton
                icon={"account-group"}
                size={20}
                style={{ marginLeft: 0 }}
              />
              <Text variant="labelMedium">{stadium.size}</Text>
            </View>
          )}
        </View>
        <View style={styles.ownerContainer}>
          <Avatar.Text
            size={20}
            label={stadium.owner.username.substring(0, 2)}
            style={styles.ownerIcon}
          />
          <Text>{stadium.owner.username}</Text>
        </View>
      </View>
      <Image
        source={require("../../../assets/stadium.jpg")}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    display: "flex",
    flexDirection: "row",
    height: 130,
    justifyContent: "space-around",
  },
  image: {
    width: "25%",
    height: "95%",
    borderRadius: 10,
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    width: "60%",
    justifyContent: "space-between",
  },
  ownerContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
  },
  ownerIcon: {
    marginRight: 10,
  },
  title: {
    overflow: "hidden",
  },
  labelContainer: {
    display: "flex",
    flexDirection: "row",
  },
  icon: {
    height: 20,
  },
});

export default StadiumCard;
