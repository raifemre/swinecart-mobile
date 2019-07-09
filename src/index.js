import React from 'React';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider } from 'react-native-ui-kitten';

import { useScreens } from 'react-native-screens';
import RootNavigator from './navigation/navigators';
import NavigationService from './services/navigation';

useScreens();

export default () => (
  <ApplicationProvider mapping={mapping} theme={lightTheme}>
    <RootNavigator ref={NavigationService.setTopLevelNavigator} />
  </ApplicationProvider>
);