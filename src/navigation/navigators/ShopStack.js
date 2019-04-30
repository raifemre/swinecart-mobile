import {
  createStackNavigator
} from 'react-navigation';

import Shop from '../../screens/Shop';
import SearchProduct from '../../screens/SearchProduct';
import ProductDetails from '../../screens/ProductDetails';
import FilterProductsCustomer from '../../screens/FilterProductsCustomer';

const navigator = createStackNavigator({
  SearchProduct: SearchProduct,
  Shop: Shop,
  ProductDetailsCustomer: ProductDetails,
  FilterProductsCustomer: FilterProductsCustomer
}, {
    initialRouteName: 'Shop',
    defaultNavigationOptions: ({ navigation }) => {
      return {
        header: null,
        mode: 'card'
      }
    }
  });

export default navigator;