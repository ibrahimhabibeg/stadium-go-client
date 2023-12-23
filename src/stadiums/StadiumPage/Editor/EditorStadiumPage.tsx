import { ScrollView } from "react-native";
import StadiumHeader from "./StadiumHeader";
import StadiumBody from "./StadiumBody";
import getStadiumQuery from "./getStadiumQuery";
import { useQuery } from "@apollo/client";
import { ActivityIndicator } from "react-native-paper";
import BookedTimeslots from "./BookedTimeslots";
import AvailableTimeslots from "./AvailableTimeslots";
import OldTimeslots from "./PreviousTimeslots";
import AddTimeslotButton from "./AddTimeslotButton";

const EditorStadiumPage = ({ stadiumId }: propsType) => {
  const { data, loading } = useQuery(getStadiumQuery, {
    variables: { stadiumId },
  });
  if (loading) return <ActivityIndicator />;
  else
    return (
      <ScrollView contentContainerStyle={{ width: "90%", alignSelf: "center" }}>
        <StadiumHeader stadium={data.getStadium} />
        <StadiumBody stadium={data.getStadium} />
        <BookedTimeslots timeslots={data.getStadium.bookedTimeslots} />
        <AvailableTimeslots timeslots={data.getStadium.avillableTimeslots} />
        <OldTimeslots timeslots={data.getStadium.oldTimeslots} />
        <AddTimeslotButton stadiumId={stadiumId} />
      </ScrollView>
    );
};

type propsType = {
  stadiumId: string;
};

export type timeslot = {
  endTime: string;
  price: number;
  startTime: string;
  id: string;
  bookedBy?: {
    username: string;
  };
};

export type stadium = {
  name: string;
  city?: {
    name: string;
  };
  owner: {
    username: string;
  };
  desc?: string;
  location?: {
    latitude: number;
    longitude: number;
  };
  size?: number;
  avillableTimeslots: timeslot[];
  oldTimeslots: timeslot[];
  bookedTimeslots: timeslot[];
};

export default EditorStadiumPage;
