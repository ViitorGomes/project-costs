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
    justify-content: ${props => props.justify ? props.justify : "flex-start"};
    align-items: ${props => props.align ? props.align : "flex-start"};
    flex-flow: ${props => props.flow ? props.flow : "row"};
    gap: ${props => props.gap ? props.gap : 0};

`