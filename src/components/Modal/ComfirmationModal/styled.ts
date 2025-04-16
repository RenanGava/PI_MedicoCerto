import styled from "styled-components/native";

export const Container = styled.Modal`
  flex: 1;
`;

export const BackDropModal = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(46, 46, 46, 0.5);
  
`;
export const ContentModal = styled.View`
  height: 240px;
  width: 90%;
  background-color: ${({theme}) => theme.colors.wihte300};
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  
`;

export const Text = styled.Text`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin: 20px 10px 20px 0;
`;