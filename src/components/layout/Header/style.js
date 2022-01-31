import styled from "styled-components";
import Transitions from '../../style/animations/Transition/style'

export const Header = styled.header`
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 4vw;
    background-color: ${props => props.theme.background.bg1};
    transition: background-color ${Transitions._300ms};

    > *:first-child {
        margin-right: auto;

        img {
            height: 60px;
            display: block;
        }
    }
`