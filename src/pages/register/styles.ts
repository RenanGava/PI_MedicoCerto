import styled from "styled-components/native";


export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.wihte300};
    justify-content: center;
    gap:40px;
`

export const ContainerInputs = styled.View`

    gap: 5px
`

export const ContainerButtons = styled.View`
    height: 100px;
    align-items: center;
`

export const ContainerInputPassword = styled.View`
    /* margin-top: 60px; */
`
