import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.wihte300};
`;

export const ContainerQuerys = styled.FlatList`
  flex: 1;
`;


export const ContainerFilters = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
`;

export const ButtonFilters = styled.TouchableOpacity`
  width: 100px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.green500};
  border-radius: 12px;
`;

export const TextBtn = styled.Text`
  width: 100%;
  text-align: center;
  line-height: 40px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.withe000};
`;

export const TextInputFilters = styled.TextInput.attrs({
  placeholderTextColor: "#2A9D8F",
})`
  max-width: 200px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white100};
  border: ${({ theme }) => theme.colors.green500};
  color: ${({ theme }) => theme.colors.green500};
  height: 40px;
  border-radius: 8px;
  font-weight: bold;
  text-align: left;
`;


