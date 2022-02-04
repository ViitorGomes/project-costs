import React from 'react';
import { Link } from 'react-router-dom';
import { ConfigButton } from './style';
import { MdSettings } from "react-icons/md";

function index() {
  return <ConfigButton title="Configuration">
      <Link to="/configuration"><MdSettings/></Link>
  </ConfigButton>;
}

export default index;
