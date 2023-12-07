import { graphql } from "../../gql";
import type { FieldPolicy } from "@apollo/client";

export const verifyOwnerFieldPolicy: FieldPolicy = {
  keyArgs: false,
  merge: (existing, incoming) => {
    if (!existing) return incoming;
    return {
      ...incoming,
      stadiums: [...existing.stadiums, ...incoming.stadiums],
    };
  },
};

const getOwnerProfileDataQuery = graphql(/* GraphQL */ `
  query GetOwnerProfileData($cursor: ID, $take: Int) {
    verifyOwner {
      ... on Owner {
        email
        username
        stadiums(cursor: $cursor, take: $take) {
          id
          name
          size
          location {
            latitude
            longitude
          }
          owner {
            username
          }
          city {
            name
          }
        }
      }
      ... on OwnerAuthorizationError {
        message
      }
    }
  }
`);

export default getOwnerProfileDataQuery;
