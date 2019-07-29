import {
  createStackNavigator
} from 'react-navigation';

import {
  Dashboard
} from '../../screens';

const navigator = createStackNavigator({
  Dashboard: Dashboard
}, {
    initialRouteName: 'Dashboard',
    defaultNavigationOptions: ({ navigation }) => {
      return {
        header: null
      }
    }
  });

export default navigator;