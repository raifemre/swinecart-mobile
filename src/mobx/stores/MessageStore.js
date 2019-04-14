import {
  observable, action, toJS, runInAction, get, set, has
} from 'mobx';

import { map } from 'lodash';

import { Messaging } from '../../services';
import { toGCFormat, toDBFormat, filterNewItems } from '../../utils';

import UserStore from './UserStore';

class MessageStore {

  limit = 15;

  @observable socket = null;

  @observable threads = null;
  @observable pages = {};
  @observable maps = {};
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
        if (!has(this.allMessages, `${thread.user.id}`)) {
          set(this.allMessages, `${thread.user.id}`, [toGCFormat(1, user, message)]);
        }
      });
      this.threads = threads;
    });
  }
  
  @action async getMessages() {
    const { id } = this.selectedUser;
    const { data } = await Messaging.getMessages(UserStore.userRole, id, 1, this.limit);
    const { count, messages } = data;

    runInAction(() => {
      this.pages[id]= 1;
      this.maps[id] = new Map();
      const newMessages = map(filterNewItems(this.maps[id], messages), message => {
        const { from_id } = message;
        const user = from_id === UserStore.userId ? UserStore.user : this.selectedUser;
        return toGCFormat(3, user, message);
      });
      set(this.allMessages, `${id}`, newMessages);
    });
  }

  @action async getMoreMessages() {
    const { id } = this.selectedUser;
    const { data } = await Messaging.getMessages(UserStore.userRole, id, this.pages[id] + 1, this.limit);
    const { count, messages } = data;

    const chatMessages = get(this.allMessages, `${id}`);



    runInAction(() => {
      if (count >= this.limit) {
        this.pages[id] = this.pages[id] + 1;
      }
      const newMessages = map(filterNewItems(this.maps[id], messages), message => {
        const { from_id } = message;
        const user = from_id === UserStore.userId ? UserStore.user : this.selectedUser;
        return toGCFormat(3, user, message);
      });
      set(this.allMessages, `${id}`, [ ...chatMessages, ...newMessages ]);
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