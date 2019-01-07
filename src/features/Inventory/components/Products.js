import React, { Component } from 'react';

import { FlatList } from 'react-native';

import { observer, inject } from 'mobx-react';

import { toJS } from 'mobx';

import RequestedCard from './RequestedCard';

@inject('DashboardStore', 'UserStore')
@observer
class Products extends Component {

  componentDidMount() {
  }

  state = {
    refreshing: false
  }

  renderProduct = ({ item }) => {
    const { status } = item;
    switch(status) {
      case 'requested': return <RequestedCard product={item} />;
      default: return null;
    }
  }

  handleOnRefresh = () => {
  };

  getMoreProducts = async ({ distanceFromEnd }) => {
  }

  render() {

    const { DashboardStore } = this.props;
    const products = toJS(DashboardStore.products);
    return (
      <FlatList
        data={products}
        renderItem={this.renderProduct}
        keyExtractor={product => `${product.id}`}
        refreshing={this.state.refreshing}
        onRefresh={this.handleOnRefresh}
        onEndReached={this.getMoreProducts}
        onEndReachedThreshold={0.5}
      />
    );
  }
}

export default Products;