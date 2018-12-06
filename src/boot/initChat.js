import {
  API_URL
} from 'react-native-dotenv';

import UserStore from '../mobx/stores/UserStore';
import MessageStore from '../mobx/stores/MessageStore';

const connect = () => {
  const ws = new WebSocket('ws://swinecart.test/chat');

  ws.onopen = () => {
    console.log('WebSocket:', 'Connected!');
    
    const message = {
      from: UserStore.userId,
      to: null,
      message: 'Connection established.',
      direction: null
    };

    MessageStore.setSocket(ws);
    ws.send(JSON.stringify(message));
  }

  ws.onmessage = ({ data }) => {
    const message = JSON.parse(data);
    const { to } = message;
    if (UserStore.userId === parseInt(to)) {
      MessageStore.handleReceivedMessage(message);
    }

  }

  ws.onerror = (e) => {
    console.log('WebSocket:', e.message);
  };

  ws.onclose = (e) => {
    if (UserStore.userId) {
      setTimeout(() => {
        console.log('WebSocket:', 'Reconnecting!...');
        connect();
      }, 1000);
    }
  };
}

export default function()  {

  if(UserStore.userId) {
    connect();
  }
}