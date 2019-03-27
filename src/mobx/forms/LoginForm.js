import { observable, action, runInAction } from 'mobx';
import { showMessage } from "react-native-flash-message";
import { validate } from 'validate.js';
import { forOwn } from 'lodash';

import AuthStore from '../stores/AuthStore';
import errorMessages from './errorMessages';

class LoginForm {

  defaultFormState = {
    email: '',
    password: ''
  }

  formRules = {
    email: {
      presence: errorMessages.presence,
      email: {
        message: '^This is not a valid email'
      },
    },
    password: {
      presence: errorMessages.presence
    }
  }

  @observable loading = false;

  @observable form = {
    email: 'kylee.streich@bechtelar.org',
    password: 'secret12'
    // email: null,
    // password: null
  }

  @observable errors = {
    email: null,
    password: null
  }

  @observable clearErrors = (errors) => {
    forOwn(this.errors, (value, key) => {
      if (errors) {
        if (!errors[key] && value !== errors[key]) {
          this.errors[key] = null;
        }
      }
      else {
        this.errors[key] = null;
      }
    });
  }

  @observable showErrors = errors => {
    forOwn(errors, (value, key) => {
      this.errors[key] = value[0];
    });
  }

  @action setValue(field, value) {
    this.form[field] = value;
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
    const errors = validate(form, this.formRules);
    this.clearErrors(errors);
    if (errors) {
      this.showErrors(errors);
      return false;
    }
    return true;
  }

  @action async submitForm() {
    try {
      this.loading = true;
      if (this.validateFields(this.form)) {
        await AuthStore.login(this.form);
      }
    }
    catch(err) {
      showMessage({
        message: err.message,
        type: 'danger'
      });
    }
    finally {
      runInAction(() => {
        this.loading = false;
      });
    }

  }

}

export default new LoginForm();