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
import { useAuth } from "../../context/AuthContext";
import { getItem } from "../../services/asyncStorage";
import { Alert } from "react-native";

type NavigationProps = NativeStackNavigationProp<RootStackParamsList, "Home">;
export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, user } = useAuth();

  const { navigate } = useNavigation<NavigationProps>();

  async function handleLogin() {
    try {
      await login({ email, password });
      setEmail("");
      setPassword("");

      navigate("Home");

    } catch (error) {
      console.log(error);
      
      Alert.alert("Usuario nao encontrado", " Quer Criar Sua Conta", [
        {
          text: "Voltar",
          onPress: () =>{ navigate('Initial')}
        },
        {
          text: "Sim, Quero",
          onPress: () =>{ navigate('Register')}
        },
      ]);
    }
  }

  return (
    <Container>
      <ContainerInputs>
        <Input
          placeholder="Qual o seu email?"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Crie uma Senha"
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </ContainerInputs>
      <ContainerInputPassword>
        <TextResetPassword onPress={() => navigate("ResetPassword")}>
          Esqueci minha senha?
        </TextResetPassword>
      </ContainerInputPassword>
      <ContainerButtons>
        <Button
          color="green"
          placeholder="Login"
          onPress={() => {
            handleLogin();
          }}
        />
      </ContainerButtons>
    </Container>
  );
}
