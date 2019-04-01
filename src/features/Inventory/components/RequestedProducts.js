import React, { Component } from 'react';


import { observer, inject } from 'mobx-react';

import FlatGridWrapper from '../../../shared/FlatGridWrapper';

import RequestedCard from './RequestedCard';

@inject('InventoryStore')
@observer
class RequestedProducts extends Component {

  renderItem = ({ item }) => {
    return (
      <RequestedCard product={item} />
    );
  }

  onEndReached = async () => {

  }

  onRefresh = async () => {
    await this.props.InventoryStore.getReservedProducts();
  }

  render() {
    return (
      <FlatGridWrapper
        items={this.props.InventoryStore.requestedProducts}
        renderItem={this.renderItem}
        onRefresh={this.onRefresh}
        onEndReached={this.onEndReached}
      />
    );
  }
}

export default RequestedProducts;