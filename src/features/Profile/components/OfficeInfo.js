import React, { Component } from 'react';

import {
  View, Form, Grid, Col, Button
} from 'native-base';

import {
  observer, inject
} from 'mobx-react';

@inject('UserStore', 'OfficeInfoForm')
@observer
class OfficeInfo extends Component {

  render() {
    return (
      <React.Fragment>
      </React.Fragment>
    );
  }

}

export default OfficeInfo;