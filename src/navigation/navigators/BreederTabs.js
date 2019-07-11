import React from 'react';

import {
  createBottomTabNavigator
} from 'react-navigation';

import {
  BottomNavigation,
  BottomNavigationTab,
} from 'react-native-ui-kitten';

import ProfileStack from './ProfileStack';
import OrdersStack from './OrdersStack';
import InboxStack from './InboxStack';

// const iconMapping = {
//   ManageProducts: 'store',
//   ProductInventory: 'list',
//   Dashboard: 'assessment',
//   Messaging: 'message',
//   Profile: 'account-circle'
// };


const TabBar = props => {

  const onTabSelect = selectedIndex => {
    const { [selectedIndex]: selectedRoute } = props.navigation.state.routes;

    props.navigation.navigate(selectedRoute.routeName);

  }

  return (
    <BottomNavigation
      // appearance='noIndicator'
      selectedIndex={props.navigation.state.index}
      onSelect={onTabSelect}>
      <BottomNavigationTab title='My Products' />
      <BottomNavigationTab title='Orders' />
      <BottomNavigationTab title='Dashboard' />
      <BottomNavigationTab title='Inbox' />
      <BottomNavigationTab title='Profile' />
    </BottomNavigation>
  );

}

const navigator = createBottomTabNavigator({
  'MyProducts': {
    screen: ProfileStack,
  },
  'Orders': {
    screen: OrdersStack,
  },
  'Dashboard': {
    screen: ProfileStack,
  },
  'Inbox': {
    screen: InboxStack,
  },
  'Profile': {
    screen: ProfileStack,
  },
},
{
  initialRouteName: 'Inbox',
  tabBarComponent: TabBar,
  defaultNavigationOptions: ({ navigation }) => {
  },
  tabBarOptions: {
  },
  lazy: false,
});

export default navigator;