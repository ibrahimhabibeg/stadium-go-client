import { graphql } from "../../../gql";

const getStadiumQuery = graphql(/* GraphQL */ `
  query GetStadiumForOwner($stadiumId: ID!) {
    getStadium(stadiumId: $stadiumId) {
      bookedTimeslots {
        price
        endTime
        startTime
        bookedBy {
          username
        }
        id
      }
      avillableTimeslots {
        endTime
        price
        startTime
        id
      }
      oldTimeslots {
        startTime
        endTime
        price
        bookedBy {
          username
        }
        id
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
        id
      }
    }
  }
`);

export default getStadiumQuery;
