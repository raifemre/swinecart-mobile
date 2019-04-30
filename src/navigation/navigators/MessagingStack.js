import {
  createStackNavigator
} from 'react-navigation';

import Chat from '../../screens/Chat';
import Conversations from '../../screens/Messaging';

const navigator = createStackNavigator({
  Conversations: Conversations,
  Chat: Chat
}, {
    initialRouteName: 'Conversations',
    defaultNavigationOptions: ({ navigation }) => {
      return {
        header: null
      }
    }
  });

export default navigator;