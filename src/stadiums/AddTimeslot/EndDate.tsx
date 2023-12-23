import { useState } from "react";
import { Button } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import { View } from "react-native";

const EndDate = ({ onChangeDate, endDate }: propsType) => {
  const [showEndDate, setShowEndDate] = useState(false);

  const handleStartDateChange = (event) => {
    setShowEndDate(false);
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
        onPress={() => setShowEndDate(true)}
        style={{ marginBottom: 20 }}
      >
        Select End Date
      </Button>
      {showEndDate && (
        <DateTimePicker
          value={endDate}
          mode="date"
          onChange={handleStartDateChange}
        />
      )}
    </View>
  );
};

type propsType = {
  endDate: Date;
  onChangeDate: (newTimestamp: number) => void;
};

export default EndDate;
