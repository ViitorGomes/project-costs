import React from 'react';
import { Link } from 'react-router-dom';
import { SettingsButton } from './style';
import { MdSettings } from "react-icons/md";

function index() {
  return <SettingsButton title="Configuration">
      <Link to="/settings"><MdSettings/></Link>
  </SettingsButton>;
}

export default index;
