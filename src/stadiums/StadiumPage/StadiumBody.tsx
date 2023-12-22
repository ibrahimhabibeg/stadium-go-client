import { Text, IconButton } from "react-native-paper";
import { View } from "react-native";
import LocationURLLabel from "../StadiumCard/LocationUrlLabel";

const StadiumBody = ({ stadium }: propsType) => {
  return (
    <View>
      <Text style={{ marginTop: 10 }}>{stadium.desc}</Text>
      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems:"center"
        }}
      >
        {stadium.size && (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <IconButton icon={"account-group"} />
            <Text variant="labelMedium">{stadium.size}</Text>
          </View>
        )}
        {stadium.location && (
          <LocationURLLabel
            url={`https://maps.google.com/?q=${stadium.location.latitude},${stadium.location.longitude}`}
          />
        )}
      </View>
    </View>
  );
};

type propsType = {
  stadium: {
    desc?: string;
    location?: {
      latitude: number;
      longitude: number;
    };
    size?: number;
  };
};

export default StadiumBody;
