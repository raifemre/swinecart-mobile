import { createStackNavigator } from 'react-navigation';

import Inventory from '../../screens/Inventory';
import ProductRequests from '../../screens/ProductRequests';
import SendForDelivery from '../../screens/SendForDelivery';

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