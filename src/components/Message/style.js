import styled, { css } from "styled-components";

export const MessageContainer = styled.div`
    position: fixed;
    top: 12vh;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-flow: column;
    gap: 16px;
    width: 100%;
    max-width: 680px;
    padding: 0 4vw;

    @media screen and (min-width: 760px) {
        padding: 0;
    }
`

export const Message = styled.div`
    background-color: ${props => props.theme.background.bg4};
    transition: .3s;
    border-radius: .2rem;
    display: flex;
    transform-origin: center;
    opacity: 0;
    animation: animedScale 4s 1;
    animation-fill-mode: forwards;

    @keyframes animedScale {
        10% {
            opacity: 1;
        }

        80% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }
    
    ${props => {
        switch (props.msgType) {
            case 'success':
                return css`
                    border: 1px solid ${props.theme.static.success};
                `
            case 'error':
                return css`
                    border: 1px solid ${props.theme.static.failure};
                `
            case 'warning':
                return css`
                    border: 1px solid ${props.theme.static.warning};
                `
            default:
                return css`
                    border: 1px solid ${props.theme.static.static5};
                `
        }
    }}

    > div {

        &:first-child {
            padding: 10px;
            border-radius: .12rem 0 0 .12rem;

            ${props => {
                switch (props.msgType) {
                    case 'success':
                        return css`
                            background-color: ${props.theme.static.success};
                        `
                    case 'error':
                        return css`
                            background-color: ${props.theme.static.failure};
                        `
                    case 'warning':
                        return css`
                            background-color: ${props.theme.static.warning};
                        `
                    default:
                        return css`
                            background-color: ${props.theme.static.static5};
                        `
                    }
                }}

            svg {
                color: ${props => props.theme.font.font2};
                font-size: 1.4rem;
            }
        }

        &:last-child {
            padding: 8px 12px;
            width: 100%;

            > button {
                transition: background-color .2s;
                border-radius: .2rem;
                padding: 4px;

                > svg {
                    font-size: 1.2rem;
                }

                &:hover {
                    background-color: ${props => props.theme.button.activeHover}20;
                }
            }
        }
    }

    p {
        color: ${props => props.theme.font.font1};
        font-size: calc(.66rem + .55vmin);
    }
`