import React, { PureComponent } from 'react';
import { withStyles } from '@ui-kitten/components';
import { Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import { EmptyListMessage } from 'shared';

import { shadows, colors } from 'constants/theme';

import Orders from './Orders';
import History from './History';

class TransactionsTabView extends PureComponent {

  state = {
    index: 0,
    routes: [
      { key: 'orders', title: 'Orders', },
      { key: 'history', title: 'History', },
    ]
  };

  ordersRoute = () =>  <Orders />;
  historyRoute = () => <History />;

  getLabelText = ({ route }) => route.title;

  initialLayout = {
    height: 0,
    width: Dimensions.get('window').width
  };

  renderTabBar = (props) => {
    return (
      <TabBar
        {...props}
        useNativeDriver={true}
        getLabelText={this.getLabelText}
        labelStyle={this.props.themedStyle.labelStyle}
        indicatorStyle={this.props.themedStyle.indicatorStyle}
        style={this.props.themedStyle.tabBarStyle}
        tabStyle={this.props.themedStyle.tabStyle}
      />
    )
  }

  renderScene = SceneMap({
    orders: this.ordersRoute,
    history: this.historyRoute,
  });

  renderLazyPlaceholder = () => {
    return (
      <EmptyListMessage title='Loading...' />
    );
  }

  onIndexChange = index => this.setState({ index });

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this.renderScene}
        onIndexChange={this.onIndexChange}
        initialLayout={this.initialLayout}
        renderTabBar={this.renderTabBar}
        renderLazyPlaceholder={this.renderLazyPlaceholder}
        lazy={true}
        lazyPreloadDistance={0}
        swipeEnabled={false}
      />
    );
  }
}

export default withStyles(TransactionsTabView, () => ({
  tabBarStyle: {
    ...shadows.shadow3,
    backgroundColor: colors.primary,
    height: 56
  },
  labelStyle: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 15,
  },
  indicatorStyle: {
    backgroundColor: 'white',
    height: 4
  },
}));