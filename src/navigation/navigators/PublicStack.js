import {
  createStackNavigator
} from 'react-navigation';

import Shop from '../../screens/Shop';
import Login from '../../screens/Login';
import Register from '../../screens/Register';

const navigator = createStackNavigator({
  Shop: Shop,
  Login: Login,
  Register: Register
}, {
  initialRouteName: 'Login',
  defaultNavigationOptions: ({ navigation }) => {
    return {
      header: null
    }
  }
});

export default navigator;