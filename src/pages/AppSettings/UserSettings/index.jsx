import React from 'react';
import ChangeDatasForm from './ChangeDatas';
import ResetPasswordForm from './ResetPassword';
import { FlexContainer } from '../../../components/Container/style';
import SettingWrapper from '../SettingWrapper'

function index() {
  return <FlexContainer flow="column" gap="36px">
    <SettingWrapper heading={"Personal informations"}>
      <ChangeDatasForm />
    </SettingWrapper>
    <SettingWrapper heading={"Reset password"}>
      <ResetPasswordForm />
    </SettingWrapper>
  </FlexContainer>;
}

export default index;
