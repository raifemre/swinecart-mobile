import { createStackNavigator } from 'react-navigation';

import Login from '../../screens/Login';

const navigator = createStackNavigator({
  Login: Login,
}, {
  initialRouteName: 'Login',
  defaultNavigationOptions: ({ navigation }) => {
    return {
      header: null
    }
  }
});

export default navigator;