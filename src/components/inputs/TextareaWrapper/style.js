import styled from "styled-components";
import Transitions from '../../style/animations/Transition/style'

export const TextareaWrapper = styled.div`

    display: flex;
    flex-flow: column-reverse;

    label {
        margin-bottom: 16px;
        font-size: 1.1rem;
        color: ${props => props.theme.font.font3};
        transition: color ${Transitions._200ms};
    }

    textarea {
        resize: none;
        outline: 0;
        border: 1px solid ${props => props.theme.static.static5};
        background-color: ${props => props.theme.background.bg3};
        border-radius: .4rem;
        padding: 8px;
        font-size: 1rem;
        color: ${props => props.theme.font.font1};
        transition: background-color ease-in ${Transitions._300ms}, border ${Transitions._200ms};

        &:focus {
            border: 1px solid ${props => props.theme.static.static3};

            & + label {
                color: ${props => props.theme.font.font1};
            }
        }
    }

`