import API from './api';
import { lowerCase } from 'lodash';

const service = {
  async getNotifications(userRole, page, limit) {
    const { data } = await API.get(`${lowerCase(userRole)}/notifications`, { page, limit });
    return data;
  },
  async seeNotif(userRole, id) {
    const { data } = await API.patch(`${lowerCase(userRole)}/notifications/${id}`);
    return data;
  }
}

export default service;