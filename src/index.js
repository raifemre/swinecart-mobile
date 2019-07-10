import React from 'React';
import { mapping } from '@eva-design/eva';
import { ApplicationProvider } from 'react-native-ui-kitten';
import { useScreens } from 'react-native-screens';

import RootNavigator from './navigation/navigators';
import NavigationService from './services/navigation';
import { colors } from './constants/theme';

useScreens();

export default () => (
  <ApplicationProvider mapping={mapping} theme={colors}>
    <RootNavigator ref={NavigationService.setTopLevelNavigator} />
  </ApplicationProvider>
);