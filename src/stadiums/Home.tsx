import { graphql } from "../gql";
import { useQuery } from "@apollo/client";
import { ScrollView } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import StadiumCard from "./StadiumCard";

const getStadiumsQuery = graphql(/* GraphQL */ `
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

  if (loading) return <ActivityIndicator animating={true} />;
  else
    return (
      <>
        <ScrollView>
          {data.getStadiums.map((stadium) => (
            <StadiumCard key ={stadium.id} stadium={stadium} />
          ))}
        </ScrollView>
      </>
    );
};

export default Home;
