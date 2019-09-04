import {
  createStackNavigator
} from 'react-navigation';

import {
  Inbox, Chat
} from 'screens';

import transitionConfig from 'constants/transitionConfig';

const navigator = createStackNavigator({
  Inbox: Inbox,
  Chat: Chat
}, {
  initialRouteName: 'Inbox',
  headerMode: 'none',
  transitionConfig: transitionConfig,
  defaultNavigationOptions: {
  }
});

navigator.navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible: navigation.state.index > 0 ? false : true,
    // tabBarVisible: false,
  };
};


export default navigator;