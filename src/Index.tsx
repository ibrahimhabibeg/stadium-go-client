import MainNavigator from "./Navigators/Main";
import { ThemeProvider } from "./Theme";

const Index = () => {
  return (
    <ThemeProvider>
      <MainNavigator />
    </ThemeProvider>
  );
}

export default Index;