import { observable, action, runInAction, toJS } from 'mobx';
import { showMessage } from 'react-native-flash-message';
import { validate } from 'validate.js';
import { forOwn } from 'lodash';

import ProfileStore from '../stores/ProfileStore';
import errorMessages from './errorMessages';

class ChangePasswordForm {

  defaultFormState = {
    currentPassword: null,
    newPassword: null,
    newPasswordConfirmation: null
  }

  formRules = {
    currentPassword: {
      presence: errorMessages.presence
    },
    newPassword: {
      presence: errorMessages.presence,
      length: {
        minimum: 8,
        tooShort: "^New Password is too short"
      }
    },
    newPasswordConfirmation: {
      presence: errorMessages.presence,
      equality: {
        attribute: 'newPassword',
        message: '^Must be the same as New Password',
        comparator: function (v1, v2) {
          return v1 === v2;
        }
      }
    }
  }

  @observable loading = false;

  @observable data = {
    currentPassword: 'secret12',
    newPassword: 'secret12',
    newPasswordConfirmation: 'secret12'
  }

  @observable errors = {
    currentPassword: null,
    newPassword: null,
    newPasswordConfirmation: null
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
    this.data[field] = value === '' ? null : value;
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
    if (this.validateFields(this.data)) {
      try {
        this.loading = true;
        if (this.validateFields(this.data)) {
          await ProfileStore.changePassword(this.data);
          this.resetForm();
          showMessage({
            message: 'Change Password Successful!',
            type: 'success',
          });
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

}

export default new ChangePasswordForm();