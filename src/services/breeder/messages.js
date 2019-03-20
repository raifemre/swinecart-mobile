import API from '../api';

const service = {
  getThreads() {
    const URL_PREFIX = `/breeder/messages`;
    return API.get(`${URL_PREFIX}/threads`);
  },
  getMessages(id) {
    const URL_PREFIX = `/breeder/messages`;
    return API.get(`${URL_PREFIX}/${id}`);
  }
}

export default service;