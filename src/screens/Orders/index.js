import React, { Fragment, PureComponent } from 'react';

import {
  TopNavigation, Tab
} from 'react-native-ui-kitten';

import {
  TabView
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

  render() {
    return (
      <Fragment>
        <TopNavigation
          title='Orders'
          alignment='center'
        />
        <TabView
          selectedIndex={this.state.selectedIndex}
          onSelect={this.onSelect}
        >
          <Tab title='Requested'>
            <ProductGridList Component={RequestedCard} data={data.data} />
          </Tab>
          <Tab title='Reserved'>
            <ProductGridList Component={ReservedCard} data={data.data} />
          </Tab>
          <Tab title='On Delivery'>
            <ProductGridList Component={OnDeliveryCard} data={data.data} />
          </Tab>
          <Tab title='Sold'>
            <ProductGridList Component={SoldCard} data={data.data} />
          </Tab>
        </TabView>
      </Fragment>
    );
  }

}

export default Container;