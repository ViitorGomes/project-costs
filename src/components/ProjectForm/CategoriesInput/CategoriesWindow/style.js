import styled from "styled-components";

export const CategoriesWindow = styled.div`
    position: absolute;
    z-index: 999;
    top: 100%;
    left: 0;
    width: min(400px, 100%);
    height: 240px;
    border-radius: .3rem;
    background-color: ${props => props.theme.background.bg3};
    border: 1px solid ${props => props.theme.static.static5};
    transition: background-color ease-in .3s;
    transform: scaleY(0);
    transform-origin: top;
    opacity: 0;
    animation: animedScale .1s 1;
    animation-fill-mode: forwards;
    display: grid;
    grid-template-rows: auto 1fr auto;

    @keyframes animedScale {
        to {
            transform: scaleY(1);
            opacity: 1;
        }
    }

    > *:not(:last-child) {
        border-bottom: 1px solid ${props => props.theme.static.static5};
    }

    legend {
        padding: 4px;
        color: ${props => props.theme.font.font1};
        font-size: .85rem;
    }
    
    fieldset {
        position: relative;
        display: block;

        > button {
            cursor: pointer;
            transition: .2s;

            &:hover {
                transform: scale(1.1);
            }
        }

        > div {
            height: 100%;

            p {
                color: ${props => props.theme.font.font1};
            }
        }
    }

    > div {
        &:last-child {
            padding: 4px;
        }

        > a {
            display: block;
            color: ${props => props.theme.font.font3};
            border-radius: .2rem;
            padding: 4px;
            font-size: 1rem;
            transition: .2s;
            background-color: transparent;

            &:hover {
                background-color: ${props => props.theme.button.activeHover}50;
                color: ${props => props.theme.font.font1};
            }
        }
    }
`