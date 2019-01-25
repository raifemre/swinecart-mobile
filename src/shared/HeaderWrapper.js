import React from 'react';
import { Header } from 'native-base';
function HeaderWrapper({ children, ...props }) {
  return (
    <Header
      noShadow
      androidStatusBarColor='#00695C'
      {...props}
    >
      {children}
    </Header>
  );
}

export default HeaderWrapper;