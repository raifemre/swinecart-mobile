import {
  observable, action, toJS, runInAction
} from 'mobx';

import {
  Messages
} from '../../services';

import Message from '../models/Message';
class MessageStore {

  @observable socket = null;

  @observable threads = [];
  @observable messages = [];
  @observable allMessages = {};
  @observable selectedUser = {};

  @action async getThreads() {
    const { data: { data: threads } } = await Messages.getThreads();
    runInAction(() => {
      this.threads = threads;
    });
  }

  @action async getMessages() {
    const { id } = this.selectedUser;
    const { data: { data: messages } } = await Messages.getMessages(id);
    const ms = messages.map(message => {
      const m = new Message(message);
      return m.GCFormat;
    });
    runInAction(() => {
      this.messages = ms;
      this.allMessages[id] = ms;
    });
  }

  @action addMessage(messages) {
    const { id } = this.selectedUser;
    messages.map(message => {
      delete message.createdAt;
      this.messages.unshift(message);
      const m = new Message(message);
      this.socket.send(JSON.stringify(m.DBFormat));
    });
  }

  @action setSelectedUser(selectedUser) {
    this.selectedUser = selectedUser;
  }

  @action async handleReceivedMessage(message) {
    const m = new Message(message);
    // console.log(m.GCFormat);
    this.messages.unshift(m.GCFormat);
  }

  setSocket(socket) {
    runInAction(() => {
      this.socket = socket; 
    });
  }
}

export default new MessageStore();