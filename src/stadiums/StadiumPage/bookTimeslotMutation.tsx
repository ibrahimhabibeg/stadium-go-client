import { graphql } from "../../gql";

const bookTimeslotMutation = graphql(/* GraphQL */ `
  mutation BookTimeslot($timeslotId: ID!) {
    bookTimeslot(timeslotId: $timeslotId) {
      ... on Timeslot {
        id
      }
      ... on UserAuthorizationError {
        message
      }
      ... on BookTimeslotError {
        message
      }
    }
  }
`);

export default bookTimeslotMutation;
