import UserStore from '../mobx/stores/UserStore';
import NotificationStore from '../mobx/stores/NotificationStore';

const connect = () => {
  const ws = new WebSocket('ws://swinecart.test/pusher');

  ws.onopen = () => {
    console.log('WebSocket(Notifs):', 'Connected!');

  }

  ws.onmessage = ({ data }) => {
    const message = JSON.parse(data);
    console.log(message);
  }

  ws.onerror = (e) => {
    console.log('WebSocket(Notifs):', e.message);
  };

  ws.onclose = (e) => {
    if (UserStore.userId) {
      setTimeout(() => {
        console.log('WebSocket(Notifs):', 'Reconnecting!...');
        connect();
      }, 3000);
    }
  };
}

export default async function() {
  await NotificationStore.getNotifs();
  // connect();
}