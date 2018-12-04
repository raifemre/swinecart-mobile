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

@inject(['UserStore'])
@observer
class ChangePassword extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPassword: '',
      newPassword: '',
      newPasswordConfirmation: ''
    }
  }

  handleChangeText = (field, value) => {
    this.setState({
      [field]: value
    });
  }

  saveInfo = async () => {
    const {
      currentPassword, newPassword, newPasswordConfirmation
    } = this.state;
    const { UserStore } = this.props;
    await UserStore.changePassword({ 
      currentPassword, newPassword, newPasswordConfirmation 
    });
  }


  render() {

    const {
      container, openSansBold, openSansSemiBold, flatButton
    } = styles;

    const {
      currentPassword, newPassword, newPasswordConfirmation
    } = this.state;

    return (
      <React.Fragment>
        <Form>
          <Item>
            <Input placeholder='Current Password' secureTextEntry={true} value={currentPassword} style={[openSansSemiBold]} onChangeText={(value) => this.handleChangeText('currentPassword', value)} />
          </Item>
          <Item>
            <Input placeholder='New Password' secureTextEntry={true} value={newPassword} style={[openSansSemiBold]} onChangeText={(value) => this.handleChangeText('newPassword', value)} />
          </Item>
          <Item>
            <Input placeholder='Confirm New Password' secureTextEntry={true} value={newPasswordConfirmation} style={[openSansSemiBold]} onChangeText={(value) => this.handleChangeText('newPasswordConfirmation', value)} />
          </Item>
        </Form>
        <View style={{ marginTop: 20 }}>
          <Button
            block
            onPress={this.saveInfo}
            style={[flatButton, { backgroundColor: '#00af66' }]}
          >
            <Text uppercase={false} style={[openSansBold, { fontSize: 16 }]}>Change Password</Text>
          </Button> 
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

export default ChangePassword;