import styled from "styled-components/native";


export const Container = styled.View`
    height: 100%;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.red900};

`
export const Text = styled.Text`
    text-align: center;
`