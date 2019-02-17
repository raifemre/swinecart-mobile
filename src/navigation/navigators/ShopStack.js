import {
  createStackNavigator
} from 'react-navigation';

import Shop from '../../features/Shop';
import SearchProduct from '../../features/SearchProduct';
import ProductDetails from '../../features/ProductDetails';
import FilterProductsCustomer from '../../features/FilterProductsCustomer';

const navigator = createStackNavigator({
  SearchProduct: SearchProduct,
  Shop: Shop,
  ProductDetailsCustomer: ProductDetails,
  FilterProductsCustomer: FilterProductsCustomer
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