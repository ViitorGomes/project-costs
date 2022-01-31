import styled from "styled-components";
import { Container } from "../../components/Container/style";
import Transitions from '../../components/style/animations/Transition/style'

export const Projects = styled(Container).attrs(() => ({
    as: 'main'
}))`
    padding-top: 3vh;
    padding-bottom: 3vh;
    display: grid;
    grid-template-rows: 60px 1fr;
    gap: 36px;
`

export const ProjectHeader = styled.header`
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    
    h2 {
        color: ${props => props.theme.font.font1};
        transition: color ${Transitions._300ms};
        font-size: calc(1.3rem + 1vmin);
        font-weight: 600;
        flex: 1 1 50%;
        
        &::after {
            content: '';
            margin-top: 4px;
            display: block;
            height: 4px;
            background-image: linear-gradient(to right, ${props => props.theme.font.font1} 20%, transparent 40%, transparent 40%);
            transition: background-image ${Transitions._300ms};

        }
    }

    button {
        font-size: calc(.55rem + .88vmin);

        svg {
            width: calc(1rem + .88vmin);
            height: calc(1rem + .88vmin);
        }
    }
`