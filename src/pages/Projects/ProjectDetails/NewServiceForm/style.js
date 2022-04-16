import styled from "styled-components";

export const NewServiceWindowContainer = styled.div`
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    padding: 64px 2vw 0 2vw ;
    background-color: #22222290;
    display: flex;
    justify-content: center;
    align-items: center;
    `

export const NewServiceWindow = styled.div`
    position: relative;
    width: min(520px, 100%);
    background-color: ${props => props.theme.background.bg3};
    border-radius: .2rem;
    transition: all ease-in .3s;
    transform: scale(0);
    transform-origin: center;
    animation: animedDisplay .2s 1 ease-in forwards;

    @keyframes animedDisplay {
        to {
            transform: scale(1);
        }
    }

    > button {
        position: absolute;
        top: 6px;
        right: 6px;

        > svg {
            font-size: 1.4rem;
        }
    }

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

    > form {
        height: 100%;
        display: flex;
        flex-flow: column;
        gap: 36px;
        align-items: center;
        justify-content: space-between;

        > div {
            width: 100%;
            display: flex;
            flex-flow: column;
            gap: 16px;
        }

        > button {
            padding: 6px 36px;
        }
    }
`