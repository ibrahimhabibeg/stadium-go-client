import { StyleProp, View, ViewStyle } from "react-native";
import { Card, IconButton, Text } from "react-native-paper";

const BookableTimeslot = ({ price, startTime, endTime, style }: propsType) => {
  return (
    <Card style={style} contentStyle={{ flexDirection: "row", height: 200 }}>
      <View
        style={{
          justifyContent: "space-between",
          paddingVertical: "5%",
          width: "100%",
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
          <Text numberOfLines={3}>{startTime.toUTCString()}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <IconButton icon={"clock-out"} />
          <Text numberOfLines={3}>{endTime.toUTCString()}</Text>
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
  price: number;
  startTime: Date;
  endTime: Date;
  style?: StyleProp<ViewStyle>;
};
export default BookableTimeslot;
