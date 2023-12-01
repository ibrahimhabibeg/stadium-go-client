import { useQuery } from "@apollo/client";
import { FlatList } from "react-native";
import StadiumCard from "../StadiumCard/StadiumCard";
import getStadiumsQuery from "./getStadiumsQuery";
import { Divider } from "react-native-paper";
import { FlatListHeader } from "./FlatListHeader";
import { useState } from "react";

const Home = () => {
  const [filter, setFilter] = useState("");
  const { loading, error, data, fetchMore } = useQuery(getStadiumsQuery, {
    variables: { filter, take: 10 },
  });

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
      data={loading?[]:data?.getStadiums}
      renderItem={({ item: stadium }) => (
        <StadiumCard key={stadium.id} stadium={stadium} />
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
