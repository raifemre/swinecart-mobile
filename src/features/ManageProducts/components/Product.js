import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import { Card, CardItem, Body, View, Thumbnail, Left, Text } from 'native-base';

import { observer, inject } from 'mobx-react';

import Navigation from '../../../services/navigation';

import TextWrapper from '../../../shared/TextWrapper';

@inject('ProductsStore')
@observer
class Product extends Component {

  render() {

    const { cardStyle } = styles;
    const { product } = this.props;

    return (
      <View style={{ paddingHorizontal: 8 }}>
        <Card>
          <CardItem first>
            <Left>
              <Thumbnail square large source={{ uri: product.img_path }} />
              <Body>
                <Text>{product.name}</Text>
                <Text>GeekyAnts</Text>
                <Text>GeekyAnts</Text>
                <Text>GeekyAnts</Text>
              </Body>
            </Left>
          </CardItem>
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
  cardStyle: {
    borderColor: 'transparent',
    borderColor: '#f7f7f7',
    shadowColor: '#f7f7f7',
    shadowRadius: 0.1,
    elevation: 1
  }
});

export default Product;