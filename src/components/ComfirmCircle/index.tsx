import * as React from "react";
import { Container } from "./styled";
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';


interface ConfirmCircleProps{
  verified: boolean
}

export function ConfirmCircle({ verified }: ConfirmCircleProps) {
 

  return (
    <Container>
      {!verified && <AntDesign name="closecircle" size={72}  color="#FF0000"/>}
      {verified && <AntDesign name="checkcircle" size={72} color="#2A9D8F" />}
    </Container>
  );
}
