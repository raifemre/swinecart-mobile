import {
  CHAT_URL
} from 'react-native-dotenv';

import UserStore from '../mobx/stores/UserStore';
import MessageStore from '../mobx/stores/MessageStore';

const connect = () => {
  const ws = new WebSocket(`${CHAT_URL}`);

  ws.onopen = () => {
    // console.log('WebSocket(Chat):', 'Connected!');
    
    const message = {
      from: UserStore.userId,
      to: null,
      message: 'Connection established.',
      direction: null
    };

    MessageStore.setSocket(ws);
    ws.send(JSON.stringify(message));
  }


  ws.sendMessage = data => {
    ws.send(JSON.stringify(data));
  }

  ws.onmessage = ({ data }) => {
    const message = JSON.parse(data);
    const { to } = message;
    if (UserStore.userId === parseInt(to)) {
      MessageStore.onReceiveMessage(message);
    }

  }
  
  ws.onerror = (e) => {
    // console.log('WebSocket(Chat):', e.message);
  };

  ws.onclose = (e) => {
    MessageStore.setSocket(null);
    if (UserStore.userId) {
      setTimeout(() => {
        // console.log('WebSocket(Chat):', 'Reconnecting!...');
        connect();
      }, 3000);
    }
  };
}

export default function()  {

  if(UserStore.userId) {
    connect();
  }
}