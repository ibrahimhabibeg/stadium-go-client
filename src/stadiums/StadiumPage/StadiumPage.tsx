import {
  ActivityIndicator,
  Divider,
  Text,
  Avatar,
  IconButton,
} from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "../../Navigators/StadiumsNav";
import { useQuery } from "@apollo/client";
import getStadiumQuery from "./getStadiumQuery";
import { ScrollView } from "react-native";
import StadiumHeader from "./StadiumHeader";
import StadiumBody from "./StadiumBody";
import AvailableTimeslots from "./AvailableTimeslots";

const StadiumPage = ({ route }: propsType) => {
  const { id } = route.params;
  const { data, loading } = useQuery(getStadiumQuery, {
    variables: { stadiumId: id },
  });
  if (loading) return <ActivityIndicator />;
  else
    return (
      <ScrollView contentContainerStyle={{ width: "90%", alignSelf: "center" }}>
        <StadiumHeader stadium={data.getStadium} />
        <StadiumBody stadium={data.getStadium} />
        <AvailableTimeslots timeslots={data.getStadium.avillableTimeslots}/>
      </ScrollView>
    );
};

type propsType = NativeStackScreenProps<StackParamList, "stadiumsStadium">;

export default StadiumPage;
