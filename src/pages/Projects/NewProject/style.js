import styled from "styled-components";

export const FormContainer = styled.section`
    border-radius: .2rem;
    width: min(680px, 100%);
    margin: 0 auto;
    background-color: ${props => props.theme.background.bg3};
    transition: background-color ease-in .3s;
    
    > h3 {
        font-weight: 600;
        color: ${props => props.theme.font.font1};
        transition: background-color ease-in .3s;
        padding: 12px 16px;
        font-size: 1.1rem;
        border-bottom: 1px solid ${props => props.theme.static.static5};
    }
    
    > form {
        padding: max(1.5vw, 16px);
    }
`