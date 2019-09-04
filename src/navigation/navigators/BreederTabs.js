import { createBottomTabNavigator } from 'react-navigation-tabs';

import ProfileStack from './ProfileStack';
import OrdersStack from './OrdersStack';
import InboxStack from './InboxStack';
import DashboardStack from './DashboardStack';
import ProductsStack from './ProductsStack';

import { BreederTabBar } from '../components';

const navigator = createBottomTabNavigator({
  'ProductsStack': {
    screen: ProductsStack,
  },
  'OrdersStack': {
    screen: OrdersStack,
  },
  'DashboardStack': {
    screen: DashboardStack,
  },
  'InboxStack': {
    screen: InboxStack,
  },
  'ProfileStack': {
    screen: ProfileStack,
  },
},
{
  initialRouteName: 'ProfileStack',
  tabBarComponent: BreederTabBar,
  defaultNavigationOptions: ({ navigation }) => {
  },
  lazy: true,
});

export default navigator;