import { useState } from "react";
import { Button } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import { View } from "react-native";

const EndTime = ({ onChangeDate, endTime }: propsType) => {
  const [showEndTime, setShowEndTime] = useState(false);

  const handleStartDateChange = (event) => {
    setShowEndTime(false);
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
        onPress={() => setShowEndTime(true)}
        style={{ marginBottom: 20 }}
      >
        Select End Time
      </Button>
      {showEndTime && (
        <DateTimePicker
          value={endTime}
          mode="time"
          onChange={handleStartDateChange}
        />
      )}
    </View>
  );
};

type propsType = {
  endTime: Date;
  onChangeDate: (newTimestamp: number) => void;
};

export default EndTime;
