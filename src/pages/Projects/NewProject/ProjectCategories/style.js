import styled from "styled-components";

export const ProjectCategories = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 16px;

    span {
        color: ${props => props.theme.font.font1};
        font-size: 1rem;
    }

    > button {
        font-size: 1.6rem;
        height: 30px;
        width: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2px;
    }
`

export const CategoriesList = styled.ul`
    height: 70px;
    overflow-y: auto;

    > * {
        display: inline-flex;
        margin: 6px;
    }
`