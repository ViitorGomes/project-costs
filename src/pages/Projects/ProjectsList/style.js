import styled from "styled-components";
import { FlexContainer } from "../../../components/Container/style";
import Transitions from '../../../components/style/animations/Transition/style'

export const ProjectsContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

`

export const NoProjectWarning = styled(FlexContainer)`
    p {
        font-weight: 600;
        color: ${props => props.theme.font.font1};
        transition: color ease-in ${Transitions._300ms};
        font-size: calc(.99rem + .77vmin);
    }
`

export const ProjectList = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    align-content: start;
    gap: 36px;

    @media screen and (min-width: 760px) {
        grid-template-columns: 1fr 1fr;  
    }

    @media screen and (min-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr;  
    }

    @media screen and (min-width: 1444px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;  
    }

`