import {
  Container,
  ContainerButtons,
  ContainerInputs,
  Text,
} from "./styles";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../routes/index.routes";
import { Input } from "../../components/Input";
import { ConfirmCircle } from "../../components/ComfirmCircle";

type NavigationProps = NativeStackNavigationProp<RootStackParamsList, "Home">;
export default function ResetPasswordScreen() {
  const { navigate } = useNavigation<NavigationProps>();

  return (
    <Container>
      <Text>
        seu Email para receber um condigo de validacao, ap'os validar o codigo
        voce ser'a enviado a tela de criacao de senha
      </Text>
      <ContainerInputs>
        <Input placeholder="Qual o seu email?" />
      </ContainerInputs>
      <ContainerButtons>
        <Button
          color="green"
          placeholder="Enviar Codigo"
          onPress={() => {
            navigate("VerifyCode");
          }}
        />
      </ContainerButtons>
    </Container>
  );
}
