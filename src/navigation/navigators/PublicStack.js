import { createStackNavigator } from 'react-navigation';

import {
  Login
} from 'screens';

import transitionConfig from 'constants/transitionConfig';

const navigator = createStackNavigator({
  Login: Login,
}, {
  initialRouteName: 'Login',
  headerMode: 'none',
  transitionConfig: transitionConfig,
  defaultNavigationOptions: {
  }
});

export default navigator;