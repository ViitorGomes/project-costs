import React, { useCallback, useRef, useState } from 'react';
import { ChangeDatasForm, InfosContainer, PictureContainer } from './style'
import InputWrapper from '../../../../components/inputs/InputWrapper'
import Button from '../../../../components/buttons/DefaultButton'
import defaultUser from '../../../../assets/images/default_user.png'
import { FlexContainer } from '../../../../components/Container/style';
import UploadButton from '../../../../components/buttons/UploadButton';

function index() {
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const [ userPicture, setUserPicture ] = useState(defaultUser)

    const handleUpload = e => {
        const upload = new FileReader()
        upload.onload = () => {
            upload.readyState === 2 ? setUserPicture(upload.result) : console.log(upload.readyState)
        }
        upload.readAsDataURL(e.target.files[0])
    }

    const handleSubmit = useCallback((e) => {
        e.preventDefault()
        const name = nameRef.current.value
        const email = emailRef.current.value

        console.log(name)
        console.log(email)
    })

    return <ChangeDatasForm onSubmit={handleSubmit}>
        <FlexContainer flow="column-reverse">
            <InfosContainer flow="column">
                <InputWrapper type="text" id="userName" name="userName" inputRef={nameRef} isRequired={true} autoComplete="off" label="User name"/>
                <InputWrapper type="email" id="userEmail" name="userEmail" inputRef={emailRef} isRequired={true} autoComplete="off" label="User e-mail"/>
            </InfosContainer>
            <PictureContainer justify="center" align="center">
                <FlexContainer>
                    <img src={userPicture} alt="Profile picture" />
                    <UploadButton id="profilePicture" name="profilePicture" accept=".jpg, .jpeg, .png" cb={{onChange: e => handleUpload(e)}}/>
                </FlexContainer>
            </PictureContainer>
        </FlexContainer>
        <Button type="submit" styleType="active" cornerStyle="basic">Save changes</Button>
    </ChangeDatasForm>;
}

export default index;
