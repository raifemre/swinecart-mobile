import API from './api';

import { lowerCase } from 'lodash';

const service = {
  async getThreads(userRole, page, limit) {
    const { data } = await API.get(`${lowerCase(userRole)}/chats`, { page, limit });
    return data;
  },
  async getMessages(userRole, id, page, limit) {
    const { data } = await API.get(`${lowerCase(userRole)}/chats/${id}`, { page, limit });
    return data;
  }
}

export default service;