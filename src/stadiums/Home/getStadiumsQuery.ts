import { graphql } from "../../gql";
import type { FieldPolicy } from "@apollo/client";

export const getStadiumsFieldPolicy: FieldPolicy = {
  keyArgs: ["$filter"],
  merge: (existing = [], incoming) => [...existing, ...incoming],
};

const getStadiumsQuery = graphql(/* GraphQL */ `
  query GetStadiums($cursor: ID, $take: Int, $filter: String) {
    getStadiums(cursor: $cursor, take: $take, filter: $filter) {
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
