import { Divider, Text, Avatar, IconButton } from "react-native-paper";
import { View } from "react-native";

const StadiumHeader = ({ stadium }: propsType) => {
  return (
    <View>
      <View style={{ flexDirection: "row", minHeight: 100 }}>
        <Text
          style={{ alignSelf: "center", marginTop: 10, width: "70%" }}
          variant="titleLarge"
        >
          {stadium.name}
        </Text>
        <View style={{ width: "30%", justifyContent: "space-around" }}>
          {stadium.city && (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                height: 25,
              }}
            >
              <IconButton icon={"map-marker"} style={{ marginLeft: 0 }} />
              <Text variant="labelMedium">{stadium.city.name}</Text>
            </View>
          )}
          <View style={{ flexDirection: "row" }}>
            <Avatar.Text
              size={20}
              label={stadium.owner.username.substring(0, 2)}
              style={{ marginRight: 10, marginLeft: 10 }}
            />
            <Text>{stadium.owner.username}</Text>
          </View>
        </View>
      </View>
      <Divider style={{ marginTop: 5 }} />
    </View>
  );
};

type propsType = {
  stadium: {
    name: string;
    city?: {
      name: string;
    };
    owner: {
      username: string;
    };
  };
};

export default StadiumHeader;
