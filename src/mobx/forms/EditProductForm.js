import {
  observable, action, runInAction, toJS
} from 'mobx';
import { validate } from 'validate.js';
import { forOwn, pick, find, toString, camelCase, split, includes } from 'lodash';
import { showMessage } from 'react-native-flash-message';

import ProductsStore from '../stores/ProductsStore';
import FarmStore from '../stores/FarmStore';

import errorMessages from './errorMessages';
import { Navigation } from '../../services';

class EditProductForm {

  constructor() {
    validate.validators.mustExist = function (value, options, key, attributes) {
      const { breedType, breed, motherBreed, fatherBreed } = attributes;
      if (breedType === 'pure') {
        if (!breed) {
          if (key === 'breed') {
            return `^This field cannot be empty`;
          }
        }
      }
      else {
        if (key === 'motherBreed' && !motherBreed) {
          return `^This field cannot be empty`;
        }
        if (key === 'fatherBreed' && !fatherBreed) {
          return `^This field cannot be empty`;
        }
      }
    };

  }

  typeOptions = [
    { 'label': 'Boar', 'data': 'boar' },
    { 'label': 'Sow', 'data': 'sow' },
    { 'label': 'Gilt', 'data': 'gilt' },
    { 'label': 'Semen', 'data': 'semen' },
  ];

  houseTypeOptions = [
    { label: 'Tunnel Ventilated', data: 'tunnelventilated' },
    { label: 'Open Sided', data: 'opensided' },
  ];

  defaultFormState = {
    name: null,
    type: null,
    minPrice: null,
    maxPrice: null,
    breed: null,
    breedType: 'pure',
    fatherBreed: null,
    motherBreed: null,
    birthDate: null,
    birthWeight: null,
    farmFrom: null,
    houseType: null,
    adg: null,
    fcr: null,
    bft: null,
    lsba: null,
    leftTeats: null,
    rightTeats: null,
    otherDetails: null
  }

  formRules = {
    name: {
      presence: errorMessages.presence
    },
    type: {
      presence: errorMessages.presence
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
    },
    breed: {
      mustExist: true
    },
    breedType: {
      presence: errorMessages.presence
    },
    fatherBreed: {
      mustExist: true
    },
    motherBreed: {
      mustExist: true
    },
    farmFrom: {
      presence: errorMessages.presence,
    }
  }

  steps = [
    ['name', 'type', 'minPrice', 'maxPrice'],
    ['breed', 'breedType', 'farmFrom', 'fatherBreed', 'motherBreed'],
    ['otherDetails'],
  ]

  @observable loading = false;

  @observable data = {
    // name: '1233213',
    // type: { label: 'Boar', data: 'boar' },
    // minPrice: '12345',
    // maxPrice: '12345',
    // breed: 'Landrace',
    // breedType: 'cross',
    // fatherBreed: 'Landrace',
    // motherBreed: 'Duroc',
    // birthDate: 'March 19 2019',
    // birthWeight: '123',
    // farmFrom: { id: 28, name: 'Ut', province: 'Rizal' },
    // houseType: { label: 'Open Sided', data: 'opensided' },
    // adg: '123',
    // fcr: '123',
    // bft: '123',
    // lsba: '123',
    // leftTeats: '6',
    // rightTeats: '6',
    // otherDetails: 'hellooooo'
    name: null,
    type: null,
    minPrice: null,
    maxPrice: null,
    breed: null,
    breedType: 'pure',
    fatherBreed: null,
    motherBreed: null,
    birthDate: null,
    birthWeight: null,
    farmFrom: null,
    houseType: null,
    adg: null,
    fcr: null,
    bft: null,
    lsba: null,
    leftTeats: null,
    rightTeats: null,
    otherDetails: null
  }

  @observable errors = {
    name: null,
    type: null,
    minPrice: null,
    maxPrice: null,
    breed: null,
    fatherBreed: null,
    motherBreed: null,
    birthDate: null,
    birthWeight: null,
    farmFrom: null,
    houseType: null,
    adg: null,
    fcr: null,
    bft: null,
    lsba: null,
    leftTeats: null,
    rightTeats: null,
    otherDetails: null
  }

  @action setFormData = product => {
    forOwn(product, (value, field) => {
      if (field === 'type') {
        this.data[field] = find(this.typeOptions, { label: value });
        return;
      }
      else if (field === 'farm_from_id') {
        this.data['farmFrom'] = find(toJS(FarmStore.farms), { id: value });
        return;
      }
      else if (field === 'house_type') {
        this.data['houseType'] = find(this.houseTypeOptions, { data: value });
        return;
      }
      else if (field === 'breed') {
        if (includes(value, 'x')) {
          this.data['breedType'] = 'cross';
          const [ fatherBreed, motherBreed ] = split(value, 'x');
          this.data['fatherBreed'] = fatherBreed;
          this.data['motherBreed'] = motherBreed;
        }
        else {
          this.data[field] = value;
        }
        return;
      }
      this.data[camelCase(field)] = value && toString(value);
    });
  }

  @action clearErrors = (errors) => {
    forOwn(this.errors, (value, field) => {
      if (errors) {
        if (!errors[field] && value !== errors[field]) {
          this.errors[field] = null;
        }
      }
      else {
        this.errors[field] = null;
      }
    });
  }

  @action showErrors = errors => {
    forOwn(errors, (value, field) => {
      this.errors[field] = value[0];
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

  @action validateStep(index) {

    const stepFields = this.steps[index];
    const data = pick(this.data, stepFields);
    const rules = pick(this.formRules, stepFields);
    const errors = validate(data, rules);

    this.clearErrors(errors);
    if (errors) {
      this.showErrors(errors);
      return false;
    }
    return true;
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

  @action resetForm() {
    runInAction(() => {
      for (const field in this.data) {
        if (this.data.hasOwnProperty(field)) {
          this.data[field] = this.defaultFormState[field];
        }
      }
    });
  }

  @action async submitForm() {
    try {
      this.loading = true;
      // ProductsStore._addProduct(this.data);
      // this.resetForm();
      // showMessage({
      //   message: 'Added Product!',
      //   type: 'success',
      // });
      Navigation.back();
    }
    catch (err) {
      showMessage({
        message: err.message,
        type: 'danger',
      });
    }
    finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  }

}

export default new EditProductForm();