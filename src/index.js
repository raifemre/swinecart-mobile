import React from 'React';
import { mapping } from '@eva-design/eva';
import { ApplicationProvider } from 'react-native-ui-kitten';

import RootNavigator from './navigation/navigators';
import {
  NavigationService
} from './services';

import { colors } from './constants/theme';

export default () => (
  <ApplicationProvider mapping={mapping} theme={colors}>
    <RootNavigator ref={NavigationService.setTopLevelNavigator} />
  </ApplicationProvider>
);