import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import RequestedProducts from './RequestedProducts';
import ReservedProducts from './ReservedProducts';
import OnDeliveryProducts from './OnDeliveryProducts';
import SoldProducts from './SoldProducts';

class ProductsTabs extends Component {

  state = {
    index: 0,
    routes: [
      { key: '1', title: 'Requested' },
      { key: '2', title: 'Reserved' },
      { key: '3', title: 'On Delivery' },
      { key: '4', title: 'Sold' },
    ],
  };


  renderTabBar = props => (
    <TabBar
      {...props}
      scrollEnabled
      style={{ backgroundColor: '#00695C' }}
      indicatorStyle={{ backgroundColor: '#ffffff' }}
      labelStyle={{ fontFamily: 'Rubik-Bold', }}
      initialLayout={{ width: Dimensions.get('window').width }}
    />
  )

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          '1': RequestedProducts,
          '2': ReservedProducts,
          '3': OnDeliveryProducts,
          '4': SoldProducts,
        })}

        onIndexChange={index => this.setState({ index })}
        renderTabBar={this.renderTabBar}
        lazy={true}
      />
    );
  }

}

export default ProductsTabs;