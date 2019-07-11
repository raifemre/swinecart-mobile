import { createStackNavigator } from 'react-navigation';

import Orders from '../../screens/Orders';

const navigator = createStackNavigator({
  Orders: Orders,
}, {
    initialRouteName: 'Orders',
    defaultNavigationOptions: ({ navigation }) => {
      return {
        header: null,
      }
    }
  });

export default navigator;