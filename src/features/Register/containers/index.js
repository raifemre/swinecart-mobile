import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import {
  Container, Body, Title, Content, Left, Right, Button, Icon
} from 'native-base';

import { observer, inject } from 'mobx-react';

import { Navigation } from '../../../services';

import HeaderWrapper from '../../../shared/HeaderWrapper';

// @inject('NotificationStore')
@observer
class Register extends Component {

  render() {

    const { openSansBold, contentStyle } = styles;

    return (
      <React.Fragment>
        <Container>
          <HeaderWrapper>
            <Left style={[contentStyle]}>
              <Button transparent onPress={Navigation.back}>
                <Icon type='Feather' name='arrow-left' style={{ color: '#ffffff' }} />
              </Button>
            </Left>
            <Body style={{ flex: 3, alignItems: 'center' }}>
              <Title style={[openSansBold, { color: '#ffffff' }]}>
                Register
            </Title>
            </Body>
            <Right />
          </HeaderWrapper>
          <Content padder>
          </Content>
        </Container>
      </React.Fragment>
    );
  }

}
const styles = StyleSheet.create({
  contentStyle: {
    flex: 1,
  },
  openSansBold: {
    fontFamily: 'OpenSans-Bold'
  }
});

export default Register;