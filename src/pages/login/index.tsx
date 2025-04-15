import {
  Container,
  ContainerButtons,
  ContainerInputPassword,
  ContainerInputs,
  TextResetPassword,
} from "./styles";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../routes/index.routes";
import { Input } from "../../components/Input";

type NavigationProps = NativeStackNavigationProp<RootStackParamsList, "Home">;
export default function LoginScreen() {
  const { navigate } = useNavigation<NavigationProps>();

  return (
    <Container>
      <ContainerInputs>
        <Input placeholder="Qual o seu email?" />
        <Input placeholder="Crie uma Senha" secureTextEntry={true}/>
      </ContainerInputs>
      <ContainerInputPassword>
        <TextResetPassword
          onPress={() => navigate('ResetPassword')}
        >
          Esqueci minha senha?
        </TextResetPassword>
      </ContainerInputPassword>
      <ContainerButtons>
        <Button
          color="green"
          placeholder="Login"
          onPress={() => {
            navigate("Home");
          }}
        />
      </ContainerButtons>
    </Container>
  );
}
