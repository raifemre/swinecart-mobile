import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { Container, View, Right, Left } from 'native-base';

import { observer, inject } from 'mobx-react';

import HeaderWrapper from '../../../shared/HeaderWrapper';
import BodyWrapper from '../../../shared/BodyWrapper';
import BackButton from '../../../shared/BackButton';
import SpinnerWithOverlay from '../../../shared/SpinnerWithOverlay';

import Items from '../components/Items';

@inject('SwineCartStore')
@observer
class Cart extends Component {

  componentDidMount() {
    this.props.SwineCartStore.getItems();
  }

  render() {

    const { contentStyle } = styles;

    return (
      <React.Fragment>
        <SpinnerWithOverlay visible={false} />
        <Container>
          <HeaderWrapper>
            <BodyWrapper title='Cart' />
          </HeaderWrapper>
          <View style={[contentStyle, { paddingTop: 16 }]}>
            <Items />
          </View>
        </Container>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  contentStyle: {
    flex: 1,
    backgroundColor: '#ecf0f1'
  },
});

export default Cart;