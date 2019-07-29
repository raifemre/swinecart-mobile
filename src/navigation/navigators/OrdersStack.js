import { createStackNavigator } from 'react-navigation';

import Orders from '../../screens/Orders';
import Requests from '../../screens/Requests';

const navigator = createStackNavigator({
  Orders: Orders,
  Requests: Requests,
}, {
    initialRouteName: 'Orders',
    defaultNavigationOptions: ({ navigation }) => {
      return {
        header: null,
        // mode: 'modal'
      }
    }
  });

navigator.navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible: navigation.state.index > 0 ? false : true,
  };
};

export default navigator;