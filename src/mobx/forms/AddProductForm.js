import {
  observable, action, runInAction, toJS
} from 'mobx';

import { showToast, cleanFields, getValues } from '../../utils';

import { validate } from 'validate.js';

class AddProductForm {

  defaultFormState = {
    name: ''
  }

  formRules = {
    name: {
      presence: {
        allowEmpty: false
      }
    },
    type: {
      presence: {
        allowEmpty: false
      }
    },
  }

  steps = [
    [ 'name', 'type' ]
  ]

  @observable loading = false;

  @observable form = {
    name: '',
    type: '',
  }

  @observable errors = {
    name: '',
    type: '',
  }

  @action setValue(field, value) {
    this.form[field] = value;
  }

  @action validateField(field, value) {
    const error = validate({ [field]: value }, this.formRules);
    this.errors[field] = error ? error[field][0] : '';
  }

  @action validateStep(index) {
    const errors = validate(getValues(this.steps[index], this.form), this.formRules);

    if (errors) {
      this.steps[index].map(field => {
        this.errors[field] = errors[field] ? errors[field][0] : '';
      });
      return false;
    }

    return true;
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

  @action async submitForm() {
  }

}

export default new AddProductForm();