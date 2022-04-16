import styled from "styled-components";
import { FlexContainer } from '../../../../Container/style'

export const UserMenu = styled.div`
    border: 1px solid ${props => props.theme.static.static5}; 
    border-radius: .4rem;
    position: absolute;
    right: 0;
    top: 100%;
    width: 100vw;
    height: 100vh;
    max-width: 220px;
    max-height: 300px;
    background-color: ${props => props.theme.background.bg3};
    display: grid;
    grid-template-rows: auto 1fr auto;
    transform: scaleY(0);
    transform-origin: top;
    opacity: 0;
    animation: animedScale .1s 1;
    animation-fill-mode: forwards;

    @keyframes animedScale {
        to {
            transform: scaleY(1);
            opacity: 1;
        }
    }

    ${FlexContainer} {
        padding: 8px;

        &:not(:last-child) {
            border-bottom: 1px solid ${props => props.theme.static.static5};
        }

        > a {
            font-size: .95rem;
            color: ${props => props.theme.font.font3};
            font-weight: 600;
            display: flex;
            align-items: center;
            width: 100%;
            gap: 8px;
            transition: color .2s;

            svg {
                font-size: 1.15rem;
            }

            &:hover {
                color: ${props => props.theme.font.font1};
            }
        }

        &:last-child {
            button {
                &:hover {
                    color: ${props => props.theme.font.font1};
                }
            }
        }


        &:first-child {
            p {
                font-size: 1.1rem;
                font-weight: 600;
                color: ${props => props.theme.font.font1};
            }
        }
    }
`