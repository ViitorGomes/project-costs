import styled from "styled-components";

export const TransparentButton = styled.button`
    outline: 0;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    cursor: pointer;
    color: ${props => props.theme.font.font3};
    border-radius: .2rem;
    padding: 4px;
    font-size: 1rem;
    transition: .2s;
    background-color: transparent;

    > svg {
        font-size: 1.1rem;
    }

    &:hover {
        background-color: ${props => props.theme.button.activeHover}50;
        color: ${props => props.theme.font.font1};
    }
`