import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/global/styles/theme";
import { StatusBar } from "expo-status-bar";
import { AuthContextProvider, useAuth } from "./src/context/AuthContext";
import { Routes } from "./src/routes/index.routes";
export default function App() {

  const { isAuthenticated } = useAuth()
  return (
    <ThemeProvider theme={theme}>
      <StatusBar/>
      <NavigationContainer>
        <AuthContextProvider>
         <Routes/>
        </AuthContextProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
