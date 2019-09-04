import {
  createStackNavigator
} from 'react-navigation';

import {
  Dashboard
} from 'screens';

import transitionConfig from 'constants/transitionConfig';

const navigator = createStackNavigator({
  Dashboard: Dashboard
}, {
  initialRouteName: 'Dashboard',
  headerMode: 'none',
  transitionConfig: transitionConfig,
  defaultNavigationOptions: {
  }
});

export default navigator;