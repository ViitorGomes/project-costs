import styled from "styled-components";
import { FlexContainer } from "../../../../components/Container/style";
import { UploadButton } from "../../../../components/buttons/UploadButton/style";

export const UserDatasForm = styled.form`
    padding: 20px;

    > ${FlexContainer} {
        gap: 36px;
        margin-bottom: 36px;
    }
`

export const UserInfoContainer = styled(FlexContainer)`
    width: 66.666%;
    justify-content: center;
    gap: 36px;
`

export const UserPictureContainer = styled(FlexContainer)`
    width: 33.333%;

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
`