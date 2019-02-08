import {
  observable, action, runInAction, toJS
} from 'mobx';

import { showToast, cleanFields, sleep } from '../../utils';

import AuthStore from '../stores/AuthStore';
import CommonStore from '../stores/CommonStore';
import UserStore from '../stores/UserStore';

import { Navigation } from '../../services';

class LoginForm {

  defaultFormState = {
    email: '',
    password: ''
  }

  formRules = {

  }

  @observable loading = false;

  @observable form = {
    email: 'bwisoky@yahoo.com',
    password: 'secret12'
  }

  @action setValue(field, value) {
    this.form[field] = value;
  }

  @action validateField(field, validator, failMessage) {

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
    const { email, password } = form;

    if (email === '') {
      showToast('Please enter your Email!', 'warning', 'bottom');
      return false;
    }

    if (password === '') {
      showToast('Please enter your Password!', 'warning', 'bottom');
      return false;
    }

    return true;
  }

  @action async submitForm() {
    this.loading = true;
    try {
      const form = cleanFields(toJS(this.form));
      if (this.validateFields(form)) {
        await AuthStore.login(form);
      }
    }
    catch (error) {
      showToast(error.message, 'danger', 'bottom');
    }
    runInAction(() => {
      this.loading = false;
    });
  }

}

export default new LoginForm();