import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Body, Title, Tabs, Tab } from 'native-base';
import { observer, inject } from 'mobx-react';

import StyleProviderWrapper from '../../../shared/StyleProviderWrapper';
import HeaderWrapper from '../../../shared/HeaderWrapper';
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
      <StyleProviderWrapper>
        <Container>
          <HeaderWrapper hasTabs>
            <Body style={{ flex: 3, alignItems: 'center' }}>
              <Title style={{ color: '#ffffff', fontFamily: 'OpenSans-Bold' }}>
                Product Inventory
              </Title>
            </Body>
          </HeaderWrapper>
          <Segments
            values={['Requested', 'Reserved', 'On Delivery', 'Sold']}
            selectedIndex={this.state.selectedIndex}
            onTabPress={this.setIndex}
          />
          {this.state.selectedIndex === 0 && <Products status='requested' products={DashboardStore.requestedProducts} />}
          {this.state.selectedIndex === 1 && <Products status='reserved'  products={DashboardStore.reservedProducts} />}
          {this.state.selectedIndex === 2 && <Products status='onDelivery' products={DashboardStore.onDeliveryProducts} />}
          {this.state.selectedIndex === 3 && <Products status='sold' products={DashboardStore.soldProducts} />}
        </Container>
      </StyleProviderWrapper>
    );
  }
}

export default Inventory;