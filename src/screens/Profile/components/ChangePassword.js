import React, { Component } from 'react';
import { View } from 'native-base';
import { observer, inject } from 'mobx-react';

import PasswordField from '../../../shared/PasswordField';
import SpinnerWithOverlay from '../../../shared/SpinnerWithOverlay';
import ButtonWrapper from '../../../shared/ButtonWrapper';

@inject('UserStore', 'ChangePasswordForm')
@observer
class ChangePassword extends Component {

  onClick = () => {
    this.props.ChangePasswordForm.submitForm();
  }

  render() {
    const { ChangePasswordForm } = this.props;

    return (
      <React.Fragment>
        <SpinnerWithOverlay visible={ChangePasswordForm.loading} textContent='Changing Password...'/>
        <View style={{ paddingHorizontal: 5 }}>
          <View style={{ marginTop: 5 }}>
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
              placeholder='Re-type New Password'
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <ButtonWrapper
              onPress={this.onClick}
              text='Submit'
              textColor='#ffffff'
              textSize={16}
            />
          </View>
        </View>
      </React.Fragment>
    );
  }

}

export default ChangePassword;