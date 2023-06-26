import { graphql } from "../gql";
import { useQuery } from "@apollo/client";
import { View, ScrollView } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";

const getStadiumsQuery = graphql(/* GraphQL */`
  query GetStadiums {
    getStadiums {
      id
      owner {
        id
        email
        username
      }
      name
      count
      desc
      size
      location {
        latitude
        longitude
      }
    }
  }
`);

const Home = () => {
  const { loading, error, data } = useQuery(getStadiumsQuery);
  
  if (loading) return <ActivityIndicator animating={true} />
  else return (
    <>
    <ScrollView>
      {
        data.getStadiums.map(stadium => 
          <View key={stadium.id}>
            <Text>-----------------------</Text>
            <Text>{stadium.id}</Text>
            <Text>{stadium.name}</Text>
            <Text>{stadium.desc}</Text>
            <Text>{stadium.count}</Text>
            <Text>{stadium.size}</Text>
            <Text>{stadium.location?.longitude}</Text>
            <Text>{stadium.location?.latitude}</Text>
            <Text>{stadium.owner.username}</Text>
            <Text>-----------------------</Text>
          </View>
        )
      }
    </ScrollView>
    </>
  );
}

export default Home;