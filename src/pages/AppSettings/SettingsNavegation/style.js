import styled from "styled-components";
import Transitions from '../../../components/style/animations/Transition/style'

export const SettingsNavegation = styled.nav`
    background-color: ${props => props.theme.background.bg3};
    transition: background-color ease-in ${Transitions._300ms};
    border-radius: .3rem;

    h5 {
        font-size: 1.1rem;
        font-weight: 600;
        padding: 16px 20px;
        color: ${props => props.theme.font.font1};
        border-bottom: 1px solid ${props => props.theme.static.static5};
        transition: background-color ease-in ${Transitions._300ms};
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