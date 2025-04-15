import styled from "styled-components/native";


export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.wihte300};
    justify-content: center;
    gap:40px;
`
export const Text = styled.Text`
    max-width: 350px;
    margin: 0 auto;
    line-height: 30px;
    text-align: justify;
    border-radius: 8px;
    font-weight: bold;
    padding: 30px;
    background-color: ${({theme})=> theme.colors.gray100};
`

export const ContainerInputs = styled.View`
    gap: 8px;
`

export const ContainerButtons = styled.View`
    height: 100px;
    align-items: center;
`

export const TextResetPassword = styled.Text`
    text-align: center;
    color: ${({theme})=> theme.colors.green500};
    font-weight: bold;
`

export const ContainerInputPassword = styled.View`
    /* margin-top: 60px; */
    
`
