import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../../Navigators/StadiumsNav";

const AddTimeslotButton = ({ stadiumId }: propsType) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
  return (
    <Button
      onPress={() => navigation.navigate("stadiumsAddTimeslot", { stadiumId })}
      mode="contained"
      style={{ width: "85%", alignSelf: "center", marginBottom: 20 }}
    >
      Add Timeslot
    </Button>
  );
};

type propsType = {
  stadiumId: string;
};

export default AddTimeslotButton;
