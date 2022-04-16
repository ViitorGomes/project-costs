import styled, { css } from 'styled-components';
import { Warning } from '../../InputWarning/style';

export const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    gap: 6px;

    > div:not(${Warning}) {
        position: relative;
        display: flex;
        flex-flow: column-reverse;
        gap: 6px;

        > span {
            position: absolute;
            z-index: 999;
            top: 54%;
            left: 8px;
            font-size: 1rem;
            color: ${props => props.theme.font.font3};
            pointer-events: none;
            
            & + input {
                padding-left: 32px;
            }
        }
    }
    
    
    ${props => props.invalid 
        ? css`
            input {
                border: 1px solid ${props.theme.static.failure};
            }
        `
        : css`
            input {
                border: 1px solid ${props.theme.static.static5};
            }
        `
    }

    
    label {
        color: ${props => props.theme.font.font3};
        background-color: transparent;
        font-size: .92rem;
        display: block;
    }
    
    input {
        border-radius: .3rem;
        width: 100%;
        outline: 0;
        background-color: transparent;
        color: ${props => props.theme.font.font1};
        font-size: 1.09rem;
        padding: 8px;
        
        &:focus {
            border: 1px solid ${props => props.theme.static.static3};
    
            & ~ label {
                color: ${props => props.theme.font.font1};
            }
        }

        /* Chrome, Edge and Opera */
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

        /* Firefox */
        &:-moz-autofill,
        &:-moz-autofill:hover, 
        &:-moz-autofill:focus {
            border: 1px solid transparent;
            -webkit-text-fill-color: ${props => props.theme.font.font1};
            -webkit-box-shadow: 0 0 0px 1000px transform inset;
            transition: all .2s, background-color 9999s ease-in-out 0s;
        }

        &::-moz-outer-spin-button,
        &::-moz-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }
`