import React, { Component } from 'react';
import { Container } from 'native-base';
import { observer, inject } from 'mobx-react';
import HeaderWrapper from '../../../shared/HeaderWrapper';
import BodyWrapper from '../../../shared/BodyWrapper';
import SpinnerWithOverlay from '../../../shared/SpinnerWithOverlay';

import Tabs from '../components/Tabs';

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

    // InventoryStore.getProducts('requested');
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
        <SpinnerWithOverlay visible={InventoryStore.cancelTranLoading} />
        <SpinnerWithOverlay visible={InventoryStore.confirmSoldLoading} />
        <Container>
          <Tabs />
        </Container>
      </React.Fragment>
    );
  }
}

export default Inventory;