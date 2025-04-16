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
import { useState } from "react";
import { ComfirmationModal } from "../../components/Modal/ComfirmationModal";

type NavigationProps = NativeStackNavigationProp<RootStackParamsList, "Home">;
export default function CreatePasswordScreen() {
  const { navigate } = useNavigation<NavigationProps>();
  const [verified, setVerified] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);

  async function handleCreatePassword(){
    setVisible(true)

    const timeOut = setTimeout(() =>{
      setVisible(false)
    }, 5000)
    clearTimeout(timeOut)

    
  }

  return (
    <Container>
      <ContainerInputs>
        <Input placeholder="Digite a nova senha" secureTextEntry={true} />
        <Input placeholder="Confirme sua senha" secureTextEntry={true} />
      </ContainerInputs>
      <ContainerInputPassword>
        <TextResetPassword onPress={() => navigate("ResetPassword")}>
          Esqueci minha senha?
        </TextResetPassword>
      </ContainerInputPassword>
      <ContainerButtons>
        <Button
          color="green"
          placeholder="Salvar Nova Senha"
          onPress={() => {
            handleCreatePassword()
          }}
        />
      </ContainerButtons>
      <ComfirmationModal
        visible={visible}
        verified={verified}
        closeModal={() => {
          setVisible(!visible);
        }}
        animationType="fade"
        text="Senha Alterada Com Sucesso"
        transparent={true}
        redirect={() => {navigate("Home")}}
      />
    </Container>
  );
}
