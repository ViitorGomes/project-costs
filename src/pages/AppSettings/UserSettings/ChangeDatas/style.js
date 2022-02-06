import styled from "styled-components";
import { FlexContainer } from "../../../../components/Container/style";
import { UploadButton } from "../../../../components/buttons/UploadButton/style";

export const ChangeDatasForm = styled.form`
    padding: 20px;

    > ${FlexContainer} {
        gap: 36px;
        margin-bottom: 36px;

        @media screen and (min-width: 1028px) {
           flex-flow: row;
        }
    }
`

export const InfosContainer = styled(FlexContainer)`
    width: 100%;
    gap: 36px;
    

    @media screen and (min-width: 1028px) {
        width: 66.666%;
    }
`

export const PictureContainer = styled(FlexContainer)`
    width: 100%;

    > ${FlexContainer} {
        position: relative;
        border-radius: 50%;
        width: 190px;
        height: 190px;
        background-color: ${props => props.theme.static.static4};

        img {
            display: block;
            border-radius: 50%;
            width: 190px;
            height: 190px;
        }

        ${UploadButton} {
            position: absolute;
            bottom: 10px;
            right: 10px;
        }
    }

    @media screen and (min-width: 1028px) {
        width: 33.333%;
    }
`