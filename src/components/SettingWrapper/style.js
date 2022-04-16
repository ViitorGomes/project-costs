import styled from "styled-components"

export const SettingWrapper = styled.div`
    background-color: ${props => props.theme.background.bg3};
    transition: background-color ease-in .3s;
    border-radius: .3rem;

    h5 {
        font-weight: 600;
        color: ${props => props.theme.font.font1};
        transition: background-color ease-in .3s;
        padding: 12px 16px;
        font-size: 1.1rem;
        border-bottom: 1px solid ${props => props.theme.static.static5};
    }
`