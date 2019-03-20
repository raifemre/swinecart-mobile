import API from '../api';
const URL_PREFIX = `/breeder/profile`;

const service = {
  async changePassword(requestData) {
    const { data } = await API.patch(`${URL_PREFIX}/password`, requestData);
    return data;
  },
  async getProfile() {
    return API.get(`${URL_PREFIX}/`);
  },
  updateProfile(data) {
    return API.post(`${URL_PREFIX}/update-personal`, data);
  }
}

export default service;