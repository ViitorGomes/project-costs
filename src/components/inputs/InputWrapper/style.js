import styled from 'styled-components';
import Transitions from '../../style/animations/Transition/style'

export const InputWrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-flow: column-reverse;
    
    > span {
        position: absolute;
        z-index: 999;
        top: 52%;
        right: 8px;
        font-size: 1rem;
        color: ${props => props.theme.font.font3};
        pointer-events: none;
        
        & ~ input {
            padding-right: 38px;
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
    
    input {
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
            border: 1px solid transparent;
            -webkit-text-fill-color: ${props => props.theme.font.font1};
            -webkit-box-shadow: 0 0 0px 1000px transform inset;
            transition: all .2s, background-color 9999s ease-in-out 0s;
        }

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        &:focus {
            border: 1px solid ${props => props.theme.static.static3};

            & + label {
                color: ${props => props.theme.font.font1};
            }
        }
    }
`