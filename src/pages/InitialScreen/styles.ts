import styled from "styled-components/native";


export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.wihte300};
    justify-content: center;
`

export const ContainerButtons = styled.View`
    height: 100px;
    align-items: center;
    gap: 5px;
    margin-top: 30px;
`
