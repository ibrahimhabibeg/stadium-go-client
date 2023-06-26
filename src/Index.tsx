import MainNavigator from "./Navigators/Main";
import { ThemeProvider } from "./Theme";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { uri } from "./config/server";

const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
});

const Index = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <MainNavigator />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default Index;