import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import Products from '../../screens/Inventory/components/Products';
import RequestedCard from '../../screens/Inventory/components/RequestedCard';
import ReservedCard from '../../screens/Inventory/components/ReservedCard';
import OnDeliveryCard from '../../screens/Inventory/components/OnDeliveryCard';
import SoldCard from '../../screens/Inventory/components/SoldCard';

const FirstRoute = () => (
  <Products status='requested' CardComponent={RequestedCard} />
);

const SecondRoute = () => (
  <Products status='reserved' CardComponent={ReservedCard} />
);

const DashboardTabs = createMaterialTopTabNavigator({
  Requested: {
    screen: FirstRoute,
    navigationOptions: {
      tabBarLabel: 'Product Status',
    }
  },
  Reserved: {
    screen: SecondRoute,
    navigationOptions: {
      tabBarLabel: 'Reviews'
    }
  },
}, {
    initialRouteName: 'Requested',
    lazy: true,
    tabBarOptions: {
      // scrollEnabled: true,
      activeTintColor: '#ffffff',
      inactiveTintColor: '#f2f2f2',
      upperCaseLabel: false,
      indicatorStyle: {
        backgroundColor: '#ffffff',
      },
      labelStyle: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 15,
      },
      style: {
        backgroundColor: '#00695C',
      }
    },
  });

export default DashboardTabs;
