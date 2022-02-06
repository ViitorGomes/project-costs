import styled from "styled-components";
import { FlexContainer } from "../../Container/style";

export const UploadButton = styled(FlexContainer)`

        label {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 6px;
            cursor: pointer;
            background-color: ${props => props.theme.button.secondary};
            transition: .2s;
            color: ${props => props.theme.font.font2};
            border-radius: 50%;
            font-size: 1.4rem;

            &:hover {
                background-color: ${props => props.theme.button.secondaryHover};
            }
        }

        input[type="file"] {
            display: none;
        }
`