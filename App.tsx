import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/routes/index.routes";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/global/styles/theme";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar hidden={true} />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
