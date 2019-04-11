import React, { Component } from 'react';
import {
  createSwitchNavigator
} from 'react-navigation';

import Navigation from '../../services/navigation';

import AuthChecker from '../../features/AuthChecker';

import BreederTabNavigator from './BreederTabs';
import CustomerStackNavigator from './CustomerTabs';
import PublicStackNavigator from './PublicStack';

const RootNavigator = createSwitchNavigator({
  AuthChecker: AuthChecker,
  Public: PublicStackNavigator,
  Customer: CustomerStackNavigator,
  Breeder: BreederTabNavigator
}, {
  initialRouteName: 'AuthChecker'
});

class Root extends Component {
  render() {
    return <RootNavigator ref={ref => Navigation.setTopLevelNavigator(ref)} />;
  }
}

export default Root;