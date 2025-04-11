import styled from "styled-components/native";

interface ContainerProps {
  color: "green" | "white";
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  align-items: center;
  /* justify-content: center; */
  height: 50px;
  width: 350px;
  border-radius: 50px;
  justify-content: center;
  background-color: ${(props) =>
    props.color.includes("green") ? props.theme.colors.green500 : ""};
  ${({ color, theme }) => {
    if(color.includes('green')){
      return `
        border-width: 0px;
      `
    }
    else{
      return `
        border-width: 2px;
        border-color: ${theme.colors.green500};
      `
    }
  }}
`;

interface TextProps {
  color: "green" | "white";
}
export const Text = styled.Text<TextProps>`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: ${(props) =>
    props.color.includes("green")
      ? props.theme.colors.withe000
      : props.theme.colors.green500};
`;
