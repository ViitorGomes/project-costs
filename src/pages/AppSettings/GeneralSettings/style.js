import styled from "styled-components";
import { FlexContainer } from "../../../components/Container/style";

export const GeneralSettings = styled(FlexContainer)`
    height: 100%;
    background-color: ${props => props.theme.background.bg3};
    border-radius: .3rem;
    
    h5 {
        color: ${props => props.theme.font.font1};
        font-size: calc(1.2rem + 1vmin);
    }
`