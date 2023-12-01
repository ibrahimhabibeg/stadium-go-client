import { graphql } from "../../gql";
import type { FieldPolicy } from "@apollo/client";

export const getStadiumsFieldPolicy: FieldPolicy = {
  keyArgs: false,
  merge: (existing = [], incoming) => [...existing, ...incoming],
};

const getStadiumsQuery = graphql(/* GraphQL */ `
  query GetStadiums($cursor: ID, $take: Int) {
    getStadiums(cursor: $cursor, take: $take) {
      id
      owner {
        id
        email
        username
      }
      name
      count
      size
      location {
        latitude
        longitude
      }
    }
  }
`);

export default getStadiumsQuery;
