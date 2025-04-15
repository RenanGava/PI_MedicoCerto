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
export default function CreatePasswordScreen() {
  const { navigate } = useNavigation<NavigationProps>();

  return (
    <Container>
      <ContainerInputs>
        <Input placeholder="Digite a nova senha" secureTextEntry={true}/>
        <Input placeholder="Confirme sua senha" secureTextEntry={true}/>
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
          placeholder="Salvar Nova Senha"
          onPress={() => {
            navigate("Home");
          }}
        />
      </ContainerButtons>
    </Container>
  );
}
