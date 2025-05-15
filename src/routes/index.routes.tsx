import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import HomeScreen from "../pages/home";
import LoginScreen from "../pages/login";
import { Header } from "../components/Header";
import RegisterScreen from "../pages/register";
import ResetPasswordScreen from "../pages/resetPassword";
import CreatePasswordScreen from "../pages/createPassword";
import VerifyCodeScreen from "../pages/verifyCode";
import InitialScreen from "../pages/InitialScreen";
import SearchScreen from "../pages/SearchMed";
import { AppointmentScreen } from "../pages/Appointment";

interface ConsultaProps {
  crm: string;
  id: string;
  lat: string;
  long: string;
  socialMedia: string;
  specialty: string;
  user: {
    email: string;
    id: string;
    isDoctor: true;
    name: string;
    phone: string;
  };
}

export type RootStackParamsList = {
  Initial: undefined;
  Home: undefined;
  Login: undefined;
  Register: undefined;
  ResetPassword: undefined;
  CreatePassword: undefined;
  VerifyCode: undefined;
  Search: undefined;
  Appointment: ConsultaProps;
};

const Stack = createNativeStackNavigator<RootStackParamsList>();

export function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Initial"
      screenOptions={{
        header: (props: NativeStackHeaderProps) => {
          return <Header {...props} />;
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerBackButtonMenuEnabled: false,
        }}
      />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen
        name="Appointment"
        component={AppointmentScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <Stack.Screen name="CreatePassword" component={CreatePasswordScreen} />
      <Stack.Screen name="VerifyCode" component={VerifyCodeScreen} />
      <Stack.Screen
        name="Initial"
        component={InitialScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
