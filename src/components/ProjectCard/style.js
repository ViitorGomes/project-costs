import styled from "styled-components";
import { FlexContainer } from "../Container/style";

export const ProjectCard = styled.article`
    border-radius: .3rem;
    background-color: ${props => props.theme.background.bg3};

    h2 {
        background-color: ${props => props.theme.background.bg1};
        padding: 16px;
        color: ${props => props.theme.font.font2};
        font-size: calc(1.1rem + 1vmin);
        border-radius: .3rem .3rem 0 0;
    }
`

export const ProjectInformationsWrapper = styled(FlexContainer)`
    gap: 36px;
    padding: 16px;
    flex-flow: column;

    > * {
        width: 100%;

        span {
            font-weight: 600;
            color: ${props => props.theme.font.font1};
            font-size: calc(.77rem + .77vmin);

            &:first-child {
                color: ${props => props.theme.font.font3};
            }
        }
    }
`