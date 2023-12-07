import { graphql } from "../../gql";

const getCitiesQuery = graphql(/* GraphQL */ `
  query GetCities {
    cities {
      id
      name
    }
  }
`);

export default getCitiesQuery;
