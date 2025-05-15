import {
  ButtonFilters,
  Container,
  ContainerFilters,
  ContainerQuerys,
  TextBtn,
  TextInputFilters,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../routes/index.routes";
import { useEffect, useState } from "react";
import { Consulta } from "../../components/Consulta";
import { api } from "../../services/axios";
import { ConsultDoctor } from "../../ConsultDoctor";

type NavigationProps = NativeStackNavigationProp<RootStackParamsList, "Home">;

interface ConsultaProps {
  crm: string;
  id: string;
  lat: string;
  long: string;
  socialMedia: string;
  specialty: string;
  user: {
    email: string;
    id: string;
    isDoctor: true;
    name: string;
    phone: string;
  };
}

export default function SearchScreen() {
  const { navigate } = useNavigation<NavigationProps>();

  const [list, setList] = useState<ConsultaProps[]>([]);
  const [search, setSearch] = useState("");
  var filteredMed = list;

  if (list?.length > 0) {
    filteredMed = list.filter((medico) => {
      return medico.specialty.toLowerCase().includes(search.toLowerCase());
    });
  }

  useEffect(() => {
    async function getDoctors() {
      const { data } = await api.get("/doctors/all");
      setList(data);
    }
    getDoctors();
  }, []);

  return (
    <Container>
      <ContainerFilters>
        <TextInputFilters
          placeholder="Pesquisar Medico"
          onChangeText={(text) => setSearch(text)}
          value={search}
        />
        <ButtonFilters>
          <TextBtn>Pesquisar</TextBtn>
        </ButtonFilters>
      </ContainerFilters>
      <ContainerQuerys
        data={filteredMed}
        renderItem={(consulta) => (
          <ConsultDoctor
            key={consulta.index}
            {...(consulta.item as ConsultaProps)}
          />
        )}
      />
    </Container>
  );
}
