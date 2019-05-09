import React, { Component } from 'react';
import { Container, View } from 'native-base';
import { observer, inject } from 'mobx-react';

import SpinnerWithOverlay from '../../../shared/SpinnerWithOverlay';
import ButtonWrapper from '../../../shared/ButtonWrapper';
import TextWrapper from '../../../shared/TextWrapper';
import PasswordField from '../../../shared/PasswordField';
import TextField from '../../../shared/TextField';

import { 
  Block
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
            <Block center middle flex='disabled' marginBottom>
              <TextWrapper
                font={'OpenSans-Bold'}
                color={'#000000'}
                text={'Welcome to Swine Cart!'}
                size={26}
              />
              <TextWrapper
                font={'OpenSans-Bold'}
                color={'#9DA3B4'}
                text={'Login in your account'}
                size={16}
              />
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
              />
            </Block>
          </Block>
        </Container>
      </React.Fragment>
    );
  }
}

export default Login;