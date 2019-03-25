import {
  observable, action, runInAction, toJS
} from 'mobx';

import { showToast, cleanFields, getValues } from '../../utils';

import { validate } from 'validate.js';

import ProductsStore from '../stores/ProductsStore';
import { Navigation } from '../../services';

class AddProductForm {

  constructor() {
    validate.validators.mustExist = function (value, options, key, attributes) {

      // console.dir(value, options, key, attributes);

      const { breedType, breed, motherBreed, fatherBreed } = attributes;

      if (breedType === 'pure') {
        if (!breed) {
          if (key === 'breed') {
            return `^Breed cant be blank`;
          }
        }
      }
      else {
        if (key === 'motherBreed' && !motherBreed) {
          return `^Mother Breed cant be blank`;
        }
        if (key === 'fatherBreed' && !fatherBreed) {
          return `^Father Breed cant be blank`;
        }
      }
    };

  }

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
    },
    breed: {
      mustExist: true
    },
    breedType: {
      presence: {
        allowEmpty: false
      }
    },
    fatherBreed: {
      mustExist: true
    },
    motherBreed: {
      mustExist: true
    },
    farmFrom: {
      presence: {
        allowEmpty: false,
        message: "^Farm From can't be blank"
      },
    }
  }

  steps = [
    [ 'name', 'type', 'minPrice', 'maxPrice' ],
    [ 'breed', 'breedType', 'farmFrom', 'fatherBreed', 'motherBreed' ],
    [ 'otherDetails' ],
  ]

  @observable loading = false;

  @observable form = {
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
    name: '',
    type: '',
    minPrice: '',
    maxPrice: '',
    breed: '',
    fatherBreed: '',
    motherBreed: '',
    birthDate: '',
    birthWeight: '',
    farmFrom: '',
    houseType: '',
    adg: '',
    fcr: '',
    bft: '',
    lsba: '',
    leftTeats: '',
    rightTeats: '',
    otherDetails: ''
  }

  @observable pickerRefs = [

  ];

  @action addRef(ref) {
    this.pickerRefs.push(ref);
  }

  @action setValue(field, value) {
    this.form[field] = value;
  }

  @action validateField(field, value) {
    const error = validate({ [field]: value }, this.formRules);
    this.errors[field] = error ? error[field][0] : '';
  }
  
  @action validateStep(index) {
    const errors = validate(
      getValues(this.steps[index], this.form),
      getValues(this.steps[index], this.formRules),
    );
    this.steps[index].map(field => this.errors[field] = '');
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
      this.pickerRefs.map(clear => clear());
    });
  }

  @action async submitForm() {
    await ProductsStore.addProduct(this.form);
    this.resetForm();
    Navigation.back();
  }

}

export default new AddProductForm();