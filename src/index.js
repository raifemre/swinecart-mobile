import React from 'React';
import { configure } from 'mobx';
import { Provider} from 'mobx-react';
import { Root } from 'native-base';

import RootNavigator from './navigation/navigators';

import stores from './mobx/stores';
import forms from './mobx/forms';

configure({ enforceActions: 'always' });

export default () => (
  <Root>
    <Provider {...stores} {...forms}>
      <RootNavigator />
    </Provider>
  </Root>
);