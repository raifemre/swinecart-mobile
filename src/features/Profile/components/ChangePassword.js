import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Form, View } from 'native-base';

import { observer, inject } from 'mobx-react';

import PasswordField from './PasswordField';
import PrimaryButton from '../../../shared/PrimaryButton';
import SpinnerWithOverlay from '../../../shared/SpinnerWithOverlay';
@inject('UserStore', 'ChangePasswordForm')
@observer
class ChangePassword extends Component {

  submit = () => {
    this.props.ChangePasswordForm.submitForm();
  }

  render() {
    const { openSansBold } = styles;
    const { ChangePasswordForm } = this.props;
    
    return (
      <React.Fragment>
        <SpinnerWithOverlay visible={ChangePasswordForm.loading} textContent='Changing Password...'/>
        <Form>
          <PasswordField
            form={ChangePasswordForm}
            field={'currentPassword'}
            placeholder='Current Password'
          />
          <PasswordField
            form={ChangePasswordForm}
            field={'newPassword'}
            placeholder='New Password'
          />
          <PasswordField
            form={ChangePasswordForm}
            field={'newPasswordConfirmation'}
            placeholder='Confirm New Password'
          />
        </Form>
        <View style={{ marginTop: 20 }}>
          <PrimaryButton block onPress={this.submit}>
            <Text uppercase={false} style={[openSansBold, { fontSize: 16 }]}>
              Submit
            </Text>
          </PrimaryButton>
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
  }
});

export default ChangePassword;