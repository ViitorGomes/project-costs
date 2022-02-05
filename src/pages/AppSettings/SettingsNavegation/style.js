import styled from "styled-components";
import Transitions from '../../../components/style/animations/Transition/style'

export const SettingsNavegation = styled.nav`
    background-color: ${props => props.theme.background.bg3};
    transition: background-color ${Transitions._300ms};
    width: 300px;
    border-radius: .3rem;

    h3 {
        font-size: 1.2rem;
        font-weight: 600;
        padding: 12px 20px;
        color: ${props => props.theme.font.font1};
        border-bottom: 1px solid ${props => props.theme.static.static5};
    }

    li {
        
        &:not(:last-child) {
            border-bottom: 1px solid ${props => props.theme.static.static5};
        }
    }
    
    a {
        display: block;
        padding: 12px 20px;
        color: ${props => props.theme.font.font3};
        transition: all ${Transitions._200ms};

        &:hover {
            color: ${props => props.theme.font.font1};
            background-color: ${props => props.theme.static.static3}25;
        }

    }
`