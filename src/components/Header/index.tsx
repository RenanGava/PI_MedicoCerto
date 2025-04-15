import * as React from "react";
import { BackButton, Container, Text } from "./styled";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

import FontAwesome from "@expo/vector-icons/FontAwesome";

export function Header(props: NativeStackHeaderProps) {
  return (
    <Container>
      <BackButton
        onPress={() => {
          props.navigation.goBack();
        }}
      >
        <FontAwesome name="arrow-left" color="#FFFFFF" size={24} />
      </BackButton>
      <Text>{props.route.name}</Text>
    </Container>
  );
}
