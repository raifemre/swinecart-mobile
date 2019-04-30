import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import {
  Container, Content, Left, Right
} from 'native-base';

import { observer, inject } from 'mobx-react';

import HeaderWrapper from '../../../shared/HeaderWrapper';
import BodyWrapper from '../../../shared/BodyWrapper';
import BackButton from '../../../shared/BackButton';

// @inject('NotificationStore')
@observer
class Register extends Component {

  render() {

    const { contentStyle } = styles;

    return (
      <React.Fragment>
        <Container>
          <HeaderWrapper>
            <Left style={[contentStyle]}>
              <BackButton />
            </Left>
            <BodyWrapper title='Register'/>
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