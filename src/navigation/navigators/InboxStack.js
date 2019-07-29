import {
  createStackNavigator
} from 'react-navigation';

import {
  Inbox
} from '../../screens';

const navigator = createStackNavigator({
  Inbox: Inbox
}, {
    initialRouteName: 'Inbox',
    defaultNavigationOptions: ({ navigation }) => {
      return {
        header: null
      }
    }
  });

export default navigator;