import React, { Component } from 'react';
import { FlatGrid } from 'react-native-super-grid';
import { observer, inject } from 'mobx-react';
import { toJS } from 'mobx';

import Product from './Product';

@inject('ShopStore')
@observer
class Products extends Component {

  state = {
    refreshing: false
  }

  renderItem = ({ item }) => {
    return (
      <Product product={item} />
    );
  }

  handleOnRefresh = () => {
    this.setState({
      refreshing: true
    }, async () => {
      await this.props.ShopStore.getProducts();
      this.setState({ refreshing: false });
    });
  };
  
  handleOnEndReached = () => {
    this.props.ShopStore.getMoreProducts();
  }

  render() {
    return (
      <FlatGrid
        itemDimension={130}
        spacing={16}
        items={this.props.ShopStore.products}
        renderItem={this.renderItem}
        refreshing={this.state.refreshing}
        onRefresh={this.handleOnRefresh}
        initialNumToRender={6}
        onEndReached={this.handleOnEndReached}
        onEndReachedThreshold={0.01}
      />
    );
  }
}

export default Products;