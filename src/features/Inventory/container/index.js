import React, { Component } from 'react';
import { Container, View } from 'native-base';
import { observer, inject } from 'mobx-react';

import HeaderWrapper from '../../../shared/HeaderWrapper';
import BodyWrapper from '../../../shared/BodyWrapper';
import Segments from '../../../shared/Segments';
import SpinnerWithOverlay from '../../../shared/SpinnerWithOverlay';

import Products from '../components/Products';
import RequestedCard from '../components/RequestedCard';
import ReservedCard from '../components/ReservedCard';
import OnDeliveryCard from '../components/OnDeliveryCard';

@inject('InventoryStore')
@observer
class Inventory extends Component {

  componentDidMount() {
    this.props.InventoryStore.getProducts('requested');
    this.props.InventoryStore.getProducts('reserved');
    this.props.InventoryStore.getProducts('on_delivery');
    this.props.InventoryStore.getProducts('sold');
  }

  setIndex = index => {
    this.props.InventoryStore.onSelectIndex(index);
  }

  render() {

    const { InventoryStore } = this.props;

    return (
      <React.Fragment>
        <SpinnerWithOverlay visible={InventoryStore.cancelTranLoading} />
        <SpinnerWithOverlay visible={InventoryStore.confirmSoldLoading} />
        <Container>
          <HeaderWrapper hasSegment>
            <BodyWrapper title='Product Inventory' />
          </HeaderWrapper>
          <Segments
            values={['Requested', 'Reserved', 'On Delivery', 'Sold']}
            selectedIndex={InventoryStore.selectedIndex}
            onTabPress={this.setIndex}
          />
          <View style={{ flex: 1 }}>
            {InventoryStore.selectedIndex === 0 && <Products status='requested' CardComponent={RequestedCard} />}
            {InventoryStore.selectedIndex === 1 && <Products status='reserved' CardComponent={ReservedCard} />}
            {InventoryStore.selectedIndex === 2 && <Products status='on_delivery' CardComponent={OnDeliveryCard} />}
            {InventoryStore.selectedIndex === 3 && <Products status='sold' CardComponent={RequestedCard} />}
          </View>
        </Container>
      </React.Fragment>
    );
  }
}

export default Inventory;