import styled from "styled-components";

export const Container = styled.div`
    padding: 0 3vw;
`
export const FlexContainer = styled.div`
    display: flex;
    justify-content: ${props => props.justify ? props.justify : "flex-start"};
    align-items: ${props => props.align ? props.align : "flex-start"};
    flex-flow: ${props => props.flow ? props.flow : "row"};
    gap: ${props => props.gap ? props.gap : 0};

`