import {
  getCurrentPositionAsync,
  LocationObject,
  useForegroundPermissions,
} from "expo-location";
import { Container, Text } from "./styles";
import haversine from "haversine-distance";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../routes/index.routes";

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

type NavigationProps = NativeStackNavigationProp<RootStackParamsList, "Home">;

export function ConsultDoctor(doctor: ConsultaProps) {
  const [status, requestPermission] = useForegroundPermissions();
  const [pos, setPos] = useState<{ lat: number; lon: number }>();
  const { navigate } = useNavigation<NavigationProps>();

  requestPermission();

  useEffect(() => {
    async function getPosition() {
      const pos = await getCurrentPositionAsync();

      setPos({ lat: pos.coords.latitude, lon: pos.coords.longitude });
    }

    getPosition();
  }, []);

  function handleGetDistance(lt: number | undefined, lng: number | undefined) {
    if (lt && lng && pos != undefined)
      return (
        Math.floor(
          haversine(
            {
              lat: pos.lat,
              lon: pos.lon,
            },
            { lat: lt, lng }
          )
        ) / 1000
      );
  }

  function handleCreateApointment() {

    navigate('Appointment', doctor)
  }
  return (
    <Container
        onPress={() =>{handleCreateApointment()}}
    >
      <Text>Crm: {doctor.crm}</Text>
      <Text>{doctor?.user.name.toUpperCase()}</Text>
      <Text>{doctor?.specialty}</Text>
      {handleGetDistance(Number(doctor?.lat), Number(doctor?.long)) && (
        <Text>
          {handleGetDistance(Number(doctor?.lat), Number(doctor?.long))} KM
        </Text>
      )}
    </Container>
  );
}
