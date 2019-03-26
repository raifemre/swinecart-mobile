import React from 'React';
import { configure } from 'mobx';
import { Provider} from 'mobx-react';
import { Root, Text, View } from 'native-base';

import RootNavigator from './navigation/navigators';

import StyleProviderWrapper from './shared/StyleProviderWrapper';
import FlashMessage from "react-native-flash-message";
import stores from './mobx/stores';
import forms from './mobx/forms';
import MessageToast from './shared/MessageToast';

configure({ enforceActions: 'always' });

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