import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { observer, inject } from 'mobx-react';

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

  getMoreProducts = async ({ distanceFromEnd }) => {
    await this.props.ProductsStore.getMoreProducts();
  }

  render() {

    const { ProductsStore } = this.props;

    return (
      <FlatList
        data={ProductsStore._products}
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