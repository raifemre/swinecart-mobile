import { observable, action, runInAction } from 'mobx';
import { showMessage } from 'react-native-flash-message';
import { validate } from 'validate.js';
import { forOwn, repeat } from 'lodash';

import errorMessages from './errorMessages';

class RequestItemForm {

  defaultFormState = {
    specialRequest: null
  }

  formRules = {
  }

  @observable loading = false;

  @observable data = {
    // specialRequest: null
    specialRequest: repeat('abcde', 500)
  }

  @observable errors = {
    specialRequest: null,
    dateNeeded: null,
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
        this.resetForm();
      }
    }
    catch (err) {
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

export default new RequestItemForm();