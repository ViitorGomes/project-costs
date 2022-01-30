import styled from "styled-components";
import { Container } from "../../Container/style";

export const Footer = styled(Container).attrs(() => ({
    as: `footer`
}))`
    background-color: ${props => props.theme.background.bg1};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;

    > *:not(:last-child) {
        margin-bottom: 8px;
    }

    > p {
        color: ${props => props.theme.font.font3};
        font-size: calc(.72rem + .55vmin);
        text-align: center;

        a {
            color: ${props => props.theme.font.font2};
            font-weight: 600;
            display: inline-block;
            
            &::after {
                content: '';
                display: block;
                width: 100%;
                height: 2px;
                background-color: ${props => props.theme.font.font2};
                transform: scaleX(0);
                transform-origin: left;
                transition: .2s;
            }

            &:hover {
                &::after {
                    transform: scaleX(1);
                }
            }
        }
    }

    ${Container} {
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;

        a {
            color: ${props => props.theme.font.font2};
            font-size: 1.8rem;
        }
    }
`