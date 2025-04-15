import {
  Container,
  ContainerButtons,
  ContainerInputPassword,
  ContainerInputs,
} from "./styles";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../routes/index.routes";
import { Input } from "../../components/Input";
import { StatusBar } from 'expo-status-bar'

type NavigationProps = NativeStackNavigationProp<RootStackParamsList, "Home">;
export default function RegisterScreen() {
  const { navigate } = useNavigation<NavigationProps>();

  return (
    <Container>
      <ContainerInputs>
        <Input placeholder="Qual o seu nome?" />
        <Input placeholder="Qual o seu email?" />
        <Input placeholder="Qual o seu CPF?" />
        <Input placeholder="Qual o seu telefone?" />
      </ContainerInputs>

      <ContainerInputPassword>
        <Input placeholder="Crie uma Senha" />
      </ContainerInputPassword>

      <ContainerButtons>
        <Button
          color="green"
          placeholder="Criar Conta"
          onPress={() => {
            navigate("Home");
          }}
        />
      </ContainerButtons>
    </Container>
  );
}
