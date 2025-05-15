import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  margin: 0 auto;
  width: 90%;
  background-color: ${({ theme }) => theme.colors.green500};
  height: 200px;
  margin-top: 20px;
  border-radius: 8px;
  padding: 10px;
`;

export const Text = styled.Text`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.white100};
`;
