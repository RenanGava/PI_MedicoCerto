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
import { useState } from "react";
import { api } from "../../services/axios";

interface CreateUser {
  email: string;
  name: string;
  password: string;
  phone: string;
  isDoctor: false;
}

type NavigationProps = NativeStackNavigationProp<RootStackParamsList, "Home">;
export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const { navigate } = useNavigation<NavigationProps>();

  async function handleCreateUser() {

    const formatData: CreateUser = {
      email,
      name,
      password,
      phone,
      isDoctor: false
    }

    const user = await api.post('/auth/create', formatData)
    
    
    navigate("Login");
  }

  return (
    <Container>
      <ContainerInputs>
        <Input
          placeholder="Qual o seu nome?"
          value={name}
          onChangeText={(e) => setName(e)}
        />
        <Input
          placeholder="Qual o seu email?"
          value={email}
          onChangeText={(e) => setEmail(e)}
        />
        <Input
          placeholder="Qual o seu CPF?"
          value={cpf}
          onChangeText={(e) => setCpf(e)}
        />
        <Input
          placeholder="Qual o seu telefone?"
          value={phone}
          onChangeText={(e) => setPhone(e)}
        />
      </ContainerInputs>

      <ContainerInputPassword>
        <Input
          placeholder="Crie uma Senha"
          value={password}
          secureTextEntry={true}
          onChangeText={(e) => setPassword(e)}
        />
      </ContainerInputPassword>

      <ContainerButtons>
        <Button
          color="green"
          placeholder="Criar Conta"
          onPress={() => {
            handleCreateUser();
          }}
        />
      </ContainerButtons>
    </Container>
  );
}
