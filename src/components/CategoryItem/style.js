import styled from "styled-components";
import getContrast from "../../utils/getColorContrast";

export const CategoryItem = styled.div`
    border-radius: 4rem;
    border: 1px solid ${props => props.theme.font.font3};
    color: ${props => getContrast(props.bgColor) === 'black' 
        ? props.theme.static.static1
        : props.theme.static.static6
    };
    background-color:  ${props => props.bgColor};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 8px;
    gap: 12px;
    font-size: .88rem;
`