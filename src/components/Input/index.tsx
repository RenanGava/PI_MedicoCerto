import { TextInputProps } from "react-native";
import { Container } from "./styled";

interface InputProps extends TextInputProps {
  placeholder: string;
}

export function Input(props: InputProps){
  return (
    <Container {...props}/>
  );
}
