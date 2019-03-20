import API from '../api';
const URL_PREFIX = `/breeder/profile`;

const service = {
  changePassword({ currentPassword, newPassword, newPasswordConfirmation }) {
    const data = {
      current_password: currentPassword,
      new_password: newPassword,
      new_password_confirmation: newPasswordConfirmation
    }
    return API.post(`${URL_PREFIX}/change-password`, data);
  },
  getProfile() {
    return API.get(`${URL_PREFIX}/`);
  },
  updateProfile(data) {
    return API.post(`${URL_PREFIX}/update-personal`, data);
  }
}

export default service;