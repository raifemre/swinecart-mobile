import React, { Component } from 'react';
import { Container, Body, Title, View } from 'native-base';
import { observer, inject } from 'mobx-react';

import HeaderWrapper from '../../../shared/HeaderWrapper';
import BodyWrapper from '../../../shared/BodyWrapper';
import Segments from '../../../shared/Segments';

import Products from '../components/Products';

@inject('UserStore', 'DashboardStore')
@observer
class Inventory extends Component {

  state = {
    selectedIndex: 0
  }

  componentDidMount() {
    const { DashboardStore } = this.props;
    DashboardStore.getProducts();
  }

  setIndex = index => {
    this.setState({
      selectedIndex: index
    });
  }

  render() {
    const { DashboardStore } = this.props;

    return (
      <Container>
        <HeaderWrapper hasTabs>
          <BodyWrapper title='Product Inventory' />
        </HeaderWrapper>
        <Segments
          values={['Requested', 'Reserved', 'On Delivery', 'Sold']}
          selectedIndex={this.state.selectedIndex}
          onTabPress={this.setIndex}
        />
        <View style={{ marginTop: 0 }}>
          {this.state.selectedIndex === 0 && <Products status='requested' products={DashboardStore.requestedProducts} />}
          {this.state.selectedIndex === 1 && <Products status='reserved' products={DashboardStore.reservedProducts} />}
          {this.state.selectedIndex === 2 && <Products status='onDelivery' products={DashboardStore.onDeliveryProducts} />}
          {this.state.selectedIndex === 3 && <Products status='sold' products={DashboardStore.soldProducts} />}
        </View>
      </Container>
    );
  }
}

export default Inventory;