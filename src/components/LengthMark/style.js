import styled, { css } from "styled-components";

export const LengthMark = styled.span`
    position: absolute;
    top: 4px;
    right: 4px;
    font-size: .88rem;
    font-weight: 500;
    color: ${props => props.theme.font.font1};

    ${props => props.current >= props.cap && css`
        color: ${props.theme.font.font5};
    `}
`