import { observable, action, runInAction, toJS } from 'mobx';

class OfficeInfoForm {

  defaultFormState = {
    officeAddress_addressLine1: '',
    officeAddress_addressLine2: '',
    officeAddress_province: '',
    officeAddress_zipCode: '',
    office_landline: '',
    office_mobile: '',
    website: '',
    produce: '',
    contactPerson_name: '',
    contactPerson_mobile: '',
  }

  @observable form = {
    officeAddress_addressLine1: '',
    officeAddress_addressLine2: '',
    officeAddress_province: '',
    officeAddress_zipCode: '',
    office_landline: '',
    office_mobile: '',
    website: '',
    produce: '',
    contactPerson_name: '',
    contactPerson_mobile: '',
  }

  @observable farm_addresses;

  @action setValue(field, value) {
    this.form[field] = value;
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

  @action setDefaultState(breederProfile) {
    for (const field in breederProfile) {
      if (breederProfile.hasOwnProperty(field)) {
        this.form[field] = this.defaultFormState[field] = breederProfile[field];
      }
    }
  }

  @action save() {
    this.setDefaultState(this.form);
    console.log(toJS(this.defaultFormState));
  }
}

export default new OfficeInfoForm();