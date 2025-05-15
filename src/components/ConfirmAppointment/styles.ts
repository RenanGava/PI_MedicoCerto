import styled from "styled-components/native";



export const Text = styled.Text`
    font-weight: bold;
`

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.View`
  background-color: ${({theme}) => theme.colors.white100};
  padding: 20px;
  border-radius: 10px;
  width: 90%;
`;

export const ModalTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.green500};
  margin-bottom: 15px;
  text-align: center;
`;

export const ModalText = styled.Text`
  font-size: 16px;
  color: ${({theme}) => theme.colors.gray900};
  margin-bottom: 10px;
`;

export const ModalButton = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.success};
  padding: 12px;
  border-radius: 8px;
  margin-top: 20px;
`;

export const ModalButtonText = styled.Text`
  color: ${({theme}) => theme.colors.white100};
  text-align: center;
  font-weight: bold;
  font-size: 16px;
`;