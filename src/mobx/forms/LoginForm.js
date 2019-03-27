import { observable, action, runInAction } from 'mobx';
import { showMessage } from 'react-native-flash-message';
import { validate } from 'validate.js';
import { forOwn } from 'lodash';

import AuthStore from '../stores/AuthStore';
import errorMessages from './errorMessages';

class LoginForm {

  defaultFormState = {
    email: null,
    password: null
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

  @observable data = {
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

  @observable showError = (field, error) => {
    runInAction(() => {
      this.errors[field] = error;
    });
  }

  @action setValue(field, value) {
    this.data[field] = value;
  }

  @action resetForm() {
    runInAction(() => {
      for (const field in this.data) {
        if (this.data.hasOwnProperty(field)) {
          this.data[field] = this.defaultFormState[field];
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
      if (this.validateFields(this.data)) {
        const { error, data, message } = await AuthStore.login(this.data);
        if (error) {
          const { field, errorMessage } = error;
          if (field) {
            this.showError(field, errorMessage);
          }
          else {
            throw new Error(errorMessage);
          }
        }
        else {
          const { access_token } = data;
          this.resetForm();
          AuthStore.loginFlow(access_token);
        }
      }
    }
    catch(err) {
      console.log(err);
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