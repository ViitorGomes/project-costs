import React from 'react';
import { UserProfileDatas, UserSettings } from './style';
import { Heading } from '../../../components/style/elements/Typoghaphy/style';
import UserDatasForm from './UserDatasFrom';

function index() {
  return <UserSettings flow="column">
    <UserProfileDatas>
        <Heading level={5}>Personal informations</Heading>
        <UserDatasForm />
    </UserProfileDatas>
    <UserProfileDatas>
        <Heading level={5}>Reset password</Heading>
    </UserProfileDatas>
  </UserSettings>;
}

export default index;
