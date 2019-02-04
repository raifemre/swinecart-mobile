import React from 'react';
import {
  createBottomTabNavigator
} from 'react-navigation';

import { Icon } from 'native-base';

import Profile from '../../features/Profile';
import Notifications from '../../features/Notifications';
import Dashboard from '../../features/Dashboard';

import NotificationsIcon from '../../shared/NotificationsIcon';

import MessagingStack from './MessagingStack';
import ManageProductsStack from './ManageProductsStack';
import ProductInventory from './ProductInventoryStack';

const iconMapping = {
  ManageProducts: 'store',
  ProductInventory: 'list',
  Dashboard: 'assessment',
  Messaging: 'message',
  Profile: 'mode-edit'
};

MessagingStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible: navigation.state.index > 0 ? false : true,
  };
};

const navigator = createBottomTabNavigator({
  'ManageProducts': {
    screen: ManageProductsStack
  },
  // 'ProductInventory': {
  //   screen: ProductInventory
  // },
  // 'Dashboard': {
  //   screen: Dashboard
  // },
  // 'Messaging': {
  //   screen: MessagingStack
  // },
  // 'Notifications': {
  //   screen: Notifications
  // },
  'Profile': {
    screen: Profile,
  },
},
{
  initialRouteName: 'ManageProducts',
  navigationOptions: ({ navigation }) => {
    const { routeName } = navigation.state;
    return {
      tabBarIcon: ({ focused }) => {
        if(routeName === 'Notifications') {
          return (
            <NotificationsIcon focused={focused} />
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