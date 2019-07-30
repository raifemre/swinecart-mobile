import { createStackNavigator } from 'react-navigation';

import {
  Orders, Requests, Modal
} from '../../screens';

const navigator = createStackNavigator({
  Orders: Orders,
  Requests: Requests,
  Modal: Modal
}, {
    initialRouteName: 'Orders',
    defaultNavigationOptions: ({ navigation }) => {
      return {
        header: null,
        mode: 'modal'
      }
    }
  });

navigator.navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible: navigation.state.index > 0 ? false : true,
  };
};

export default navigator;