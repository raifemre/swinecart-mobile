import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Left, Right } from 'native-base';
import { observer, inject } from 'mobx-react';

import HeaderWrapper from '../../../shared/HeaderWrapper';
import BodyWrapper from '../../../shared/BodyWrapper';
import BackButton from '../../../shared/BackButton';

import ProductInfo from '../components/ProductInfo';

@inject('ShopStore')
@observer
class ProductDetails extends Component {

  componentDidMount() {
    const { navigation, ShopStore } = this.props;
    const product = navigation.getParam('product');
    ShopStore.getProductDetails(product.id);
    ShopStore.getProductMedia(product.id);
  }

  render() {

    const { contentStyle } = styles;
  
    return (
      <Container>
        <HeaderWrapper>
          <Left style={[contentStyle]}>
            <BackButton />
          </Left>
          <BodyWrapper title='Product Details' />
          <Right />
        </HeaderWrapper>
        <Content contentContainerStyle={{ flex: 1, padding: 5 }}>
          <ProductInfo />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  contentStyle: {
    flex: 1,
  },
});

export default ProductDetails;