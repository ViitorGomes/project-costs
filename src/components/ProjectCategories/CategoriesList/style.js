import styled, { css } from "styled-components"
import { FlexContainer } from "../../Container/style"
import Transition from '../../style/animations/Transition/style'

export const CategoriesContainer = styled.div`

    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    max-width: 400px;
    height: 300px;
    padding: 8px;
    border-radius: .4rem;
    border: 1px solid ${props => props.theme.static.static4};
    background-color: ${props => props.theme.background.bg4};
    transition: background-color ${Transition._300ms};
    display: grid;
    grid-template-rows: 1fr 26px;
    gap: 8px;
    justify-items: start;

    > a button {
        padding: 2px 4px;
        font-size: 1rem;
        color: ${props => props.theme.font.font4};
        border-radius: .3rem;
        transition: background-color ${Transition._200ms};
        
        &:hover {
            background-color: ${props => props.theme.button.active}25;
        }

        svg {
            font-size: 1.4rem;
        }
    }
`

export const CategoriesFieldset = styled.fieldset`
    overflow: auto;
    width: 100%;
    border-bottom: 2px solid ${props => props.theme.font.font3};

    > ${FlexContainer} {
        height: 100%;

        p {
            color: ${props => props.theme.font.font1};
        }
    }
    
    > button {
        display: inline-flex;
        margin: 4px;
    }

    legend {
        width: 100%;
        color: ${props => props.theme.font.font3};
        margin-bottom: 4px;
    }
`