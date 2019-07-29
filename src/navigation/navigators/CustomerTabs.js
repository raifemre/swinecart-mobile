import { createBottomTabNavigator } from 'react-navigation-tabs';

import ProfileStack from './ProfileStack';
import OrdersStack from './OrdersStack';
import InboxStack from './InboxStack';
import ProductsStack from './ProductsStack';

import { CustomerTabBar } from '../components';

const navigator = createBottomTabNavigator({
  'ProductsStack': {
    screen: ProductsStack,
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
    initialRouteName: 'OrdersStack',
    tabBarComponent: CustomerTabBar,
    defaultNavigationOptions: ({ navigation }) => {
    },
    lazy: true,
  });

export default navigator;