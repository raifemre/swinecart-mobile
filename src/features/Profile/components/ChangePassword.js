import React, { Component } from 'react';
import { Form, View } from 'native-base';
import { observer, inject } from 'mobx-react';

import PasswordField from '../../../shared/PasswordField';
import PrimaryButton from '../../../shared/PrimaryButton';
import SpinnerWithOverlay from '../../../shared/SpinnerWithOverlay';
import TextWrapper from '../../../shared/TextWrapper';

import ChangePasswordDialog from './ChangePasswordDialog';
@inject('UserStore', 'ChangePasswordForm')
@observer
class ChangePassword extends Component {

  state = {
    visible: false
  }

  submit = () => {
    this.closeDialog();
    this.props.ChangePasswordForm.submitForm();
  }

  handleClick = () => {
    const { ChangePasswordForm } = this.props;
    const form = ChangePasswordForm.cleanForm();
    if (ChangePasswordForm.validateFields(form)) {
      this.openDialog();
    }
  }

  openDialog = () => {
    this.setState({ visible: true });
  }

  closeDialog = () => {
    this.setState({ visible: false });
  }

  render() {
    const { ChangePasswordForm } = this.props;

    return (
      <React.Fragment>
        <SpinnerWithOverlay visible={ChangePasswordForm.loading} textContent='Changing Password...'/>
        <ChangePasswordDialog visible={this.state.visible} submit={this.submit} closeDialog={this.closeDialog} />
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
          <PrimaryButton block onPress={this.handleClick}>
            <TextWrapper
              text='Submit'
              font='OpenSans-Bold'
              size={16}
              color='#ffffff'
            />
          </PrimaryButton>
        </View>
      </React.Fragment>
    );
  }

}

export default ChangePassword;