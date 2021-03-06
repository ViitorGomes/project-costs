import styled from "styled-components";
import { Container } from "../../components/Container/style";

export const Home = styled(Container).attrs(() => ({
    as: `main`
}))`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    gap: 22px;

    h1 {
        color: ${props => props.theme.font.font1};
        font-size: calc(1rem + 3.6vmin);
        font-weight: 700;
        transition: color ease-in .3s;


        span {
            font-size: calc(1.2rem + 3.2vmin);
            background-color: ${props => props.theme.background.bg1};
            transition: background-color ease-in .3s;
            color: ${props => props.theme.font.font2};
            padding: 6px 8px;
        }
    }

    p {
        color: ${props => props.theme.font.font3};
        font-size: calc(.55rem + .99vmin);
    }

    button {
        margin-top: 15px;
    }

    @media screen and (min-width: 460px){
        h1 {
            font-size: calc(1.6rem + 2.6vmin);

            span {
                font-size: calc(1.6rem + 2.6vmin);
            }
        }
    }

`