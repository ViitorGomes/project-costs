import styled from "styled-components";

export const ProjectForm = styled.form`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    gap: 26px;
    
    > *:not(button) {
        width: 100%;
    }

    > button {
        padding-left: 36px;
        padding-right: 36px;
    }
`

export const RelativeWrapper = styled.div`
    position: relative;
`