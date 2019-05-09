import React, { Component } from 'react';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import RequestedProducts from './RequestedProducts';
import ReservedProducts from './ReservedProducts';

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
    />
  )

  render() {
    return (
      <TabView
        scrollEnabled  
        navigationState={this.state}
        renderScene={SceneMap({
          '1': RequestedProducts,
          '2': ReservedProducts,
          '3': RequestedProducts,
          '4': RequestedProducts,
        })}
        onIndexChange={index => this.setState({ index })}
        renderTabBar={this.renderTabBar}
        lazy={false}
      />
    );
  }

}

export default ProductsTabs;