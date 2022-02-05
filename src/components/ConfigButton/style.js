import styled from "styled-components";
import { SimpleButton } from "../SimpleButton/style";
import Transitions from '../style/animations/Transition/style'

export const ConfigButton = styled(SimpleButton)`
    font-size: 1.6rem;
    transition: color ease-in ${Transitions._200ms};
    color: ${props => props.theme.font.font3};

    &:hover {
        color: ${props => props.theme.font.font2};
    }
`