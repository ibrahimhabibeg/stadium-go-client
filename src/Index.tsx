import MainNavigator from "./Navigators/Main";
import { PaperProvider } from "react-native-paper";
import { LightTheme } from "./Theme";

const Index = () => {
  return (
    <PaperProvider theme={LightTheme}>
      <MainNavigator/>
    </PaperProvider>
  );
}

export default Index;