import { useQuery } from "@apollo/client";
import { FlatList } from "react-native";
import StadiumCard from "../StadiumCard/StadiumCard";
import getStadiumsQuery from "./getStadiumsQuery";
import { Divider } from "react-native-paper";
import { FlatListHeader } from "./FlatListHeader";
import { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "../../Navigators/StadiumsNav";

type propsType = NativeStackScreenProps<StackParamList, "stadiumsHome">;

const Home = ({ navigation }: propsType) => {
  const [filter, setFilter] = useState("");
  const { loading, error, data, fetchMore } = useQuery(getStadiumsQuery, {
    variables: { filter, take: 10 },
  });

  const navigateToStadium = (id: string) =>
    navigation.navigate("stadiumsStadium", { id });

  return (
    <FlatList
      ListHeaderComponent={
        <FlatListHeader
          value={filter}
          onValueChange={(text) => setFilter(text)}
        />
      }
      stickyHeaderIndices={[0]}
      keyExtractor={(stadium) => stadium.id}
      data={loading ? [] : data?.getStadiums}
      renderItem={({ item: stadium }) => (
        <StadiumCard key={stadium.id} stadium={stadium} navigateToStadium={navigateToStadium}/>
      )}
      onEndReached={() => {
        if (!loading)
          fetchMore({
            variables: {
              cursor: data.getStadiums[data.getStadiums.length - 1].id,
            },
          });
      }}
      ItemSeparatorComponent={Divider}
    />
  );
};

export default Home;
