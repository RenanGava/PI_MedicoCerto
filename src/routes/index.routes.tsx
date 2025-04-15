import { createNativeStackNavigator, NativeStackHeaderProps, NativeStackScreenProps } from "@react-navigation/native-stack";
import HomeScreen from "../pages/home";
import LoginScreen from "../pages/login";
import { Header } from "../components/Header";
import RegisterScreen from "../pages/register";
import ResetPasswordScreen from "../pages/resetPassword";
import CreatePasswordScreen from "../pages/createPassword";
import VerifyCodeScreen from "../pages/verifyCode";



export type RootStackParamsList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  ResetPassword: undefined;
  CreatePassword: undefined;
  VerifyCode: undefined;
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
      {/*  */}
      <Stack.Screen name="CreatePassword" component={CreatePasswordScreen} />
      <Stack.Screen name="VerifyCode" component={VerifyCodeScreen} />
      {/* VerifyCodeScreen */}
    </Stack.Navigator>
  );
}
