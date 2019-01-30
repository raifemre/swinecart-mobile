import {
  observable, action, runInAction, toJS
} from 'mobx';

import { showToast, cleanFields, sleep } from '../../utils';
import UserStore from '../stores/UserStore';

class ChangePasswordForm {

  defaultFormState = {
    currentPassword: '',
    newPassword: '',
    newPasswordConfirmation: ''
  }

  formRules = {

  }

  @observable loading = false;

  @observable form = {
    currentPassword: 'secret12',
    newPassword: 'secret12',
    newPasswordConfirmation: 'secret12'
  }

  @action setValue(field, value) {
    this.form[field] = value;
  }

  @action validateField(field, validator, failMessage) {

  }

  @action cleanForm() {
    return cleanFields(toJS(this.form));
  }

  @action resetForm() {
    runInAction(() => {
      for (const field in this.form) {
        if (this.form.hasOwnProperty(field)) {
          this.form[field] = this.defaultFormState[field];
        }
      }
    });
  }

  @action validateFields(form) {
    const { currentPassword, newPassword, newPasswordConfirmation } = form;

    if(currentPassword === '') {
      showToast('Current Password is required!', 'danger', 'bottom');
      return false;
    }

    if (newPassword === '') {
      showToast('New Password is required!', 'danger', 'bottom');
      return false;
    }

    if (newPasswordConfirmation === '') {
      showToast('Confirm New Password is required!', 'danger', 'bottom');
      return false;
    }

    if (newPassword.length < 8) {
      showToast('New Password length must be 8 or longer!', 'danger', 'bottom');
      return false;
    }

    if (newPassword !== newPasswordConfirmation) {
      showToast('Passwords must be equal!', 'danger', 'bottom');
      return false;
    }

    return true;
  }

  @action async submitForm() {
    this.loading = true;
    try {
      const form = this.cleanForm();
      if (this.validateFields(form)) {
        const { message } = await UserStore.changePassword(form);
        showToast(message, 'success', 'bottom');
        this.resetForm();
      }
    }
    catch(e) {
      const { data } = e;
      if(data) {
        const { current_password } = data;
        if(current_password) {
          showToast(current_password[0], 'danger', 'bottom');
        }
      }
      else {
        console.log(e);
      }
    }
    runInAction(() => {
      this.loading = false;
    });
  }

}

export default new ChangePasswordForm();