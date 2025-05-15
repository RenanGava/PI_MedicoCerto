import { Container, ContainerButtons} from "./styles";
import { CarouselComponent } from "../../components/Carrousel";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamsList } from "../../routes/index.routes";



type NavigationProps = NativeStackNavigationProp<RootStackParamsList, 'Initial'>



export default function InitialScreen() {

  const { navigate } = useNavigation<NavigationProps>()


  return (
    <Container>
      <CarouselComponent />
      <ContainerButtons>
        <Button
          color="green"
          placeholder="CRIAR CONTA"
          onPress={() => {navigate('Register')}}
        />
        <Button
          color="white"
          placeholder="JÁ TENHO CONTA"
          onPress={() => {navigate('Login')}}
        />
      </ContainerButtons>
    </Container>
  );
}
