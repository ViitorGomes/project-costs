import styled from "styled-components";
import { SimpleButton } from "../SimpleButton/style";

export const UserHeaderMenu = styled.div`
    position: relative;
`

export const UserPicWrapper = styled(SimpleButton)`
    border: 2px solid ${props => props.theme.static.static5};
    border-radius: 50%;
    width: 36px;
    height: 36px;
    background: ${props => props.theme.background.bg4} url(${props => props.userPicture}) no-repeat center center;
    background-size: cover;
`