import { graphql } from "../../gql";
import type { FieldPolicy } from "@apollo/client";

export const getStadiumsFieldPolicy: FieldPolicy = {
  keyArgs: ["$filter"],
  merge: (existing = [], incoming) => {
    let unique = [...existing, ...incoming].reduce(function (acc, curr) {
      if (!acc.some((element) => element["__ref"] === curr["__ref"]))
        acc.push(curr);
      return acc;
    }, []);
    return unique;
  },
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
      city {
        name
      }
    }
  }
`);

export default getStadiumsQuery;
