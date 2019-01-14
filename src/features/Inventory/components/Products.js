import React, { Component } from 'react';

import { FlatList } from 'react-native';

import { observer, inject } from 'mobx-react';

import RequestedCard from './RequestedCard';
import ReservedCard from './ReservedCard';
import OnDeliveryCard from './OnDeliveryCard';

import { toJS } from 'mobx';

@inject('DashboardStore', 'UserStore')
@observer
class Products extends Component {

  componentDidMount() {
  }

  state = {
    refreshing: false,
  }

  renderProduct = ({ item }) => {
    switch(this.props.status) {
      case 'requested': return <RequestedCard product={item} />;
      case 'reserved': return <ReservedCard product={item} />;
      case 'onDelivery': return <OnDeliveryCard product={item} />;
    }
  }

  handleOnRefresh = () => {
    this.setState({
      refreshing: true
    }, async () => {
      await this.props.DashboardStore.getProducts();
      this.setState({ refreshing: false });
    });
  };

  getMoreProducts = async ({ distanceFromEnd }) => {
  }

  render() {

    return (
      <FlatList
        data={this.props.products}
        renderItem={this.renderProduct}
        keyExtractor={product => `${product.id}`}
        refreshing={this.state.refreshing}
        onRefresh={this.handleOnRefresh}
        onEndReached={this.getMoreProducts}
        stickySectionHeadersEnabled={true}
        onEndReachedThreshold={0.5}
      />
    );
  }
}

export default Products;