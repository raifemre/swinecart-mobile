import {
  observable, action
} from 'mobx';

import {
  Profile
} from '../../services';

class BreederProfile {

  constructor(props) {
    for (const key in props) {
      if (props.hasOwnProperty(key)) {
        this[key] = props[key];
      }
    }
  }

  @observable officeAddress_addressLine1;
  @observable officeAddress_addressLine2;
  @observable officeAddress_province;
  @observable officeAddress_zipCode;
  @observable office_landline;
  @observable office_mobile;
  @observable website;
  @observable produce;
  @observable contactPerson_name;
  @observable contactPerson_mobile;

  @observable farm_addresses = [{ }];

  @action setValue(field, value) {
    this[field] = value;
  }

  @action async updateInfo() {
    const { farm_addresses, ...data } = this;
    await Profile.updateProfile(data);
  }

}

export default BreederProfile;