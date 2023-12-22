import ToggleableView from "../../components/ToggleableView";
import { View } from "react-native";
import BookableTimeslot from "./BookableTimeslot";

const AvailableTimeslots = ({ timeslots }: propsType) => {
  return (
    <ToggleableView
      isExpandedOnStart={false}
      title="Available Timeslots"
      style={{
        marginVertical: 20,
      }}
    >
      <View>
        {timeslots.map((timeslot) => (
          <BookableTimeslot
            key={timeslot.id}
            id={timeslot.id}
            startTime={new Date(timeslot.startTime)}
            endTime={new Date(timeslot.endTime)}
            price={timeslot.price}
            style={{
              marginTop: 10,
            }}
          />
        ))}
      </View>
    </ToggleableView>
  );
};

type propsType = {
  timeslots: timeslot[];
};

type timeslot = {
  endTime: string;
  price: number;
  startTime: string;
  id: string;
};

export default AvailableTimeslots;
