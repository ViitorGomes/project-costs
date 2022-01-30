import styled, { css } from "styled-components";

export const Button = styled.button`
    padding: 6px 10px;
    color: ${props => props.theme.static.static1};
    border: 0;
    transition: .2s ease-in;
    cursor: pointer;
    gap: 6px;
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    ${props => {
        let bgColor, hoverColor;
        const buttonColors = props.theme.button

        switch (props.styleType) {
            case 'secondary':
                bgColor = buttonColors.secondary
                hoverColor = buttonColors.secondaryHover
                break
            case 'success':
                bgColor = buttonColors.success
                hoverColor = buttonColors.successHover
                break
            case 'failure':
                bgColor = buttonColors.failure
                hoverColor = buttonColors.failureHover
                break
            case 'warning':
                bgColor = buttonColors.warning
                hoverColor = buttonColors.warningHover
                break
            default:
                bgColor = buttonColors.active
                hoverColor = buttonColors.activeHover
                
        }

        return css`
            background-color: ${bgColor};
            border: 2px solid ${bgColor};

            &:hover {
                background-color: ${hoverColor};
            }
        `

    }}

    ${props => {
        let corner;

        switch (props.cornerStyle) {
            case 'rounded':
                corner = '4rem'
                break
            case 'square':
                corner = '0rem'
                break
            default:
                corner = '.3rem'
                
        }

        return css`
            border-radius: ${corner};
        `
    }}
`