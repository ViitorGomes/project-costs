import styled from "styled-components";
import { FlexContainer } from "../../components/Container/style";
import Transitions from '../../components/style/animations/Transition/style'

export const ProjectsContainer = styled.section`
    > * {
        height: 100%;
    }

    ${FlexContainer} {
        p {
            font-weight: 600;
            color: ${props => props.theme.font.font1};
            transition: color ${Transitions._300ms};
            font-size: calc(.99rem + .77vmin);
        }
    }
`

export const ProjectList = styled.ul`

    display: flex;
    align-items: center;
    justify-content: center;
`