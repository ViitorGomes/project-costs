import styled from "styled-components";

export const NotFoundPage = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;

    > *:not(:last-child) {
        margin-bottom: 16px;
    }

    > img {
        width: calc(5rem + 50vmin);
    }

    > p {
        color: ${props => props.theme.font.font1};
        font-size: calc(.88rem + 1.8vmin);
        font-weight: 600;
    }
`