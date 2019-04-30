import {
  createStackNavigator
} from 'react-navigation';

import InventoryTabs from './InventoryTabs';
import ProductRequests from '../../screens/ProductRequests';
import SendForDelivery from '../../screens/SendForDelivery';

const navigator = createStackNavigator({
  InventoryTabs: InventoryTabs,
  SendForDelivery: SendForDelivery,
  ProductRequests: ProductRequests,
}, {
    initialRouteName: 'InventoryTabs',
    defaultNavigationOptions: ({ navigation }) => {
      return {
        header: null,
        mode: 'modal'
      }
    }
  });

export default navigator;