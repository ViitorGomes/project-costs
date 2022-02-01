import styled, { css } from "styled-components";

export const PageNavegation = styled.nav`

    > svg {
        font-size: 3.2rem;
        cursor: pointer;
        color: ${props => props.theme.font.font2};
    }

    ul {
        position: absolute;
        top: 100%;
        left: 0;
        background-color: ${props => props.theme.background.bg1};
        width: 100%;
        height: calc(100vh - 74px);
        transition: .2s;
        transform-origin: top;
        display: flex;
        flex-flow: column;
        transform: scaleY(0);
        opacity: 0;

        ${props => props.showingMenu && css`
            transform: scaleY(1);
            opacity: 1;
        `}

        li {
            a {
                color: ${props => props.theme.font.font3};
                padding: 16px;
                display: inline-block;
                font-size: calc(.77rem + 1vmin);
                font-weight: 600;
                transition: .2s;
                position: relative;
                display: flex;
                align-items: center;
                border-left: 6px solid transparent;

                > svg {
                    font-size: 1.4rem;
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

    @media screen and (min-width: 760px) {
        > svg {
            display: none;
        }

        ul {
            position: static;
            opacity: 1 !important;
            transform: scaleX(1) !important;
            align-items: center;
            height: auto;
            flex-flow: row;

            li {
                margin-bottom: 0 !important;

                a {
                    font-size: calc(.55rem + 1vmin);
                    border: 0 !important;
                }
            }
        }
    }
`