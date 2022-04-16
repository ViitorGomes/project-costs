import styled, { css } from "styled-components";

export const TextareaWrapper = styled.div`
    display: flex;
    flex-flow: column;
    gap: 6px;
    position: relative;
    
    ${props => props.invalid 
        ? css`
            textarea {
                border: 1px solid ${props.theme.static.failure};
            }
            `
        : css`
            textarea {
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

label {
    font-size: .92rem;
    color: ${props => props.theme.font.font3};
}

    textarea {
        width: 100%;
        resize: none;
        outline: 0;
        background-color: transparent;
        border-radius: .4rem;
        padding: 8px;
        font-size: 1rem;
        color: ${props => props.theme.font.font1};

        &:focus {
            border: 1px solid ${props => props.theme.static.static3};

            & + label {
                color: ${props => props.theme.font.font1};
            }
        }
    }

`