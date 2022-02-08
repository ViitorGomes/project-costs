import styled from "styled-components";
import { FlexContainer } from '../../../components/Container/style'
import { SettingWrapper } from "../SettingWrapper/style";

export const CategoriesSettings = styled(FlexContainer)`
    > ${SettingWrapper} {
        width: 100%;

        &:last-child {
            min-height: 560px;
        }
    }
    
    @media screen and (min-width: 1444px) {
        flex-flow: row;
        height: 100%;

        > ${SettingWrapper} {
            &:first-child {
                flex-basis: 35%;
                align-self: flex-start;
            }

            &:last-child {
                flex-basis: 65%;
            }
        }
    }
`

export const CategoriesList = styled.ul`
   padding: 22px;

   > * {
       display: inline-flex;
       margin: 6px; 
   }
`