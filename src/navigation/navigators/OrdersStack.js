import { createStackNavigator } from 'react-navigation';

import {
  Orders, Requests
} from '../../screens';

const navigator = createStackNavigator({
  Orders: Orders,
  Requests: Requests,
}, {
    initialRouteName: 'Orders',
    defaultNavigationOptions: ({ navigation }) => {
      return {
        header: null
      }
    }
  });

navigator.navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible: navigation.state.index > 0 ? false : true,
  };
};

export default navigator;