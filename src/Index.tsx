import MainNavigator from "./Navigators/Main";
import { ThemeProvider } from "./Providers/Theme";
import { AuthProvider } from "./Providers/Auth";
import Apollo from "./Providers/Apollo";

const Index = () => (
  <Apollo>
    <AuthProvider>
      <ThemeProvider>
        <MainNavigator />
      </ThemeProvider>
    </AuthProvider>
  </Apollo>
);

export default Index;
