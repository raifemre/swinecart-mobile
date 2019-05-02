import React from 'react';
import { Dimensions } from 'react-native';
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

const ThirdRoute = () => (
  <Products status='on_delivery' CardComponent={OnDeliveryCard} />
);

const FourthRoute = () => (
  <Products status='sold' CardComponent={SoldCard} />
);

// const initialLayout = {
//   height: 0,
//   width: Dimensions.get('window').width,
// };

const { width, height } = Dimensions.get('window');

const w = ~~(Math.max(width, height));

const TabNavigator = createMaterialTopTabNavigator({
  Requested: {
    screen: FirstRoute,
    navigationOptions: {
      tabBarLabel: 'Requested',
    }
  },
  Reserved: {
    screen: SecondRoute,
    navigationOptions: {
      tabBarLabel: 'Reserved'
    }
  },
  OnDelivery: {
    screen: ThirdRoute,
    navigationOptions: {
      tabBarLabel: 'On Delivery'
    }
  },
  Sold: {
    screen: FourthRoute,
    navigationOptions: {
      tabBarLabel: 'Sold'
    }
  }
}, {
  initialRouteName: 'Requested',
  // initialLayout: initialLayout,
  lazy: true,
  tabBarOptions: {
    scrollEnabled: true,
    activeTintColor: '#ffffff',
    inactiveTintColor: '#ffffff',
    upperCaseLabel: false,
    tabStyle: {
      height: 50,
      width: w/4,
    },
    indicatorStyle: {
      borderBottomColor: '#ffffff',
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

export default TabNavigator;
