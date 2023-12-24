import { graphql } from "../../gql";

const addTimeslotMutation = graphql(/* GraphQL */ `
  mutation AddTimeslotMutation($timeslotData: addTimeslotInput!) {
    addTimeslot(timeslotData: $timeslotData) {
      ... on OwnerAuthorizationError {
        message
      }
      ... on InvalidTimeslotDataError {
        message
      }
      ... on Timeslot {
        id
      }
    }
  }
`);

export default addTimeslotMutation;
