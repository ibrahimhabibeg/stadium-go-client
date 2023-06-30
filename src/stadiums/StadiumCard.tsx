import { View, StyleSheet, Image } from "react-native";
import { Avatar, Text } from "react-native-paper";
import LocationURLLabel from "./LocationUrlLabel";

type propsType = {
  stadium: {
    id: string;
    name: string;
    size?: number;
    owner: { username: string };
    location?: { latitude: number; longitude: number };
  };
};

const StadiumCard = ({ stadium }: propsType) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View>
          <Text variant="titleMedium" style={styles.title} numberOfLines={1}>
            {stadium.name}
          </Text>
          {stadium.location && (
            <LocationURLLabel
              url={`https://maps.google.com/?q=${stadium.location.latitude},${stadium.location.longitude}`}
            />
          )}
          {stadium.size && (
            <Text variant="labelMedium">Size: {stadium.size}</Text>
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
        source={require("../../assets/stadium.jpg")}
        style={styles.image}
      />
    </View>
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
