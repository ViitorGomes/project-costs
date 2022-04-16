import styled, { css } from "styled-components";
import { FlexContainer } from "../../Container/style";

export const ProjectCard = styled.article`
    border-radius: .3rem;
    background-color: ${props => props.theme.background.bg3};
    transition: background-color ease-in .3s;
    overflow: hidden;

    header {
        position: relative;
        padding: 12px 8px;
        display: flex;
        gap: 24px;
        justify-content: space-between;
        align-items: center;
        border-radius: .3rem .3rem 0 0;
        background-color: ${props => props.theme.background.bg1};
        transition: background-color ease-in .3s;

        h2 {
            color: ${props => props.theme.font.font2};
            font-size: calc(.70rem + .70vmin);
            font-weight: 500;
    
            span {
                background-image: linear-gradient(to right, ${props => props.theme.font.font2}, transparent);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }

            @media screen and (min-width: 760px) {
                font-size: calc(.60rem + .66vmin); 
            }
        }
    }
`

export const InformationsContainer = styled(FlexContainer)`
    padding: 16px 8px;
    flex-flow: column;
    gap: 24px;

    > * {
        width: 100%;

        span {
            font-weight: 500;
            color: ${props => props.theme.font.font1};
            font-size: calc(.65rem + .76vmin);

            &:first-child {
                color: ${props => props.theme.font.font3};
            }
            
            @media screen and (min-width: 760px) {
                font-size: calc(.55rem + .66vmin);
            }
        }
    }
`

export const CardButtonsContainer = styled.div`
    border-top: 1px solid ${props => props.theme.static.static5};
    padding: 8px;
    display: flex;
    justify-content: space-between;
    gap: 16px;

    button {
        svg {
            margin-right: 3px;
            font-size: 1.2rem;
        }
    }
`

export const CategoriesContainer = styled.div`
    display: flex;
    gap: 16px;
    justify-content: space-between;
    align-items: flex-start;

    > div {
        height: 65px;
        overflow-x: auto;
    }
`

export const StatusMark = styled.span`
    position: absolute;
    top: -4px;
    right: 16px;
    font-size: 2.2rem;

    ${props => {
        switch (props.status) {
            case 'not started':
                return css`
                    color: ${props.theme.static.failure};
                `
            case 'in progress':
                return css`
                    color: ${props.theme.static.warning};
                `
            case 'completed':
                return css`
                    color: ${props.theme.static.success};
                `
            default:
                return
        }
    }}
`