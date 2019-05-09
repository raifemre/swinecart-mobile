import React, { Component } from 'react';
import { Container, View } from 'native-base';
import { observer, inject } from 'mobx-react';

import SpinnerWithOverlay from '../../../shared/SpinnerWithOverlay';
import ButtonWrapper from '../../../shared/ButtonWrapper';
import PasswordField from '../../../shared/PasswordField';
import TextField from '../../../shared/TextField';

import { 
  Block, Text
} from '../../../shared';

@inject('LoginForm', 'AuthStore')
@observer
class Login extends Component {

  onPress = async () =>  {
    await this.props.LoginForm.submitForm();
  }
  
  render() {
    const { LoginForm } = this.props;

    return (
      <React.Fragment>
        <SpinnerWithOverlay visible={LoginForm.loading} />
        <Container>
          <Block center middle flex={1} padding>
            <Block center middle flex='disabled' style={{ marginBottom: 50 }}>
              <Text h3>Welcome to Swine Cart!</Text>
              <Text paragraph color='black3'>Login to your account</Text>
            </Block>
            <Block center middle flex='disabled'>
              <TextField
                form={LoginForm}
                placeholder='Email'
                field='email'
              />
              <PasswordField
                form={LoginForm}
                placeholder='Password'
                field='password'
              />
              <ButtonWrapper
                onPress={this.onPress}
                text='Login'
                textColor='#ffffff'
                textSize={16}
                style={{ marginTop: 16 }}
              />
            </Block>
          </Block>
        </Container>
      </React.Fragment>
    );
  }
}

export default Login;