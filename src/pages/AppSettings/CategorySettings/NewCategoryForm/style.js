import styled from "styled-components";

export const NewCategoryForm = styled.form`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 36px;
    max-width: 440px;
    margin: 0 auto;
    padding: 16px;

    input[type="color"] {
        display: block;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        appearance: none;
        padding: 0;
        
        &::-webkit-color-swatch {
            border-radius: 50%;
            border: 2px solid ${props => props.theme.font.font1};
            outline: 0;
        }
        
        &::-webkit-color-swatch-wrapper {
            padding: 0;
        }
    }
`
