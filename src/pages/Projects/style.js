import styled from "styled-components";
import { MainContainer } from "../../components/Container/style";

export const CustomMainContainer = styled(MainContainer)`
    display: grid;
    grid-template-rows: 60px 1fr;
    gap: 36px;

    > header {
        
        button {
            font-size: calc(.55rem + .88vmin);

            svg {
                width: calc(1rem + .88vmin);
                height: calc(1rem + .88vmin);
            }
        }
    }
`