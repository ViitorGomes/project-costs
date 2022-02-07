import React from 'react';
import { SettingWrapper } from './style'
import { Heading } from '../../../components/style/elements/Typoghaphy/style';

function index({children, heading}) {
  return <SettingWrapper>
      <Heading level={5}>{heading}</Heading>
      {children}
  </SettingWrapper>;
}

export default index;
