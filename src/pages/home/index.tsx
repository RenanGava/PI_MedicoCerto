import { Container, ContainerButtons} from "./styles";
import { CarouselComponent } from "../../components/Carrousel";
import { Button } from "../../components/Button";


export default function HomeScreen() {
  return (
    <Container>
      <CarouselComponent />
      <ContainerButtons>
        <Button
          color="green"
          placeholder="CRIAR CONTA"
        />
        <Button
          color="white"
          placeholder="JÁ TENHO CONTA"
        />
      </ContainerButtons>
    </Container>
  );
}
