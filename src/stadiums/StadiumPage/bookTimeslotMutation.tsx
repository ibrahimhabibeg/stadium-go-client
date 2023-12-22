import { graphql } from "../../gql";

const bookTimeslotMutation = graphql(/* GraphQL */ `
  mutation BookTimeslot($timeslotId: ID!) {
    bookTimeslot(timeslotId: $timeslotId) {
      ... on Timeslot {
        id
      }
    }
  }
`);

export default bookTimeslotMutation;
