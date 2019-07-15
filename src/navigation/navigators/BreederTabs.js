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
import MyProductsStack from './MyProductsStack';

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
      onSelect={onTabSelect}
    >
      <BottomNavigationTab title='My Products' />
      <BottomNavigationTab title='Orders' />
      <BottomNavigationTab title='Dashboard' />
      <BottomNavigationTab title='Inbox' />
      <BottomNavigationTab title='Profile' />
    </BottomNavigation>
  );

}

const navigator = createBottomTabNavigator({
  'MyProductsStack': {
    screen: MyProductsStack,
  },
  'OrdersStack': {
    screen: OrdersStack,
  },
  'Dashboard': {
    screen: ProfileStack,
  },
  'InboxStack': {
    screen: InboxStack,
  },
  'ProfileStack': {
    screen: ProfileStack,
  },
},
{
  initialRouteName: 'InboxStack',
  tabBarComponent: TabBar,
  defaultNavigationOptions: ({ navigation }) => {
  },
  tabBarOptions: {
  },
  lazy: true,
});

export default navigator;