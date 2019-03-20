import API from '../api';

const URL_PREFIX = `/breeder/notifications`;

const service = {
  getNotifs() {
    return API.get(`${URL_PREFIX}/`);
  },
  seeNotif(id) {
    const URL_PREFIX = `/breeder/notifications`;
    return API.post(`${URL_PREFIX}/${id}`);
  }
}

export default service;