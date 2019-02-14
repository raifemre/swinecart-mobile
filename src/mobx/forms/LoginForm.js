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
    email: {
      email: true,
    }
  }

  @observable loading = false;

  @observable form = {
    // email: 'bwisoky@yahoo.com',
    email: 'coralie94@heaney.com',
    // email: '',
    password: 'secret12'
  }

  @observable errors = {
    email: '',
    password: ''
  }

  @action setValue(field, value) {
    // this.validateField(field, value);
    this.form[field] = value;
  }

  @action validateField(field, value) {
    const error = validate({ [field]: value }, this.formRules);
    this.errors[field] = error ? error[field][0] : '';
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
    // const errors = validate(form, this.formRules);
    
    // if(errors) {
    //   for (const field in errors) {
    //     if (errors.hasOwnProperty(field)) {
    //       this.errors[field] = errors[field][0];
    //     }
    //   }
    //   return false;
    // }

    // for (const field in this.errors) {
    //   if (this.errors.hasOwnProperty(field)) {
    //     this.errors[field] = '';
    //   }
    // }

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