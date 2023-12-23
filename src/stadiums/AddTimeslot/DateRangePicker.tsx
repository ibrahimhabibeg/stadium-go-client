import { Text } from "react-native-paper";
import { View } from "react-native";
import StartDate from "./StartDate";
import EndDate from "./EndDate";
import StartTime from "./StartTime";
import EndTime from "./EndTime";

const DateRangePicker = ({
  startDate,
  endDate,
  onChangeStartDate,
  onChangeEndDate,
}: propsType) => {
  const handleStartDateChange = (timestamp: number) => {
    const newDate = new Date(startDate);
    const requestedDate = new Date(timestamp);
    newDate.setDate(requestedDate.getDate());
    onChangeStartDate(newDate);
    if (newDate > endDate) onChangeEndDate(newDate);
  };

  const handleStartTimeChange = (timestamp: number) => {
    const newDate = new Date(startDate);
    const requestedDate = new Date(timestamp);
    newDate.setHours(requestedDate.getHours());
    newDate.setMinutes(requestedDate.getMinutes());
    onChangeStartDate(newDate);
    if (newDate > endDate) onChangeEndDate(newDate);
  };

  const handleEndDateChange = (timestamp: number) => {
    const newDate = new Date(endDate);
    const requestedDate = new Date(timestamp);
    newDate.setDate(requestedDate.getDate());
    onChangeEndDate(newDate);
    if (newDate < startDate) onChangeStartDate(newDate);
  };

  const handleEndTimeChange = (timestamp: number) => {
    const newDate = new Date(endDate);
    const requestedDate = new Date(timestamp);
    newDate.setHours(requestedDate.getHours());
    newDate.setMinutes(requestedDate.getMinutes());
    onChangeEndDate(newDate);
    if (newDate < startDate) onChangeStartDate(newDate);
  };

  return (
    <View>
      <Text>Start Date: {startDate && startDate.toLocaleString()}</Text>
      <View style={{ flexDirection: "row" }}>
        <StartDate startDate={startDate} onChangeDate={handleStartDateChange} />
        <StartTime startTime={startDate} onChangeDate={handleStartTimeChange} />
      </View>
      <Text>End Date: {endDate && endDate.toLocaleString()}</Text>
      <View style={{ flexDirection: "row" }}>
        <EndDate endDate={endDate} onChangeDate={handleEndDateChange} />
        <EndTime endTime={endDate} onChangeDate={handleEndTimeChange} />
      </View>
    </View>
  );
};

type propsType = {
  startDate: Date;
  endDate: Date;
  onChangeStartDate: (newDate: Date) => void;
  onChangeEndDate: (newDate: Date) => void;
};

export default DateRangePicker;
