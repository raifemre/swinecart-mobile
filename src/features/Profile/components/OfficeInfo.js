import React, { Component } from 'react';
import {
  StyleSheet, FlatList
} from 'react-native';
import {
  Container, Content, Header, Body, Title, StyleProvider, Segment, Button, Text,
  Form, Item, Input, Label, View
} from 'native-base';
import {
  observer, inject
} from 'mobx-react';

import  {
  toJS
} from 'mobx'


import UserField from './UserField';

@inject(['UserStore'])
@observer
class OfficeInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      address1: 'odio',
      address2: 'Los Banos',
      province: 'Bulacan',
      postalZipCode: '9539',
      landline: '032714-4639',
      mobile: '09776749666',
      isEditable: false
    }
  }

  toggleisEditable = () => {
    this.setState(prevState => ({
      isEditable: !prevState.isEditable
    }));
  }

  saveInfo = async () => {
    const { UserStore } = this.props;
    await UserStore.breederProfile.updateInfo();
    this.setState({
      isEditable: false
    });
  }


  render() {

    const {
      openSansBold, flatButton, container
    } = styles;

    const { isEditable } = this.state;

    return (
      <React.Fragment>
        <View style={[container, { marginTop: 20 }]}>
          <Text style={[openSansBold, { fontSize: 24 }]}>Personal Info</Text>
        </View>
        <Form>
          <UserField 
            label='Address Line 1* : Street, Road, Subdivision'
            field={'officeAddress_addressLine1'}
            isEditable={isEditable}
            keyboardType='default'
            isPicker={false}
          />
          <UserField
            label='Address Line 2* : Barangay, Town, City'
            field={'officeAddress_addressLine2'}
            isEditable={isEditable}
            keyboardType='default'
            isPicker={false}
          />
          <UserField
            label='Province'
            field={'officeAddress_province'}
            isEditable={isEditable}
            keyboardType='default'
            isPicker={true}
          />
          <UserField
            label='Postal / Zip Code'
            field={'officeAddress_zipCode'}
            isEditable={isEditable}
            keyboardType='numeric'
            isPicker={false}
          />
          <UserField
            label='Landline Number'
            field={'office_landline'}
            isEditable={isEditable}
            keyboardType='numeric'
            isPicker={false}
          />
          <UserField
            label='Mobile Number'
            field={'office_mobile'}
            isEditable={isEditable}
            keyboardType='numeric'
            isPicker={false}
          />
        </Form>
        <View style={[container, { marginTop: 20 }]}>
          <Text style={[openSansBold, { fontSize: 24 }]}>Contact Person Details</Text>
        </View>
        <Form>
          <UserField
            label='Name'
            field={'contactPerson_name'}
            isEditable={isEditable}
            keyboardType='default'
            isPicker={false}
          />
          <UserField
            label='Mobile Number'
            field={'contactPerson_mobile'}
            isEditable={isEditable}
            keyboardType='numeric'
            isPicker={false}
          />
        </Form>
        <View style={[container, { marginTop: 20 }]}>
          <Text style={[openSansBold, { fontSize: 24 }]}>Other Information</Text>
        </View>
        <Form>
          <UserField
            label='Website'
            field={'website'}
            isEditable={isEditable}
            keyboardType='default'
            isPicker={false}
          />
          <UserField
            label='Product'
            field={'produce'}
            isEditable={isEditable}
            keyboardType='default'
            isPicker={false}
          />
        </Form>
        <View style={{ marginTop: 20 }}>
          { !isEditable && <Button
            block
            onPress={this.toggleisEditable}
            style={[flatButton, { backgroundColor: '#00af66' }]}
          >
            <Text uppercase={false} style={[openSansBold, { fontSize: 16 }]}>Edit Info</Text>
          </Button> }
          { isEditable && <React.Fragment>
              <Button
                block
                onPress={this.saveInfo}
                style={[flatButton, { backgroundColor: '#00af66' }]}
              >
                <Text uppercase={false} style={[openSansBold, { fontSize: 16 }]}>Save</Text>
              </Button>
            <Button
              block
              onPress={this.toggleisEditable}
              style={[flatButton, { backgroundColor: '#EF5350', marginTop: 10 }]}
            >
              <Text uppercase={false} style={[openSansBold, { fontSize: 16 }]}>Cancel</Text>
            </Button>
            </React.Fragment>
          }
        </View>
      </React.Fragment>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentStyle: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  openSansBold: {
    fontFamily: 'OpenSans-Bold'
  },
  openSansSemiBold: {
    fontFamily: 'OpenSans-SemiBold'
  },
  flatButton: {
    elevation: 0,
    borderColor: 'transparent',
    borderBottomWidth: 0
  },
});

export default OfficeInfo;