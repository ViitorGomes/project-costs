import styled from "styled-components";

export const ThemeSwitcher = styled.div`
    width: 60px;
    height: 28px;
    justify-self: flex-end;

    label {
        border-radius: 2rem;
        border: 3px solid ${props => props.theme.static.static5};
        display: block;
        padding: 3px;
        cursor: pointer;
        display: flex;
        justify-content: flex-start;
        position: relative;

        svg {
            position: absolute;
            color: ${props => props.theme.static.static5};
            top: 50%;
            transform: translateY(-50%);

            &:first-child {
                left: 6px
            }

            &:last-child {
                right: 6px;
            }
        }

        &::after {
            content: '';
            display: block;
            width: 50%;
            height: 16px;
            background-color: ${props => props.theme.static.static5};
            border-radius: 2rem;
            transition: .3s;
        }
    }
    
    
    input {
        display: none;
        
        &:checked ~ label::after {
            transform: translateX(100%);
        }
    }
`