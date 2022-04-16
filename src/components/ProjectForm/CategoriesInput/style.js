import styled, { css } from "styled-components";

export const CategoriesInput = styled.div`
    display: flex;
    flex-flow: column;
    gap: 6px;

    ${props => props.invalid 
        ? css`
            ${CategoriesContainer} {
                border: 1px solid ${props.theme.static.failure};
            }
        `
        : css`
            ${CategoriesContainer} {
                border: 1px solid ${props.theme.static.static5};
            }
        `
    }
    
    span {
        color: ${props => props.theme.font.font3};
        font-size: .92rem;
    }
`

export const CategoriesContainer = styled.div`
    width: 100%;
    border-radius: .3rem;
    height: 140px;
    width: 100%;
    display: grid;
    grid-template-rows: 1fr auto;
    
    > div {
        &:first-child {
            overflow-x: auto;
        }

        &:last-child {
            padding: 4px;
            border-top: 1px solid ${props => props.theme.static.static5};
            position: relative;
        }
    }
`