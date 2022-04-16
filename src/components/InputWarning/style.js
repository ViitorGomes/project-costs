import styled from "styled-components"

export const Warning = styled.div`
    display: flex;
    align-items: center;
    gap: 3px;
    font-size: .82rem;
    color: ${props => props.theme.static.failure};
    height: 15px;
    user-select: none;

    > svg {
        font-size: .88rem;
    }
` 