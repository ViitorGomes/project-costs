import styled, { css } from "styled-components";
import Transitions from '../../style/animations/Transition/style'
import { FlexContainer } from "../../Container/style";

export const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    min-width: 260px;
    max-width: 260px;
    height: 100vh;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    padding: 2vh 0;
    background-color: ${props => props.theme.background.bg1};
    transition: all ${Transitions._300ms}, background-color ${Transitions._300ms};
    margin-left: -260px;

    ${props => props.displaing && css`
        margin-left: 0px;
    `}

    > ${FlexContainer} {
        justify-content: center;
        align-items: center;

        &:last-child {
            justify-content: space-evenly;
        }

        &:first-child {
            flex-wrap: wrap;
            gap: 44px 0;

            > a {
                img {
                    width: 66px;
                    display: block;
                }
            }
        }
    }
`