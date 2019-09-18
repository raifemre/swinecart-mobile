import { createStackNavigator } from 'react-navigation';

import {
  Orders, Requests
} from 'features';

import transitionConfig from 'constants/transitionConfig';

const navigator = createStackNavigator({
  Orders: Orders,
  Requests: Requests
}, {
  initialRouteName: 'Orders',
  headerMode: 'none',
  transitionConfig: transitionConfig,
  defaultNavigationOptions: {
  }
});

navigator.navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible: navigation.state.index > 0 ? false : true,
  };
};

export default navigator;