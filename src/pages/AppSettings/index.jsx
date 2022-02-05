import React from 'react';
import { Outlet } from 'react-router-dom';
import { Heading } from '../../components/style/elements/Typoghaphy/style';
import SettingsNavegation from './SettingsNavegation';
import { FlexContainer, MainContainer } from "../../components/Container/style";

function index() {
  return <MainContainer>
      <header>
        <Heading level={2}>Settings</Heading>
      </header>
      <FlexContainer gap="22">
        <SettingsNavegation />
        <Outlet />
      </FlexContainer>
  </MainContainer>;
}

export default index;
