import styled from "styled-components/native";


export const Container = styled.View`
  height: 65px;
  background-color: ${({theme})=> theme.colors.green500};
  /* flex-direction: row; */
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 20px;
  top:20px;
  font-size: 20px;
  z-index: 20;
`
export const Text = styled.Text`
  text-align: center;
  line-height: 65px;
  font-weight: bold;
  font-size: 28px;
  flex: 1;
  color: ${({theme}) => theme.colors.withe000};
`;