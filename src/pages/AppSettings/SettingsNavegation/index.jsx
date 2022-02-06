import React from 'react';
import { Link } from 'react-router-dom';
import { Heading } from '../../../components/style/elements/Typoghaphy/style';
import { SettingsNavegation } from './style'

function index() {
  return <SettingsNavegation>
      <Heading level={5}>Menu</Heading>
      <ul>
          <li><Link to="user-profile">User profile</Link></li>
          <li><Link to="categories-settings">Categories settings</Link></li>
      </ul>
  </SettingsNavegation>;
}

export default index;
