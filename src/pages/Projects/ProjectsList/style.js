import styled from "styled-components";
import { FlexContainer } from "../../../components/Container/style";

export const ProjectListContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    position: relative;
`

export const ProjectList = styled.ul`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    align-content: start;
    gap: 36px;

    @media screen and (min-width: 760px) {
        grid-template-columns: 1fr 1fr;  
    }

    @media screen and (min-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr;  
    }

    @media screen and (min-width: 1444px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;  
    }
`

export const NoProjectWarning = styled(FlexContainer)`
    display: flex;
    align-items: center;
    justify-self: center;
    flex-flow: column;
    gap: 16px;

    p {
        font-weight: 600;
        color: ${props => props.theme.font.font1};
        transition: color ease-in .3s;
        font-size: calc(.99rem + .77vmin);
    }
`