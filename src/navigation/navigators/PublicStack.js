import {
  createStackNavigator
} from 'react-navigation';

import { 
  Login
} from '../../screens';

const navigator = createStackNavigator({
  // Shop: Shop,
  Login: Login,
  // Register: Register
}, {
  initialRouteName: 'Login',
  defaultNavigationOptions: ({ navigation }) => {
    return {
      header: null
    }
  }
});

export default navigator;