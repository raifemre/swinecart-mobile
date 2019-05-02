import React, { Component } from 'react';
import { View } from 'native-base';
import { observer, inject } from 'mobx-react';
import HeaderWrapper from '../../../shared/HeaderWrapper';
import BodyWrapper from '../../../shared/BodyWrapper';
import SpinnerWithOverlay from '../../../shared/SpinnerWithOverlay';


import Products from '../components/Products';
import RequestedCard from '../components/RequestedCard';
import ReservedCard from '../components/ReservedCard';
import OnDeliveryCard from '../components/OnDeliveryCard';
import SoldCard from '../components/SoldCard';

@inject('InventoryStore')
@observer
class Inventory extends Component {

  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Requested' },
      { key: 'second', title: 'Reserved' },
      { key: 'third', title: 'On Delivery' },
      { key: 'fourth', title: 'Sold' },
    ],
  };


  componentDidMount() {

    const { InventoryStore } = this.props;

    InventoryStore.getProducts('requested');
    // InventoryStore.getProducts('reserved');
    // InventoryStore.getProducts('on_delivery');
    // InventoryStore.getProducts('sold');
  }

  setIndex = index => {
    this.props.InventoryStore.onSelectIndex(index);
  }

  render() {

    const { InventoryStore } = this.props;

    return (
      <React.Fragment>
        <SpinnerWithOverlay visible={InventoryStore.cancelTranLoading || InventoryStore.confirmSoldLoading} />
        <HeaderWrapper>
          <BodyWrapper title='Product Inventory' />
        </HeaderWrapper>
        <View style={{ flex: 1 }}>
          <Products status='requested' CardComponent={RequestedCard} />
        </View>
      </React.Fragment>
    );
  }
}

export default Inventory;