import API from './api';
import UserStore from '../mobx/stores/UserStore';
const service = {
  changePassword({ currentPassword, newPassword, newPasswordConfirmation }) {
    console.log({ currentPassword, newPassword, newPasswordConfirmation });
    const URL_PREFIX = `/${UserStore.userRole.toLowerCase()}/edit-profile`;
    const data = {
      current_password: currentPassword,
      new_password: newPassword,
      new_password_confirmation: newPasswordConfirmation
    }
    return API.post(`${URL_PREFIX}/change-password`, data);
  },
}

export default service;