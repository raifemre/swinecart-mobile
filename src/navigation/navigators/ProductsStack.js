import {
  createStackNavigator
} from 'react-navigation';

import Products from '../../screens/Products';

const navigator = createStackNavigator({
  Products: Products,
  // AddProduct: AddProduct,
  // EditProduct: EditProduct,
  // FilterProducts: FilterProducts,
  // ProductDetailsBreeder: ProductDetails,
  // ProductMedia: ProductMedia,
}, {
    initialRouteName: 'Products',
    defaultNavigationOptions: ({ navigation }) => {
      return {
        header: null
      }
    }
  });

export default navigator;