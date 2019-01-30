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
    email: 'kimberly09@tillman.net',
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
        const token = await AuthStore.login(form);
        await CommonStore.setToken(token);
        Navigation.navigate('AuthChecker');
      }
    }
    catch (e) {
      const { data } = e;
      if(data) {
        showToast(data.error, 'danger', 'bottom');
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

export default new LoginForm();