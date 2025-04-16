import { Container, ContainerButtons, ContainerInputs, Text } from "./styles";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../routes/index.routes";
import { Input } from "../../components/Input";
import { useState } from "react";
import { ComfirmationModal } from "../../components/Modal/ComfirmationModal";

type NavigationProps = NativeStackNavigationProp<RootStackParamsList, "Home">;
export default function VerifyCodeScreen() {
  const { navigate } = useNavigation<NavigationProps>();


  async function handleVerifyCode(){
    
  }

  return (
    <Container>
      <Text>
        Confira a sua caixa de email para pegar o codigo de Verificacao
      </Text>
      <ContainerInputs>
        <Input placeholder="Digite seu Codigo" />
      </ContainerInputs>
      <ContainerButtons>
        <Button
          color="green"
          placeholder="Verificar"
          onPress={() => {
            navigate("CreatePassword");
          }}
        />
      </ContainerButtons>
    </Container>
  );
}
