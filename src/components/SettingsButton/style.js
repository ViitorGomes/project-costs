import styled from "styled-components";
import { SimpleButton } from "../buttons/SimpleButton/style";

export const SettingsButton = styled(SimpleButton)`
    font-size: 1.6rem;
    transition: color ease-in .2s;
    color: ${props => props.theme.font.font3};

    &:hover {
        color: ${props => props.theme.font.font2};
    }
`