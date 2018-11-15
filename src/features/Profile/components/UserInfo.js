import React, { Component } from 'react';
import {
  StyleSheet, FlatList
} from 'react-native';
import {
  Container, Content, Header, Body, Title, StyleProvider, Segment, Button, Text,
  Form, Item, Input, Label, View
} from 'native-base';

class UserInfo extends Component {

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

  handleChangeText = (field, value) => {
    this.setState({
      [field] : value
    });
  }

  toggleisEditable = () => {
    this.setState(prevState => ({
      isEditable: !prevState.isEditable
    }));
  }

  saveInfo = () => {
    this.setState({
      isEditable: false
    });
  }


  render() {

    const {
      container, openSansBold, openSansSemiBold, flatButton
    } = styles;

    const {
      address1, address2, province, postalZipCode, landline, mobile, isEditable
    } = this.state;

    return (
      <React.Fragment>
        <Form>
          <Item disabled floatingLabel>
            <Label>Address Line 1* : Street, Road, Subdivision</Label>
            <Input disabled={!isEditable} value={address1} style={[openSansSemiBold]} onChangeText={(value) => this.handleChangeText('address1', value)} />
          </Item>
          <Item floatingLabel>
            <Label>Address Line 2* : Barangay, Town, City</Label>
            <Input disabled={!isEditable} value={address2} style={[openSansSemiBold]} onChangeText={(value) => this.handleChangeText('address2', value)} />
          </Item>
          <Item floatingLabel>
            <Label>Province</Label>
            <Input disabled={!isEditable} value={province} style={[openSansSemiBold]} onChangeText={(value) => this.handleChangeText('province', value)} />
          </Item>
          <Item floatingLabel>
            <Label>Postal / Zip Code</Label>
            <Input disabled={!isEditable} keyboardType='numeric' value={postalZipCode} style={[openSansSemiBold]} onChangeText={(value) => this.handleChangeText('postalZipCode', value)} />
          </Item>
          <Item floatingLabel>
            <Label>Landline Number</Label>
            <Input disabled={!isEditable} keyboardType='numeric' value={landline} style={[openSansSemiBold]} onChangeText={(value) => this.handleChangeText('landline', value)} />
          </Item>
          <Item floatingLabel>
            <Label>Mobile Number</Label>
            <Input disabled={!isEditable} keyboardType='numeric' value={mobile} style={[openSansSemiBold]} onChangeText={(value) => this.handleChangeText('mobile', value)} />
          </Item>
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

export default UserInfo;