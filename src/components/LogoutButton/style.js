import styled from "styled-components";
import { SimpleButton } from "../buttons/SimpleButton/style";
import Transition from '../style/animations/Transition/style'

export const LogoutButton = styled(SimpleButton)`
    font-size: 1.6rem;
    color: ${props => props.theme.font.font3};
    transition: color ease-in ${Transition._200ms};

    &:hover {
        color: ${props => props.theme.font.font2};
    }
`