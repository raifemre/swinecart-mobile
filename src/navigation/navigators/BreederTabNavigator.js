import React from 'react';
import {
  createBottomTabNavigator
} from 'react-navigation';

import {
  Icon
} from 'native-base';

import Profile from '../../features/Profile';
import Messaging from '../../features/Messaging';
import Notifications from '../../features/Notifications';
import ManageProducts from '../../features/ManageProducts';
import Dashboard from '../../features/Dashboard';

const iconMapping = {
  ManageProducts: 'credit-card',
  Dashboard: 'bar-chart-2',
  Messaging: 'message-square',
  Notifications: 'bell',
  Profile: 'user'
};

const navigator = createBottomTabNavigator({
  'ManageProducts': {
    screen: ManageProducts
  },
  'Dashboard': {
    screen: Dashboard
  },
  'Messaging': {
    screen: Messaging
  },
  'Notifications': {
    screen: Notifications
  },
  'Profile': {
    screen: Profile,
  },
},
{
  initialRouteName: 'ManageProducts',
  navigationOptions: ({ navigation }) => {
    const { routeName } = navigation.state;
    console.log(routeName);
    return {
      tabBarIcon: ({ focused }) => {
        return <Icon 
          type='Feather' 
          name={iconMapping[routeName]} 
          style={{ color: focused ? '#00af66' : '#000000' }}/>
      }
    }
  },
  tabBarOptions: {
    style: {
      backgroundColor: '#f7f7f7',
      borderTopWidth: 0,
      borderTopColor: 'transparent'
    },
    showLabel : false
  },
  lazy: true,
});

export default navigator;