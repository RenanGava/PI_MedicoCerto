import { Container, ContainerQuerys, OpenSearcBtn, TextBtn } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../routes/index.routes";
import { useEffect, useState } from "react";
import { Consulta } from "../../components/Consulta";
import { api } from "../../services/axios";
import { useAuth } from "../../context/AuthContext";

type NavigationProps = NativeStackNavigationProp<RootStackParamsList, "Home">;

interface ConsultaProps {
  id: string;
  timeScheduled: string; // ou Date
  doctor: {
    id: string;
    crm: string;
    specialty: string;
    socialMedia: string;
    lat: string;
    long: string;
    user: {
      id: string;
      name: string;
      email: string;
      phone: string;
      isDoctor: boolean;
    };
  };
}

export default function HomeScreen() {
  const { navigate } = useNavigation<NavigationProps>();
  const [doctors, setDoctors] = useState<ConsultaProps[]>([]);

  useEffect(() => {
    async function getShedules() {
      const { data } = await api.get("/users/scheduling/findAll");
      setDoctors(data);
    }
    getShedules();
  },[]);

  return (
    <Container>
      {!!doctors && (
        <ContainerQuerys
          data={doctors}
          renderItem={(consulta) => (
            <Consulta
              key={consulta.index}
              {...(consulta.item as ConsultaProps)}
            />
          )}
        />
      )}
      <OpenSearcBtn onPress={() => navigate("Search")}>
        <TextBtn>Pesquisar</TextBtn>
      </OpenSearcBtn>
    </Container>
  );
}
