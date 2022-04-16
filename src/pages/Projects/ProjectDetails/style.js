import styled from "styled-components";
import { FlexContainer } from "../../../components/Container/style";

export const DetailsContainer = styled.section`
    height: 100%;
`

export const InformationsContainer = styled.div`
    border-radius: .3rem;
    height: 100%;
    width: min(1200px, 100%);
    margin: 0 auto;

    > header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 12px;
        border-bottom: 1px solid ${props => props.theme.static.static5};
        margin-bottom: 16px;
        gap: 16px;

        h3 {
            color: ${props => props.theme.font.font1};
            font-size: 1.2rem;
        }

        > button {
            font-size: .95rem;
            flex-shrink: 0;
        }
    }

    > div {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
    }
`

export const ValueCardsWrapper = styled.div`
    display: flex;
    flex-flow: column;
    gap: 16px;
    flex-basis: 100%;
    
    @media screen and (min-width: 760px) {
        flex-flow: row;

        > * {
            width: min(380px, 100%);
        }
    }
`

export const InformationWrapper = styled.div`
    background-color: ${props => props.theme.background.bg3};
    transition: background-color ease-in .3s;
    border-radius: .2rem;
    height: 200px;
    display: flex;
    flex-flow: column;
    flex-basis: 100%;
    
    h5 {
        border-bottom: 1px solid ${props => props.theme.static.static5};
        padding: 8px;
        color: ${props => props.theme.font.font3};
    }
    
    > div {
        overflow-x: auto;
        padding: 6px 8px;
        height: 100%;

        p {
            color: ${props => props.theme.font.font1};
        }
        
        > ${FlexContainer} {
            height: 100%;
        }
    }

    @media screen and (min-width: 760px) {
        flex-basis: calc(50% - 8px);
    }
`

export const ServicesWrapper = styled.div`
    flex-basis: 100%;
    border-radius: .2rem;
    min-height: 320px;
    background-color: ${props => props.theme.background.bg3};
    transition: background-color ease-in .3s;

    > header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px;
        border-bottom: 1px solid ${props => props.theme.static.static5};

        > h5 {
            color: ${props => props.theme.font.font3};
        }
    }

    > div {
        overflow-x: auto;
        padding: 6px 8px;
        height: 100%;

        p {
            color: ${props => props.theme.font.font1};
        }
        
        > ${FlexContainer} {
            height: 100%;
        }
    }
`