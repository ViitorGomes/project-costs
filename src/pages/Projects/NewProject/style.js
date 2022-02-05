import styled from "styled-components";
import { InputWrapper } from "../../../components/inputs/InputWrapper/style";
import { SelectWrapper } from "../../../components/inputs/SelectWrapper/style";
import Transitions from '../../../components/style/animations/Transition/style'

export const FormContainer = styled.section`
    max-width: 680px;
    padding: 26px;
    border-radius: .6rem;
    width: 100%;
    margin: 0 auto;
    background-color: ${props => props.theme.background.bg3};
    transition: background-color ease-in ${Transitions._300ms};

    > h3 {
        font-size: calc(.88rem + .77vmin);
        color: ${props => props.theme.font.font1};
        margin-bottom: 16px;
        font-weight: 600;
    }

    form {
        height: 100%;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        gap: 36px;

        > *:not(button) {
            width: 100%;
        }

        ${InputWrapper}:not(:first-child), ${SelectWrapper} {
            max-width: 320px;
            align-self: flex-start;
        }
    }
`