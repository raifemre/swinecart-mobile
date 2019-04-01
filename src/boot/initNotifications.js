import { PUSHER_URL } from 'react-native-dotenv';
import NotificationStore from '../mobx/stores/NotificationStore';
import wamp from 'wamp.js';

const connect = () => {
  // console.dir(PUSHER_URL, wamp);
  wamp.debugOn();
  const connection = new wamp.Connection({ url: 'ws://swinecart.test/pusher', realm: 'realm1' });
  connection.onopen = () => {
    console.log('Hello');
  };
  connection.onclose = (reason, details) => {
    console.dir(reason, details);
  }
  connection.open();
};


export default async function() {
  await NotificationStore.getNotifications();
  connect();
}