import styled from "styled-components";
import Transition from "../style/animations/Transition/style";

export const CategoryItem = styled.div`
    border-radius: 4rem;
    border: 1px solid ${props => props.theme.font.font3};
    color: ${props => props.theme.font.font1};
    background-color: ${props => props.theme.background.bg2};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 8px;
    gap: 12px;
    transition: background-color ease-in ${Transition._300ms};
`

export const CategoryColor = styled.div`
    width: 17px;
    height: 17px;
    border-radius: 50%;
    background-color: ${props => props.bgColor};
`