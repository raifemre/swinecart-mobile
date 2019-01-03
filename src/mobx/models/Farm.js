import {
  observable, action, toJS, runInAction
} from 'mobx';

import {
  Profile
} from '../../services';

class Farm {

  constructor(props) {
    for (const key in props) {
      if (props.hasOwnProperty(key)) {
        this.defaultData[key] = props[key];
        this.editableData[key] = props[key];
      }
    }
  }

  @observable defaultData = {
    id: '',
    name: '',
    addressLine1: '',
    addressLine2: '',
    province: '',
    zipCode: '',
    farmType: '',
    landline: '',
    mobile: '',
    addressable_id: '',
    addressable_type: '',
    accreditation_date: '',
    accreditation_expiry: '',
    accreditation_no: '',
    accreditation_status: '',
    deleted_at: ''
  }

  @observable editableData = {
    id: '',
    name: '',
    addressLine1: '',
    addressLine2: '',
    province: '',
    zipCode: '',
    farmType: '',
    landline: '',
    mobile: '',
    addressable_id: '',
    addressable_type: '',
    accreditation_date: '',
    accreditation_expiry: '',
    accreditation_no: '',
    accreditation_status: '',
    deleted_at: ''
  }
  

  @action setValue(field, value) {
    this.editableData[field] = value;
  }

  @action async updateInfo() {
    const { id, ...data } = this.editableData;
    await Profile.updateFarmInfo(data, id);
  
    runInAction(() => {
      for (const key in this.defaultData) {
        if (this.editableData.hasOwnProperty(key)) {
          this.defaultData[key] = this.editableData[key];
        }
      }
    });
  }

  @action cancelEdit() {
    for (const key in this.defaultData) {
      if (this.editableData.hasOwnProperty(key)) {
        this.editableData[key] = this.defaultData[key];
      }
    }
  }

}

export default Farm;