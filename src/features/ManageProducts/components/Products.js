import React, { Component } from 'react';
import { FlatGrid } from 'react-native-super-grid';
import { observer, inject } from 'mobx-react';
import Product from './Product';
import { toJS } from 'mobx';

@inject('ProductsStore')
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

  getMoreProducts = async () => {
    await this.props.ProductsStore.getMoreProducts();
  }

  render() {
    return (
      <FlatGrid
        itemDimension={150}
        spacing={8}
        items={toJS(this.props.ProductsStore.products)}
        renderItem={this.renderProduct}
        refreshing={this.state.refreshing}
        onRefresh={this.handleOnRefresh}
        onEndReached={this.getMoreProducts}
        onEndReachedThreshold={0.2}
        maxToRenderPerBatch={2}
        initialNumToRender={8}
      />
    );
  }
}

export default Products;