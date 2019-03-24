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
    minPrice: {
      numericality: {
        message: '^Minimum Price must be a number'
      },
      equality: {
        attribute: 'maxPrice',
        message: '^Minimum Price must be less than the Maximum Price',
        comparator: function (v1, v2) {
          return Number(v1) <= Number(v2);
        }
      }
    },
    maxPrice: {
      numericality: {
        message: '^Maximum Price must be a number'
      },
      equality: {
        attribute: 'minPrice',
        message: '^Maximum Price must be more than the Minimum Price',
        comparator: function (v1, v2) {
          return Number(v1) >= Number(v2);
        }
      }
    }
  }

  steps = [
    [ 'name', 'type', 'minPrice', 'maxPrice' ],
    [ 'breed', 'type', 'minPrice', 'maxPrice' ],
  ]

  @observable loading = false;

  @observable form = {
    name: null,
    type: null,
    minPrice: null,
    maxPrice: null,
    breed: null,
  }

  @observable errors = {
    name: '',
    type: '',
    minPrice: '',
    maxPrice: '',
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
    console.log(toJS(this.form));
    this.steps[index].map(field => this.errors[field] = '');
    if (errors) {
      this.steps[index].map(field => {
        this.errors[field] = errors[field] ? errors[field][0] : '';
      });
      return false;
    }
    // return true;
    return false;
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