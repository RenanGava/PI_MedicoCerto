import styled from "styled-components/native";

interface ContainerProps {
  color: "green" | "white";
}

export const Container = styled.TextInput.attrs({
  placeholderTextColor: '#2E2E2E'
})`
  align-self: center;
  height: 50px;
  width: 350px;
  border-radius: 10px;
  border: 2px solid ${({theme}) => theme.colors.green500};
  justify-content: center;
  padding: 0 10px;
  color: ${({theme}) => theme.colors.gray900};

  
`;