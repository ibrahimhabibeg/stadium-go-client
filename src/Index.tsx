import MainNavigator from "./Navigators/Main";
import { ThemeProvider } from "./Providers/Theme";
import { AuthProvider } from "./Providers/Auth";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { uri } from "./config/server";

const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
});

const Index = () => (
  <AuthProvider>
    <ApolloProvider client={client}>
      <ThemeProvider>
        <MainNavigator />
      </ThemeProvider>
    </ApolloProvider>
  </AuthProvider>
);

export default Index;
