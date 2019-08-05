import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import { colors } from '../../../constants/theme';

import OrdersList from './OrdersList';

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

const ThirdRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

const FourthRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

export default class OrdersTabView extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Reserved' },
      { key: 'second', title: 'Reserved' },
      { key: 'third', title: 'Reserved' },
      { key: 'fourth', title: 'Reserved' },
    ],
  };

  initialLayout = { 
    height: 0, 
    width: Dimensions.get('window').width 
  };

  renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'white', height: 4 }}
      style={{ backgroundColor: colors.primary }}
      tabStyle={{ width: 'auto' }}
    />
  );
  
  renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        return <OrdersList />;
      case 'second':
        return <OrdersList />;
      case 'third':
        return <OrdersList />;
      case 'fourth':
        return <OrdersList />;
      default:
        return null;
    }
  };

  render() {
    return (
      <TabView
        lazy={false}
        navigationState={this.state}
        renderScene={this.renderScene}
        renderTabBar={this.renderTabBar}
        onIndexChange={index => this.setState({ index })}
        initialLayout={this.initialLayout}
      />
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
});