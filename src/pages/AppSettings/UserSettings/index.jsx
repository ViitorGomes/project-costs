import React from 'react';
import { UserProfileDatas, UserSettings } from './style';
import { Heading } from '../../../components/style/elements/Typoghaphy/style';
import ChangeDatasForm from './ChangeDatas';
import ResetPasswordForm from './ResetPassword';

function index() {
  return <UserSettings flow="column">
    <UserProfileDatas>
        <Heading level={5}>Personal informations</Heading>
        <ChangeDatasForm />
    </UserProfileDatas>
    <UserProfileDatas>
        <Heading level={5}>Reset password</Heading>
        <ResetPasswordForm />
    </UserProfileDatas>
  </UserSettings>;
}

export default index;
