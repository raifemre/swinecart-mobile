import API from '../api';

const URL_PREFIX = '/breeder/chats';

const service = {
  async getThreads(page, limit) {
    const { data } = await API.get(`${URL_PREFIX}/`, { page, limit });
    return data;
  },
  async getMessages(id, page, limit) {
    const { data } = await API.get(`${URL_PREFIX}/${id}`, { page, limit });
    return data;
  }
}

export default service;