import { observable, action, runInAction, toJS } from 'mobx';
import { showMessage } from 'react-native-flash-message';
import { validate } from 'validate.js';
import { forOwn, repeat } from 'lodash';

import errorMessages from './errorMessages';
import InventoryStore from '../stores/InventoryStore';

import Navigation from '../../services/navigation';

import moment from 'moment';

class SendForDeliveryForm {

  defaultFormState = {
    deliveryDate: moment().add(5, 'days')
  }

  formRules = {
    deliveryDate: {
      presence: errorMessages.presence
    },
  }

  @observable loading = false;

  @observable data = {
    deliveryDate: moment().add(5, 'days').format('MMMM D YYYY')
  }

  @observable errors = {
    deliveryDate: null
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

  @action async submitForm(product) {
    try {
      this.loading = true;
      if (this.validateFields(this.data)) {
        const { reservation } = product;
        const requestData = {
          product_id: product.id,
          reservation,
          ...this.data
        };
        const { error, data, message } = await InventoryStore.sendForDelivery(requestData);
        if (error) {
          const { field, errorMessage } = formatError(error);
          if (field) {
            this.showError(field, errorMessage);
          }
          else {
            throw new Error(errorMessage);
          }
        }
        else {
          const { product } = data;
          InventoryStore._addProduct('on_delivery', product);
          InventoryStore._removeProduct('reserved', product.id);
          showMessage({
            message: `Product is now on the way!`,
            type: 'success',
          });
          Navigation.back();
          this.resetForm();
          InventoryStore.onSelectIndex(2);
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

export default new SendForDeliveryForm();