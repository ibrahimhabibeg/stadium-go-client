import ToggleableView from "../../../components/ToggleableView";
import { View } from "react-native";
import Timeslot from "./Timeslot";
import type { timeslot } from "./EditorStadiumPage";

const BookedTimeslots = ({ timeslots }: propsType) => {
  return (
    <ToggleableView
      isExpandedOnStart={true}
      title="Booked Timeslots"
      style={{
        marginVertical: 20,
      }}
    >
      <View>
        {timeslots.map((timeslot) => (
          <Timeslot
            key={timeslot.id}
            style={{
              marginTop: 10,
            }}
            {...timeslot}
          />
        ))}
      </View>
    </ToggleableView>
  );
};

type propsType = {
  timeslots: timeslot[];
};

export default BookedTimeslots;
