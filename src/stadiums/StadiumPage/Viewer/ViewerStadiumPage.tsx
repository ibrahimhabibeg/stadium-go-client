import { ScrollView } from "react-native";
import StadiumHeader from "./StadiumHeader";
import StadiumBody from "./StadiumBody";
import AvailableTimeslots from "./AvailableTimeslots";
import getStadiumQuery from "./getStadiumQuery";
import { useQuery } from "@apollo/client";
import { ActivityIndicator } from "react-native-paper";

const ViewerStadiumPage = ({ stadiumId }: propsType) => {
  const { data, loading } = useQuery(getStadiumQuery, {
    variables: { stadiumId },
  });
  if (loading) return <ActivityIndicator />;
  else
    return (
      <ScrollView contentContainerStyle={{ width: "90%", alignSelf: "center" }}>
        <StadiumHeader stadium={data.getStadium} />
        <StadiumBody stadium={data.getStadium} />
        <AvailableTimeslots timeslots={data.getStadium.avillableTimeslots} />
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
};

export default ViewerStadiumPage;
