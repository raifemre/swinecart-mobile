import {
  createBottomTabNavigator
} from 'react-navigation-tabs';


import ProfileStack from './ProfileStack';
import OrdersStack from './OrdersStack';
import InboxStack from './InboxStack';
import MyProductsStack from './MyProductsStack';

import { 
  BreederTab
} from '../components';

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
  initialRouteName: 'OrdersStack',
  tabBarComponent: BreederTab,
  defaultNavigationOptions: ({ navigation }) => {
  },
  lazy: true,
});

export default navigator;