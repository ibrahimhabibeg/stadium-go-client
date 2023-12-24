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
  
  const mergeDate = (oldDate: Date, requestedDate: Date) => {
    const newDate = new Date(oldDate);
    newDate.setDate(requestedDate.getDate());
    newDate.setMonth(requestedDate.getMonth());
    newDate.setFullYear(requestedDate.getFullYear());
    return newDate;
  };

  const mergeTime = (oldDate: Date, requestedDate: Date) => {
    const newDate = new Date(oldDate);
    newDate.setMinutes(requestedDate.getMinutes());
    newDate.setHours(requestedDate.getHours());
    return newDate;
  };

  const handleStartDateChange = (timestamp: number) => {
    const newDate = mergeDate(startDate, new Date(timestamp));
    onChangeStartDate(newDate);
    if (newDate > endDate) onChangeEndDate(newDate);
  };

  const handleStartTimeChange = (timestamp: number) => {
    const newDate = mergeTime(startDate, new Date(timestamp));
    onChangeStartDate(newDate);
    if (newDate > endDate) onChangeEndDate(newDate);
  };

  const handleEndDateChange = (timestamp: number) => {
    const newDate = mergeDate(endDate, new Date(timestamp));
    onChangeEndDate(newDate);
    if (newDate < startDate) onChangeStartDate(newDate);
  };

  const handleEndTimeChange = (timestamp: number) => {
    const newDate = mergeTime(endDate, new Date(timestamp));
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
