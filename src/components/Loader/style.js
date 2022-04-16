import styled from "styled-components";

export const LoaderContainer = styled.div`
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Spin = styled.div`
    width: ${props => props.size};
    height: ${props => props.size};
    border-radius: 50%;
    border: 5px solid ${props => props.theme.font.font1};
    transition: border .3s;
    border-left: 5px solid transparent;
    animation: rotate .8s linear infinite;

    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`