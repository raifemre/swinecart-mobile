import React from 'react';
import { observer, inject } from 'mobx-react';

import FlatGridWrapper from '../../../shared/FlatGridWrapper';
import LoadingView from '../../../shared/LoadingView';
import { toJS } from 'mobx';

function Products({ InventoryStore, status, CardComponent }) {

  const renderItem = ({ item }) => {
    return (
      <CardComponent product={item} />
    );
  }

  const onRefresh = async () => {
    await InventoryStore.getProducts(status);
  }

  const onEndReached = async () => {
    InventoryStore.getMoreProducts(status);
  }

  if (InventoryStore.products[status]) {
    return (
      <FlatGridWrapper
        items={toJS(InventoryStore.products[status])}
        renderItem={renderItem}
        onRefresh={onRefresh}
        onEndReached={onEndReached}
      />
    );
  }
  else {
    return (
      <LoadingView />
    )
  }
}

export default inject('InventoryStore')(observer(Products));