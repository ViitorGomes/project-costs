import styled from "styled-components";
import getContrast from '../../utils/getContrast'

export const CategoryItem = styled.div.attrs((props) => ({
    as: props.element
}))`
    
    border-radius: .3rem;
    border: 1px solid ${props => props.theme.font.font3};
    color: ${props => getContrast(props.categoryColor) === 'black' 
        ? props.theme.static.static1
        : props.theme.static.static6
    };
    background-color:  ${props => props.categoryColor};
    margin: 4px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    padding: 4px 6px;
    gap: 6px;
    font-size: .83rem;
    transition: background-color .3s;

    > button {
        font-size: 1.1rem;
        color: inherit;
    }
`