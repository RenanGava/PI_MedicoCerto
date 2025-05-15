import { Calendar } from 'react-native-calendars';
import styled from 'styled-components/native';



interface Colors {
    primary: string,
    secondary: string,
    background: string,
    success: string,
    white: string,
    text: string,
}

interface OptionalProps{
    selected?: boolean
    colors?: Colors
}




export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.white100};
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.green500};
  margin-bottom: 20px;
  text-align: center;
`;

export const SectionTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.green500};
  margin-top: 15px;
  margin-bottom: 10px;
`;

export const OptionButton = styled.TouchableOpacity<OptionalProps>`
  background-color: ${props => props.selected ? props.theme.colors.green500 : props.theme.colors.white100};
  padding: 12px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.green500};
  margin-bottom: 10px;
`;

export const OptionText = styled.Text<OptionalProps>`
  color: ${props => props.selected ? props.theme.colors.white100 : props.theme.colors.green500};
  text-align: center;
  font-size: 16px;
`;


export const Dropdown = styled.TouchableOpacity<OptionalProps>`
  background-color: ${({ theme }) => theme.colors.white100};;
  padding: 12px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.green500};
  margin-bottom: 20px;
`;

export const DropdownText = styled.Text`
  color: ${({theme}) => theme.colors.gray900};
  font-size: 16px;
`;

export const SearchButton = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.green500};
  padding: 15px;
  border-radius: 8px;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const SearchButtonText = styled.Text`
  color: ${({theme}) => theme.colors.white100};
  text-align: center;
  font-weight: bold;
  font-size: 18px;
`;

