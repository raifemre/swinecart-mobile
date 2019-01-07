import {
  createStackNavigator
} from 'react-navigation';

import Inventory from '../../features/Inventory';
import ProductRequests from '../../features/ProductRequests';

const navigator = createStackNavigator({
  Inventory: Inventory,
  ProductRequests: ProductRequests,
}, {
    initialRouteName: 'Inventory',
    navigationOptions: ({ navigation }) => {
      return {
        header: null,
        mode: 'modal'
      }
    }
  });

export default navigator;