import { observable, action, runInAction, toJS } from 'mobx';
import { showMessage } from 'react-native-flash-message';
import { validate } from 'validate.js';
import { forOwn, repeat } from 'lodash';

import errorMessages from './errorMessages';
import TransactionStore from '../stores/TransactionStore';
import SwineCartStore from '../stores/SwineCartStore';

import Navigation from '../../services/navigation';

class RateBreederForm {

  defaultFormState = {
    comment: null,
    delivery: 0,
    transaction: 0,
    productQuality: 0
  }

  formRules = {

  }

  @observable loading = false;  

  @observable data = {
    comment: null,
    delivery: 0,
    transaction: 0,
    productQuality: 0
  }

  @observable errors = {
    comment: null,
    delivery: null,
    transaction: null,
    productQuality: null
  }

  @action clearErrors = (errors) => {
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

  @action showErrors = errors => {
    forOwn(errors, (value, key) => {
      this.errors[key] = value[0];
    });
  }

  @action showError = (field, error) => {
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

  @action async submitForm(breeder, item) {
    try {
      this.loading = true;
      if (this.validateFields(this.data)) {
        const { breeder_id } = breeder;
        const { id } = item;
        const { error, data, message } = await TransactionStore.rateBreeder(breeder_id, {
          item_id: id,
          ...this.data
        });
        
        if (error) {
          // console.dir(error);
        }
        else {
          SwineCartStore._removeProduct('sold', id);
          this.resetForm();
          showMessage({
            message: 'Rate Breeder successful',
            type: 'success'
          });
          Navigation.back();
        }

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

export default new RateBreederForm();