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

const getUserProfileDataQuery = graphql(/* GraphQL */ `
  query GetUserProfileDataQuery {
    verifyUser {
      ... on User {
        username
        email
      }
      ... on UserAuthorizationError {
        message
      }
    }
  }
`);

export default getUserProfileDataQuery;
