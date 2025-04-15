import { TouchableOpacityProps } from "react-native";
import { Container, Text } from "./styled";

interface ButtonProps extends TouchableOpacityProps {
  placeholder: string;
  color: "green" | "white";
  onPress: () => void
}

export function Button(props: ButtonProps){
  return (
    <Container {...props}>
      <Text color={props.color}>{props.placeholder}</Text>
    </Container>
  );
}
