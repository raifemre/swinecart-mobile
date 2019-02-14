import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { Container, View, Right, Left } from 'native-base';

import { observer, inject } from 'mobx-react';

import HeaderWrapper from '../../../shared/HeaderWrapper';
import BodyWrapper from '../../../shared/BodyWrapper';
import BackButton from '../../../shared/BackButton';
import SpinnerWithOverlay from '../../../shared/SpinnerWithOverlay';

import Products from '../components/Products';
@inject('ShopStore')
@observer
class Shop extends Component {

  componentDidMount() {
    this.props.ShopStore.getProducts();
  }

  render() {

    const { contentStyle } = styles;

    return (
      <React.Fragment>
        <SpinnerWithOverlay visible={false} />
        <Container>
          <HeaderWrapper>
            <Left style={[contentStyle]}>
            </Left>
            <BodyWrapper title='Shop'
            />
            <Right />
          </HeaderWrapper>
          <View style={[contentStyle, { paddingTop: 16 }]}>
            <Products />
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

export default Shop;