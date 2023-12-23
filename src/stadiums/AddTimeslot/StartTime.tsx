import { useState } from "react";
import { Button } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import { View } from "react-native";

const StartTime = ({ onChangeDate, startTime: startDate }: propsType) => {
  const [showStartTime, setShowStartTime] = useState(false);

  const handleStartDateChange = (event) => {
    setShowStartTime(false);
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
        onPress={() => setShowStartTime(true)}
        style={{ marginBottom: 20 }}
      >
        Select Start Time
      </Button>
      {showStartTime && (
        <DateTimePicker
          value={startDate}
          mode="time"
          onChange={handleStartDateChange}
        />
      )}
    </View>
  );
};

type propsType = {
  startTime: Date;
  onChangeDate: (newTimestamp: number) => void;
};

export default StartTime;
