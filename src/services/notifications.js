import API from './api';
import { lowerCase } from 'lodash';

const service = {
  async getNotifications(userRole, page, limit) {
    const { data } = await API.get(`${lowerCase(userRole)}/notifications`, { page, limit });
    return data;
  },
  seeNotif(id) {
    return API.post(`${URL_PREFIX}/${id}`);
  }
}

export default service;