import styled from "styled-components";

export const PageNavegation = styled.nav`
    width: 100%;

    ul {
        transition: .2s;
        display: flex;
        flex-flow: column;

        li {
            a {
                color: ${props => props.theme.font.font3};
                padding: 16px;
                display: inline-block;
                font-size: calc(.66rem + .88vmin);
                font-weight: 600;
                transition: .2s;
                border-left: 6px solid transparent;
                display: flex;
                align-items: center;
                justify-content: flex-start;

                > svg {
                    font-size: 1.2rem;
                    margin-right: 7px;
                }

                &:hover {
                    color: ${props => props.theme.font.font2};
                    border-left: 6px solid ${props => props.theme.font.font2};
                }
            }

           &:not(:last-child) {
               margin-bottom: 12px;
           } 
        }
    }
`