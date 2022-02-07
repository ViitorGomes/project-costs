import styled from "styled-components";
import { FlexContainer } from '../../../components/Container/style'
import { SettingWrapper } from "../SettingWrapper/style";

export const CategoriesSettings = styled(FlexContainer)`
    height: 100%;

    > ${SettingWrapper} {

        &:first-child {
            flex-basis: 35%;
        }

        &:last-child {
            flex-basis: 65%;
            height: 100%;
        }
    }
`

export const CategoriesList = styled(FlexContainer).attrs(() => ({
    as: 'ul'
}))`
   padding: 22px;
`