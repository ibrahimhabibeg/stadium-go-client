import MainNav from "./Navigators/MainNav";
import { ThemeProvider } from "./Providers/Theme";
import { AuthProvider } from "./Providers/Auth";
import Apollo from "./Providers/Apollo";

const Index = () => (
  <Apollo>
    <AuthProvider>
      <ThemeProvider>
        <MainNav />
      </ThemeProvider>
    </AuthProvider>
  </Apollo>
);

export default Index;
