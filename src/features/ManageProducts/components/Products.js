import React, { Component } from 'react';
import { FlatGrid } from 'react-native-super-grid';
import { observer, inject } from 'mobx-react';
import ProductContainer from './ProductContainer';

@inject('ProductsStore')
@observer
class Products extends Component {

  state = {
    refreshing: false
  }

  renderProduct = ({ item }) => {
    return (
      <ProductContainer product={item} />
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

  getMoreProducts = async () => {
    await this.props.ProductsStore.getMoreProducts();
  }

  render() {

    const { ProductsStore } = this.props;

    return (
      <FlatGrid
        itemDimension={150}
        spacing={4}
        items={ProductsStore.products}
        renderItem={this.renderProduct}
        refreshing={this.state.refreshing}
        onRefresh={this.handleOnRefresh}
        onEndReached={this.getMoreProducts}
        onEndReachedThreshold={0.3}
        initialItemsToRender={6}
      />
    );
  }
}

export default Products;