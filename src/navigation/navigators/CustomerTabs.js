import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';

import { Icon } from 'native-base';

import Notifications from '../../features/Notifications';

import NotificationsIcon from '../../shared/NotificationsIcon';
import SwineCartIcon from '../../shared/SwineCartIcon';

import MessagingStack from './MessagingStack';
import ProfileStack from './ProfileStack';
import ShopStack from './ShopStack';
import CartStack from './CartStack';

const iconMapping = {
  Shop: 'shop',
  Cart: 'shopping-cart',
  Dashboard: 'assessment',
  Messaging: 'message',
  Profile: 'account-circle'
};

MessagingStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible: navigation.state.index > 0 ? false : true,
  };
};

ShopStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible: navigation.state.index > 0 ? false : true,
  };
};

CartStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible: navigation.state.index > 0 ? false : true,
  };
};

const navigator = createBottomTabNavigator({
  'Shop': {
    screen: ShopStack
  },  
  'Cart': {
    screen: CartStack
  },
  'Messaging': {
    screen: MessagingStack
  },
  // 'Notifications': {
  //   screen: Notifications
  // },
  'Profile': {
    screen: ProfileStack,
  },
},
{
  initialRouteName: 'Messaging',
  navigationOptions: ({ navigation }) => {
    const { routeName } = navigation.state;
    return {
      tabBarIcon: ({ focused }) => {
        if(routeName === 'Notifications') {
          return (
            <NotificationsIcon focused={focused} />
          );
        }
        else if (routeName === 'Cart') {
          return (
            <SwineCartIcon focused={focused} />
          );
        }
        else {
          return <Icon
            type='MaterialIcons'
            name={iconMapping[routeName]}
            style={{ color: focused ? '#00695C' : '#000000' }} />
        }
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