import styled from "styled-components";

export const Container = styled.div`
    padding: 0 4vw;

    @media screen and (min-width: 760px) {
        padding: 0 3vw;   
    }

    @media screen and (min-width: 1200px) {
        padding: 0 2vw;   
    }
`
export const FlexContainer = styled.div`
    display: flex;
    justify-content: ${props => props.justify ? props.justify : null};
    align-items: ${props => props.align ? props.align : null};
    flex-flow: ${props => props.flow ? props.flow : null};
    flex-wrap: ${props => props.flexWrap ? props.flexWrap : null};
    gap: ${props => props.gap ? props.gap : 0};

`

export const MainContainer = styled(Container).attrs(() => ({
    as: `main`
}))`
    padding: 3vh 4vw;
    display: grid;
    grid-template-rows: 60px 1fr;
    gap: 22px;
    position: relative;

    > header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        
        h2 {
            color: ${props => props.theme.font.font1};
            transition: color ease-in .3s;
            font-size: calc(1rem + .88vmin);
            font-weight: 600;
            flex: 1 1 50%;
            
            &::after {
                content: '';
                margin-top: 4px;
                display: block;
                height: 4px;
                background-image: linear-gradient(to right, ${props => props.theme.font.font1} 20%, transparent 40%, transparent 40%);
                transition: background-image ease-in .3s;

            }
        }
    }

    @media screen and (min-width: 760px) {
        padding: 2vh 2vw;   
    }

    @media screen and (min-width: 1200px) {
        padding: 2vh 1vw;   
    }
`