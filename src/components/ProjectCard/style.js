import styled from "styled-components";
import { FlexContainer } from "../Container/style";
import Transitions from '../style/animations/Transition/style'

export const ProjectCard = styled.article`
    border-radius: .3rem;
    background-color: ${props => props.theme.background.bg3};
    transition: background-color ease-in ${Transitions._300ms};

    h2 {
        background-color: ${props => props.theme.background.bg1};
        padding: 16px;
        color: ${props => props.theme.font.font2};
        font-size: calc(.88rem + .77vmin);
        border-radius: .3rem .3rem 0 0;
        transition: background-color ease-in ${Transitions._300ms};
    }
`

export const ProjectInformationsWrapper = styled(FlexContainer)`
    padding: 16px;

    > * {
        width: 100%;

        span {
            font-weight: 600;
            color: ${props => props.theme.font.font1};
            font-size: calc(.77rem + .77vmin);

            &:first-child {
                color: ${props => props.theme.font.font3};
            }

            @media screen and (min-width: 760px) {
                font-size: calc(.66rem + .66vmin);
            }
        }
    }
`

export const CategoriesContainer = styled(FlexContainer)`
    height: 70px;
    overflow-y: auto;
`