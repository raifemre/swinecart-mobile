import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import StyleProviderWrapper from '../../../shared/StyleProviderWrapper';

import {
  Container, Header, Body, Title, Tabs, Tab
} from 'native-base';


import {
  observer, inject
} from 'mobx-react';

import Products from '../components/Products';

@inject('UserStore', 'DashboardStore')
@observer
class Inventory extends Component {


  state = {
    activeTab: 0
  }

  componentDidMount() {
    const { DashboardStore } = this.props;
    DashboardStore.getProducts();
  }

  onChangeTab = ({ i: activeTab }) => {
    this.props.DashboardStore.setActiveTab(activeTab);
  }

  render() {

    const { openSansBold } = styles;

    const { DashboardStore } = this.props;

    return (
      <StyleProviderWrapper>
        <Container>
          <Header hasTabs noShadow androidStatusBarColor='#ffffff'>
            <Body style={{ flex: 3, alignItems: 'center' }}>
              <Title style={[openSansBold, { color: '#000000' }]}>
                Product Inventory
            </Title>
            </Body>
          </Header>
          <Tabs locked={true} initialPage={0} page={DashboardStore.activeTab} onChangeTab={this.onChangeTab}>
            <Tab heading='Requested'>
              <Products status='requested' products={DashboardStore.requestedProducts} />
            </Tab>
            <Tab heading='Reserved'>
              <Products status='reserved' products={DashboardStore.reservedProducts} />
            </Tab>
            <Tab heading='Delivery'>
              <Products status='onDelivery' products={DashboardStore.onDeliveryProducts} />
            </Tab>
            <Tab heading='Sold'>
              <Products status='sold' products={DashboardStore.soldProducts} />
            </Tab>
          </Tabs>
        </Container>
      </StyleProviderWrapper>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentStyle: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  openSansBold: {
    fontFamily: 'OpenSans-Bold'
  },
  openSansSemiBold: {
    fontFamily: 'OpenSans-SemiBold'
  },
  cardStyle: {
    borderColor: 'transparent',
    borderColor: '#f7f7f7',
    shadowColor: '#f7f7f7',
    shadowRadius: 0.1,
    elevation: 1
  },
  flatButton: {
    elevation: 0,
    borderColor: 'transparent',
    borderBottomWidth: 0
  },
});

export default Inventory;