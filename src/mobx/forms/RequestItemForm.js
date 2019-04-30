import { observable, action, runInAction, toJS } from 'mobx';
import { showMessage } from 'react-native-flash-message';
import { validate } from 'validate.js';
import { forOwn, repeat } from 'lodash';

import errorMessages from './errorMessages';
import SwineCartStore from '../stores/SwineCartStore';

import Navigation from '../../services/navigation';

class RequestItemForm {

  defaultFormState = {
    requestQuantity: 2,
    dateNeeded: null,
    specialRequest: null
  }

  formRules = {
  }

  @observable loading = false;

  @observable data = {
    requestQuantity: 2,
    dateNeeded: null,
    specialRequest: null
  }

  @observable errors = {
    specialRequest: null,
    dateNeeded: null,
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

  @action async submitForm(id) {
    try {
      this.loading = true;
      if (this.validateFields(this.data)) {
        const { error, data, message } = await SwineCartStore.requestItem(id, this.data);
        if (error) {

        }
        else {

          // console.log(data);

          SwineCartStore.getItemCount();
          SwineCartStore._removeProduct('not_requested', id);

          this.resetForm();
          showMessage({
            message: 'Request Product successful',
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

export default new RequestItemForm();