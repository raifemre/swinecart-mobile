import React, { Component } from 'react';
import { Container, View } from 'native-base';
import { observer, inject } from 'mobx-react';

import HeaderWrapper from '../../../shared/HeaderWrapper';
import BodyWrapper from '../../../shared/BodyWrapper';
import Segments from '../../../shared/Segments';

import Products from '../components/Products';
import RequestedCard from '../components/RequestedCard';

@inject('InventoryStore')
@observer
class Inventory extends Component {

  state = {
    selectedIndex: 0
  }

  componentDidMount() {
    this.props.InventoryStore.getProducts('requested');
    this.props.InventoryStore.getProducts('reserved');
    this.props.InventoryStore.getProducts('on_delivery');
    this.props.InventoryStore.getProducts('sold');
  }

  setIndex = index => {
    this.setState({
      selectedIndex: index
    });
  }

  render() {

    const { selectedIndex } = this.state;

    return (
      <Container>
        <HeaderWrapper hasSegment>
          <BodyWrapper title='Product Inventory' />
        </HeaderWrapper>
        <Segments
          values={['Requested', 'Reserved', 'On Delivery', 'Sold']}
          selectedIndex={selectedIndex}
          onTabPress={this.setIndex}
        />
        <View style={{ flex: 1 }}>
          {selectedIndex === 0 && <Products status='requested' CardComponent={RequestedCard} />}
          {selectedIndex === 1 && <Products status='reserved' CardComponent={RequestedCard} />}
          {selectedIndex === 2 && <Products status='on_delivery' CardComponent={RequestedCard} />}
          {selectedIndex === 3 && <Products status='sold' CardComponent={RequestedCard} />}
        </View>
      </Container>
    );
  }
}

export default Inventory;