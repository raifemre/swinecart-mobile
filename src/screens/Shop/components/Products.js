import React, { Component } from 'react';
import { FlatGrid } from 'react-native-super-grid';
import { observer, inject } from 'mobx-react';
import { toJS } from 'mobx';

import LoadingView from '../../../shared/LoadingView';

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

  onRefresh = () => {
    this.setState({
      refreshing: true
    }, async () => {
      await this.props.ShopStore.getProducts();
      this.setState({ refreshing: false });
    });
  };
  
  onEndRefresh = () => {
    this.props.ShopStore.getMoreProducts();
  }

  render() {

    const { ShopStore } = this.props;

    if (ShopStore.products) {
      return (
        <FlatGrid
          itemDimension={150}
          spacing={8}
          items={toJS(ShopStore.products)}
          renderItem={this.renderItem}
          refreshing={this.state.refreshing}
          onRefresh={this.onRefresh}
          onEndReached={this.onEndRefresh}
          onEndReachedThreshold={0.2}
          initialNumToRender={8}
          maxToRenderPerBatch={2}
        />
      );
    }
    else {
      return (
        <LoadingView />
      );
    }
  }
}

export default Products;