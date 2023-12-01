import { useQuery } from "@apollo/client";
import { FlatList } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import StadiumCard from "./StadiumCard";
import getStadiumsQuery from "./getStadiumsQuery";
import { Divider } from "react-native-paper";

const Home = () => {
  const { loading, error, data, fetchMore } = useQuery(getStadiumsQuery, {
    variables: {
      take: 10,
    },
  });

  if (loading) return <ActivityIndicator animating={true} />;
  else
    return (
      <FlatList
        keyExtractor={(stadium) => stadium.id}
        data={data.getStadiums}
        renderItem={({ item: stadium }) => (
          <StadiumCard key={stadium.id} stadium={stadium} />
        )}
        onEndReached={() => {
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
