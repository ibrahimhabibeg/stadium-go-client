import { graphql } from "../../gql";

const getBookingsQuery = graphql(/* GraphQL */ `
  query GetBookings {
    verifyUser {
      ... on User {
        previousTimeslots {
          id
          endTime
          price
          stadium {
            id
            name
            owner {
              username
            }
            city {
              name
            }
          }
          startTime
        }
        currentTimeslots {
          id
          endTime
          price
          stadium {
            id
            name
            owner {
              username
            }
            city {
              name
            }
          }
          startTime
        }
        upcomingTimeslots {
          id
          endTime
          price
          stadium {
            id
            name
            owner {
              username
            }
            city {
              name
            }
          }
          startTime
        }
      }
    }
  }
`);

export default getBookingsQuery;
