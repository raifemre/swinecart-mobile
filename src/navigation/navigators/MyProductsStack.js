import {
  createStackNavigator
} from 'react-navigation';

import MyProducts from '../../screens/MyProducts';

const navigator = createStackNavigator({
  MyProducts: MyProducts,
  // AddProduct: AddProduct,
  // EditProduct: EditProduct,
  // FilterProducts: FilterProducts,
  // ProductDetailsBreeder: ProductDetails,
  // ProductMedia: ProductMedia,
}, {
    initialRouteName: 'MyProducts',
    defaultNavigationOptions: ({ navigation }) => {
      return {
        header: null
      }
    }
  });

export default navigator;