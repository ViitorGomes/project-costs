import styled from "styled-components";
import { SimpleButton } from "../SimpleButton/style";
import Transition from '../style/animations/Transition/style'

export const LogoutButton = styled(SimpleButton)`
    font-size: 1.6rem;
    color: ${props => props.theme.font.font3};
    transition: color ${Transition._300ms};

    &:hover {
        color: ${props => props.theme.font.font2};
    }
`