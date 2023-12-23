import { ActivityIndicator } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "../../Navigators/StadiumsNav";
import { useQuery } from "@apollo/client";
import getStadiumQuery from "./getStadiumQuery";
import { useContext } from "react";
import { AuthContext } from "../../Providers/Auth";
import EditorStadiumPage from "./EditorStadiumPage";
import ViewerStadiumPage from "./ViewerStadiumPage";

const StadiumPage = ({ route }: propsType) => {
  const { id: stadiumId } = route.params;
  const { isLoggedIn, isOwner, id: ownerId } = useContext(AuthContext);
  const { data, loading } = useQuery(getStadiumQuery, {
    variables: { stadiumId },
  });
  if (loading) return <ActivityIndicator />;
  else if (isLoggedIn && isOwner && ownerId === data.getStadium.owner.id)
    return <EditorStadiumPage stadium={data.getStadium} />;
  else return <ViewerStadiumPage stadium={data.getStadium} />;
};

type propsType = NativeStackScreenProps<StackParamList, "stadiumsStadium">;

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

export default StadiumPage;
