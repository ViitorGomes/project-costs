import styled from "styled-components"
import { FlexContainer } from "../../../../../components/Container/style"
import Transition from '../../../../../components/style/animations/Transition/style'

export const ProjectCategories = styled.div`

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
    transition: background-color ease-in ${Transition._300ms};
    display: grid;
    grid-template-rows: 1fr 26px;
    gap: 8px;
    justify-items: start;

    > a button {
        padding: 2px 4px;
        font-size: 1rem;
        color: ${props => props.theme.font.font4};
        border-radius: .3rem;
        transition: background-color ease-in ${Transition._200ms};
        
        &:hover {
            background-color: ${props => props.theme.button.active}25;
        }

        svg {
            font-size: 1.4rem;
        }
    }
`

export const CategoriesContainer = styled(FlexContainer)`
    overflow: auto;
    border-bottom: 2px solid ${props => props.theme.font.font3};
    width: 100%;

    > div {
        height: 100%;

        > div {
            display: inline-flex;
            margin: 6px;
            transition: .2s;
            cursor: pointer;

            &:hover {
                transform: scale(1.07);
            }
        }

        > p {
            color: ${props => props.theme.font.font1};
            width: 100%;
            text-align: center;
            align-self: center;
        }
    }
    
    > span {
        color: ${props => props.theme.font.font3};
    }
`
