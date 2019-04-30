import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import FlatGridWrapper from '../../../shared/FlatGridWrapper';
import LoadingView from '../../../shared/LoadingView';
import { toJS } from 'mobx';

class Products extends Component {

  componentDidMount() {
    const { InventoryStore, status } = this.props;
    InventoryStore.getProducts(status);
  }

  renderItem = ({ item }) => {
    const { CardComponent } = this.props;
    return (
      <CardComponent product={item} />
    );
  }

  onRefresh = async () => {
    const { InventoryStore, status } = this.props;
    await InventoryStore.getProducts(status);
  }

  onEndReached = async () => {
    const { InventoryStore, status } = this.props;
    InventoryStore.getMoreProducts(status);
  }

  render() {
    const { InventoryStore, status } = this.props;
    if (InventoryStore.products[status]) {
      return (
        <FlatGridWrapper
          items={toJS(InventoryStore.products[status])}
          renderItem={this.renderItem}
          onRefresh={this.onRefresh}
          onEndReached={this.onEndReached}
        />
      );
    }
    else {
      return (
        <LoadingView />
      )
    }
  }


}

export default inject('InventoryStore')(observer(Products));