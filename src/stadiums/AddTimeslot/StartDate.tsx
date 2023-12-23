import { useState } from "react";
import { Button } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import { View } from "react-native";

const StartDate = ({ onChangeDate, startDate }: propsType) => {
  const [showStartDate, setShowStartDate] = useState(false);

  const handleStartDateChange = (event) => {
    setShowStartDate(false);
    if (event.type === "set") onChangeDate(event.nativeEvent.timestamp);
  };

  return (
    <View
      style={{
        justifyContent: "center",

        alignItems: "center",
      }}
    >
      <Button
        onPress={() => setShowStartDate(true)}
        style={{ marginBottom: 20 }}
      >
        Select Start Date
      </Button>
      {showStartDate && (
        <DateTimePicker
          value={startDate}
          mode="date"
          onChange={handleStartDateChange}
        />
      )}
    </View>
  );
};

type propsType = {
  startDate: Date;
  onChangeDate: (newTimestamp: number) => void;
};

export default StartDate;
