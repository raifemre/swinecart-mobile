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

import { Icon } from '../../shared/components';

import { shadowStyles } from '../../constants/theme';

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
      style={shadowStyles.shadow1}
      // appearance='noIndicator'
      selectedIndex={props.navigation.state.index}
      onSelect={onTabSelect}
    >
      {/* <BottomNavigationTab title='My Products' icon={() => <Icon source={require('../../assets/icons/home.png')}/>} /> */}
      <BottomNavigationTab title='Orders' icon={() => <Icon source={require('../../assets/icons/list.png')} />}/>
      {/* <BottomNavigationTab title='Dashboard' /> */}
      <BottomNavigationTab title='Inbox' icon={() => <Icon source={require('../../assets/icons/inbox.png')} />}/>
      <BottomNavigationTab title='Profile' icon={() => <Icon source={require('../../assets/icons/person.png')} />}/>
    </BottomNavigation>
  );

}

const navigator = createBottomTabNavigator({
  // 'MyProductsStack': {
  //   screen: MyProductsStack,
  // },
  'OrdersStack': {
    screen: OrdersStack,
  },
  // 'Dashboard': {
  //   screen: ProfileStack,
  // },
  'InboxStack': {
    screen: InboxStack,
  },
  'ProfileStack': {
    screen: ProfileStack,
  },
},
{
  initialRouteName: 'OrdersStack',
  tabBarComponent: TabBar,
  defaultNavigationOptions: ({ navigation }) => {
  },
  lazy: true,
});

export default navigator;