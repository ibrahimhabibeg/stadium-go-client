import { ActivityIndicator } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "../../Navigators/StadiumsNav";
import { useQuery } from "@apollo/client";
import getStadiumQuery from "./Viewer/getStadiumQuery";
import { useContext } from "react";
import { AuthContext } from "../../Providers/Auth";
import EditorStadiumPage from "./Editor/EditorStadiumPage";
import ViewerStadiumPage from "./Viewer/ViewerStadiumPage";

const StadiumPage = ({ route }: propsType) => {
  const { id: stadiumId } = route.params;
  const { isLoggedIn, isOwner, id: ownerId } = useContext(AuthContext);
  const { data, loading } = useQuery(getStadiumQuery, {
    variables: { stadiumId },
  });
  if (loading) return <ActivityIndicator />;
  else if (isLoggedIn && isOwner && ownerId === data.getStadium.owner.id)
    return <EditorStadiumPage stadiumId={stadiumId} />;
  else return <ViewerStadiumPage stadiumId={stadiumId} />;
};

type propsType = NativeStackScreenProps<StackParamList, "stadiumsStadium">;

export default StadiumPage;
