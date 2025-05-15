import styled from "styled-components/native";

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.wihte300};
  position: relative;
`;

export const ContainerQuerys = styled.FlatList`
  height: 630px;
`;

export const OpenSearcBtn = styled.TouchableOpacity`
  margin: 10px auto;
  width: 200px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.green500};
`

export const TextBtn = styled.Text`
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
`


