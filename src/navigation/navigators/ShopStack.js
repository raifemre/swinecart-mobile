import {
  createStackNavigator
} from 'react-navigation';

import Shop from '../../features/Shop';
import SearchProduct from '../../features/SearchProduct';
import ProductDetails from '../../features/ProductDetails';

const navigator = createStackNavigator({
  SearchProduct: SearchProduct,
  Shop: Shop,
  ProductDetailsCustomer: ProductDetails
}, {
    initialRouteName: 'Shop',
    navigationOptions: ({ navigation }) => {
      return {
        header: null,
        mode: 'card'
      }
    }
  });

export default navigator;