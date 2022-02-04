import React from 'react';
import { MdLogout } from "react-icons/md";
import { LogoutButton } from './style';

function index() {
  return <LogoutButton title="Logout">
      <MdLogout/>
  </LogoutButton>;
}

export default index;
