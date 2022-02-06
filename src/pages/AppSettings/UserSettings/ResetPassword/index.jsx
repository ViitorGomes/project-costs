import React, { useCallback, useRef } from 'react';
import { ResetPasswordForm } from './style'
import { FlexContainer } from '../../../../components/Container/style';
import InputWrapper from '../../../../components/inputs/InputWrapper';
import Button from '../../../../components/buttons/DefaultButton';

function index() {

  const currentPasswordRef = useRef(null)
  const newPasswordRef = useRef(null)
  const repeatPasswordRef = useRef(null)

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
  }, [])

  return <ResetPasswordForm onSubmit={handleSubmit}>
    <FlexContainer gap="36px" flow="column">
      <InputWrapper type="password" id="currentPassword" name="currentPassword" inputRef={currentPasswordRef} isRequired={true} autoComplete="off" label="Current password:"/>
      <InputWrapper type="password" id="newPassword" name="newPassword" inputRef={newPasswordRef} isRequired={true} autoComplete="off" label="New password:"/>
      <InputWrapper type="password" id="repeatPassword" name="repeatPassword" inputRef={repeatPasswordRef} isRequired={true} autoComplete="off" label="Repeat password:"/>
    </FlexContainer>
    <Button type="submit" styleType="active" cornerStyle="basic">Save changes</Button>
  </ResetPasswordForm>;
}

export default index;
