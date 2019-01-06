import React from 'react';

import { StyleProvider } from 'native-base';

import commonColor from '../../native-base-theme/variables/commonColor';
import getTheme from '../../native-base-theme/components';

function StyleProviderWrapper({children}) {
  return (
    <StyleProvider style={getTheme(commonColor)}>
      {children}
    </StyleProvider>
  )
}

export default StyleProviderWrapper;