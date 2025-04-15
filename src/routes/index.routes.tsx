import { createNativeStackNavigator, NativeStackHeaderProps, NativeStackScreenProps } from "@react-navigation/native-stack";
import HomeScreen from "../pages/home";
import LoginScreen from "../pages/login";
import { Header } from "../components/Header";
import RegisterScreen from "../pages/register";
import ResetPasswordScreen from "../pages/ResetPassword";



export type RootStackParamsList = {
  Home: undefined;
  Login: undefined;
  Register: undefined
  ResetPassword: undefined
}

const Stack = createNativeStackNavigator<RootStackParamsList>();


export function Routes() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{
      headerShown: true,
      header: (props:NativeStackHeaderProps) => {
        return <Header  {...props}/>
      }
    }}>
      <Stack.Screen name="Home" component={HomeScreen} options={{
        headerShown: false
      }}/>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
    </Stack.Navigator>
  );
}
