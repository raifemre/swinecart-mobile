import React, { PureComponent } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { colors } from '../../../constants/theme';

import OrdersList from './OrdersList';

export default class OrdersTabView extends PureComponent {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Requested' },
      { key: 'second', title: 'Reserved' },
      { key: 'third', title: 'On Delivery' },
      { key: 'fourth', title: 'Sold' },
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

  getLabelText = ({ route }) => route.title;

  renderTabBar = props => (
    <TabBar
      {...props}
      useNativeDriver={true}
      getLabelText={this.getLabelText}
      labelStyle={styles.labelStyle}
      indicatorStyle={styles.indicatorStyle}
      style={styles.tabBarStyle}
      tabStyle={styles.tabStyle
      }
    />
  );

  renderScene = SceneMap({
    first: this.requestedRoute,
    second: this.reservedRoute,
    third: this.onDeliveryRoute,
    fourth: this.soldRoute,
  });

  onIndexChange = index => this.setState({ index });

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this.renderScene}
        renderTabBar={this.renderTabBar}
        onIndexChange={this.onIndexChange}
        initialLayout={this.initialLayout}
        lazy={true}
      />
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  tabStyle: {
    width: 'auto',
  },
  tabBarStyle: {
    backgroundColor: colors.primary,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    elevation: 1,
  },
  labelStyle: { fontFamily: 'OpenSans-Bold', fontSize: 15 },
  indicatorStyle: { backgroundColor: 'white', height: 4 },
});