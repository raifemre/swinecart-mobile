import UUIDGenerator from 'react-native-uuid-generator';
import UserStore from '../stores/UserStore';

class Message {

  constructor(props) {
    this.GCFormat = Message.toGCFormat(props);
    this.DBFormat = Message.toDBFormat(props);
  }

  static async generateUUID() {
    await UUIDGenerator.getRandomUUID();
  }

  static async toGCFormat(message) {

    if(message.from) {
      const { message: text, from_id } = message;
      return {
        _id: await generateUUID(),
        text,
        user: {
          _id: from_id
        }
      }
    }
    else {
      const { message: text, direction, customer_id, breeder_id } = message;
      const senderId = direction === 0? customer_id : breeder_id;
      return {
        _id: await generateUUID(),
        text,
        user: {
          _id: senderId
        }
      }
    }
  }

  static async toDBFormat(message) {
    const { text } = message;
    const userRole = UserStore.userRole;
    const userId = UserStore.userId;
    const { id: selectedUserId } = MessageStore.selectedUser;
    
    return {
      message: text,
      direction: userRole === 'Breeder' ? 1 : 0,
      from: `${userId}`,
      to: `${selectedUserId}`
    };
  }

}

export default Message;