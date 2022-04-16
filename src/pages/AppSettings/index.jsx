import React from 'react';
import { Outlet } from 'react-router-dom';
import { Heading } from '../../components/style/elements/Typoghaphy/style';
import SettingsNavegation from './SettingsNavegation';
import { FlexContainer } from "../../components/Container/style";
import { SettingsMainContainer } from './style'

function index() {
  return (
    <SettingsMainContainer>
        <header>
          <Heading level={2}>Settings</Heading>
        </header>
        <FlexContainer gap="36px" flow="column" align="flex-start">
          <SettingsNavegation />
          <Outlet />
        </FlexContainer>
    </SettingsMainContainer>
  )
}

export default index;