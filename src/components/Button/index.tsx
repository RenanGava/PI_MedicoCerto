import { Container, Text } from "./styled";

interface ButtonProps {
  placeholder: string;
  color: "green" | "white";
}

export function Button({ color, placeholder }: ButtonProps) {
  return (
    <Container color={color}>
      <Text color={color}>{placeholder}</Text>
    </Container>
  );
}
