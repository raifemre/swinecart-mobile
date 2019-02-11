import React, { Component } from 'react';
import { Container, Content, Form, View, Grid, Col, Row } from 'native-base';
import { observer, inject } from 'mobx-react';
import Divider from 'react-native-divider';

import SpinnerWithOverlay from '../../../shared/SpinnerWithOverlay';
import IconWrapper from '../../../shared/IconWrapper';
import PrimaryButton from '../../../shared/PrimaryButton';
import FlatButton from '../../../shared/FlatButton';
import TextWrapper from '../../../shared/TextWrapper';

import PasswordField from '../components/PasswordField';
import TextField from '../components/TextField';

@inject('LoginForm', 'AuthStore')
@observer
class Login extends Component {

  state = {
    text: '12321323'
  }

  navigateToRegister = () =>  {
    this.props.navigation.navigate('Register');
  }

  navigateToForgotPassword = () => {
    this.props.navigation.navigate('ForgotPassword');
  }

  navigateToShop = () => {
    this.props.navigation.navigate('Shop');
  }

  login = async () =>  {
    await this.props.LoginForm.submitForm();
  }

  facebookLogin = () => {
    alert('Facebook Login');
  }

  googleLogin = () => {
    alert('Google Login');
  }
  
  render() {
    const { LoginForm } = this.props;
    return (
      <React.Fragment>
        <SpinnerWithOverlay visible={LoginForm.loading} textContent='Logging in...' />
        <Container>
            <Content padder>
              <View style={{ alignItems: 'center' }}>
                <TextWrapper
                  text='Welcome To SwineCart!'
                  font='OpenSans-Bold'
                  size={24}
                  color='#000000'
                />
                <TextWrapper
                  text='Login to your account!'
                  font='OpenSans-Bold'
                  size={14}
                  color='#7f8c8d'
                />
              </View>
              <View style={{ marginVertical: 10 }}>
                <Form>
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
                  <View style={{ marginTop: 10 }}>
                    <PrimaryButton block onPress={this.login}>
                      <TextWrapper
                        uppercase={false}
                        color='#ffffff'
                        text='Login'
                        font='OpenSans-Bold'
                        size={16}
                      />
                    </PrimaryButton>
                  </View>
                  <View style={{ marginVertical: 5 }}>
                    <FlatButton block
                      onPress={this.navigateToForgotPassword}
                      style={{ backgroundColor: 'transparent', borderColor: '#000000', borderWidth: 2 }}
                    >
                      <TextWrapper
                        uppercase={false}
                        color='#000000'
                        text='Forgot Password?'
                        font='OpenSans-Bold'
                        size={12}
                      />
                    </FlatButton>
                  </View>
                </Form>
              </View>
              <Divider orientation='center'>
                <TextWrapper
                  color='#7f8c8d'
                  text='OR'
                  font='OpenSans-Bold'
                  size={14}
                />
              </Divider>
              <Grid style={{ marginTop: 20 }}>
                <Row style={{ height: 60 }}>
                  <Col style={{ paddingRight: 5 }}>
                    <FlatButton block
                      style={{ backgroundColor: '#3B5998' }}
                      onPress={this.facebookLogin}>
                      <IconWrapper type='MaterialCommunityIcons' name='facebook-box' fontSize={30} />
                    </FlatButton>
                  </Col>
                  <Col style={{ paddingLeft: 5 }}>
                    <FlatButton block
                      style={{ backgroundColor: '#DB3236' }}
                      onPress={this.googleLogin}>
                      <IconWrapper type='MaterialCommunityIcons' name='google' />
                    </FlatButton>
                  </Col>
                </Row>
                <Row style={{ height: 60 }}>
                  <Col>
                    <FlatButton block
                      onPress={this.navigateToRegister}
                      style={{ backgroundColor: 'transparent', borderColor: '#000000', borderWidth: 2 }}
                    >
                      <TextWrapper
                        uppercase={false}
                        color='#000000'
                        text='Tap here to Register!'
                        font='OpenSans-Bold'
                        size={16}
                      />
                    </FlatButton>
                  </Col>
                </Row>
                <Row style={{ height: 60 }}>
                  <Col>
                    <FlatButton block
                      onPress={this.navigateToShop}
                      style={{ backgroundColor: 'transparent', borderColor: '#00695C', borderWidth: 2 }}
                    >
                      <TextWrapper
                        uppercase={false}
                        color='#00695C'
                        text='Shop'
                        font='OpenSans-Bold'
                        size={14}
                      />
                    </FlatButton>
                  </Col>
                </Row>
              </Grid>
            </Content>
          </Container>
      </React.Fragment>
    );
  }
}

export default Login;