import { StyleProp, View, ViewStyle } from "react-native";
import { Card, IconButton, Text } from "react-native-paper";

const BookingCard = ({
  stadiumName,
  city,
  owner,
  price,
  startTime,
  endTime,
  style,
}: propsType) => {
  return (
    <Card style={style} contentStyle={{ flexDirection: "row", height: 200 }}>
      <View
        style={{
          width: "50%",
          justifyContent: "space-between",
          paddingVertical: "5%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <IconButton icon={"soccer-field"} />
          <Text numberOfLines={1}>{stadiumName}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <IconButton icon={"map-marker"} />
          <Text numberOfLines={1}>{city}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <IconButton icon={"account"} />
          <Text numberOfLines={1}>{owner}</Text>
        </View>
      </View>
      <View
        style={{
          width: "50%",
          justifyContent: "space-between",
          paddingVertical: "5%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <IconButton icon={"clock-in"} />
          <Text numberOfLines={3}>{startTime.toLocaleString()}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <IconButton icon={"clock-out"} />
          <Text numberOfLines={3}>{endTime.toLocaleString()}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <IconButton icon={"cash"} />
          <Text numberOfLines={3}>{price} EGP</Text>
        </View>
      </View>
    </Card>
  );
};

type propsType = {
  stadiumName: string;
  city: string;
  owner: string;
  price: number;
  startTime: Date;
  endTime: Date;
  style?: StyleProp<ViewStyle>;
};
export default BookingCard;
