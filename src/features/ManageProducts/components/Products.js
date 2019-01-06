import React, { Component } from 'react';

import {
  FlatList
} from 'react-native';

import { observer, inject } from 'mobx-react';

import { toJS } from 'mobx';

import Product from './Product';

@inject('ProductsStore', 'UserStore')
@observer
class Products extends Component {

  state = {
    refreshing: false
  }

  renderProduct = ({ item }) => {
    return (
      <Product product={item} />
    );
  }

  handleOnRefresh = () => {
    this.setState({
      refreshing: true
    }, async () => {
      await this.props.ProductsStore.getProducts();
      this.setState({ refreshing: false });
    });
  };

  render() {

    const { ProductsStore } = this.props;
    const { _products } = ProductsStore;

    return (
      <FlatList
        data={toJS(_products)}
        renderItem={this.renderProduct}
        keyExtractor={product => `${product.id}`}
        refreshing={this.state.refreshing}
        onRefresh={() => this.handleOnRefresh()}
      />
    );
  }
}

export default Products;