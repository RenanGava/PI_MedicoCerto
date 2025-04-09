import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/routes/index.routes";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/global/styles/theme";
import { SafeAreaView } from "react-native";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
