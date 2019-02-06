import {
  observable, action, toJS
} from 'mobx';

import {
  Profile
} from '../../services';

class Farm {

  constructor(props) {
    for (const key in props) {
      if (props.hasOwnProperty(key)) {
        this[key] = props[key];
      }
    }
  }

    @observable id;
    @observable name; 
    @observable addressLine1; 
    @observable addressLine2; 
    @observable province; 
    @observable zipCode; 
    @observable farmType; 
    @observable landline; 
    @observable mobile; 
    @observable addressable_id; 
    @observable addressable_type; 
    @observable accreditation_date; 
    @observable accreditation_expiry; 
    @observable accreditation_no; 
    @observable accreditation_status; 
    @observable deleted_at;
  

  @action setValue(field, value) {
    this[field] = value;
  }

  @action async updateInfo() {
    const { id, ...data } = this;
    await Profile.updateFarmInfo(data, id);
  }

}

export default Farm;