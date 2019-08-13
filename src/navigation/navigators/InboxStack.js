import {
  createStackNavigator
} from 'react-navigation';

import {
  Inbox, Chat
} from '../../screens';

const navigator = createStackNavigator({
  Inbox: Inbox,
  Chat: Chat
}, {
    initialRouteName: 'Inbox',
    defaultNavigationOptions: ({ navigation }) => {
      return {
        header: null
      }
    }
  });

navigator.navigationOptions = ({ navigation }) => {
  return {
    // tabBarVisible: false,
    tabBarVisible: navigation.state.index > 0 ? false : true,
  };
};


export default navigator;