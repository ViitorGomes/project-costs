import styled, { css } from "styled-components";
import Transitions from '../../style/animations/Transition/style'

export const SelectWrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-flow: column-reverse;
    
    select {
        border-radius: .3rem;
        border: 1px solid ${props => props.theme.static.static5};
        width: 100%;
        outline: 0;
        background-color: ${props => props.theme.background.bg3};
        color: ${props => props.theme.font.font1};
        font-size: 1.09rem;
        padding: 8px;
        transition: background-color ease-in ${Transitions._300ms}, border ${Transitions._200ms};

        &:-webkit-autofill,
        &:-webkit-autofill:hover, 
        &:-webkit-autofill:focus {
            -webkit-text-fill-color: ${props => props.theme.background.bg3};
            -webkit-box-shadow: 0 0 0px 1000px transform inset;
            transition: background-color 9999s ease-in-out 0s;
        }

        &:focus {
            border: 1px solid ${props => props.theme.static.static3};

            & + label {
                color: ${props => props.theme.font.font1};
            }
        }
    }

    label {
        color: ${props => props.theme.font.font3};
        pointer-events: none;
        background-color: transparent;
        font-size: .92rem;
        display: block;
        margin-bottom: 6px;
        transition: color ${Transitions._200ms};
    }
`