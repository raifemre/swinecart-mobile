import React from 'react';
import {
  createBottomTabNavigator
} from 'react-navigation';

import { Icon } from 'native-base';

import Notifications from '../../screens/Notifications';

import NotificationsIcon from '../../shared/NotificationsIcon';

import MessagingStack from './MessagingStack';
import ManageProductsStack from './ManageProductsStack';
import ProductInventoryStack from './ProductInventoryStack';
import ProfileStack from './ProfileStack';
import DashboardTabs from './DashboardTabs';

const iconMapping = {
  ManageProducts: 'store',
  ProductInventory: 'list',
  Dashboard: 'assessment',
  Messaging: 'message',
  Profile: 'account-circle'
};

MessagingStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible: navigation.state.index > 0 ? false : true,
  };
};

ManageProductsStack.navigationOptions = ({ navigation }) => {
  return {
    // tabBarVisible: false
    tabBarVisible: navigation.state.index > 0 ? false : true,
  };
};

ProfileStack.navigationOptions = ({ navigation }) => {
  return {
    // tabBarVisible: false
    tabBarVisible: navigation.state.index > 0 ? false : true,
  };
};

ProductInventoryStack.navigationOptions = ({ navigation }) => {
  return {
    // tabBarVisible: false
    tabBarVisible: navigation.state.index > 0 ? false : true,
  };
};

const navigator = createBottomTabNavigator({
  'ManageProducts': {
    screen: ManageProductsStack,
  },
  'ProductInventory': {
    screen: ProductInventoryStack
  },
  'Dashboard': {
    screen: DashboardTabs
  },
  // 'Messaging': {
  //   screen: MessagingStack
  // },
  // 'Notifications': {
  //   screen: Notifications
  // },
  'Profile': {
    screen: ProfileStack,
  },
},
{
  initialRouteName: 'Dashboard',
  defaultNavigationOptions: ({ navigation }) => {
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
      backgroundColor: '#ffffff',
      borderTopWidth: 0,
      borderTopColor: 'transparent'
    },
    showLabel: false
  },
  lazy: true,
});

export default navigator;