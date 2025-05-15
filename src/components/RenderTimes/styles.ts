import styled from "styled-components/native";


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


export const SectionTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.green500};
  margin-top: 15px;
  margin-bottom: 10px;
`;

export const TimeSlotContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const TimeSlotButton = styled.TouchableOpacity<OptionalProps>`
  width: 30%;
  background-color: ${props => props.selected ? props.theme.colors.green500 : props.theme.colors.white100};
  padding: 10px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.green500};
  margin-bottom: 10px;
`;

export const TimeSlotText = styled.Text<OptionalProps>`
  color: ${props => props.selected ? props.theme.colors.white100 : props.theme.colors.green500};
  text-align: center;
  font-size: 14px;
`;