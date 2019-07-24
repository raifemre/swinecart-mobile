import React, { Fragment, PureComponent } from 'react';

import {
  Tab
} from 'react-native-ui-kitten';

import {
  TabView, HeaderBar
} from '../../shared/components';

import {
  RequestedCard, ProductGridList, ReservedCard, OnDeliveryCard, SoldCard
} from './components'

import data from './data';

class Container extends PureComponent {

  state = {
    selectedIndex: 0
  }

  onSelect = selectedIndex => {
    this.setState({
      selectedIndex
    });
  }

  goToReserved = () => this.onSelect(1);
  goToOnDelivery = () => this.onSelect(2);
  goToSold = () => this.onSelect(3);

  render() {
    return (
      <Fragment>
        <HeaderBar title='Orders' />
        <TabView
          selectedIndex={this.state.selectedIndex}
          onSelect={this.onSelect}
        >
          <Tab onSelect={this.onSelect} title='Requested'>
            <ProductGridList action={this.goToReserved} Component={RequestedCard} data={data.data} />
          </Tab>
          <Tab onSelect={this.goToOnDelivery} title='Reserved'>
            <ProductGridList action={this.goToOnDelivery} Component={ReservedCard} data={data.data} />
          </Tab>
          <Tab onSelect={this.onSelect} title='On Delivery'>
            <ProductGridList action={this.goToSold} Component={OnDeliveryCard} data={data.data} />
          </Tab>
          <Tab onSelect={this.onSelect} title='Sold'>
            <ProductGridList action={this.goToSold} Component={SoldCard} data={data.data} />
          </Tab>
        </TabView>
      </Fragment>
    );
  }

}

export default Container;