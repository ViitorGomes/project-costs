import styled from "styled-components";

export const Card = styled.div`
    padding: 12px;
    border-radius: .2rem;
    background-color: ${props => props.theme.background.bg3};
    transition: background-color ease-in .3s;

    > * {
        &:not(:last-child) {
            margin-bottom: 18px;
        }
    }
    
    > span {
        &:first-of-type {
            color: ${props => props.theme.font.font1};
            font-size: calc(1.3rem + 1.3vmin);
            font-weight: 600;
        }
    }

    > h5 {
        color: ${props => props.theme.font.font3};
    }
`