import { createGlobalStyle } from "styled-components";

export const StyledScroll = createGlobalStyle`

    ::-webkit-scrollbar {
        width: 14px;
        transition: background-color .3s;
        
        &-track {
            background: ${props => props.theme.background.bg3};
        }
        
        &-thumb {
            width: 12px;
            border: 3px solid ${props => props.theme.background.bg3};
            background: ${props => props.theme.background.bg5};
            border-radius: .4rem;
        }
    }
`