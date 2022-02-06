import styled from "styled-components";

export const SimpleButton = styled.button`
    background-color: transparent;
    outline: 0;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: ${props => props.theme.font.font1};
`