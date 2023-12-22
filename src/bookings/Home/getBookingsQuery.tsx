import { graphql } from "../../gql";

const getBookingsQuery = graphql(/* GraphQL */ `
  query GetBookings {
    verifyUser {
      ... on User {
        previousTimeslots {
          endTime
          price
          stadium {
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
          endTime
          price
          stadium {
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
          endTime
          price
          stadium {
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
