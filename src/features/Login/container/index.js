import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';
import {
  Container, Content, Header, Body, Title, StyleProvider, Form, Item, Text,
  Input, Button, View, Icon
} from 'native-base';

import {
  observer, inject
} from 'mobx-react';

import Divider from 'react-native-divider';

import StyleProviderWrapper from '../../../shared/StyleProviderWrapper';
import SpinnerWithOverlay from '../../../shared/SpinnerWithOverlay';
import IconWrapper from '../../../shared/IconWrapper';

import PasswordField from '../components/PasswordField';
import TextField from '../components/TextField';

@inject('LoginForm', 'AuthStore')
@observer
class Login extends Component {

  delay = fn => {
    setTimeout(() => fn(), 10);
  }

  navigateTo = route =>  {
    this.delay(() => {
      this.props.navigation.navigate(route);
    });
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
    const { 
      contentStyle,
      container,
      backgroundPrimary,
      openSansBold,
      openSansSemiBold,
      flatButton,
      fullInput,
      sideBySide
    } = styles;

    const { LoginForm } = this.props;
    console.log('Login Screen Render!');
    return (
      <React.Fragment>
        <SpinnerWithOverlay visible={LoginForm.loading} textContent='Logging in...' />
        <StyleProviderWrapper>
          <Container>
            <Content contentContainerStyle={[contentStyle]} padder>

              <View style={{ alignItems: 'center' }}>
                <Text style={[openSansBold, { fontSize: 24 }]}>Welcome to SwineCart!</Text>
                <Text style={[openSansBold, { fontSize: 14, color: '#7f8c8d' }]}>
                  Login to your account!
                </Text>
              </View>

              <View style={{ marginVertical: 10 }}>
                <Form>
                  <TextField
                    form={LoginForm}
                    placeholder='Email'
                    field={'email'}
                    isPassword={false}
                  />
                  <PasswordField
                    form={LoginForm}
                    placeholder='Password'
                    field={'password'}
                    isPassword={true}
                  />
                  {
                    <Button
                      block
                      style={[backgroundPrimary, flatButton, { marginTop: 20 }]}
                      onPress={this.login}
                    >
                      <Text uppercase={false} style={[openSansBold, { fontSize: 16 }]}>Login</Text>
                    </Button>
                  }
                </Form>
              </View>

              {
                <View style={{ alignItems: 'center', marginVertical: 10 }}>
                  <Button
                    block
                    style={[flatButton, { backgroundColor: 'transparent', alignItems: 'center' }]}
                    onPress={() => this.navigateTo('Register')}
                  >
                    <Text uppercase={false} style={[openSansBold, { fontSize: 14, color: '#000000' }]}>
                      Tap here to create a Customer account!
                </Text>
                  </Button>
                </View>
              }

              {
                <View>
                  <View style={{ alignItems: 'center', marginVertical: 10 }}>
                    <Divider orientation='center'>
                      <Text style={[openSansBold, { fontSize: 14, color: '#7f8c8d' }]}>
                        OR
                </Text>
                    </Divider>
                  </View>
                  <View style={[{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }]}>
                    <Button
                      style={[flatButton, sideBySide, { backgroundColor: '#3B5998' }]}
                      onPress={this.facebookLogin}
                    >
                      <IconWrapper type='MaterialCommunityIcons' name='facebook-box' />
                    </Button>
                    <Button
                      style={[flatButton, sideBySide, { backgroundColor: '#DB3236' }]}
                      onPress={this.googleLogin}
                    >
                      <IconWrapper type='MaterialCommunityIcons' name='google' />
                    </Button>
                  </View>
                </View>
              }

            </Content>
          </Container>
        </StyleProviderWrapper>
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
  backgroundWhite: {
    backgroundColor: '#ffffff'
  },
  backgroundPrimary: {
    backgroundColor: '#00695C'
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
  fullInput: { 
    marginLeft: 0,
    marginVertical: 10
  },
  sideBySide: {
    margin: 0, width: '49%', justifyContent: 'center',
  }
});

export default Login;