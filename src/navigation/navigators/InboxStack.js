import {
  createStackNavigator
} from 'react-navigation';

import Inbox from '../../screens/Inbox';
// import Chat from '../../screens/Chat';
// import Conversations from '../../screens/Messaging';

const navigator = createStackNavigator({
  Inbox: Inbox
  // Conversations: Conversations,
  // Chat: Chat
}, {
    initialRouteName: 'Inbox',
    defaultNavigationOptions: ({ navigation }) => {
      return {
        header: null
      }
    }
  });

export default navigator;