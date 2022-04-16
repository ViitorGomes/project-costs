import styled from "styled-components";
import { Container } from "../../Container/style";
import { SimpleButton } from "../../buttons/SimpleButton/style";

export const SubHeader = styled(Container).attrs(() => ({
    as: 'header'
}))`
    width: 100%;
    height: 62px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme.background.bg3};
    transition: background-color ease-in .3s;
`

export const MenuDisplay = styled(SimpleButton)`
    color: ${props => props.theme.font.font3};
    font-size: 2.4rem;
`