import {
  observable, action, toJS, runInAction, get, set, computed
} from 'mobx';

import { map } from 'lodash';

import { Messaging } from '../../services';
import { toGCFormat, toDBFormat } from '../../utils';

import UserStore from './UserStore';

class MessageStore {

  @observable socket = null;

  @observable threads = null;
  @observable allMessages = new Map();
  @observable selectedUser = null;

  @action async getThreads() {
    const { data } = await Messaging.getThreads(UserStore.userRole, 1, 15);
    const { count, threads } = data;

    runInAction(() => {
      map(threads, thread => {
        const { message } = thread;
        const { from_id } = message;
        const user = from_id === UserStore.userId ? UserStore.user : thread.user;
  
        set(this.allMessages, `${thread.user.id}`, [ toGCFormat(1, user, message) ]);
      });
      this.threads = threads;
    });
  }

  @action async getMessages() {
    const { id } = this.selectedUser;
    const { data } = await Messaging.getMessages(UserStore.userRole, id, 1, 30);
    const { count, messages } = data;

    const newMessages = map(messages, message => {
      const { from_id } = message; 
      const user = from_id === UserStore.userId ? UserStore.user : this.selectedUser;
      return toGCFormat(3, user, message);
    });

    runInAction(() => {
      set(this.allMessages, `${id}`, newMessages);
    });
  }

  @action addMessage(messages) {
    const { id } = this.selectedUser;
    const array = get(this.allMessages, `${id}`);
    map(messages, message => {
      this.socket.sendMessage(toDBFormat(id, UserStore.userRole, message));
    });
    runInAction(() => {
      array.unshift(...messages);
      set(this.allMessages, `${id}`, array);
    });
  }

  @action addUser(id) {
    runInAction(() => {
      this.allMessages[id] = null;
    })
  }

  @action setSelectedUser(selectedUser) {
    console.dir(selectedUser);
    this.selectedUser = selectedUser;
  }

  @action onReceiveMessage(message) {
    const { from_id } = message;
    const array = get(this.allMessages, `${from_id}`);
    array.unshift(toGCFormat(2, null, message));
    set(this.allMessages, `${from_id}`, array);
  }

  @action setSocket(socket) {
    runInAction(() => {
      this.socket = socket; 
    });
  }
}

export default new MessageStore();