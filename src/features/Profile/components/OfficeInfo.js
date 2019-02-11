import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import {
  View, Form, Grid, Col, Button
} from 'native-base';

import {
  observer, inject
} from 'mobx-react';


import SpinnerWithOverlay from '../../../shared/SpinnerWithOverlay';
import TextWrapper from '../../../shared/TextWrapper';
import TextField from '../../../shared/TextField';
import FlatButton from '../../../shared/FlatButton';
import IconWrapper from '../../../shared/IconWrapper';
import OutlinedButton from '../../../shared/OutlinedButton';

@inject('UserStore', 'OfficeInfoForm')
@observer
class OfficeInfo extends Component {

  state = {
    isEditable: false
  }

  componentWillMount() {
    const { UserStore, OfficeInfoForm } = this.props;
    OfficeInfoForm.setDefaultState(UserStore.breederProfile);
  }

  toggleEditable = () => {
    this.setState({ isEditable: !this.state.isEditable });
  }

  editInfo = () => {
    this.toggleEditable();
  }

  save = () => {
    this.toggleEditable();
    const { OfficeInfoForm } = this.props;
    OfficeInfoForm.save();
  }

  cancel = () => {
    this.toggleEditable();
    const { OfficeInfoForm } = this.props;
    OfficeInfoForm.resetForm();
  }

  render() {
    const { UserStore, OfficeInfoForm } = this.props;
    const { isEditable } = this.state;
    // console.log(UserStore.breederProfile);

    return (
      <React.Fragment>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <TextWrapper text='Personal Information' size={20} color='#00695C' />
          </View>
          <Form style={{ paddingTop: 10 }}>
            <TextField
              form={OfficeInfoForm}
              placeholder='Address Line 1* : Street, Road, Subdivision'
              field='officeAddress_addressLine1'
              editable={isEditable}
            />
            <TextField
              form={OfficeInfoForm}
              placeholder='Address Line 2* : Barangay, Town, City'
              field='officeAddress_addressLine2'
              editable={isEditable}
            />
            <TextField
              form={OfficeInfoForm}
              placeholder='Province'
              field='officeAddress_province'
              editable={isEditable}
            />
            <TextField
              form={OfficeInfoForm}
              placeholder='Postal / Zip Code'
              field='officeAddress_zipCode'
              editable={isEditable}
            />
            <TextField
              form={OfficeInfoForm}
              placeholder='Landline Number'
              field='office_landline'
              editable={isEditable}
            />
          </Form>
          <TextWrapper text='Contact Person Details' size={20} color='#00695C' />
          <Form style={{ paddingTop: 10 }}>
            <TextField
              form={OfficeInfoForm}
              placeholder='Name'
              field='contactPerson_name'
              editable={isEditable}
            />
            <TextField
              form={OfficeInfoForm}
              placeholder='Mobile Number'
              field='contactPerson_mobile'
              editable={isEditable}
            />
          </Form>
          <TextWrapper text='Other Information' size={20} color='#00695C' />
          <Form style={{ paddingTop: 10 }}>
            <TextField
              form={OfficeInfoForm}
              placeholder='Website'
              field='website'
              editable={isEditable}
            />
            <TextField
              form={OfficeInfoForm}
              placeholder='Produce'
              field='produce'
              editable={isEditable}
            />
          </Form>
          {
            isEditable
              ? 
                <View>
                  <Grid>
                    <Col style={{ padding: 5 }}>
                    <OutlinedButton block onPress={this.save} style={{ borderColor: '#00a7e1' }}>
                        <TextWrapper text='Save' size={16} color='#00a7e1' />
                      </OutlinedButton>
                    </Col>
                    <Col style={{ padding: 5 }}>
                      <OutlinedButton block onPress={this.cancel} style={{ borderColor: '#e71d36' }}>
                        <TextWrapper text='Cancel' size={16} color='#e71d36' />
                      </OutlinedButton>
                    </Col>
                  </Grid>
                </View>
              : 
                <View style={{ padding: 5 }}>
                <FlatButton block onPress={this.editInfo} style={{ backgroundColor: '#053c5e' }}>
                    <TextWrapper text='Edit Information' size={16} color='#ffffff' />
                  </FlatButton>
                </View>
          }
        </View>
      </React.Fragment>
    );
  }

}

export default OfficeInfo;