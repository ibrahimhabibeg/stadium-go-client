import { StyleProp, View, ViewStyle } from "react-native";
import { Card, IconButton, Text } from "react-native-paper";
import { timeslot } from "./EditorStadiumPage";

const Timeslot = ({
  price,
  startTime,
  endTime,
  style,
  bookedBy,
}: propsType) => {
  return (
    <Card style={style} contentStyle={{ height: 250 }}>
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
          <Text numberOfLines={3}>{new Date(startTime).toLocaleString()}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <IconButton icon={"clock-out"} />
          <Text numberOfLines={3}>{new Date(endTime).toLocaleString()}</Text>
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
        {bookedBy && (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <IconButton icon={"account"} />
            <Text numberOfLines={1}>{bookedBy.username}</Text>
          </View>
        )}
      </View>
    </Card>
  );
};

type propsType = timeslot & {
  style?: StyleProp<ViewStyle>;
};
export default Timeslot;
