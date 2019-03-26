import {
  observable, action, runInAction, toJS
} from 'mobx';

import { validate } from 'validate.js';
import { forOwn } from 'lodash';

import { cleanFields } from '../../utils';

class ChangePasswordForm {

  defaultFormState = {
    currentPassword: '',
    newPassword: '',
    newPasswordConfirmation: ''
  }

  formRules = {
    currentPassword: {
      presence: {
        allowEmpty: false,
        message: "^This field is required"
      }
    },
    newPassword: {
      presence: {
        allowEmpty: false,
        message: "^New Password can't be blank"
      },
      length: {
        minimum: 8,
        tooShort: "^New Password is too short"
      }
    },
    newPasswordConfirmation: {
      presence: {
        allowEmpty: false,
        message: "^Confirm New Password can't be blank"
      },
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

  @observable form = {
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
    this.form[field] = value === '' ? null : value;
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
    const errors = validate(form, this.formRules);
    this.clearErrors(errors);
    if (errors) {
      this.showErrors(errors);
      // console.dir(errors);
      return false;
    }
    return true;
  }

  @action async submitForm() {
    if (this.validateFields(this.form)) {

    }
  }

}

export default new ChangePasswordForm();