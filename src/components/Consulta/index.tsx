import {
  getCurrentPositionAsync,
  LocationObject,
  useForegroundPermissions,
} from "expo-location";
import { Container, Text } from "./styles";
import haversine from "haversine-distance";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

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

export function Consulta({ doctor,timeScheduled }: ConsultaProps) {
  const [status, requestPermission] = useForegroundPermissions();
  const [pos, setPos] = useState<{ lat: number; lon: number }>();

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

  return (
    <Container>
      <Text>{dayjs(timeScheduled).format("DD/MM/YYYY hh:mm:ss")}</Text>
      <Text>{doctor?.user.name}</Text>
      <Text>
        {doctor?.specialty} - {doctor?.crm}
      </Text>
      {handleGetDistance(
        Number(doctor?.lat),
        Number(doctor?.long)
      ) && (
        <Text>
          {handleGetDistance(
            Number(doctor?.lat),
            Number(doctor?.long)
          )}{" "}
          KM
        </Text>
      )}
    </Container>
  );
}
