import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { Container, View, Right, Left } from 'native-base';

import { observer, inject } from 'mobx-react';

import HeaderWrapper from '../../../shared/HeaderWrapper';
import BodyWrapper from '../../../shared/BodyWrapper';
import BackButton from '../../../shared/BackButton';
import SpinnerWithOverlay from '../../../shared/SpinnerWithOverlay';

// @inject('UserStore', 'DashboardStore')
@observer
class ContainerName extends Component {

  render() {

    const { contentStyle } = styles;

    return (
      <React.Fragment>
        <SpinnerWithOverlay visible={} />
        <Container>
          <HeaderWrapper>
            <Left style={[contentStyle]}>
              <BackButton />
            </Left>
            <BodyWrapper
            />
            <Right />
          </HeaderWrapper>
          <View style={[contentStyle, { padding: 15 }]}>
            <Requests />
          </View>
        </Container>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  
});

export default ContainerName;