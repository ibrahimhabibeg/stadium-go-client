import { useState } from "react";
import { Text, Divider } from "react-native-paper";
import { View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "../../Navigators/StadiumsNav";
import PricePicker from "./PricePicker";
import DateRangePicker from "./DateRangePicker";

const AddTimeslotPage = ({ route }: propsType) => {
  const initialDate = new Date();
  initialDate.setSeconds(0);
  initialDate.setMilliseconds(0);
  const [startDate, setStartDate] = useState<Date>(initialDate);
  const [endDate, setEndDate] = useState<Date>(initialDate);
  const [price, setPrice] = useState("1");

  return (
    <View
      style={{
        justifyContent: "center",

        alignItems: "center",
      }}
    >
      <Text variant="titleMedium" style={{ marginTop: 20 }}>
        New Timeslot Data
      </Text>
      <Divider style={{ width: "90%", marginVertical: 20 }} />
      <DateRangePicker
        startDate={startDate}
        onChangeStartDate={setStartDate}
        endDate={endDate}
        onChangeEndDate={setEndDate}
      />
      <PricePicker price={price} onPriceChange={setPrice} />
    </View>
  );
};

type propsType = NativeStackScreenProps<StackParamList, "stadiumsAddTimeslot">;

export default AddTimeslotPage;
