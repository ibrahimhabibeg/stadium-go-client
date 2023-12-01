import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  ApolloLink,
} from "@apollo/client";
import { uri } from "../config/server";
import { setContext } from "@apollo/client/link/context";
import { getItemAsync } from "expo-secure-store";
import { getStadiumsFieldPolicy } from "../stadiums/Home/getStadiumsQuery";
import { verifyOwnerFieldPolicy } from "../profileTab/getOwnerProfileDataQuery";

const httpLink = createHttpLink({ uri });

const authLink = setContext(async (_, { headers }) => {
  const token = await getItemAsync("token");
  return {
    headers: {
      ...headers,
      authorization: token ? token : "",
    },
  };
});

export const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          getStadiums: getStadiumsFieldPolicy,
          verifyOwner: verifyOwnerFieldPolicy,
        },
      },
      Stadium: {
        keyFields: false,
      },
      Owner: {
        fields: {
          stadiums: {
            keyArgs: false,
          },
        },
      },
    },
  }),
  link: ApolloLink.from([authLink, httpLink]),
});

const Apollo = ({ children }: { children: JSX.Element }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default Apollo;
