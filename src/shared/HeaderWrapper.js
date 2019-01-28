import React from 'react';
import { Header } from 'native-base';

import Global from '../assets/css/global';
const { primaryColor } = Global;

function HeaderWrapper({ children, ...props }) {
  return (
    <Header
      noShadow
      androidStatusBarColor={primaryColor}
      {...props}
    >
      {children}
    </Header>
  );
}

export default HeaderWrapper;