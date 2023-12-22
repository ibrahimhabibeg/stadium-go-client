import { graphql } from "../../gql";

const getStadiumQuery = graphql(/* GraphQL */ `
  query GetStadium($stadiumId: ID!) {
    getStadium(stadiumId: $stadiumId) {
      avillableTimeslots {
        id
        endTime
        startTime
        price
      }
      city {
        name
      }
      desc
      id
      location {
        latitude
        longitude
      }
      name
      size
      owner {
        username
      }
    }
  }
`);

export default getStadiumQuery;
