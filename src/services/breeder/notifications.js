import API from '../api';

const URL_PREFIX = `/breeder/notifications`;

const service = {
  async getNotifications(page, limit) {
    const { data } = await API.get(`${URL_PREFIX}`);
    return data;
  },
  seeNotif(id) {
    return API.post(`${URL_PREFIX}/${id}`);
  }
}

export default service;