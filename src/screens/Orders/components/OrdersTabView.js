import React, { PureComponent } from 'react';
import { Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import OrdersList from './OrdersList';
import StatusPicker from './StatusPicker';

import { EmptyListMessage } from '../../../shared/components';

class OrdersTabView extends PureComponent {
  state = {
    index: 0,
    routes: [
      { key: 'requested', text: 'Requested' },
      { key: 'reserved', text: 'Reserved' },
      { key: 'onDelivery', text: 'On Delivery' },
      { key: 'sold', text: 'Sold' },
    ],
  };

  requestedRoute = () => <OrdersList status='requested' />;
  reservedRoute = () => <OrdersList status='reserved' />;
  onDeliveryRoute = () => <OrdersList status='onDelivery' />;
  soldRoute = () => <OrdersList status='sold' />;

  initialLayout = { 
    height: 0, 
    width: Dimensions.get('window').width
  };

  renderTabBar = ({ jumpTo }) => {
    return <StatusPicker jumpTo={jumpTo} />;
  };

  renderScene = SceneMap({
    requested: this.requestedRoute,
    reserved: this.reservedRoute,
    onDelivery: this.onDeliveryRoute,
    sold: this.soldRoute,
  });

  renderLazyPlaceholder = () => {
    return (
      <EmptyListMessage title='Loading Orders...' />
    );
  }

  onIndexChange = index => this.setState({ index });

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this.renderScene}
        renderTabBar={this.renderTabBar}
        renderLazyPlaceholder={this.renderLazyPlaceholder}
        onIndexChange={this.onIndexChange}
        initialLayout={this.initialLayout}
        lazy={true}
        lazyPreloadDistance={0}
        swipeEnabled={false}
      />
    );
  }
}

export default OrdersTabView;