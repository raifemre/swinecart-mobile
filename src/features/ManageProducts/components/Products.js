import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { observer, inject } from 'mobx-react';
import { toJS } from 'mobx';

import Product from './Product';

@inject('ProductsStore', 'UserStore')
@observer
class Products extends Component {

  state = {
    refreshing: false,
    i: 0
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

  getMoreProducts = async ({ distanceFromEnd }) => {
    await this.props.ProductsStore.getMoreProducts();
  }

  render() {

    const { ProductsStore } = this.props;
    const { _products } = ProductsStore;

    return (
      <FlatList
        data={toJS(_products)}
        extraData={this.state}
        renderItem={this.renderProduct}
        keyExtractor={product => `${product.id}`}
        refreshing={this.state.refreshing}
        onRefresh={this.handleOnRefresh}
        onEndReached={this.getMoreProducts}
        onEndReachedThreshold={0.1}
      />
    );
  }
}

export default Products;