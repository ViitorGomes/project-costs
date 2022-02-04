import styled from "styled-components";
import { SimpleButton } from "../SimpleButton/style";

export const Modal = styled.div`
    position: fixed;
    z-index: 1000;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0, 0);
    transform-origin: center;
    opacity: 0;
    width: 100%;
    height: 100%;
    max-width: 540px;
    max-height: 360px;
    background-color: ${props => props.theme.background.bg4};
    border-radius: .4rem;
    border: 1px solid ${props => props.theme.static.static4};
    padding: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: animedScale .1s ease-in 1;
    animation-fill-mode: forwards;

    @keyframes animedScale {
        to {
            transform: translate(-50%, -50%) scale(1, 1);
            opacity: 1;
        }
    }

    > ${SimpleButton} {
        position: absolute;
        top: 6px;
        right: 6px;
        font-size: 2rem;
    }
`