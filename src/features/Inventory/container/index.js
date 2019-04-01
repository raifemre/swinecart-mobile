import React, { Component } from 'react';
import { Container, View } from 'native-base';
import { observer, inject } from 'mobx-react';

import HeaderWrapper from '../../../shared/HeaderWrapper';
import BodyWrapper from '../../../shared/BodyWrapper';
import Segments from '../../../shared/Segments';

import RequestedProducts from '../components/RequestedProducts';

@inject('InventoryStore')
@observer
class Inventory extends Component {

  state = {
    selectedIndex: 0
  }

  componentDidMount() {
    this.props.InventoryStore.getReservedProducts();
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
          {selectedIndex === 0 && <RequestedProducts />}
        </View>
      </Container>
    );
  }
}

export default Inventory;