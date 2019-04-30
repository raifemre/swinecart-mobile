import {
  createStackNavigator
} from 'react-navigation';

import Inventory from '../../features/Inventory';
import ProductRequests from '../../features/ProductRequests';
import SendForDelivery from '../../features/SendForDelivery';

const navigator = createStackNavigator({
  Inventory: Inventory,
  SendForDelivery: SendForDelivery,
  ProductRequests: ProductRequests,
}, {
    initialRouteName: 'Inventory',
    defaultNavigationOptions: ({ navigation }) => {
      return {
        header: null,
        mode: 'modal'
      }
    }
  });

export default navigator;