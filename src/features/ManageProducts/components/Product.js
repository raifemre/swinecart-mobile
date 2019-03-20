import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import {
  View, Text, Card, CardItem, Left, Right, Button, CheckBox,
  Icon, Grid, Col, Row
} from 'native-base';

import FastImage from 'react-native-fast-image';

import {
  observer, inject
} from 'mobx-react';

import { Navigation } from '../../../services/';

import TextWrapper from '../../../shared/TextWrapper';

@inject('ProductsStore')
@observer
class Product extends Component {

  handleDelete = () => {
    const { ProductsStore, product } = this.props;
    ProductsStore.deleteProduct(product);
  };

  handleStatusToggle = () => {
    const { ProductsStore, product } = this.props;
    ProductsStore.toggleStatus(product);
  }

  handleChecked = () => {
    const { ProductsStore, product } = this.props;
    ProductsStore.toggleCheck(product);
  }

  handleEdit = () => {
    const { ProductsStore, product } = this.props;
    ProductsStore.setSelectedProduct(product);
    Navigation.navigate('EditProduct');
  }

  navigateToDetails = () => {
    const { ProductsStore, product } = this.props;
    ProductsStore.setSelectedProduct(product);
    Navigation.navigate('ProductDetails');
  }

  render() {

    const { openSansBold, cardStyle, container } = styles;

    const { product } = this.props;

    const {
      name, id
    } = product;

    return (
      <View style={{ paddingHorizontal: 5 }}>
        <Card style={[cardStyle]}>
          <TextWrapper
            text={id}
            font='OpenSans-Bold'
            size={24}
            color='#000000'
          />
        </Card>
      </View>
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
  cardStyle: {
    borderColor: 'transparent',
    borderColor: '#f7f7f7',
    shadowColor: '#f7f7f7',
    shadowRadius: 0.1,
    elevation: 1
  }
});

export default Product;