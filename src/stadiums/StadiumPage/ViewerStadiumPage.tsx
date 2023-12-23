import { ScrollView } from "react-native";
import StadiumHeader from "./StadiumHeader";
import StadiumBody from "./StadiumBody";
import AvailableTimeslots from "./AvailableTimeslots";
import { stadium } from "./StadiumPage";

const ViewerStadiumPage = ({ stadium }: propsType) => {
  return (
    <ScrollView contentContainerStyle={{ width: "90%", alignSelf: "center" }}>
      <StadiumHeader stadium={stadium} />
      <StadiumBody stadium={stadium} />
      <AvailableTimeslots timeslots={stadium.avillableTimeslots} />
    </ScrollView>
  );
};

type propsType = {
  stadium: stadium;
};

export default ViewerStadiumPage;
