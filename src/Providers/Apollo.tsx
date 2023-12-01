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
import { getStadiumsFieldPolicy } from "../stadiums/getStadiumsQuery";

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

const responseLogger = new ApolloLink((operation, forward) => {
  console.log(operation);
  return forward(operation).map((result) => {
    console.info(operation.getContext().response.headers);
    return result;
  });
});

export const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: { Query: { fields: { getStadiums: getStadiumsFieldPolicy } } },
  }),
  link: ApolloLink.from([responseLogger, authLink, httpLink]),
});

const Apollo = ({ children }: { children: JSX.Element }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default Apollo;
