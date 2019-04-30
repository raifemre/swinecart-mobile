import React from 'React';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';
import { Root } from 'native-base';
import { useScreens } from 'react-native-screens';
import FlashMessage from 'react-native-flash-message';

import RootNavigator from './navigation/navigators';

import StyleProviderWrapper from './shared/StyleProviderWrapper';
import stores from './mobx/stores';
import forms from './mobx/forms';
import MessageToast from './shared/MessageToast';

configure({ enforceActions: 'always' });

useScreens();

export default () => (
  <Root>
    <Provider {...stores} {...forms}>
      <StyleProviderWrapper>
        <RootNavigator />
      </StyleProviderWrapper>  
    </Provider>
    <FlashMessage position='top' MessageComponent={MessageToast} />
  </Root>
);