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
      this.setState({ refreshing: false });
    });
  };


  render() {
    const { ShopStore } = this.props;
    return (
      <FlatGrid
        itemDimension={130}
        spacing={16}
        items={this.props.ShopStore.products}
        renderItem={this.renderItem}
      />
    );
  }
}

export default Products;