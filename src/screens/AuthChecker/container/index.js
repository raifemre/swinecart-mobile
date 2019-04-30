import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import {
  Container,
  Content
} from 'native-base';
import Spinner from 'react-native-spinkit';

import {
  observer, inject
} from 'mobx-react';

import { Navigation } from '../../../services';

@inject('AuthStore')
@observer
class AuthChecker extends Component {

  componentDidMount() {
    this.checkToken();
  }

  checkToken = async () => {
    const token = await AsyncStorage.getItem('token');
    try {
      if (token) {
        await this.props.AuthStore.loginFlow(token);
      }
      else {
        Navigation.navigate('Public');
      }
    }
    catch(error) {
      // console.log(error);
    }
  }

  render() {
    return (
      <Container style={{ flex: 1 }}>
        <Content contentContainerStyle={styles.container}>
          <Spinner
            type='ThreeBounce'
            color='#ffffff'
            size={100}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00695C',
  }
});

export default AuthChecker;
