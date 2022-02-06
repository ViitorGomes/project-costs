import styled from "styled-components";
import { FlexContainer } from "../../../components/Container/style";
import Transitions from '../../../components/style/animations/Transition/style'

export const UserSettings = styled(FlexContainer)`
    
    gap: 36px;
`

export const UserProfileDatas = styled.div`
    background-color: ${props => props.theme.background.bg3};
    transition: background-color ease-in ${Transitions._300ms};
    border-radius: .3rem;

    h5 {
        font-weight: 600;
        color: ${props => props.theme.font.font1};
        transition: background-color ease-in ${Transitions._300ms};
        padding: 16px 20px;
        font-size: 1.1rem;
        border-bottom: 1px solid ${props => props.theme.static.static5};
    }
`