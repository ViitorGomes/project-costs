import styled, { css } from "styled-components";
import Transitions from '../../style/animations/Transition/style'

export const SelectWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-flow: column;
    position: relative;
    width: 100%;
    height: 46px;
    border-radius: .4rem;
    border: 1px solid ${props => props.theme.static.static5};

    select {
        width: 100%;
        height: 100%;
        border: 0;
        outline: 0;
        border-radius: .4rem;
        background-color: ${props => props.theme.background.bg3};
        padding: 0 8px;
        font-size: 1rem;
        color: ${props => props.theme.font.font1};
        transition: background-color ease-in ${Transitions._300ms};

        &::placeholder {
            opacity: 0;
        }

        &:-webkit-autofill,
        &:-webkit-autofill:hover, 
        &:-webkit-autofill:focus {
            -webkit-text-fill-color: ${props => props.theme.background.bg3};
            -webkit-box-shadow: 0 0 0px 1000px transform inset;
            transition: background-color 9999s ease-in-out 0s;
        }
    }

    label {
        position: absolute;
        left: 4px;
        top: 26%;
        color: ${props => props.theme.font.font1};
        pointer-events: none;
        background-color: transparent;
        padding: 3px;
        transition: ${Transitions._200ms};
        font-size: 1rem;
        display: block;
    }
    
    ${props => props.isFocus && css`
        border: 1px solid ${props => props.theme.static.static3};
        transition: 0s ease-in;

        label {
            color: ${props => props.theme.font.font4};
        }

        select {
            border: 1px solid ${props => props.theme.static.static3};
            transition: 0s ease-in;

            :-webkit-autofill,
            &:-webkit-autofill:hover, 
            &:-webkit-autofill:focus {
                border: 1px solid ${props => props.theme.static.static3};
            }
        }
    `}

    ${props => props.isFocus || props.notEmpty ? css`

        label {
            font-size: 77%;
            top: 0; 
            transform: translateY(-55%); 
            background-color: ${props => props.theme.background.bg3};
        }
    ` : {}}
`